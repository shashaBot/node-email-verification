const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');
const mv = require('mv');
const mkdirp = require('mkdirp');

const config = require('../config/database');
const Session = require('../models/session');
require('dotenv').config();

const multer = require('multer');

let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    console.log('destination');
    let dir = path.resolve(__dirname, '../uploads/temp');
    mkdirp(dir, (err) => cb(err, dir));
  },
  filename: function (req, file, cb) {
    console.log(file.fieldname);
    cb(null, file.originalname);
  }
});

// multer middleware
router.use(multer({
  storage: storage
}).array('upload_file', 12));


const upload = multer({ storage: storage});
// const upload = multer({dest: '../uploads/temp'});
var fileUpload = upload.single('upload_file');

router.post('/create', passport.authenticate('jwt', {session: false}), (req, res) => {
  console.log('create session', req.body);
  let session = new Session({
    name: req.body.name,
    desc: req.body.desc,
    files: req.body.files,
    userId: req.user.id
  });
  Session.createSession(session, (err, session) => {
    if(err){
      console.log(err);
      return res.json({success: false, msg: 'Error in creating session!', error: err});
    }
    //move files to uploads/:sessionsId
    let counter=0;
    let sessionFiles = req.body.files;
    for(let file of req.body.files){
      let newDir = path.resolve(__dirname, '../uploads/'+session.id);
      let oldPath = path.resolve(__dirname, '../uploads/temp/'+file.name);
      let newPath = newDir+'/'+req.body.token+'-'+file.name;
      mv(oldPath, newPath, {mkdirp: true}, (err) => {
        if(err) {
          console.log(err);
          //deal with the session object in DB
          return;
        }
        sessionFiles[counter]['path'] = newPath;
        if(++counter=== req.body.files.length){
          //save session again with the paths saved in files array
          Session.updateSession(session, {files: sessionFiles}, (err, ses) => {
            if(err) return res.json({success: false, msg: 'Error in creating session', error: err}); //deal with the session obj in DB
            console.log('session created files: ', ses.files);
            res.json({success: true, msg: 'Session created successfully!', data: ses});
          });
        }
      });
    }
  });
});

router.post('/upload', passport.authenticate('jwt', {session: false}), fileUpload, (req, res) => {
  fileUpload(req, res, function (err) {
    if(err){
      console.log(err);
      return res.json({success: false, msg: 'Error in uploading file!'});
    }
    console.log(req.files);
    res.json({success: true, msg: 'File' + req.files[0].originalname + 'uploaded!'})
  });
});

router.post('/remove_files', passport.authenticate('jwt', {session: false}), (req, res) => {
  //delete files from server
  //if it belongs to session - remove file from session files array
});

router.get('/list', passport.authenticate('jwt', {session: false}), (req, res, next) => {
  Session.listSessions( (err, sessions) => {
    if(err) return res.json({success: false, msg: err});
    res.json({success: true, data: sessions});
  });
});

router.get('/stream_files', passport.authenticate('jwt', {session: false}), (req, res, next) => {
  // let file = req.body;
  let stream;
  const path = req.query.path
  const stat = fs.statSync(path)
  const fileSize = stat.size
  const range = req.headers.range

  if(path) {
    if(range){
      const parts = range.replace(/bytes=/, "").split("-")
      const start = parseInt(parts[0], 10)
      const end = parts[1]
        ? parseInt(parts[1], 10)
        : fileSize-1
      const chunksize = (end-start)+1
      stream = fs.createReadStream(path, {start, end})
      const head = {
        'Content-Range': `bytes ${start}-${end}/${fileSize}`,
        'Accept-Ranges': 'bytes',
        'Content-Length': chunksize,
        'Content-Type': 'video/mp4',
      }

      res.writeHead(206, head);
      stream.pipe(res);

    } else {
      res.setHeader("Content-type", 'video/mp4');
      res.setHeader("Content-length", fileSize);
      let stream = fs.createReadStream(path);
      stream.pipe(res);
    }
    if(stream) {
      let had_error = false;
      stream.on('error', (err) => {
        //error callback
        had_error = true;
        console.log(err);
      });

      stream.on('close', () => {
        if(!had_error){
          //success callback
        }
      });
    }
  } else {
    res.end(); // nothing happens. loading fails. send error status.
  }
});

router.get('/view', passport.authenticate('jwt', {session: false}), (req, res, next) => {
  Session.getSessionData( req.query.session, (err, sesData) => {
    if(err) return res.json({success: false, msg: err});
    res.json({success: true, session: sesData});
  });
});


module.exports = router;

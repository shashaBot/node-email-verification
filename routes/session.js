const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');
// const helper = require('../helpers/helpers');
const mv = require('mv');

const config = require('../config/database');
const Session = require('../models/session');
require('dotenv').config();

const multer = require('multer');

let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    console.log('destination');
    cb(null, path.resolve(__dirname, '../uploads/temp'));
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
  Session.createSession(session, req.user, (err, session) => {
    if(err){
      console.log(err);
      return res.json({success: false, msg: 'Error in creating session!'});
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
        if(++counter=== req.body.files.length)
          res.json({success: true, msg: 'Session created successfully!', data: session});
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

router.get('/view', passport.authenticate('jwt', {session: false}), (req, res, next) => {
  Session.viewSession( req.query.session, (err, sesData) => {
    if(err) return res.json({success: false, msg: err});
    res.json({success: true, data: sesData});
  });
});

module.exports = router;

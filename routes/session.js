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
const SessionToken = require('../models/sessionToken');
const Img = require('../models/image');
require('dotenv').config();

const multer = require('multer');

let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    let dir = path.resolve(__dirname, '../uploads');
    mkdirp(dir, (err) => cb(err, dir));
  },
  filename: function (req, file, cb) {
      var datetimestamp = Date.now();
      let randomNo = Math.floor((Math.random() * 1000000) + 1);
      cb(null, 'Image' + '-' + req.user.username + '-' + randomNo + '.' + file.originalname.split('.')[file.originalname.split('.').length -1]);
  }
});

// multer middleware
// router.use(multer({
//   storage: storage
// }).array('upload_file', 12));

const upload = multer({ storage: storage});
// const upload = multer({dest: '../uploads/temp'});
var fileUpload = upload.single('upload_file');

const authOwner = (req, res, callback) => {
  if(req.body.session) {
    let id = req.user.id;
    console.log(id, req.body.session.userId);
    if(req.body.session.userId !== id) {
      return res.status(403).json({success: false, msg: 'You are not authorized!'});
    }
    callback();
  }
};


router.post('/create', passport.authenticate('jwt', {session: false}), (req, res) => {
  let session = new Session({
    sessionname: req.body.name,
    desc: req.body.desc,
    userId: req.user.id,
    username: req.user.username,
    categoryname: req.body.categoryname,
    categoryId: req.body.categoryId
  });
  Session.createSession(session, (err, session) => {
    if(err){
      console.log(err);
      return res.json({success: false, msg: 'Error in creating session!', error: err});
    }
    res.json({success: true, msg: 'Session created successfully!', session: session});
    //move files to uploads/:sessionsId
    // let counter=0;
    // let sessionFiles = req.body.files;
    // for(let file of req.body.files){
    //   let newDir = path.resolve(__dirname, '../uploads/'+session.id);
    //   let oldPath = path.resolve(__dirname, '../uploads/temp/'+file.name);
    //   let newPath = newDir+'/'+req.body.token+'-'+file.name;
    //   mv(oldPath, newPath, {mkdirp: true}, (err) => {
    //     if(err) {
    //       console.log(err);
    //       //deal with the session object in DB
    //       //delete files from temp
    //       return res.json({success: false, msg: 'Error in saving files!', error: err.toString()});
    //     }
    //     sessionFiles[counter]['path'] = newPath;
    //     if(++counter=== req.body.files.length){
    //       //save session again with the paths saved in files array
    //       Session.updateSession(session, {files: sessionFiles}, (err, ses) => {
    //         if(err) return res.json({success: false, msg: 'Error in creating session', error: err.toString()}); //deal with the session obj in DB
    //         console.log('session created files: ', ses.files);
    //         res.json({success: true, msg: 'Session created successfully!', data: ses});
    //       });
    //     }
    //   });
    // }
  });
});

router.post('/upload', passport.authenticate('jwt', {session: false}), (req, res) => {
  fileUpload(req, res, function (err) {
    if(err){
      console.log(err);
      return res.json({success: false, msg: 'Error in uploading file!'});
    }
    let filetype = req.file.mimetype.split('/');

    let newImage = new Img({
      imagename: req.file.filename,
      imagetitle: req.file.originalname,
      imagetype: filetype[0],
      imagedelay: req.body.imagedelay,
      sessionname: req.body.sessionname,
      sessionId: req.body.sessionId,
      username: req.user.username,
      userId: req.user.id
    })

    Img.addImage(newImage, (err, file) => {
      if(err) return res.json({success: false, msg: 'Error in adding media file', error: err})
      res.json({success: true, msg: 'Media uploaded successfullly', file: file})
    });
  });
});

router.post('/remove', passport.authenticate('jwt', {session: false}), (req, res) => {
  //delete files from server
  //if it belongs to session - remove file from session files array
  let session = req.body.session;
  let file = req.body.file;
  if(session){
    authOwner(req, res, (err) => {
      Session.removeSession(session, (err) => {
        if(err) return res.json({success: false, msg: 'Session could not be deleted!', error: err});
        // let errors = [], successFiles = [];
        // for(let file of session.files) {
        //   fs.unlink(file.path, (err) => {
        //     if(err){
        //       errors.push({error: err, file: file});
        //     }
        //     successFiles.push(file);
        //   });
        // }
        // res.json({success: true, errors: errors.toString(), msg: 'Session deleted!\n'+successFiles.length + ' files deleted successfully!\n'+errors.push+' files failed!'});

        Img.removeImageBySession(session._id, (err) => {
          if(err) return res.json({success: true, msg: 'Error in removing files!', error: err});
          res.json({success: true, msg: 'Session deleted successfully!'})
        })
      });
    });
  }
  if(file) {
    Img.removeImageById(file._id, err => {
      if(err) res.json({success: false, msg: 'Error in removing file!', error: err});
      res.json({success: true});
    })
    // let filePath = path.resolve(__dirname, '../uploads/temp/'+file.name);
    // fs.unlink(filePath, (err) => {
    //   if(err) return res.json({success: false, msg: 'Error in removing file', error: err.toString()});
    //   res.json({success: true, msg: 'File '+file.name+' removed from server'});
    // });
  }
});

router.post('/updateIndex', passport.authenticate('jwt', {session: false}), (req, res) => {
  Img.updateIndex(req.body.id, req.body.index, (err, images) => {
    if(err) return res.status(500).json({success: false, error: err});
    res.json({success: true, images: images});
  })
})

router.post('/listbycategory', passport.authenticate('jwt', {session: false}), (req, res, next) => {
  Session.getUserSessionByCategory(req.user.id, req.body.categoryId, (err, sessions) => {
    if(err) return res.json({success: false, msg: err});
    res.json({success: true, data: sessions});
  });
});

router.get('/list', passport.authenticate('jwt', {session: false}), (req, res, next) => {
  Session.listSessions( (err, sessions) => {
    if(err) return res.json({success: false, msg: err});
    res.json({success: true, data: sessions});
  });
});

router.get('/stream_files', (req, res, next) => {
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
    res.status(404).end(); // nothing happens. loading fails. send error status.
  }
});

router.post('/view', passport.authenticate('jwt', {session: false}), (req, res, next) => {
  Img.getImagesBySessionId(req.body.sessionId, (err, files) => {
    if(err) return res.json({success: false, msg: 'Error in fetching files!', error: err})
    res.json({success: true, files: files});
  })
  // Session.getSessionData( req.query.session, (err, sesData) => {
  //   if(err) return res.json({success: false, msg: err});
  //   res.json({success: true, session: sesData});
  // });
});

router.get('/generate-qr', (req, res, next) => {
  Session.listSessions((err, data) => {
    if(err) return res.json({success: false, error: error});
    let tokens = [];
    if(!data.length) return res.json({success: true, data: []});
    data.forEach((value, index) => {
      let token = new SessionToken({
        sessionId: value._id,
        remoteIp: req.ip
      });
      SessionToken.createToken(token, (err, newToken) => {
        if(err) return res.json({success: false, error: err});
        console.log(newToken);
        if(data.length === tokens.push(newToken._id))
          return res.json({success: true, data: tokens});
      });
    })
  })
})

router.get('/check-qr', (req, res) => {
  SessionToken.checkToken(req.ip, (err, session, token) => {
    if(err) return res.json({success: false, error: err});
    if(session && token) {
      res.json({success: true, session: session, token: token.id});
    } else {
      res.json({success: false});
    }
  })
});

router.get('/remove-codes', (req, res) => {
  SessionToken.removeTokenByIp(req.ip, (err) => {
    if(err) return res.json({success: false, error: err});
    res.json({success: true});
  })
})

router.post('/remove-viewed', (req, res) => {
  SessionToken.removeViewedToken(req.body.tokenId, (err) => {
    if(err) return res.json({success: false, error: err});
    res.json({success: true});
  })
})

router.post('/scan-qr', passport.authenticate('jwt', {session:false}), (req, res) => {
  SessionToken.setUserId(req.body.token, req.user._id, (err, token) => {
    if(err) return res.json({success: false, error: err});
    if(!token) return res.json({success: false, msg: 'Invalid token!'});
    Session.getSessionData(token.sessionId, (err, data) => {
      if(err) return res.json({success: true, session: {}, error: err});
      res.json({success: true, session: data});
    })
  });
})


module.exports = router;

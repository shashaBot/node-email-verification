 const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');
const mv = require('mv');
const mkdirp = require('mkdirp');
const send = require('send');

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
    sessionname: req.body.sessionname,
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
  let id = req.body.fileId;
  if(session){
    authOwner(req, res, (err) => {
      Session.removeSession(session, (err) => {
        if(err) return res.json({success: false, msg: 'Session could not be deleted!', error: err});

        Img.removeImageBySession(session._id, (err) => {
          if(err) return res.json({success: true, msg: 'Error in removing files!', error: err});
          res.json({success: true, msg: 'Session deleted successfully!'})
        })
      });
    });
  }
  if(id || file) {
    Img.removeImageById(id || file._id, err => {
      if(err) res.json({success: false, msg: 'Error in removing file!', error: err});
      res.json({success: true});
    })
  }
});

router.post('/updateIndex', passport.authenticate('jwt', {session: false}), (req, res) => {
  Img.updateIndex(req.body.id, req.body.index, (err, images) => {
    if(err) {
      console.log(err);
      return res.status(500).end();
    }
    res.json({success: true, images: images});
  })
})

router.post('/updateDelay', passport.authenticate('jwt', {session: false}), (req, res) => {
  Img.updateDelay(req.body.id, req.body.delay, (err) => {
    if(err) {
      console.log(err);
      return res.status(500).end();
    }
    res.json({success: true});
  })
})

router.post('/updateTitle', passport.authenticate('jwt', {session:false}), (req, res) => {
  Img.updateTitle(req.body.id, req.body.title, (err) => {
    if(err) {
      console.log(err);
      return res.status(500).end();
    }
    res.json({success: true});
  })
})

router.post('/listbycategory', passport.authenticate('jwt', {session: false}), (req, res, next) => {
  if(req.body.isParent) {
    return res.json({success: true, data: []});
    Session.getUserSessionByParentCat(req.user.id, req.body.categoryId, (err, sessions) => {
      if(err) return res.json({success: false, msg: err});
      res.json({success: true, data: sessions});
    });
  } else {
    Session.getUserSessionByCategory(req.user.id, req.body.categoryId, (err, sessions) => {
      if(err) return res.json({success: false, msg: err});
      res.json({success: true, data: sessions});
    });
  }
});

router.get('/listSessions', passport.authenticate('jwt', {session: false}), (req, res, next) => {
  Session.listSessions(req.user.id, (err, sessions) => {
    if(err) {
      console.log(err);
      return res.json({success: false, msg: err});
    }
    res.json({success: true, data: sessions});
  });
});

router.get('/stream_files', (req, res, next) => {
  let filename = req.query.file;
  if(filename){
    let filePath = path.resolve(__dirname, '../uploads/'+filename);
    send(req, filePath)
        .on('error', (err) => {
            res.statusCode = err.status || 500;
            res.end(err.message);
        })
        .on('directory', () => {
            res.statusCode = 403;
            res.end("Forbidden");
        })
        .pipe(res);
  } else {
    res.status(404).end();
  }
})

router.post('/getSession', passport.authenticate('jwt', {session: false}), (req, res, next) => {
  Session.getSessionById(req.body.sessionId, (err, session) => {
    if(err) return res.json({success: false, msg: 'Error in getting session data!'});
    if(!session ) return res.json({success: false, msg: 'Session does not exist'});
    Img.getImagesBySessionId(req.body.sessionId, (err, files) => {
      if(err) return res.json({success: false, msg: 'Error in getting session files!'});
      res.json({success: true, files: files, session: session});
    })
  })
})

router.post('/view', passport.authenticate('jwt', {session: false}), (req, res, next) => {
  Img.getImagesBySessionId(req.body.sessionId, (err, files) => {
    if(err) return res.json({success: false, msg: 'Error in fetching files!', error: err})
    res.json({success: true, files: files});
  })
});

router.get('/generate-qr', passport.authenticate('jwt', {session: false}), (req, res, next) => {
  Session.listSessions(req.user.id, (err, data) => {
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

// router.get('/check-qr', passport.authenticate('jwt', {session: false}), (req, res) => {
//   SessionToken.checkToken(req.ip, (err, session, token) => {
//     if(err) return res.json({success: false, error: err});
//     if(session && token) {
//       res.json({success: true, session: session, token: token.id});
//     } else {
//       res.json({success: false});
//     }
//   })
// });
//
// router.get('/remove-codes', passport.authenticate('jwt', {session: false}), (req, res) => {
//   SessionToken.removeTokenByIp(req.ip, (err) => {
//     if(err) return res.json({success: false, error: err});
//     res.json({success: true});
//   })
// })
//
// router.post('/remove-viewed', passport.authenticate('jwt', {session: false}), (req, res) => {
//   SessionToken.removeViewedToken(req.body.tokenId, (err) => {
//     if(err) return res.json({success: false, error: err});
//     res.json({success: true});
//   })
// })

router.get('/check-qr', passport.authenticate('jwt', {session: false}), (req, res) => {
  Session.findOne({isScanned: true, userId: req.user.id}, (err, session) => {
    if(err) {
      console.log(err);
      return res.status(500).send();
    }
    if(!session){
      return res.json({success: false});
    } else {
      res.json({success: true, session: session});
      Session.findByIdAndUpdate(session._id, {isScanned: false}, (err) => {
        if(err) console.log(err);
      })
    }
  })
})

router.post('/remove-viewed', (req, res) => {
  SessionToken.removeViewedToken(req.body.tokenId, (err) => {
    if(err) return res.json({success: false, error: err});
    res.json({success: true});
  })
})

// router.post('/scan-qr', passport.authenticate('jwt', {session:false}), (req, res) => {
//   SessionToken.setUserId(req.body.token, req.user._id, (err, token) => {
//     if(err) return res.json({success: false, error: err});
//     if(!token) return res.json({success: false, msg: 'Invalid token!'});
//     Session.getSessionData(token.sessionId, (err, data) => {
//       if(err) return res.json({success: true, session: {}, error: err});
//       res.json({success: true, session: data});
//     })
//   });
// })

router.post('/scan-qr', passport.authenticate('jwt', {session:false}), (req, res) => {
  console.log('scanner id: ', req.user.id);
  console.log('qr user id: ', req.body.user);
  if(req.user.id === req.body.user) {
    Session.updateSession(req.body.session, {isScanned: true}, (err, session) => {
      if(err) return res.status(500).end();
      res.json({success: true, openSelf: false, session: session});
    })
  } else {
    Session.getSessionData(req.body.session, (err, session) => {
      if(err) return res.status(500).end();
      if(!session) return res.json({success: false, msg: 'Session not found!'});
      Img.getImagesBySessionId(req.body.session, (err, files) => {
        if(err) return res.status(500).end();
        res.json({success: true, openSelf: true, session: session, files: files});
      })
    })
  }
})


module.exports = router;

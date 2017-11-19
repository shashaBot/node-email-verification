const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const nodemailer = require('nodemailer');

const verify_token = require('../models/token');
const config = require('../config/database');
const User = require('../models/user');
const Smtp = require('../models/smtp');

require('dotenv').config();

// Register route
router.post('/register', (req, res, next) => {
  let newUser = new User({
    name: req.body.name,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password
  });
  User.addUser(newUser, (err, user) => {
    if(err) {
      console.log(err);
      res.json({success: false, msg: 'Failed to register user.'});
    } else {
      // Create a verification token for this user
      if(req.body.email) {
        Smtp.getCredentials((err, creds) => {
          if(err) return res.status(500).end();
          var email_verify_token = new verify_token({ _userId: user._id, token: crypto.randomBytes(16).toString('hex') });

          // Save the verification token
          email_verify_token.save(function (err) {
            if (err) { return res.json({success: false, msg: err.message }); }

            // Send the email
            var transporter = nodemailer.createTransport({ service: 'Sendgrid', auth: { user: creds.username || process.env.SENDGRID_USERNAME, pass: creds.password || process.env.SENDGRID_PASSWORD } });
            var mailOptions = { from: creds.mailerId || 'no-reply@email-verify-app.com', to: user.email, subject: 'Please verify your email', text: 'Hello,\n\n' + 'Please verify your account by clicking the link: \nhttp:\/\/' + req.headers.host + '\/users\/confirmation?verify=' + email_verify_token.token + '.\n' };
            transporter.sendMail(mailOptions, function (err) {
              if (err) { return res.json({success: false, msg: err.message }); }
              res.json({success: true, msg:'A verification email has been sent to ' + user.email + '.'});
            });
          });
        })
      } else {
        res.json({success: true, msg: 'User registered!'});
      }
    }
  });
});

// Confirm email route
router.get('/confirmation', (req, res, next) => {
  verify_token.findOne({ token: req.query.verify}, (err, token) => {
    console.log('verification token', token);
    if(!token) {
      return res.json({ success: false, msg: 'Unable to verify email'});
    }
    // If we found a token then find the matching user
    User.findOne({ _id: token._userId}, (err, user) => {
      if(!user) return res.json({ success: false, msg: 'No user found associated with the verification link.'});
      if(user.isVerified) return res.json({success: false, msg: 'This email is already verfied!'});
      // if the user is found and is unverified, then mark the user as verified
      user.isVerified = true;
      user.save((err) => {
        if(err) return res.json({ success: false, msg: 'There was an unknown error! Please try again.'});
        res.json({ success: true, msg: 'Your email is verified now. Congrats!'});
      })
    })
  })
});

// resent verification
router.post('/resend_verification', (req, res, next) => {
  User.findUserByEmail(req.body.email, () => {
    if(!user) return res.json({ success: false, msg: 'Couldn\'nt find any account with that email'});
    if(user.isVerified) return res.json({ success: false, msg: 'Your account has already been verified!'});

    // Create a verification token for this user
    var email_verify_token = new verify_token({ _userId: user._id, token: crypto.randomBytes(16).toString('hex') });

    // Save the verification token
    email_verify_token.save(function (err) {
        if (err) { return res.json({success: false, msg: err.message }); }

        // Send the email
        var transporter = nodemailer.createTransport({ service: 'Sendgrid', auth: { user: process.env.SENDGRID_USERNAME, pass: process.env.SENDGRID_PASSWORD } });
        var mailOptions = { from: 'no-reply@email-verify-app.com', to: user.email, subject: 'Please verify your email', text: 'Hello,\n\n' + 'Please verify your account by clicking the link: \nhttp:\/\/' + req.headers.host + '\/confirmation\/' + email_verify_token.token + '.\n' };
        transporter.sendMail(mailOptions, function (err) {
            if (err) { return res.json({success: false, msg: err.message }); }
            res.json({success: true, msg:'A verification email has been sent to ' + user.email + '.'});
        });
    });
  });
});

// Authenticate route
router.post('/authenticate', (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;

  User.getUserByUsername(username, (err, user) => {
    if(err) {
      throw err;
    } else if(!user){
      return res.json({success: false, msg: 'User not found!'});
    } else {
      User.comparePassword(password, user.password, (err, isMatch) => {
        if(err) {
          throw err;
        }
        else if(isMatch) {
          let signInUser = {
            email: user.email,
            username: user.username,
            name: user.name,
            isVerified: user.isVerified,
            isAdmin: user.isAdmin,
            _id: user.id
          };
          const token = jwt.sign(signInUser, config.secret, {
            expiresIn: 604800 // 1 week
          });
          res.json({
            success: true,
            token: 'JWT '+token,
            user: {
              id: user.id,
              name: user.name,
              username: user.username,
              email: user.email,
              isVerified: user.isVerified,
              isAdmin: user.isAdmin
            }
          });
        } else {
          res.json({success: false, msg: 'Wrong Password'});
        }
      });
    }
  });
});

// Profile route
router.get('/profile', passport.authenticate('jwt', {session: false}), (req, res, next) => {
  res.json({user: req.user});
});

//generate qr token
router.get('/generate-qr', passport.authenticate('jwt', {session: false}), (req, res, next) => {
  let token = new UserToken({
    timestamp: req.body.timestamp
  });
  UserToken.createToken(token, (err, newToken) => {
    if(err) return res.json({success: false, error: err});
    console.log(newToken);
    return res.json({success: true, token: newToken});
  });
})

//check qr token
router.post('/check-qr', passport.authenticate('jwt', {session: false}), (req, res) => {
  UserToken.checkToken(req.body.timestamp, (err, token) => {
    if(err) return res.json({success: false, error: err});
    if(token) {
      UserToken.removeTokenById(token._id, err => {
        console.log(err);
      });
      res.json({success: true, user: req.user, authToken: token.authToken});
    } else {
      res.json({success: false});
    }
  })
});

//scan login qr
router.post('/scan-qr', passport.authenticate('jwt', {session:false}), (req, res) => {
  UserToken.setUser(req.body.token, req.user._id, req.header('Authorization'), (err, token) => {
    if(err) return res.json({success: false, error: err});
    if(!token) return res.json({success: false, msg: 'Invalid token!'});
    res.json({success: true});
  });
})

module.exports = router;

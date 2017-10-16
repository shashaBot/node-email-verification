const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const nodemailer = require('nodemailer');

const verify_token = require('../models/token');
const config = require('../config/database');
const User = require('../models/user');

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
      var email_verify_token = new verify_token({ _userId: user._id, token: crypto.randomBytes(16).toString('hex') });

      // Save the verification token
      email_verify_token.save(function (err) {
          if (err) { return res.json({success: false, msg: err.message }); }

          // Send the email
          var transporter = nodemailer.createTransport({ service: 'Sendgrid', auth: { user: process.env.SENDGRID_USERNAME, pass: process.env.SENDGRID_PASSWORD } });
          var mailOptions = { from: 'no-reply@email-verify-app.com', to: user.email, subject: 'Please verify your email', text: 'Hello,\n\n' + 'Please verify your account by clicking the link: \nhttp:\/\/' + req.headers.host + '\/users\/confirmation?verify=' + email_verify_token.token + '.\n' };
          transporter.sendMail(mailOptions, function (err) {
              if (err) { return res.json({success: false, msg: err.message }); }
              res.json({success: true, msg:'A verification email has been sent to ' + user.email + '.'});
          });
      });
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
          const token = jwt.sign(user, config.secret, {
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
              isVerified: user.isVerified
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

module.exports = router;

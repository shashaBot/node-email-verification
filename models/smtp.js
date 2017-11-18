const mongoose = require('mongoose');
const config = require('../config/database');
const Session = require('./session.js');

// Session token Schema
const SmtpSchema = mongoose.Schema({
  username: {
    type: string,
    required: true
  },
  password: {
    type: string,
    required: true
  },
  mailerId: {
    type: string,
    required: true,
    default: 'no-reply@email-verify-ionic.com'
  }
});

const Smtp = module.exports = mongoose.model('Smtp', SmtpSchema);

module.exports.updateMailer = (newSmtp, callback) => {
  Smtp.remove({}, (err) => {
    if(err) return callback(err);
    newSmtp.save(callback);
  });
}

module.exports.getCredentials = (callback) => {
  Smpt.find({}, (err, creds) => {
    if(err) callback(err);
    return callback(null, creds[0]);
  })
}

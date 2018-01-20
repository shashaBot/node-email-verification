const mongoose = require('mongoose');
const config = require('../config/database');
const Session = require('./session.js');

// Session token Schema
const SmtpSchema = mongoose.Schema({
  service: {
    type: String,
    required: false
  },
  auth: {
  	user: {
  		type: String,
  		required: true
  	},
  	pass: {
  		type: String,
  		required: true
  	}
  },
  host: {
    type: String,
    required: false
  },
  port: {
    type: String,
    require: false
  },
  mailerId: {
    type: String,
    required: true,
    default: 'no-reply@email-verify.com'
  }
});

const Smtp = module.exports = mongoose.model('Smtp', SmtpSchema);

module.exports.updateMailer = (newSmtp, callback) => {
  Smtp.remove({}, (err) => {
    if(err) {
      return callback(err);
    }
    newSmtp.save(callback);
  });
}

module.exports.getCredentials = (callback) => {
  Smtp.find({}, (err, creds) => {
    if(err) callback(err);
    return callback(null, creds[0]);
  })
}

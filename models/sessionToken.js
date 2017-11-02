const mongoose = require('mongoose');
const config = require('../config/database');
const Session = require('./session.js');

// Session token Schema
const SessionTokenSchema = mongoose.Schema({
  sessionId: {
    type: String;
    required: true,
  },
  remoteIp: {
    type: String,
    required: true
  },
  userId: {
    type: String,
  }
});

const SessionToken = module.exports = mongoose.model('SessionToken', SessionTokenSchema);

module.exports.createToken = (token, callback) => {
  token.save(callback);
}

module.exports.removeTokenByIp = (ip, callback) => {
  let query = {'remoteIp': ip};
  SessionToken.remove(query, callback);
}

module.exports.removeViewedToken = (id, callback) => {
  SessionToken.remove({'_id': id}, callback);
}

module.exports.setUserId = (tokenId, userId, callback) => {
  SessionToken.findById(tokenId, (err, token) => {
    token.userId = userId;
    token.save(callback);
  })
}

module.exports.checkToken = (ip, callback) => {
  SessionToken.findOne({'remoteIp': ip, 'userId': {$exists: true} }, (err, token) => {
    if(err) return callback(err);
    if(token){
      Session.getSessionData(token.sessionId, (err, session) => {
        callback(null, session, token);
      });
    } else {
      callback(null, null, null);
    }
  });
}

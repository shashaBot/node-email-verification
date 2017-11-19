const mongoose = require('mongoose');
const config = require('../config/database');
const Session = require('./session.js');

// Session token Schema
const SessionTokenSchema = mongoose.Schema({
  timestamp: {
    type: String,
    required: true,
    default: Date.now()
  },
  userId: {
    type: String
  },
  authToken: {
    type: String
  }
});

const SessionToken = module.exports = mongoose.model('SessionToken', SessionTokenSchema);

module.exports.createToken = (token, timcallback) => {
  token.remove({timestamp: token.timestamp}, err => {
    if(err) return callback(err);
    token.save(callback);
  })
}

module.exports.removeTokenByTimestamp = (timestamp, callback) => {
  let query = {'timstamp': timestamp};
  SessionToken.remove(query, callback);
}

module.exports.removeTokenById = (id, callback) => {
  SessionToken.remove({'_id': id}, callback);
}

module.exports.setUser = (tokenId, userId, authToken, callback) => {
  SessionToken.findById(tokenId, (err, token) => {
    if(err) return callback(err);
    if(token){
      token.userId = userId;
      token.authToken = authToken;
      token.save(callback);
    } else {
      callback(null, null);
    }
  })
}

module.exports.checkToken = (timestamp, callback) => {
  SessionToken.findOne({'timestamp': timestamp, 'userId': {$exists: true} }, (err, token) => {
    if(err) return callback(err);
    if(token){
      callback(null, token);
    } else {
      callback(null, null);
    }
  });
}

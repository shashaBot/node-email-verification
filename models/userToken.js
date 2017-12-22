const mongoose = require('mongoose');

// User token Schema
const UserTokenSchema = mongoose.Schema({
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

const UserToken = module.exports = mongoose.model('UserToken', UserTokenSchema);

module.exports.createToken = (token, callback) => {
  token.remove({timestamp: token.timestamp}, err => {
    if(err) return callback(err);
    token.save(callback);
  })
}

module.exports.removeTokenByTimestamp = (timestamp, callback) => {
  let query = {'timestamp': timestamp};
  UserToken.remove(query, callback);
}

module.exports.removeTokenById = (id, callback) => {
  UserToken.remove({'_id': id}, callback);
}

module.exports.setUser = (tokenId, userId, authToken, callback) => {
  UserToken.findById(tokenId, (err, token) => {
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

module.exports.checkToken = (tokenId, callback) => {
  UserToken.findOne({'_id': tokenId, 'userId': {$exists: true} }, (err, token) => {
    if(err) return callback(err);
    if(token){
      callback(null, token);
    } else {
      callback(null, null);
    }
  });
}

const mongoose = require('mongoose');
const config = require('../config/database');

// Session Schema
const SessionSchema = mongoose.Schema({
  sessionname: {
    type: String,
    required: true
  },
  userId: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  isScanned: {
    type: Boolean,
    required: true,
    default: false
  },
  categoryname: {
    type: String,
    required: true
  },
  categoryId: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now()
  }
});

const Session = module.exports = mongoose.model('Session', SessionSchema);

module.exports.createSession = (session, callback) => {
  console.log(session);
  session.save(callback);
}

module.exports.listSessions = (callback) => {
  Session.find({}, callback);
}

module.exports.getSessionByCategory = (category, callback) => {
  Session.find({'categoryname': category}, callback);
}

module.exports.getUserSessionByCategory = (userId, categoryId, callback) => {
  Session.find({'userId': userId, 'categoryId': categoryId}, callback);
}

module.exports.removeSession = (session, callback) => {
  Session.remove({'_id': session._id}, callback);
}

module.exports.getSessionData = (sessionId, callback) => {
  Session.findById(sessionId, callback);
}

module.exports.updateSession = (sessionId, update, callback) => {
  Session.findByIdAndUpdate(sessionId, update, callback);
}

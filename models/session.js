const mongoose = require('mongoose');
const config = require('../config/database');


// Session Schema
const SessionSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  desc: {
    type: String,
    required: true
  },
  files: {
    type: Array,
    required: false
  },
  userId: {
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

module.exports.createSession = (session, userId, callback) => {
  session.save(callback);
}

module.exports.listSessions = (callback) => {
  Session.find({}, callback);
}

module.exports.getSessionData = (sessionId, callback) => {
  Session.findById(sessionId, callback);
}

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

module.exports.createSession = (session, callback) => {
  console.log(session);
  session.save(callback);
}

module.exports.listSessions = (callback) => {
  Session.find({}, callback);
}

module.exports.getSessionData = (sessionId, callback) => {
  Session.findById(sessionId, callback);
}

module.exports.updateSession = (session, update, callback) => {
  Session.findById(session.id, (err, data) => {
    for(let key in update)
      data[key] = update[key];
    data.save(callback);
  });
}

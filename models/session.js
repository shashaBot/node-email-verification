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

// module.exports.createSession = (files, userId, fileCall, sessionCall) => {
//   let i=0;
//   let sesFiles = [];
//   let newFile = {};
//   console.log(files);
//   while(i<files.length){
//     newFile = {
//       name: files[i].name,
//       type: files[i].type,
//       ext: files[i].extension
//     }
//     newFile.mv('/uploads/'+userId+'/'+Date.now()+'/'+i+newFile.ext, () => {
//       fileCall();
//       sesFiles.push(newFile);
//     });
//     if(++i === files.length) {
//       newSession = {
//         files: sesFiles,
//         userId: userId
//       }
//       newSession.save(sessionCall);
//     }
//   }
// }

module.exports.createSession = (session, userId, callback) => {
  session.save(callback);
}

module.exports.listSessions = (callback) => {
  Session.find({}, callback);
}

module.exports.viewSession = (sessionId, callback) => {

}

const mongoose = require('mongoose');
const config = require('../config/database');
const fs = require('fs');
const path = require('path');

// Session Schema
const ImageSchema = mongoose.Schema({
  imagename: {
    type: String,
    required: true
  },
  imagetitle: {
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
  imagetype: {
    type: String,
    required: true
  },
  sessionname: {
    type: String,
    required: true
  },
  sessionId: {
    type: String,
    required: true
  },
  imageindex: {
    type: Number,
    default: 0
  }
});

const Img = module.exports = mongoose.model('images', ImageSchema);

module.exports.addImage = (image, callback) => {
  image.save(callback);
}

module.exports.getImagesBySessionId = (sessionId, callback) => {
  Img.find({'sessionId': sessionId}, callback);
}

module.exports.removeImageById = (id, callback) => {
  Img.findById(id, (err, file) => {
    if(err) return callback(err);
    let filepath = path.resolve(__dirname, './uploads/'+file.imagename);
    fs.unlink(filepath, err => {
      if(err) console.log(err);
      Img.remove({'_id': id}, callback);
    });
  });
}

module.exports.removeImageBySession = (sessionId, callback) => {
  Img.find({'sessionId': sessionId}, (err, files) => {
    if(err) return callback(err);
    if(!files.length) return callback(null);
    files.forEach((file, index) => {
      let filepath = path.resolve(__dirname, './uploads/'+file.imagename);
      fs.unlink(filepath, err => {
        if(err) console.log(err);
        if(index === files.length-1){
          Img.remove({'sessionId': sessionId}, callback);
        }
      });
    });
  });
}

module.exports.updateIndex = (imageId, index, callback) => {
  Img.findOneAndUpdate({_id: imageId}, {imageindex: index}, callback);
}

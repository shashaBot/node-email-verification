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
  imagedelay: {
    type: Number
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

module.exports.getImageById = (id, callback) => {
  Img.findById(id, callback);
}

module.exports.getImagesBySessionId = (sessionId, callback) => {
  Img.find({'sessionId': sessionId}, callback).sort({"imageindex": 1});
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
  Img.findByIdAndUpdate(imageId, {imageindex: index}, callback);
}

module.exports.updateTitle = (imageId, title, callback) => {
  Img.findByIdAndUpdate(imageId, {imagetitle: title}, callback);
}

module.exports.updateDelay = (imageId, delay, callback) => {
  Img.findByIdAndUpdate( imageId, {imagedelay: delay}, callback);
}

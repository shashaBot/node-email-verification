const mongoose = require('mongoose');
const config = require('../config/database');
const fs = require('fs');
const path = require('path');

const thumbler = require('video-thumb');

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
  size: {
    type: Number,
    required: true
  },
  imagethumb: {
    type: String,
    required: false
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
  },
  titleAlign: {
    type: String,
    enum: ['top-left-justified', 'top-center-justified', 'top-right-justified', 'bottom-left-justified', 'bottom-center-justified', 'bottom-right-justified'],
    default: 'top-left-justified',
    required: true
  },
  titleSize: {
    type: String,
    required: false
  },
  titleColor: {
    type: String,
    enum: ['red', 'blue', 'black', 'white'],
    default: 'black',
    required: true
  },
  titleFont: {
    type: String,
    enum: ['Arial', 'Helvetica', 'Times New Roman', 'Times', 'Courier New', 'Courier', 'Verdana', 'Georgia', 'Palatino', 'Garamond', 'Bookman'],
    required: false
  }
});

const Img = module.exports = mongoose.model('images', ImageSchema);

module.exports.addImage = (image, callback) => {
  if(image.imagetype === 'video') {
    thumbler.extract(path.resolve(__dirname, '../uploads/'+image.imagename), path.resolve(__dirname, '../uploads/'+image.imagethumb), '00:00:00', '250x150', (err) => {
      if(err) console.log(err);
      console.log('thumb success');
      image.save(callback);
    })
  } else {
    image.save(callback);
  }
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
    if(!file) return callback(new Error('File not found'));
    let filepath = path.resolve(__dirname, '../uploads/'+file.imagename);
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

module.exports.updateMedia = (imageId, update, callback) => {
  console.log(update);
  Img.findByIdAndUpdate(imageId, update, {new: true}, callback);
}

module.exports.getColors = (callback) => {
  let colors = Img.schema.path('titleColor').enumValues;
  let fonts = Img.schema.path('titleFont').enumValues;
  let align = Img.schema.path('titleAlign').enumValues;
  console.log(Img.schema.path('titleColor').enumValues);
  console.log(Img.schema.path('titleFont').enumValues);
  callback({colors: colors, fonts: fonts, align: align});
}
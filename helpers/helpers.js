const fs = require('fs');
const path = require('path');

function move (oldPath, newPath, callback) {

  fs.rename(oldPath, newPath, (err) => {
      if (err) {
          if (err.code === 'EXDEV') {
              copy();
          } else if(err.code === 'ENOENT') {
            fs.mkdirSync(path.dirname(newPath));
            move(oldPath, newPath, callback);
          } else {
              callback(err);
          }
          return;
      }
      callback();
  });

  function copy() {
      var readStream = fs.createReadStream(oldPath);
      var writeStream = fs.createWriteStream(newPath);

      readStream.on('error', callback);
      writeStream.on('error', callback);

      readStream.on('close', () => {
          fs.unlink(oldPath, callback);
      });

      readStream.pipe(writeStream);
  }
}

module.exports.move = move;

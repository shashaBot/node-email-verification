const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

// User Schema
const UserSchema =  mongoose.Schema({
  name: {
    type: String,
    // required: true
  },
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    // required: true
  },
  password: {
    type: String,
    required: true
  },
  isVerified: {
    type: Boolean,
    required: true,
    default: false
  },
  isAdmin: {
    type: Boolean,
    required: true,
    default: false
  },
  passwordResetToken: {
    type: String
  },
  passwordResetExpires: {
    type: Date
  },
  subscription: {
    type: Object,
    required: false,
    packageId: {
      type: String,
      required: true
    },
    isTrial: {
      type: Boolean,
      required: true,
      default: false
    },
    startDate: {
      type: Date,
      required: true
    }
  }
});

const User = module.exports = mongoose.model('User', UserSchema);

module.exports.getUserById = function(id, callback) {
  User.findById(id, callback);
};

module.exports.getUserByUsername = function(username, isAdmin, callback) {
  const query = {username: username, isAdmin: isAdmin};
  User.findOne(query, callback);
}

module.exports.getUserByUsername2 = function(username, callback) {
  const query = {username: username};
  User.findOne(query, callback);
}

module.exports.getUserByEmail = function(email, callback) {
  const query = {email: email};
  User.findOne(query, callback);
}

module.exports.addUser = function(newUser, callback) {
  bcrypt.genSalt(10, (err, salt) => {
    if(err) {
      throw err;
    } else {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        newUser.password = hash;
        newUser.save(callback);
      });
    }
  });
};

module.exports.setPassword = function(user, newPass, callback) {
  bcrypt.genSalt(10, (err, salt) => {
    if(err) {
      return callback(err);
    } else {
      bcrypt.hash(newPass, salt, (err, hash) => {
        user.password = hash;
        user.save(callback);
      });
    }
  });
}

module.exports.comparePassword = function(candidatePassword, hash, callback) {
  bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
    if(err) throw err;
    callback(null, isMatch);
  });
}


module.exports.changeSubscription = (packId, isTrial, userId, callback) => {
  let sub = {
    packageId: packId,
    isTrial: isTrial,
    startDate: Date.now()
  }
  User.findByIdAndUpdate(userId, {subscription: sub}, callback);
}
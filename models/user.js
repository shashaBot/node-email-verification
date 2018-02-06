const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

const Package = require('./package');

// User Schema
const UserSchema =  mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
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
  storageConsumed: {
    type: Number,
    required: true,
    default: 0
  },
  subscription: {
    type: Object,
    required: false,
    packageId: {
      type: String,
      required: true
    },
    billingAgreementId: {
      type: String,
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

module.exports.updateUserStorage = (userId, size, callback) => {
  User.findById(userId, (err, user) => {
    if(err) return callback(err);
    console.log(size);
    console.log(typeof size);
    user.storageConsumed += size;
    console.log(user.storageConsumed);
    user.save(callback);
  })
}

module.exports.checkStorage = (userId, size, callback) => {
  User.findById(userId, (err, user) => {
    if(err) return callback(err);
    Package.findById(user.subscription.packageId, (err, package) => {
      let allowedStorage = package.storage.amount;
      if(package.storage.unit == 'Mb') 
        allowedStorage = package.storage.amount * 1024 * 1024;
      else if(package.storage.unit == 'Gb') {
        allowedStorage = package.storage.amount * 1024 * 1024 * 1024;
      }
      console.log('allowed storage: ', allowedStorage);
      console.log('storage consumed', user.storageConsumed+size);
      if((user.storageConsumed + size) <= allowedStorage) {
        callback(null, true);
      } else {
        callback(null, false);
      }
    })
  })
}

module.exports.changeSubscription = (userId, packId, billingAgreementId, callback) => {
  let sub = {
    packageId: packId,
    billingAgreementId: billingAgreementId
  }
  console.log('updating user', sub);
  User.findByIdAndUpdate(userId, {$set: {subscription: sub}}, callback);
}

module.exports.cancelSubscription = (userId, packId, callback) => {
  User.findByIdAndUpdate(userId, {subscription: null}, callback);
}
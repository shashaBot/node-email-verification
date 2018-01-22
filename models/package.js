const mongoose = require('mongoose');
const config = require('../config/database');

let getPrice = (num) => {
  console.log(num);
  console.log((num/100).toFixed(2));
  return (num/100).toFixed(2);
}

let setPrice = (num) => {
  console.log(num);
  console.log(num*100);
  return num*100;
}

// Packages Schema
const PackageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  enabled: {
    type: Boolean,
    default: true,
    required: true
  },
  pricing: {
    type: Object,
    currency: {
      type: String,
      required: true
    },
    monthly: {
      type: Object,
      pay: {
        type: Number,
        required: true,
        get: getPrice,
        set: setPrice
      },
      required: true
    },
    annually: {
      type: Object,
      pay: {
        type: Number,
        required: true,
        get: getPrice,
        set: setPrice
      },
      required: false
    },
    required: true
  },
  storage: {
    type: Object,
    amount: {
      type: Number,
      required: true
    },
    unit: {
      type: String,
      required: true
    },
    required: true
  },
  details: {
    type: Array,
    required: false
  },
  trialPeriod: {
    type: Number,
    required: true,
    default: 15
  }
});

// PackageSchema.path('pricing').get((obj) => {
//   let newObj = obj;
//   newObj['monthly']['pay'] = obj['monthly']['pay'] / 100;
//   newObj['annually']['pay'] = obj['annually']['pay'] / 100;
//   newObj['monthly']['pay'] = obj['monthly']['pay'].toFixed(2);
//   newObj['annually']['pay'] = obj['annually']['pay'].toFixed(2);
//   return newObj;
// });

// PackageSchema.path('pricing').set((obj) => {
//   console.log(obj);
//   let newObj = Object.assign({}, obj);
//   let newMonthly = Object.assign({}, obj['monthly']);
//   let newAnnually = Object.assign({}, obj['annually']);

//   newMonthly['pay'] = obj['monthly']['pay'] * 100;
//   newAnnually['pay'] = obj['annually']['pay'] * 100;
//   console.log(newObj);
//   return newObj;
// })



const Package = module.exports = mongoose.model('Package', PackageSchema);

module.exports.getAllPackages = (callback) => {
  Package.find({}, callback);
}

module.exports.getVisiblePacks = (callback) => {
  Package.find({enabled: true}, callback);
}

module.exports.addPackage = (package, callback) => {
  package.save(callback);
}

module.exports.removePackage = (packageId, callback) => {
  Package.findByIdAndRemove(packageId, callback);
}

module.exports.updatePackage = (packageId, updates, callback) => {
  console.log('updating package', updates);
  Package.findByIdAndUpdate(packageId, updates, callback);
}

module.exports.getById = (packageId, callback) => {
  Package.findById(packageId, callback);
}
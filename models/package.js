const mongoose = require('mongoose');
const config = require('../config/database');

// Session Schema
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
    monthly: {
      pay: {
        type: Currency,
        required: true,
      },
      discount: {
        type: Number,
        required: false,
        default: 0
      },
      required: true
    },
    annual: {
      type: Object,
      pay: {
        type: Currency,
        required: true
      },
      discount: {
        type: Number,
        required: false,
        default: 0
      },
      required: false
    },
    required: true
  },
  details: {
    type: Array,
    required: true
  },
  trialPeriod: {
    type: Number,
    required: true,
    default: 15
  }
});

const Package = module.exports = mongoose.model('Package', PackageSchema);

module.exports.getAllPackages = (callback) => {
  Package.find({}, callback);
}

module.exports.addPackage = (package, callback) => {
  Package.save(package, callback);
}

module.exports.removePackage = (packageId, callback) => {
  Package.findByIdAndRemove(packageId, callback);
}

module.exports.updatePackage = (packageId, updates, callback) => {
  Package.findByIdAndUpdate(packageId, updates, callback);
}
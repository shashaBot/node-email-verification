const mongoose = require('mongoose');
const config = require('../config/database');
const paypal = require('paypal-rest-sdk');

paypal.configure({
  'mode': 'sandbox',
  'client_id': 'AaeOpYUOOFsFbe_XkJWC7NJP3zBDOVbRpamyuyLI2dB488cEyxyjFQ2U7OaSKBuww10OQquzsVzUWZvR',
  'client_secret': 'EDL64zhpeqpwxjxhDntOm274MgCliQD_lNwMG0sTX7PxwhJWBm2LzGVU-iXSPM1WpX71S3a0sTNVNBtg'
})

const PaymentDefinitionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    enum: ['REGULAR', 'TRIAL'],
    required: true
  },
  frequency: {
    type: String,
    enum: ['DAY', 'MONTH', 'YEAR'],
    required: true
  },
  amount: {
    type: Object,
    value: {
      type: String,
      required: true,
      default: "0"
    },
    currency: {
      type: String,
      required: false
    }
  },
  cycles: {
    type: String,
    required: false
  },
  frequency_interval: {
    type: String,
    required: false
  }
}, {_id: false});

// Packages Schema
const PackageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: 'default description',
    required: true
  },
  paypal_id: {
    type: String,
    required: true
  },
  enabled: {
    type: Boolean,
    default: true,
    required: true
  },
  type: {
    type: String,
    enum: ['FIXED', 'INFINITE'],
    required: true
  },
  payment_definitions: {
    type: [PaymentDefinitionSchema],
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
  }
});

const Package = module.exports = mongoose.model('Package', PackageSchema);


module.exports.configurePaypal = (config) => {
  require('../config/paypal')(config);
}

module.exports.getAllPackages = (callback) => {
  Package.find({}, callback);
}

module.exports.getVisiblePacks = (callback) => {
  Package.find({enabled: true}, callback);
}

module.exports.addPackage = (newPackage, callback) => {
  var billingPlanAttribs = {
      "name": newPackage.name,
      "description": newPackage.description || "<description>",
      "type": newPackage.type,
      "payment_definitions": newPackage.payment_definitions,
      "merchant_preferences": {
          "cancel_url": process.env.DOMAIN+"/pricing",
          "return_url": process.env.DOMAIN+"/pricing?paypal_approve=true&pack_id="+newPackage._id,
          "max_fail_attempts": "2",
          "auto_bill_amount": "YES"
      }
  };

  var billingPlanUpdateAttributes = [{
      "op": "replace",
      "path": "/",
      "value": {
          "state": "ACTIVE"
      }
  }];

  paypal.billingPlan.create(billingPlanAttribs, (error, billingPlan) => {
      if (error){
          console.log(error);
          console.log(error.response.details);
          return callback(error);
      } else {
          // Activate the plan by changing status to Active
          paypal.billingPlan.update(billingPlan.id, billingPlanUpdateAttributes, function(error, response){
              if (error) {
                  console.log(error);
                  return callback(error);
              } else {
                console.log('billing plan created under id: ' + billingPlan.id);
                newPackage.paypal_id = billingPlan.id;
                newPackage.save(callback);
              }
          });
      }
  });  
}

module.exports.removePackage = (packageId, callback) => {
  Package.findByIdAndRemove(packageId, callback);
}

module.exports.updatePackage = (packageId, billingPlanId, updates, callback) => {
  console.log('updating package', updates);
  let billingPlanUpdateAttributes = [{
      "op": "replace",
      "path": "/",
      "value": updates
  }];

  paypal.billingPlan.update(billingPlanId, billingPlanUpdateAttributes, (error, response) => {
    if(error) {
      console.log(error);
      console.log(error.response.details);
      // return callback(error);
    }
    Package.findByIdAndUpdate(packageId, updates, callback);
  })

}

module.exports.getById = (packageId, callback) => {
  Package.findById(packageId, callback);
}

module.exports.createAgreement = (pack, callback) => {
    var isoDate = new Date();
    isoDate.setSeconds(isoDate.getSeconds() + 15);
    isoDate.toISOString().slice(0, 19) + 'Z';

    var billingAgreementAttributes = {
        "name": pack.name,
        "description": pack.description || 'enter-description-here',
        "start_date": isoDate,
        "plan": {
            "id": pack.paypal_id
        },
        "payer": {
            "payment_method": "paypal"
        }
    };

    // Use activated billing plan to create agreement
    paypal.billingAgreement.create(billingAgreementAttributes, function (error, billingAgreement){
        if (error) {
            console.error(error);
            console.error(error.response.details);
            return callback(error);
        } else {
            //capture HATEOAS links
            var links = {};
            billingAgreement.links.forEach(function(linkObj){
                links[linkObj.rel] = {
                    'href': linkObj.href,
                    'method': linkObj.method
                };
            })

            //if redirect url present, redirect user
            if (links.hasOwnProperty('approval_url')){
                return callback(null, links['approval_url'].href);
            } else {
                console.error('no redirect URI present');
                return callback(null, null);
            }
        }
    });  
}

module.exports.executeAgreement = (token, callback) => {
  paypal.billingAgreement.execute(token, {}, function (error, billingAgreement) {
      if (error) {
          console.error(error);
          return callback(error);
      } else {
          console.log('new billing agreement:\n ', JSON.stringify(billingAgreement));
          return callback(null, billingAgreement);
      }
  });  
}

module.exports.cancelAgreement = (agreementId, callback) => {
  let cancel_note = {
    "note": "Cancelling the agreement" 
  };
  paypal.billingAgreement.cancel(agreementId, cancel_note, function (error) {
      if (error) {
          console.log(error);
          callback(error);
      } else {
          console.log("Cancel Billing Agreement Response");
          callback(null);
      }
  });
}

module.exports.getAgreement = (agreementId, callback) => {
  paypal.billingAgreement.get(agreementId, callback);
}
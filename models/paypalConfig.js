const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');
const paypal = require('paypal-rest-sdk');

const PaypalConfigSchema = new mongoose.Schema({
	mode: {
		type: String,
		enum: ['sandbox', 'live'],
		required: true
	},
	client_id: {
		type: String,
		required: true
	},
	client_secret: {
		type: String,
		required: true
	}
});

const PaypalConfig = module.exports = mongoose.model('PaypalConfig', PaypalConfigSchema);

module.exports.saveConfig = (paypalConfig, callback) => {
	PaypalConfig.remove({}, (err) => {
		if(err) return callback(err);
		paypalConfig.save(callback);
	})
}

module.exports.getConfig = (callback) => {
	PaypalConfig.find({}, (err, configs) => {
		if(err) return callback(err);
		return callback(null, configs[0]);
	})
}
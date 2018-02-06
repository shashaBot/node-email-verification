const paypal = require('paypal-rest-sdk');

module.exports = (config) => {
	console.log('paypal reconfigured!');
	paypal.configure(config)
};
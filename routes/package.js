const express = require('express');
const router = express.Router();
const passport = require('passport');

const User = require('../models/user');

const checkAdmin = require('../middleware/checkAdmin');

const Package = require('../models/package');

require('dotenv').config();

router.get('/list', (req, res) => {
	Package.getAllPackages((err, packages) => {
		if(err) return res.json({success: false, msg: 'Error in getting package list!'})
		return res.json({success: true, packages: packages})
	})
})

router.get('/user_list', (req, res) => {
	Package.getVisiblePacks((err, packages) => {
		if(err) return res.json({success: false, msg: 'Error in getting packages!'})
		return res.json({success: true, packages: packages})
	})
})

router.post('/getById', (req, res) => {
	Package.getById(req.body.packageId, (err, package) => {
		if(err) return res.json({success: false, msg: 'Error in getting package!'});
		if(!package) return res.json({success: false, msg: 'No package found'});
		return res.json({success: true, package: package})
	})
})

router.post('/add', passport.authenticate('jwt', {session: false}), checkAdmin(), (req, res) => {
	let newPackage = new Package(req.body.newPackage);
	Package.addPackage(newPackage, (err, createdPack) => {
		if(err){
			console.log(err);
		 	return res.json({success: false, msg: 'Error in creating package'});
		 }
		res.json({success: true});
	})
})

router.post('/remove', passport.authenticate('jwt', {session: false}), checkAdmin(), (req, res) => {
	Package.removePackage(req.body.packageId, (err, removed) => {
		if(err) return res.json({success: false, msg: 'Error in removing package!'});
		return res.json({success: true, removedPackage: removed});
	})
})

router.post('/update', passport.authenticate('jwt', {session: false}), checkAdmin(), (req, res) => {
	Package.updatePackage(req.body.packageId, req.body.billingPlanId, req.body.package, (err, package) => {
		if(err) return res.json({success: false, msg: 'Error in updating package'});
		return res.json({success: true, package: package})
	})
})

router.post('/create_agreement', passport.authenticate('jwt', {session: false}), (req, res) => {    
    let pack = req.body.package;
    User.findById(req.user.id, (err, user) => {
    	if(err) return res.json({success: false, msg: 'Error in getting user info.'})
    	if(user.subscription && user.subscription.billingAgreementId) {
    		Package.cancelAgreement(user.subscription.billingAgreementId, (err) => {
    			if(err) return res.json({success: false, msg: 'Error in cancelling previous subscription!'})
			    Package.createAgreement(pack, (err, redirectUrl) => {
			    	if(err) return res.json({success: false, msg: 'Error in creating billing agreement'})
			    	res.json({success: true, redirect: redirectUrl});
			    })
    		});
    	} else {
		    Package.createAgreement(pack, (err, redirectUrl) => {
		    	if(err) return res.json({success: false, msg: 'Error in creating billing agreement'})
		    	res.json({success: true, redirect: redirectUrl});
		    })    		
    	}
    })
})

router.post('/execute_agreement', passport.authenticate('jwt', {session: false}), (req, res) => {
	let token = req.body.token;
	Package.executeAgreement(token, (err, billingAgreement) => {
		if(err) return res.json({success: false, msg: 'Error in executing agreement'})
		console.log('changing package: ', req.body.packageId)
		User.changeSubscription(req.user.id, req.body.packageId, billingAgreement.id, (err, updatedUser) => {
			if(err) return res.json({success: false, msg: 'Error in updating user subscription!'});
			let updatedSub = {
				billingAgreementId: billingAgreement.id,
				packageId: req.body.packageId
			};
			res.json({success: true, userSubscription: updatedSub})
		})
	})
})

router.post('/cancel_sub', passport.authenticate('jwt', {session: false}), (req, res) => {
	let agreementId = req.user.subscription.billingAgreementId;
	let packId = req.body.package._id;
	Package.cancelAgreement(agreementId, (err) => {
		if(err) return res.json({success: false, msg: 'Error in cancelling paypal billing agreement'})
		User.cancelSubscription(req.user.id, packId, (err) => {
			if(err) return res.json({success: false, msg: 'Error in updating user subscriptions'})
			res.json({success: true})
		})
	})
})

router.post('/get_agreement', passport.authenticate('jwt', {session: false}), (req, res) => {
	Package.getAgreement(req.body.agreementId, (err, agreement) => {
		if(err) return res.json({success: false, msg: 'Error in getting paypal billing agreement'})
		res.json({success: true, agreement: agreement});
	})
})

module.exports = router;

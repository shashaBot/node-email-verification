const express = require('express');
const router = express.Router();
const passport = require('passport');

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

	Package.addPackage(newPackage, (err, package) => {
		if(err) {
			console.log(err);
			return res.json({success: false, msg: 'Error in adding package.'});}
		return res.json({success: true, package: package});
	})
})

router.post('/remove', passport.authenticate('jwt', {session: false}), checkAdmin(), (req, res) => {
	Package.removePackage(req.body.packageId, (err, removed) => {
		if(err) return res.json({success: false, msg: 'Error in removing package!'});
		return res.json({success: true, removedPackage: removed});
	})
})

router.post('/update', passport.authenticate('jwt', {session: false}), checkAdmin(), (req, res) => {
	Package.updatePackage(req.body.packageId, req.body.package, (err, package) => {
		if(err) return res.json({success: false, msg: 'Error in updating package'});
		return res.json({success: true, package: package})
	})
})

module.exports = router;

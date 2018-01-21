const express = require('express');
const router = express.Router();
const passport = require('passport');

const Package = require('../models/package');

require('dotenv').config();

function checkAdmin(req, res, next) {
	if(req.user && req.user.isAdmin) {
		next();
	} else {
		return res.json({success: false, msg: 'You are not an admin. Unauthorized.'})
	}
}

router.get('/list', (req, res) => {
	Package.getAllPackages((err, packages) => {
		if(err) return res.json({success: false, msg: 'Error in getting package list-'})
		return res.json({success: true, packages: packages})
	})
})

router.post('/add', passport.authenticate('jwt', {session: false}), checkAdmin, (req, res) => {

	let newPackage = new Package(req.body.newPackage);

	Package.addPackage(newPackage, (err, package) => {
		if(err) return res.json({success: false, msg: 'Error in adding package.'});
		return res.json({success: true, package: package});
	})
})

router.post('/remove', passport.authenticate('jwt', {session: false}), checkAdmin, (req, res) => {
	Package.removePackage(req.body.packageId, (err, removed) => {
		if(err) return res.json({success: false, msg: 'Error in removing package!'});
		return res.json({success: true, removedPackage: removed});
	})
})

router.post('/update', passport.authenticate('jwt', {session: false}), checkAdmin, (req, res) => {
	Package.updatePackage(req.body.packageId, (err, package) => {
		if(err) return res.json({success: false, msg: 'Error in updating package'});
	})	return res.json({success: true, package: package})
})

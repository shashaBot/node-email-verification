module.exports = () => {
	return (req, res, next) => {
		if(req.user && req.user.isAdmin) {
			next();
		} else {
			return res.json({success: false, msg: 'You are not an admin. Unauthorized.'})
		}
	}
}

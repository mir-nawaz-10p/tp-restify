'use strict';
module.exports = {
  isAutenticated
};

function isAutenticated(req, res, next) {
	// authentication comes here 
	return next();
};

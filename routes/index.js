'use strict';

module.exports = function(server) {
	// **** Auth Routes ******* //
	require('./api')(server);
};

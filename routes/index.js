'use strict';

module.exports = function(server) {
	// **** User Routes ******* //
	require('./users')(server);
};

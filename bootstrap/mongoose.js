'use strict';
const mongoose = require('mongoose');

module.exports = function() {
	// MongoDB
	mongoose.connect('mongodb://localhost/tp-restify');
	var db = mongoose.connection;
	db.on('error', console.error.bind(console, 'connection error:'));
	db.once('open', function() {
	  console.log("we're connected!");
	});
};
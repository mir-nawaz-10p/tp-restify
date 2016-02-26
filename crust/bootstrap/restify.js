'use strict';

const restify = require('restify');

module.exports = (server) => {
	server.use(restify.acceptParser(server.acceptable));
	server.use(restify.queryParser());
	server.use(restify.bodyParser());
};

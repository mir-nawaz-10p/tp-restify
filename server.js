var restify = require('restify');
var logger = require('./bootstrap/logger');
var server = restify.createServer({
  name: 'tp-restify',
  version: '0.0.1'
});

require('./bootstrap/restify')(server);
require('./bootstrap/mongoose')();
require('./routes')(server);

server.pre( function(req, res, next){
  	logger.log('info', req.headers, {url:req.url, method: req.method}, {fields:req.log.fields});
	next();
});

server.listen(8080, function () {
  console.log('%s listening at %s', server.name, server.url);
});
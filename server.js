var restify = require('restify');
var logger = require('./crust/bootstrap/logger');
var server = restify.createServer({
  name: 'tp-restify',
  version: '0.0.1'
});

require('./crust/bootstrap/restify')(server);
require('./crust/bootstrap/mongoose')();
require('./crust/routes')(server);

server.pre(function(req, res, next){
  logger.log('info', 
            'Request Info',
            req.headers,
            {
            	fields: req.log.fields,
            	details:{
            		url:req.url,
            		method: req.method
            }
            });
  next();
});

server.listen(8080, function () {
  console.log('%s listening at %s', server.name, server.url);
});
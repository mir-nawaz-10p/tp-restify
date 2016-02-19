var restify = require('restify');

var server = restify.createServer({
  name: 'tp-restify',
  version: '0.0.1'
});

require('./bootstrap/restify')(server);
require('./bootstrap/mongoose')();
require('./routes')(server);

server.listen(8080, function () {
  console.log('%s listening at %s', server.name, server.url);
});
'use strict';
// Dependencies
var winston = require('winston');
var fs = require('fs');
var logDirectory = __dirname + '/../log';
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);

// create logger
var logger = new (winston.Logger)({
	exitOnError: false,
    transports: [
      new winston.transports.File({ 
      	name: 'tp-restify-info-file',
      	filename: logDirectory + '/info-logs.log'
      }),
      new winston.transports.Console({
        timestamp: function() {
          return Date.now();
        },
        formatter: function(options) {
          return options.timestamp() +' '+ options.level.toUpperCase() +' '+ (undefined !== options.message ? options.message : '') +
            (options.meta && Object.keys(options.meta).length ? '\n\t'+ JSON.stringify(options.meta) : '' );
        }
      })
    ],
    exceptionHandlers: [
      new winston.transports.File({ 
      	name: 'tp-restify-error-file',
      	filename: logDirectory + '/exception-log.log' 
      }),
      new winston.transports.Console({
        timestamp: function() {
          return Date.now();
        },
        formatter: function(options) {
          return options.timestamp() +' '+ options.level.toUpperCase() +' '+ (undefined !== options.message ? options.message : '') +
            (options.meta && Object.keys(options.meta).length ? '\n\t'+ JSON.stringify(options.meta) : '' );
        }
      })
    ]
  });

module.exports = logger;

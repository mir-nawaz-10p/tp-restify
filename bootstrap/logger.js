'use strict';
// Dependencies
var winston = require('winston');
var moment = require('moment');
var fs = require('fs');
var logDirectory = __dirname + '/../logs';

fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);
// create logger
var logger = new (winston.Logger)({
	exitOnError: false,
    transports: [
      new winston.transports.File({ 
      	name: 'tp-restify-info-file',
        filename: logDirectory + '/info-logs.log',
        timestamp: function() {
          return moment().format('MMMM Do YYYY, h:mm:ss a');
        }
      }),
      new winston.transports.Console({
        timestamp: function() {
          return moment().format('MMMM Do YYYY, h:mm:ss a');
        },
        formatter: function(options) {
          return options.timestamp() +' '+ options.level.toUpperCase() +' '+
            (options.meta && Object.keys(options.meta).length ? '\n\t'+ JSON.stringify(options.meta) : '' );
        }
      })
    ],
    exceptionHandlers: [
      new winston.transports.File({ 
      	name: 'tp-restify-error-file',
      	filename: logDirectory + '/exception-logs.log',
        timestamp: function() {
          return moment().format('MMMM Do YYYY, h:mm:ss a');
        }
      }),
      new winston.transports.Console({
        timestamp: function() {
          return moment().format('MMMM Do YYYY, h:mm:ss a');
        },
        formatter: function(options) {
          return options.timestamp() +' '+ options.level.toUpperCase() +' '+ (undefined !== options.message ? options.message : '') +
            (options.meta && Object.keys(options.meta).length ? '\n\t'+ JSON.stringify(options.meta) : '' );
        }
      })
    ]
  });

module.exports = logger;

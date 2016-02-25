'use strict';
// Dependencies
var winston = require('winston');
var moment = require('moment');
var fs = require('fs');
var logDirectory = __dirname + '/../logs';
function date(){return moment().format('MMMM Do YYYY, h:mm:ss a');}
var opts = {
  name: 'tp-restify-error-file',
  filename: logDirectory + '/access.log',
  timestamp: date(),
  datePattern: '.of.dd-MM-yyyy'
}
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);
// create logger
var logger = new (winston.Logger)({
	exitOnError: false,
    transports: [
      new winston.transports.Console({
        timestamp: function() {
          return date();
        },
        formatter: function(options) {
          return options.timestamp() +' '+ options.level.toUpperCase() +' '+
            (options.meta && Object.keys(options.meta).length ? '\n\t'+ JSON.stringify(options.meta) : '' );
        }
      }),
      new (require('winston-daily-rotate-file'))(opts)
    ],
    exceptionHandlers: [
      new winston.transports.Console({
        timestamp: function() {
          return date();
        },
        formatter: function(options) {
          return options.timestamp() +' '+ options.level.toUpperCase() +' '+ (undefined !== options.message ? options.message : '') +
            (options.meta && Object.keys(options.meta).length ? '\n\t'+ JSON.stringify(options.meta) : '' );
        }
      }),
      new (require('winston-daily-rotate-file'))(opts)
    ]
  });

module.exports = logger;

/**
 * Created by dobyeongsu on 2016. 1. 11..
 */
var express = require('express');
var Log = require('../lib/Log');

var Logger = express.Router();
var AppLog = Log.AppLog;

Logger.use(function (req, res, next) {
  // Request Logger
  AppLog.info('%s %s %s %s %s', req.method, req.url, req.ip, req.hostname, req.get('User-Agent'));
  next();
});

Logger.errorLogger = (function () {
  return function (err, req, res, next) {
    AppLog.error({ req: req, res: res, error: err }, err.stack);
    next(err);
  }
})();

module.exports = Logger;

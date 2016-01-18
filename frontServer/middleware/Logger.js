/**
 * Created by dobyeongsu on 2016. 1. 11..
 */
var express = require('express');
var Log = require('../lib/Log');

var Logger = express.Router();
var ElasticLog = Log.ElasticLog;
var AppLog = Log.AppLog;

Logger.use(function (req, res, next) {
  // Request Logger
  AppLog.info('%s %s %s %s %s', req.method, req.url, req.ip, req.hostname, req.get('User-Agent'));

  // Elastic
  var start = new Date();
  var end = res.end;
  res.end = function (chunk, encoding) {
    var responseTime = (new Date()).getTime() - start.getTime();
    end.call(res, chunk, encoding);
    var contentLength = parseInt(res.getHeader('Content-Length'), 10);
    var data = {
      res: res,
      req: req,
      responseTime: responseTime,
      contentLength: isNaN(contentLength) ? 0 : contentLength
    };
    ElasticLog.info(data, '%s %s %d %dms - %d', data.req.method, data.req.url, data.res.statusCode, data.responseTime, data.contentLength);
  };
  next();
});

Logger.errorLogger = (function () {
  return function (err, req, res, next) {
    AppLog.error({ req: req, res: res, error: err }, err.stack);
    next(err);
  }
})();

module.exports = Logger;

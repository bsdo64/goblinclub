var bunyan = require('bunyan');

var AppLog = bunyan.createLogger({
  name: "AppLog",
  streams: [
    { stream: process.stdout }
  ],
  serializers: bunyan.stdSerializers
});

module.exports = {
  AppLog: AppLog
};
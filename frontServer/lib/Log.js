var bunyan = require('bunyan');
var Elasticsearch = require('bunyan-elasticsearch');

var ElasticLog = bunyan.createLogger({
  name: "ElasticLog",
  streams: [
    { stream: new Elasticsearch() }
  ],
  serializers: bunyan.stdSerializers
});

var AppLog = bunyan.createLogger({
  name: "AppLog",
  streams: [
    { stream: process.stdout }
  ],
  serializers: bunyan.stdSerializers
});

module.exports = {
  AppLog: AppLog,
  ElasticLog: ElasticLog
};
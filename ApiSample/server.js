/**
 * Created by dobyeongsu on 2015. 10. 24..
 */
var jsonServer = require('json-server');
var fs = require('fs');

// Returns an Express server
var server = jsonServer.create();

// Set default middlewares (logger, static, cors and no-cache)
server.use(jsonServer.defaults());

// Returns an Express router
var data = JSON.parse(fs.readFileSync('./ApiSample/db.json', 'utf8'));
var router = jsonServer.router(data);

server.use('/users', jsonServer.router('comments.json')) // { "comments": [ ... ] }
server.use('/other-route', jsonServer.router('other-db.json'))

server.listen(3002);
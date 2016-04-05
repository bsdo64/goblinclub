/**
 * Created by dobyeongsu on 2015. 10. 15..
 */
//require('require-cache')();

var time = new Date;

require('babel-register');
require('../frontServer/server');

console.log(((new Date).getTime() - time.getTime()) + 'ms');

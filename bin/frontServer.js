/**
 * Created by dobyeongsu on 2015. 10. 15..
 */
console.log(process.env.BROWSER);
delete process.env.BROWSER;
require('babel/register');
require('../frontServer/server');
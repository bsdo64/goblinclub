/**
 * Created by dobyeongsu on 2015. 12. 12..
 */
var request = require('superagent');

var Api = (function(req) {
  var token = null;
  var ApiEndPoint = 'http://localhost:3001/compose';

  var setToken = function (userToken) {
    token = userToken || null;
  };
  var get = function (url) {
    var requester = req.get(ApiEndPoint + url);
    if (token) {
      requester.set({token: token})
    }
    return requester
  };
  return {
    setToken : setToken,
    get: get
  }
})(request);

module.exports = Api;

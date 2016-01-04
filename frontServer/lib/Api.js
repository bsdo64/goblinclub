/**
 * Created by dobyeongsu on 2015. 12. 12..
 */
import request from 'superagent';

const Api = (function(req) {
  let token = null;
  const ApiEndPoint = 'http://localhost:3001/compose';

  const setToken = function (userToken) {
    token = userToken || null;
  };
  const get = function (url) {
    let requester = req.get(ApiEndPoint + url);
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

export default Api;
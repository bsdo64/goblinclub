/**
 * Created by dobyeongsu on 2015. 12. 12..
 */
import request from 'superagent';

const Api = (function(req) {
  let token = 'NotLogin';
  const ApiEndPoint = 'http://localhost:3001/compose';

  const setToken = function (userToken) {
    token = userToken || 'NotLogin';
  };
  const get = function (url) {
    return req
      .get(ApiEndPoint + url)
      .set({userToken: token})
  };
  return {
    setToken : setToken,
    get: get
  }
})(request);

export default Api;
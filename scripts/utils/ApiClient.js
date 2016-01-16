/**
 * Created by dobyeongsu on 2015. 10. 23..
 */
import request from 'superagent';
import Promise from 'bluebird';

const frontUrl = 'http://localhost:3000/ajax';

let Req = function () {};
Req.prototype.get = function (url, params) {
  return new Promise((resolve, reject) => {
    request
      .get(frontUrl + url)
      .query(params)
      .set('Accept', 'application/json')
      .end(function (xhrErr, xhrRes) {
        if (xhrErr) {
          console.log(xhrErr);
          console.log(xhrRes);
          reject(xhrErr);
        } else if (xhrRes.error) {
          reject(xhrRes);
        } else {
          resolve(xhrRes.body);
        }
      });
  });
};
Req.prototype.post = function (url, params) {
  return new Promise((resolve, reject) => {
    request
      .post(frontUrl + url)
      .send(params)
      .set('Accept', 'application/json')
      .withCredentials()
      .end(function (xhrErr, xhrRes) {
        if (xhrErr) {
          reject(xhrErr);
        } else if (xhrRes.error) {
          reject(xhrRes.error);
        } else {
          resolve(xhrRes.body);
        }
      });
  });
};

export default Req;

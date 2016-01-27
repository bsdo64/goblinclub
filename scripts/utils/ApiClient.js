/**
 * Created by dobyeongsu on 2015. 10. 23..
 */
import request from 'superagent';
import Promise from 'bluebird';

function Req() {
  this.ajaxEndPoint = 'http://localhost:3000/ajax';
}

Req.prototype = {
  get: function (url, params) {
    return new Promise((resolve, reject) => {
      request
        .get(this.ajaxEndPoint + url)
        .query(params)
        .set('Accept', 'application/json')
        .end(function (xhrErr, xhrRes) {
          if (xhrErr) {
            reject(xhrErr);
          } else if (xhrRes.error) {
            reject(xhrRes);
          } else {
            resolve(xhrRes.body);
          }
        });
    });
  },

  post: function (url, params) {
    return new Promise((resolve, reject) => {
      request
        .post(this.ajaxEndPoint + url)
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
  }
};

export default Req;

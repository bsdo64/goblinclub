/**
 * Created by dobyeongsu on 2015. 10. 23..
 */
import request from 'superagent';

const ApiClient = {
  login: (user, callback) => {
    request
      .post('/ajax/login')
      .send({user: user})
      .set('Accept', 'application/json')
      .withCredentials()
      .end((xhrErr, xhrRes) => {
        if (xhrErr) {
          callback(xhrErr, null);
        } else if (xhrRes) {
          callback(null, xhrRes.body);
        }
      });
  },

  signin: (user, callback) => {
    request
      .post('/ajax/signin')
      .send({user: user})
      .set('Accept', 'application/json')
      .withCredentials()
      .end((xhrErr, xhrRes) => {
        if (xhrErr) {
          callback(xhrErr, null);
        } else if (xhrRes) {
          callback(null, xhrRes.body);
        }
      });
  },

  submitPost: (author, post, callback) => {
    request
      .post('/ajax/submit')
      .send({author: author, post: post})
      .set('Accept', 'application/json')
      .withCredentials()
      .end((xhrErr, xhrRes) => {
        if (xhrErr) {
          callback(xhrErr, null);
        } else if (xhrRes) {
          callback(null, xhrRes.body);
        }
      });
  },

  getClubPost: (user, params, callback) => {
    request
      .get('/ajax/club/' + params.clubName + '/' + params.article)
      .query(user)
      .set('Accept', 'application/json')
      .end((xhrErr, xhrRes) => {
        if (xhrErr) {
          callback(xhrErr, null);
        } else if (xhrRes) {
          callback(null, xhrRes.body);
        }
      });
  }
};

export default ApiClient;

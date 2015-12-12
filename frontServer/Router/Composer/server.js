import express from 'express';

import jsonWebToken from 'jsonwebtoken';
import Api from '../../lib/Api';
var Composer = express.Router();

Composer.use((req, res, next) => {
  var userToken = req.cookies.token;
  Api.setToken(userToken);

  res.storeState = {
    UserStore: {
      "user": {
        "email": null,
        "nick": null
      },
      "auth": {
        "state": "login",
        "loginAt": null,
        "device": "Mac OS Chrome"
      },
      loadingAuth: false,
      loadedAuth: false,
      authFail: false,
      authSuccess: false
    }
  };

  const token = req.cookies.token;
  if (token) {
    jsonWebToken.verify(token, 'secret', function (err, decoded) {
      if (err) {
        res.storeState.UserStore.authFail = true;
        next();
      } else {
        res.storeState.UserStore['user'] = decoded;
        res.storeState.UserStore.authSuccess = true;
        res.storeState.UserStore.loadedAuth = true;

        console.log(decoded);

        next();
      }
    });
  } else {
    next();
  }
});

Composer.get('/', (req, res, next) => {
  Api.get(req.url)
    .query({user: res.storeState.UserStore.user})
    .end((errXHR, resXHR) => {
      if (errXHR) {

        res.storeState['Error'] = errXHR;
        next();
      } else if (resXHR && resXHR.ok) {
        let apiResult = resXHR.body;
        res.storeState['PostStore'] = apiResult.postStore;
        res.storeState['ClubStore'] = apiResult.clubStore;

        next();
      }
    });
});

Composer.get('/submit', (req, res, next) => {
  Api.get(req.url)
    .query({user: res.storeState.UserStore.user})
    .end((errXHR, resXHR) => {
      if (errXHR) {

        res.storeState['Error'] = errXHR;
        next();
      } else if (resXHR && resXHR.ok) {
        let apiResult = resXHR.body;
        res.storeState['ClubStore'] = apiResult.clubStore;

        next();
      }
    });
});

Composer.get('/club/:clubName', (req, res, next) => {
  Api.get(req.url)
    .query({user: res.storeState.UserStore.user})
    .end((errXHR, resXHR) => {
      if (errXHR) {

        res.storeState['Error'] = errXHR;
        next();
      } else if (resXHR && resXHR.ok) {
        let apiResult = resXHR.body;
        res.storeState['ClubStore'] = apiResult.clubStore;
        res.storeState['PostStore'] = apiResult.postStore;

        next();
      }
    });
});

Composer.get('/club/:clubName/:postName', (req, res, next) => {
  Api.get(req.url)
    .query({user: res.storeState.UserStore.user})
    .end((errXHR, resXHR) => {
      if (errXHR) {
        res.storeState['Error'] = errXHR;
        next();
      } else if (resXHR && resXHR.ok) {
        let apiResult = resXHR.body;
        res.storeState['ClubStore'] = apiResult.clubStore;
        res.storeState['PostStore'] = apiResult.postStore;

        next();
      }
    });
});

export default Composer;
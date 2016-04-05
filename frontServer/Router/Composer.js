import express from 'express';
import Api from '../lib/Api';

const Composer = express.Router();

Composer.use(function (req, res, next) {
  console.log(req.headers['referer']);
  console.log(req.sessionID);
  var userToken = req.cookies.token;
  var userSession = req.sessionID;
  Api.setToken(userToken);
  Api.setSession(userSession);

  res.storeState = {};
  next();
});

function sendOK(resXHR, res, next) {
  var apiResult = resXHR.body;
  for (var key in apiResult) {
    if (apiResult.hasOwnProperty(key)) {
      res.storeState[key] = apiResult[key];
    }
  }
  next();
}

function errorHandler(errXHR, res, next) {
  if (errXHR.status === 404) {
    res.redirect('/');
    return;
  }
  next(errXHR);
}

function sendResponse(req, res, next) {
  Api.get(req.url)
    .end((errXHR, resXHR) => {
        if (errXHR) {
          errorHandler(errXHR, res, next);
        } else if (resXHR && resXHR.ok) {
          sendOK(resXHR, res, next);
        }
      }
    );
}

Composer.get('*', sendResponse);

export default Composer;

import express from 'express';
import Tokens from 'csrf';
var CSRF = express.Router();

CSRF.use((req, res, next) => {
  var tokens = new Tokens();

  if ( !req.session.csrfSecret && !req.cookies.csrfToken ) {
    // '완전 처음'
    var secret = tokens.secretSync();
    var token = tokens.create(secret);

    req.session.csrfSecret = secret;
    res.cookie('csrfToken', token);
    next();
  } else if ( req.session.csrfSecret && !req.cookies.csrfToken ) {
    // '잘못된 접근'

    var secret = req.session.csrfSecret;
    var token = tokens.create(secret);
    res.cookie('csrfToken', token);
    next();
  } else if ( req.session.csrfSecret && req.cookies.csrfToken ) {
    // '인증 process'

    var secret = req.session.csrfSecret;
    var token = req.cookies.csrfToken;

    if (tokens.verify(secret, token)) {
      // 인증 완료
      req.session.csrfSecret = tokens.secretSync();
      var newToken = tokens.create(req.session.csrfSecret);
      res.cookie('csrfToken', newToken);
      next();
    } else {
      // csrf 공격
      delete req.session;
      delete req.cookies.csrfToken;
      next(new Error('csrf Attack!'));
    }
  } else {
    delete req.session.csrfSecret;
    next(new Error('잘못된 접근입니다'));
  }
});

export default CSRF;
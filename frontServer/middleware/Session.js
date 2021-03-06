/**
 * Created by dobyeongsu on 2016. 2. 2..
 */
import connectRedis from 'connect-redis'
import session from 'express-session';

const RedisStore = connectRedis(session);
export function configSession() {
  return session({
    store: new RedisStore({
      host: 'localhost',
      port: 6379,
      db: 0
    }),
    secret: '1234567890QWERTY',
    name: 'sessionId',
    resave: false,
    saveUninitialized: false
  });
}

export function initSession(req, res, next) {
  if (!req.session.initialized) {
    req.session.initialized = true;
    req.session.save((err) => {
      next();
    });
  } else {
    req.session.touch();
    next();
  }
}

import express                      from 'express';
import httpProxy                    from 'http-proxy';
import path                         from 'path';
import cookieParser                 from 'cookie-parser';
import jwt                          from 'express-jwt';
import fetch                        from 'superagent';
import connectRedis                 from 'connect-redis'
import session                      from 'express-session';

import React                        from 'react/dist/react.min.js';
import routes                       from '../scripts/Utils/routes'
import ReactDOM                     from 'react-dom/server';
import { RouterContext, match }    from 'react-router'
import alt                          from '../scripts/Utils/alt';
import Iso                          from 'iso';
import zip                          from 'lz-string';

import Log                          from './lib/Log';
import CSRF                         from './middleware/Csrf';
import Logger                       from './middleware/Logger';
import Composer                     from './Router/Composer';
import compress from 'compression';

import HTML                         from './indexHTML'

var app = express();

var bowerPath = path.join(__dirname, "../bower_components");
var dist = path.join(__dirname, "../_dist");
var proxy = httpProxy.createProxyServer();
var RedisStore = connectRedis(session);

app.locals.settings['x-powered-by'] = false;

app.use(compress());
app.use(Logger);
app.use(cookieParser());
app.use('/favicon.ico', express.static(dist+'/favicon.ico'));
app.use('/statics', express.static(dist));
app.use('/statics', express.static(bowerPath));
app.use(['/statics', '/favicon.ico'], (req, res) => {
    res.end();
});

app.use(session({
    store: new RedisStore({
        host: 'localhost',
        port: 6379,
        db: 2,
        pass: 'RedisPASS'
    }),
    secret: '1234567890QWERTY',
    resave: false,
    saveUninitialized: false
}));

app.use('/ajax', (req, res) => {
    proxy.web(req, res, {target: 'http://localhost:3001/ajax'}, function(e) {
        res.send('Ajax Error : ', e);
    });
});
app.use('/image', (req, res) => {
    proxy.web(req, res, {target: 'http://localhost:3002'}, function(e) {
        res.send('Image-Server Error : ', e);
    });
});

/* Front Side */
app.use(function (req, res, next) {
    if(!req.session.initialized) {
        req.session.initialized = true;
        req.session.save((err) => {
            next();
        });
    } else {
        next();
    }
});

// app.use(CSRF);
app.use(Composer);

app.use((req, res) => {
    match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {

        if (redirectLocation)
            res.redirect(301, redirectLocation.pathname + redirectLocation.search);
        else if (error)
            res.status(401).send(error.message);
        else if (renderProps == null)
            renderServersideReact(renderProps, req, res, (req, res, html) => {
                res.set('Content-Type', 'text/html; charset=utf8');
                res.end(html);
            });
        else {
            renderServersideReact(renderProps, req, res, (req, res, html) => {
                res.set('Content-Type', 'text/html; charset=utf8');
                res.end(html);
            })
        }
    });
});

function renderServersideReact(renderProps, req, res, callback) {

    let markup,
        content,
        state = JSON.stringify(res.storeState || {});

    alt.bootstrap(state);
    content = ReactDOM.renderToString(
      <RouterContext
        {...renderProps}
        radiumConfig={{userAgent: req.headers['user-agent']}} />
    );

    markup = Iso.render(content, zip.compressToBase64(alt.flush()), {}, {
        markupClassName: 'app-main',
        markupElement: 'main',
        dataClassName: 'states',
        dataElement: 'script'
    });

    let html = ReactDOM.renderToString(<HTML />);
    html = html.replace('CONTENT', function(match) {
        return match.replace('CONTENT', markup);
    });

    callback(req, res, html);
}

app.use(Logger.errorLogger);

app.listen(process.env.PORT || 3000, function () {
    Log.AppLog.warn('Start Front Server');
});

import express from 'express';
import httpProxy from 'http-proxy';
import path from 'path';
import cookieParser from 'cookie-parser';
import jwt from 'express-jwt';
import fetch from 'superagent';
import connectRedis from 'connect-redis'
import session from 'express-session';

import React from 'react';
import routes from '../universalRouter/routes'
import ReactDOM from 'react-dom/server';
import { RoutingContext, match } from 'react-router'
import createLocation from 'history/lib/createLocation';
import alt from '../scripts/alt';
import Iso from 'iso';
import zip from 'lz-string';

import Composer from './lib/Composer/server';

import HTML from './indexHTML'

var app = express();
var bowerPath = path.join(__dirname, "../bower_components");
var dist = path.join(__dirname, "../_dist");
var proxy = httpProxy.createProxyServer();
var RedisStore = connectRedis(session);

app.locals.settings['x-powered-by'] = false;

var cache = [];

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

app.use('/api', (req, res) => {
    proxy.web(req, res, {target: 'http://localhost:3001'});
});

/* Front Side */

app.use(function (req, res, next) {
    if(!req.session.initialized) {
        req.session.initialized = true;
        req.session.save((err) => {
            next();
        });
        next();
    } else {
        next();
    }
});

var authenticate  = jwt({
    secret: "secret",
    getToken: function fromHeaderOrCookie(req) {
        if(req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
            return req.headers.authorization.split(' ')[1];
        } else if(req.cookies && req.cookies.token) {
            return req.cookies.token;
        }
        return null;
    }
});
app.use(['/user', '/post'], authenticate, (err, req, res, next) => {

    if(!req.cookies.token) {
        res.redirect('/login');
    } else {
        if (err.name === 'UnauthorizedError') {
            res.status(401).send('invalid token...');
        } else {
            next();
        }
    }
});

app.post('/login', (req, res) => {
    proxy.web(req, res, {target: 'http://localhost:3000/api/auth'});
});

app.use(Composer);


app.use((req, res, next) => {
    let location = new createLocation(req.url);
    match({ routes, location }, (error, redirectLocation, renderProps) => {

        if (redirectLocation)
            res.redirect(301, redirectLocation.pathname + redirectLocation.search)
        else if (error)
            res.status(401).send(error.message)
        else if (renderProps == null)
            res.status(401).send('Not found')
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
        state = JSON.stringify(res.locals.data || {});

    alt.bootstrap(state);

    content = ReactDOM.renderToString(<RoutingContext {...renderProps} />);

    markup = Iso.render(content, zip.compressToBase64(alt.flush()), {}, {
        markupClassName: 'app-main',
        markupElement: 'main',
        dataClassName: 'states',
        dataElement: 'script'
    });
    //console.timeEnd('start');   //-- 114ms

    let html = ReactDOM.renderToString(<HTML />);
    html = html.replace('CONTENT', function(match) {
        return match.replace('CONTENT', markup);
    });

    callback(req, res, html);
}

app.listen(process.env.PORT || 3000);
/**
 * Created by dobyeongsu on 2015. 10. 15..
 */
import express from 'express';
import httpProxy from 'http-proxy';
import path from 'path';
import cookieParser from 'cookie-parser';
import jsonWebToken from 'jsonwebtoken';
import jwt from 'express-jwt';
import fetch from 'superagent';

import React from 'react';
import routes from '../universalRouter/routes'
import ReactDOM from 'react-dom/server';
import { RoutingContext, match } from 'react-router'
import createLocation from 'history/lib/createLocation';
import alt from '../scripts/alt';
import Iso from 'iso';

import HTML from './indexHTML'

var app = express();
var bowerPath = path.join(__dirname, "../bower_components");
var dist = path.join(__dirname, "../_dist");
var proxy = httpProxy.createProxyServer();

app.locals.settings['x-powered-by'] = false;

app.use(cookieParser());
app.use(express.static(dist));
app.use(express.static(bowerPath));

app.use((req, res, next) => {
    var token = req.cookies.token;
    if(token) {
        jsonWebToken.verify(token, 'secret', function(err, decoded) {
            if( err ) {
                console.log(err);
            } else {
                var data = {
                    UserStore: {
                        auth: {
                            token: token,
                            user: decoded
                        },
                        loadingAuth: false,
                        loadedAuth: true,
                        authFail: false,
                        authSuccess: true
                    }
                };
                res.locals.data = data;
                next();
            }
        });
    } else {
        next();
    }
});

app.use('/api', (req, res) => {
    proxy.web(req, res, {target: 'http://localhost:3001'});
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
        }

        next();
    }
});

app.post('/login', (req, res) => {
    proxy.web(req, res, {target: 'http://localhost:3001/auth'});
});

app.use((req, res) => {
    let state = JSON.stringify(res.locals.data || {});

    let markup, content;
    let location = new createLocation(req.url);
    alt.bootstrap(state);

    match({ routes, location }, (error, redirectLocation, renderProps) => {

        if (redirectLocation)
            res.redirect(301, redirectLocation.pathname + redirectLocation.search)
        else if (error)
            res.status(401).send(error.message)
        else if (renderProps == null)
            res.status(401).send('Not found')
        else {
            content = ReactDOM.renderToString(<RoutingContext {...renderProps} />);
            markup = Iso.render(content, alt.flush());

            let html = ReactDOM.renderToString(<HTML />);

            html = html.replace('CONTENT', function(match) {
                return match.replace('CONTENT', markup);
            });

            res.set('Content-Type', 'text/html; charset=utf8');
            res.end(html);
        }
    });
});
app.listen(process.env.PORT || 3000);
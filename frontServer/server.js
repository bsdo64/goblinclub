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
import ReactDOM from 'react-dom/server';

import HTML from './indexHTML'

var app = express();
var bowerPath = path.join(__dirname, "../bower_components");
var dist = path.join(__dirname, "../_dist");
var proxy = httpProxy.createProxyServer();

app.locals.settings['x-powered-by'] = false;

app.use(cookieParser());
app.use(express.static(dist));
app.use(express.static(bowerPath));

app.use('/api', (req, res) => {
    proxy.web(req, res, {target: 'http://localhost:3001'});
});

app.post('/login', (req, res) => {

    let user = {
        id: "123456",
        nick: "Master",
        email: "bsdo@naver.com"
    };

    fetch
        .post('http://localhost:3000/api/auth/login')
        .type('form')
        .send({user : user})
        .set('X-API-Key', 'foobar')
        .set('Accept', 'application/json')
        .end((err, apiResponse) => {
            if( err) {
                console.log(err);
            }

            res.cookie('token', apiResponse.body.token, {
                expires: new Date(Date.now() + (24 * 60 * 60 * 1000)),
                httpOnly: true
            });

            res.send({message : "cookie setted"});
        });
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
app.get('/secured/ping', authenticate, (req, res) => {
    res.send(200, {message: 'secured'});
});
app.use(function (err, req, res, next) {

    if (err.name === 'UnauthorizedError') {
        res.send(401, 'invalid token...');
    }
    next();
});

app.post('/auth/login-cookie', authenticate, (req, res) => {

    let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjEyMzQ1NiIsIm5pY2siOiJNYXN0ZXIiLCJlbWFpbCI6ImJzZG9AbmF2ZXIuY29tIiwiaWF0IjoxNDQ1MDg3MDA5LCJleHAiOjE0NDU2OTE4MDl9.GkDh-Xg9khI7tfNwaSzzxY8cfekkKzzaMHwYe8HlBhs";

    res.cookie('id_token', token, {
        expires: new Date(Date.now() + 36000),
        httpOnly: true
    });
    res.send(200, { message: 'Cookie set!' });

});

app.get('*', (req, res, next) => {
    res.send(ReactDOM.renderToString(<HTML />));
});
app.listen(process.env.PORT || 3000);
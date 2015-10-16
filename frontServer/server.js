/**
 * Created by dobyeongsu on 2015. 10. 15..
 */
import express from 'express';
import path from 'path';

import React from 'react';
import ReactDOM from 'react-dom/server';

import HTML from './indexHTML'

var app = express();
var dist = path.join(__dirname, "../_dist");
var bowerPath = path.join(__dirname, "../bower_components");

app.locals.settings['x-powered-by'] = false;

app.use(express.static(dist));
app.use(express.static(bowerPath));

app.get('*', function home (req, res, next) {
    res.send(ReactDOM.renderToString(<HTML />));
});
app.listen(process.env.PORT || 3000);
import express                      from 'express';
import httpProxy                    from 'http-proxy';
import path                         from 'path';
import cookieParser                 from 'cookie-parser';
import jwt                          from 'express-jwt';
import fetch                        from 'superagent';
import connectRedis                 from 'connect-redis'
import session                      from 'express-session';

import React                        from 'react';
import routes                       from '../universalRouter/routes'
import ReactDOM                     from 'react-dom/server';
import { RoutingContext, match }    from 'react-router'
import createLocation               from 'history/lib/createLocation';
import alt                          from '../scripts/alt';
import Iso                          from 'iso';
import zip                          from 'lz-string';

import Composer                     from './lib/Composer/server';

import HTML                         from './indexHTML'

var app = express();

var bowerPath = path.join(__dirname, "../bower_components");
var dist = path.join(__dirname, "../_dist");
var proxy = httpProxy.createProxyServer();
var RedisStore = connectRedis(session);

var bunyan = require('bunyan');
var Elasticsearch = require('bunyan-elasticsearch');

var logger = bunyan.createLogger({
    name: "My Application",
    streams: [
        { stream: process.stdout },
        { stream: new Elasticsearch() }
    ],
    serializers: bunyan.stdSerializers
});

logger.info('Starting application on port %d', app.get('port'));

app.use(function (req, res, next) {
    var start = new Date();
    var end = res.end;
    res.end = function (chunk, encoding) {
        var responseTime = (new Date()).getTime() - start.getTime();
        end.call(res, chunk, encoding);
        var contentLength = parseInt(res.getHeader('Content-Length'), 10);
        var data = {
            res: res,
            req: req,
            responseTime: responseTime,
            contentLength: isNaN(contentLength) ? 0 : contentLength
        };
        logger.info(data, '%s %s %d %dms - %d', data.req.method, data.req.url, data.res.statusCode, data.responseTime, data.contentLength);
    };
    next();
});
var errorLogger = function (err, req, res, next) {
    logger.error({ req: req, res: res, error: err }, err.stack);
    next(err);
};

app.locals.settings['x-powered-by'] = false;

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
        res.send(e);
    });
});
app.use('/image', (req, res) => {
    proxy.web(req, res, {target: 'http://localhost:3002'}, function(e) {
        res.send(e);
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
        state = JSON.stringify(res.storeState || {});

    console.log(state);
    alt.bootstrap(state);

    content = ReactDOM.renderToString(<RoutingContext {...renderProps} />);

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

app.use(errorLogger);

setInterval(function () {
    var startTime = Date.now();
    setImmediate(function () {
        var data = process.memoryUsage();
        data.uptime = process.uptime();
        data.pid = process.pid;
        data.tags = ['process-metrics'];
        data.lag = Date.now()-startTime;
        logger.info(data,
            'process.pid: %d heapUsed: %d heapTotal: %d rss: %d uptime %d lag: %d',
            data.pid,
            data.heapUsed,
            data.heapTotal,
            data.rss,
            data.uptime,
            data.lag
        );
    });
}, 5000);

app.listen(process.env.PORT || 3000);
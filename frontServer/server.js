import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import compress from 'compression';

import Log from './lib/Log';

import CSRF from './middleware/Csrf';
import {configSession, initSession} from './middleware/Session';
import Logger, {errorLogger} from './middleware/Logger';
import {AjaxProxy, ImageProxy} from './middleware/Proxy';

import Embeds from './Router/Embeds';
import Composer from './Router/Composer';
import Render from './Router/Render';

const BOWER_PATH = path.join(__dirname, "../bower_components");
const DIST_PATH = path.join(__dirname, "../_dist");
const app = express();

app.locals.settings['x-powered-by'] = false;

app.set('trust proxy', true);
app.use(compress());
app.use(Logger);
app.use(cookieParser());
app.use('/favicon.ico', express.static(DIST_PATH + '/favicon.ico'));
app.use('/statics', express.static(DIST_PATH));
app.use('/statics', express.static(BOWER_PATH));
app.use(['/statics', '/favicon.ico'], (req, res) => {
  res.end();
});

app.use(configSession());
app.use(initSession);

app.use('/ajax', AjaxProxy);
app.use('/image', ImageProxy);

// app.use(CSRF);
app.use('/api', Embeds);
app.use(Composer);

app.use(Render);

app.use(errorLogger);

app.listen(process.env.PORT || 3000, function () {
  Log.AppLog.warn('Start Front Server');
});

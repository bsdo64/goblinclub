/**
 * Created by dobyeongsu on 2016. 2. 2..
 */
import express from 'express';
import React from 'react';
import ReactDOM from 'react-dom/server';
import { RouterContext, match } from 'react-router'
import routes from '../../scripts/Utils/routes'
import alt from '../../scripts/Utils/alt';
import Iso from 'iso';
import zip from 'lz-string';

import fs from 'fs';
import path from 'path';

const Render = express.Router();
const dist = path.resolve(__dirname, "../../_dist");

function renderContentWithDataToString(Content) {
  const iso = new Iso();

  iso.add(Content, zip.compressToBase64(alt.flush()));
  //iso.add(Content, alt.flush());
  return iso.render();
}

function renderServersideReact(renderProps, req, res, callback) {
  let Content,
      state = JSON.stringify(res.storeState || {}),
      html;

  alt.bootstrap(state);

  Content = ReactDOM.renderToString(
    <RouterContext {...renderProps} radiumConfig={{userAgent: 'all'}} />
  );

  fs.readFile(path.join(dist, '/index.html'), 'utf8', function (err, data){
    html = data.replace('CONTENT', renderContentWithDataToString(Content));
    callback(req, res, html);
  });
}

Render.use((req, res) => {
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

export default Render;

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

import HTML from '../indexHTML'

const Render = express.Router();

function renderContentWithDataToString(Content) {
  let iso = new Iso();

  iso.add(Content, zip.compressToBase64(alt.flush()));
  return iso.render();
}

function renderServersideReact(renderProps, req, res, callback) {
  let ContentDOM,
      Content,
      state = JSON.stringify(res.storeState || {}),
      html = ReactDOM.renderToString(<HTML />);

  alt.bootstrap(state);

  Content = ReactDOM.renderToString(
    <RouterContext {...renderProps} radiumConfig={{userAgent: req.headers['user-agent']}} />
  );

  ContentDOM = renderContentWithDataToString(Content);

  html = html.replace('CONTENT', ContentDOM);

  callback(req, res, html);
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

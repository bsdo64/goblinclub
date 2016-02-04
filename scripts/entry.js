/**
 * Created by dobyeongsu on 2015. 10. 15..
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Iso from 'iso';
import alt from './Utils/alt';
import {Router, browserHistory} from 'react-router';
import zip from 'lz-string';

import routes from './Utils/routes';

Iso.bootstrap((state, node) => {
  // let decodeState = zip.decompressFromBase64(state);
  let decodeState = state;
  alt.bootstrap(decodeState);

  /* Debug - Final Dispatched Store's State */
  function finalState(payload) {
    if (!process.env.NODE) {
      console.log('Final \t\t', payload);
      console.groupEnd('Action');
    }
  }

  for (let store in alt.stores) {
    if (alt.stores.hasOwnProperty(store)) {
      alt.stores[store].listen(finalState);
    }
  }

  ReactDOM.render(
    <Router children={routes} history={browserHistory} />,
    node
  );
});

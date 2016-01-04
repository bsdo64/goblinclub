/**
 * Created by dobyeongsu on 2015. 10. 15..
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Iso from 'iso';
import alt from './alt';
import {Router} from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import zip from 'lz-string';

import routes from '../universalRouter/routes';

const isoConfig = {
  markupClassName: 'app-main',
  markupElement: 'main',
  dataClassName: 'states',
  dataElement: 'script'
};

Iso.bootstrap((state, _, container) => {
  let decodeState = zip.decompressFromBase64(state);
  alt.bootstrap(decodeState);

  /* Debug - Final Dispatched Store's State */
  function finalState(payload) {
    console.log('Final.toJS()\t', payload);

  }

  for (let store in alt.stores) {
    if (alt.stores.hasOwnProperty(store)) {
      alt.stores[store].listen(finalState);
    }
  }

  ReactDOM.render(<Router children={routes} history={createBrowserHistory()} />, container);
}, isoConfig);

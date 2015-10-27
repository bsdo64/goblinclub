/**
 * Created by dobyeongsu on 2015. 10. 15..
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Iso from 'iso';
import alt from './alt';
import Immutable from 'immutable';
import { Router } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory'
import zip from 'lz-string';

import { App } from './Containers'
import routes from '../universalRouter/routes'

export default class Entry extends Component {

    componentDidMount() {

    }

    componentWillUnmount () {

    }

    render() {
        return(
            <App />
        )
    }
}

var iso_config = {
    markupClassName: 'app-main',
    markupElement: 'main',
    dataClassName: 'states',
    dataElement: 'script'
}

Iso.bootstrap((state, _, container) => {
    state = zip.decompressFromBase64(state);
    alt.bootstrap(state);

    /* Debug - Final Dispatched Store's State */
    function finalState (payload) {
        console.log('Final.toJS()\t', payload);
        console.groupEnd('action');
    }
    for(var store in alt.stores) {
        alt.stores[store].listen(finalState)
    }

    ReactDOM.render(<Router history={createBrowserHistory()} children={routes} />, container);
}, iso_config);
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

Iso.bootstrap((state, _, container) => {
    alt.bootstrap(state);

    /* Debug - Final Dispatched Store's State */
    function finalState (payload) {
        console.log('Final.toJS()\t', payload.toJS());
        console.groupEnd('action');
    }
    for(var store in alt.stores) {
        alt.stores[store].listen(finalState)
    }

    ReactDOM.render(<Router history={createBrowserHistory()} children={routes} />, container);
});
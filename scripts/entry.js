/**
 * Created by dobyeongsu on 2015. 10. 15..
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory'

import { App } from './Containers'
import routes from '../universalRouter/routes'

export default class Entry extends Component {

    componentDidMount() {

    }

    render() {
        return(
            <App />
        )
    }
}

ReactDOM.render(
    <Router
        history={createBrowserHistory()}
        routes={routes}
    />,
document.getElementById('app'));
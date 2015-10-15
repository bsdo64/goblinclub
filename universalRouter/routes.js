/**
 * Created by dobyeongsu on 2015. 10. 15..
 */
import React from 'react';
import { Route } from 'react-router';
import {
    App,
    Inbox,
    About
} from '../scripts/Containers';

import {
    header,
    main,
    sidebar
} from '../scripts/components';

function routes () {

    return  (
        <Route component={App}>
            <Route path="/" components={{header: header, main: main, sidebar: sidebar}} />
            <Route path="/about" components={{header: header, main: About, sidebar: sidebar}} />
            <Route path="/login" components={{header: header, main: About, sidebar: sidebar}} />
            <Route path="/inbox" components={{header: header, main: Inbox, sidebar: sidebar}} />
        </Route>
    )
}

export default routes;
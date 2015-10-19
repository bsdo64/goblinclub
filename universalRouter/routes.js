/**
 * Created by dobyeongsu on 2015. 10. 15..
 */
import React from 'react';
import _ from 'lodash';
import { Route } from 'react-router';
import {
    App,
    Inbox,
    About,
    User
} from '../scripts/Containers';

import {
    header,
    main,
    sidebar
} from '../scripts/components';

import alt from '../scripts/alt'

export default (
    <Route component={App}>
        <Route path="/" components={{header: header, main: main, sidebar: sidebar}} />
        <Route path="/about" components={{header: header, main: About, sidebar: sidebar}} />
        <Route path="/login" components={{header: header, main: About, sidebar: sidebar}} />
        <Route path="/user" components={{header: header, main: User, sidebar: sidebar}}/>
        <Route path="/inbox" components={{header: header, main: Inbox, sidebar: sidebar}} />
    </Route>
)
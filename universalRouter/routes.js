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

export default (
    <Route component={App}>
        <Route path="/" components={{header: header, main: main, sidebar: sidebar}} />

        <Route path="/login" components={{header: header, main: About, sidebar: sidebar}} />

        <Route path="/user" components={{header: header, main: User, sidebar: sidebar}}/>
        <Route path="/user/:id" components={{header: header, main: User, sidebar: sidebar}}/>
        <Route path="/user/:id/history" components={{header: header, main: User, sidebar: sidebar}}/>
        <Route path="/user/:id/clubs" components={{header: header, main: User, sidebar: sidebar}}/>
        <Route path="/user/:id/submitted" components={{header: header, main: User, sidebar: sidebar}}/>
        <Route path="/user/:id/commented" components={{header: header, main: User, sidebar: sidebar}}/>
        <Route path="/user/:id/liked" components={{header: header, main: User, sidebar: sidebar}}/>
        <Route path="/user/:id/dis_liked" components={{header: header, main: User, sidebar: sidebar}}/>
        <Route path="/user/:id/favorated" components={{header: header, main: User, sidebar: sidebar}}/>
        <Route path="/user/:id/saved" components={{header: header, main: User, sidebar: sidebar}}/>

        <Route path="/submit" components={{header: header, main: User, sidebar: sidebar}}/>
        <Route path="/submit/club" components={{header: header, main: User, sidebar: sidebar}}/>

        <Route path="/club" components={{header: header, main: User, sidebar: sidebar}}/>
        <Route path="/club/:clubName" components={{header: header, main: User, sidebar: sidebar}}/>
        <Route path="/club/:clubName/submit" components={{header: header, main: User, sidebar: sidebar}}/>
        <Route path="/club/:clubName/search" components={{header: header, main: User, sidebar: sidebar}}/>
        <Route path="/club/:clubName/:article" components={{header: header, main: User, sidebar: sidebar}}/>
        <Route path="/club/:clubName/:article/comments" components={{header: header, main: User, sidebar: sidebar}}/>
        <Route path="/club/:clubName/:article/comments/:comment" components={{header: header, main: User, sidebar: sidebar}}/>

        <Route path="/user/:id/multiclub/:name" components={{header: header, main: User, sidebar: sidebar}}/>
        <Route path="/user/:id/multiclub/:name/search" components={{header: header, main: User, sidebar: sidebar}}/>

        <Route path="/search" components={{header: header, main: User, sidebar: sidebar}}/>

        <Route path="/inbox" components={{header: header, main: Inbox, sidebar: sidebar}} />
        <Route path="/about" components={{header: header, main: About, sidebar: sidebar}} />
    </Route>
)
/**
 * Created by dobyeongsu on 2015. 10. 15..
 */
import React from 'react';
import _ from 'lodash';
import { Route, IndexRoute } from 'react-router';
import {
    App,
    Inbox,
    About,
    User
} from '../scripts/Containers';

import {
    header,
    main,
    sidebar,
    writePost
} from '../scripts/components';

import best from '../scripts/components/main/piece/best';
import club from '../scripts/components/main/piece/club';
import post from '../scripts/components/main/piece/post';

export default (
    <Route component={App}>
        <Route path='' components={{header: header, main: main, sidebar: sidebar}}>
                <Route path="/" components={{mainSection: best}} />
                <Route path="submit" components={{mainSection: writePost}} />

                <Route path="club/:clubName" components={{mainSection:club}} />
                <Route path="club/:clubName/submit" components={{mainSection: writePost}} />
                <Route path="club/:clubName/search" components={{mainSection: writePost}}/>
                <Route path="club/:clubName/:article" components={{mainSection:post}} />
        </Route>

        <Route path="/login" components={{header: header, main: About, sidebar: sidebar}} />
        <Route path="/signin" components={{header: header, main: About, sidebar: sidebar}} />
        <Route path="/needEmailCode" components={{header: header, main: About, sidebar: sidebar}} />

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

        <Route path="/submit/club" components={{header: header, main: User, sidebar: sidebar}}/>
        <Route path="club" components={{header: header, main: main, sidebar: sidebar}} />

        <Route path="/club/:clubName/:article/comments" components={{header: header, main: User, sidebar: sidebar}}/>
        <Route path="/club/:clubName/:article/comments/:comment" components={{header: header, main: User, sidebar: sidebar}}/>

        <Route path="/user/:id/multiclub/:name" components={{header: header, main: User, sidebar: sidebar}}/>
        <Route path="/user/:id/multiclub/:name/search" components={{header: header, main: User, sidebar: sidebar}}/>

        <Route path="/search" components={{header: header, main: User, sidebar: sidebar}}/>

        <Route path="/inbox" components={{header: header, main: Inbox, sidebar: sidebar}} />
        <Route path="/about" components={{header: header, main: About, sidebar: sidebar}} />
    </Route>
)
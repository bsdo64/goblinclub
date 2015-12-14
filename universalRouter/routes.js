/**
 * Created by dobyeongsu on 2015. 10. 15..
 */
import React from 'react';
import _ from 'lodash';
import { Router, Route, IndexRoute } from 'react-router';

import {
  App,
  Header,
  Main,
  Best,
  Club,
  Post,
  WritePost,
  Sidebar
} from '../scripts/Containers/index';


export default (
  <Router>
    <Route path='' component={App}>
      <Route path='/' components={{header: Header, main: Main, sidebar: Sidebar}}>
        <IndexRoute components={{mainSection: Best}}/>
        <Route path="submit" components={{mainSection: WritePost}}/>

        <Route path="club/:clubName" components={{mainSection: Club}}/>
        <Route path="club/:clubName/submit" components={{mainSection: WritePost}}/>
        <Route path="club/:clubName/search" components={{mainSection: WritePost}}/>
        <Route path="club/:clubName/:article" components={{mainSection: Post}}/>
      </Route>
    </Route>

    <Route path="/login" component={App}>
      <IndexRoute components={{header: Header, main: Main, sidebar: Sidebar}}/>
    </Route>

    <Route path="/signin" components={{header: Header, main: Main, sidebar: Sidebar}}/>
    <Route path="/needEmailCode" components={{header: Header, main: Main, sidebar: Sidebar}}/>

    <Route path="/user" components={{header: Header, main: Main, sidebar: Sidebar}}/>
    <Route path="/user/:id" components={{header: Header, main: Main, sidebar: Sidebar}}/>
    <Route path="/user/:id/history" components={{header: Header, main: Main, sidebar: Sidebar}}/>
    <Route path="/user/:id/clubs" components={{header: Header, main: Main, sidebar: Sidebar}}/>
    <Route path="/user/:id/submitted" components={{header: Header, main: Main, sidebar: Sidebar}}/>
    <Route path="/user/:id/commented" components={{header: Header, main: Main, sidebar: Sidebar}}/>
    <Route path="/user/:id/liked" components={{header: Header, main: Main, sidebar: Sidebar}}/>
    <Route path="/user/:id/dis_liked" components={{header: Header, main: Main, sidebar: Sidebar}}/>
    <Route path="/user/:id/favorated" components={{header: Header, main: Main, sidebar: Sidebar}}/>
    <Route path="/user/:id/saved" components={{header: Header, main: Main, sidebar: Sidebar}}/>

    <Route path="/submit/club" components={{header: Header, main: Main, sidebar: Sidebar}}/>
    <Route path="club" components={{header: Header, main: Main, sidebar: Sidebar}}/>

    <Route path="/club/:clubName/:article/comments" components={{header: Header, main: Main, sidebar: Sidebar}}/>
    <Route path="/club/:clubName/:article/comments/:comment"
           components={{header: Header, main: Main, sidebar: Sidebar}}/>

    <Route path="/user/:id/multiclub/:name" components={{header: Header, main: Main, sidebar: Sidebar}}/>
    <Route path="/user/:id/multiclub/:name/search" components={{header: Header, main: Main, sidebar: Sidebar}}/>

    <Route path="/search" components={{header: Header, main: Main, sidebar: Sidebar}}/>
  </Router>
)
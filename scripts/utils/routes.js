/**
 * Created by dobyeongsu on 2015. 10. 15..
 */
import React from 'react';
import _ from 'lodash';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import {
  App,
  Header,
  Main,
  Best,
  Club,
  Post,
  Login,
  WritePost,
  WriteClub,
  NotFound,
  Sidebar
} from '../React/Container/index';


export default (
  <Router history={browserHistory}>
    <Route path='' component={App}>
      <Route path='/' components={{header: Header, main: Main, sidebar: Sidebar}}>
        <IndexRoute components={{mainSection: Best}}/>
        <Route path="submit" components={{mainSection: WritePost}}/>
        <Route path="submit/club" components={{mainSection: WriteClub}}/>

        <Route path="login" components={{mainSection: Login}}/>
        <Route path="login/emailverify" components={{mainSection: Login}}/>

        <Route path="club/:clubName" components={{mainSection: Club}}/>
        <Route path="club/:clubName/submit" components={{mainSection: WritePost}}/>
        <Route path="club/:clubName/search" components={{mainSection: WritePost}}/>
        <Route path="club/:clubName/:article" components={{mainSection: Post}}/>
      </Route>
    </Route>

    <Route path='/notFound' components={App}>
      <IndexRoute components={{header: Header, main: NotFound, sidebar: Sidebar}}/>
    </Route>

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

    <Route path="club" components={{header: Header, main: Main, sidebar: Sidebar}}/>

    <Route path="/club/:clubName/:article/comments" components={{header: Header, main: Main, sidebar: Sidebar}}/>
    <Route path="/club/:clubName/:article/comments/:comment"
           components={{header: Header, main: Main, sidebar: Sidebar}}/>

    <Route path="/user/:id/multiclub/:name" components={{header: Header, main: Main, sidebar: Sidebar}}/>
    <Route path="/user/:id/multiclub/:name/search" components={{header: Header, main: Main, sidebar: Sidebar}}/>

    <Route path="/search" components={{header: Header, main: Main, sidebar: Sidebar}}/>

    <Route path="*" component={App}>
      <IndexRoute components={{header: Header, main: NotFound, sidebar: Sidebar}}/>
    </Route>
  </Router>
)
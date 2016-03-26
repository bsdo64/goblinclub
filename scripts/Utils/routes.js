/**
 * Created by dobyeongsu on 2015. 10. 15..
 */
import React from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import App from './../Components/App/App';
import Main from './../Components/MainSection/Main';

// Layout
import DefaultLayout from './../Components/Layout/Default';
import Container from './../Components/Layout/Container';

// Injecters
import Header from './../Components/MainHeader/Header';
import Best from './../Components/PostsOfBest/Best';
import Club from './../Components/PostsByClub/Club';
import Post from './../Components/PostPage/Post';
import Login from './../Components/Login/Login';
import WritePost from './../Components/PostEditor/WritePost';
import WriteClub from './../Components/ClubEditor/WriteClub';
import NotFound from './../Components/NotFound/NotFound';
import Sidebar from './../Components/SidebarClubList/Sidebar';

import SigninLeft from './../Components/LeftMenu/Signin/SigninLeft';
import MainLeft from './../Components/LeftMenu/Main/MainLeft';
import ClubLeft from '../Components/LeftMenu/Club/ClubLeft';

import DefaultSection from '../Components/Sections/DefaultSection';

import SigninSection from '../Components/Sections/Signin/Signin';
import BestSection from '../Components/Sections/Best/BestSections';
import ClubMainSection from '../Components/Sections/Club/MainSections';
import ClubSection from '../Components/Sections/Club/ClubSections';

import PostSection from '../Components/Sections/Post/Post';

export default (
  <Router history={browserHistory}>
    <Route path="" component={DefaultLayout}>
      <Route path="/" components={{Header: Header, Container: Container}}>

        <Route components={{LeftMenu: MainLeft, SectionLayout: DefaultSection}}>
          <IndexRoute components={{Section: BestSection}} />
        </Route>

        <Route path="signin" components={{LeftMenu: SigninLeft, SectionLayout: DefaultSection}}>
          <IndexRoute components={{Section: SigninSection}}/>
        </Route>
        
        <Route path="club" components={{LeftMenu: ClubLeft, SectionLayout: DefaultSection}} >
          <IndexRoute components={{Section: ClubMainSection}}/>
          <Route path=":clubUrl" components={{Section: ClubSection}} />
          <Route path=":clubUrl/:postId" components={{Section: PostSection}} />
        </Route>

        <Route path="submit" components={{LeftMenu: ClubLeft, SectionLayout: DefaultSection}}>
          <Route path=":clubUrl" />
        </Route>
      </Route>
    </Route>
    <Route path="" component={App}>

      <Route path="/" components={{header: Header, main: Main, sidebar: Sidebar}}>
        <IndexRoute components={{mainSection: Best}}/>
        <Route path="submit" components={{mainSection: WritePost}}/>
        <Route path="submit/club" components={{mainSection: WriteClub}}/>

        <Route path="login" components={{mainSection: Login}}/>
        <Route path="login/emailverify" components={{mainSection: Login}}/>


        <Route path="club/:clubName/submit" components={{mainSection: WritePost}}/>
        <Route path="club/:clubName/search" components={{mainSection: WritePost}}/>
        <Route path="club/:clubName/:article" components={{mainSection: Post}}/>

      </Route>

    </Route>

    <Route path="/notFound" components={App}>
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

    <Route path="/club/:clubName/:article/comments"
           components={{header: Header, main: Main, sidebar: Sidebar}}/>
    <Route path="/club/:clubName/:article/comments/:comment"
           components={{header: Header, main: Main, sidebar: Sidebar}}/>

    <Route path="/user/:id/multiclub/:name"
           components={{header: Header, main: Main, sidebar: Sidebar}}/>
    <Route path="/user/:id/multiclub/:name/search"
           components={{header: Header, main: Main, sidebar: Sidebar}}/>

    <Route path="/search" components={{header: Header, main: Main, sidebar: Sidebar}}/>

    <Route path="*" component={App}>
      <IndexRoute components={{header: Header, main: NotFound, sidebar: Sidebar}}/>
    </Route>
  </Router>
);

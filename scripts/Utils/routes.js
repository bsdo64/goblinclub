/**
 * Created by dobyeongsu on 2015. 10. 15..
 */
import React from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import Main from './../Components/MainSection/Main';

// Layout
import Default from './../Components/Layout/Default';
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
import ProfileLeft from '../Components/LeftMenu/Profile/ProfileLeft';

import DefaultSection from '../Components/Sections/DefaultSection';

import SigninSection from '../Components/Sections/Signin/Signin';
import BestSection from '../Components/Sections/Best/BestSections';
import ClubMainSection from '../Components/Sections/Club/MainSections';
import ClubSection from '../Components/Sections/Club/ClubSections';
import SubmitSection from '../Components/Sections/Submit/Submit';

import PostSection from '../Components/Sections/Post/Post';
import ProfileSection from '../Components/Sections/Profile/Profile';

import DefaultLayout from './../Layout/Default/index';
import HeaderLayout from './../Layout/Default/HeaderLayout';
import ContainerLayout from './../Layout/Default/ContainerLayout';
import LeftMenuLayout from './../Layout/Default/LeftMenuLayout';
import SectionLayout from './../Layout/Default/SectionLayout';

import RightMenuLayout from './../Layout/Default/RightMenuLayout';

const routes = [{
  LeftMenuLayout: 'Default',
  SectionLayout: 'Default',
  child: [
    {index: { Contents: 'Best', RightMenuLayout: 'Default' }}
  ]
}, {
  path: 'signin',
  LeftMenuLayout: 'Default',
  SectionLayout: 'Default',
  child: [
    {index: { Contents: 'Signin', RightMenuLayout: 'Default' }}
  ]
}, {
  path: 'club',
  LeftMenuLayout: 'Default',
  SectionLayout: 'Default',
  child: [
    {index: { Contents: 'Club', RightMenuLayout: 'Default' }},
    {route: { path: ':clubUrl', Contents: 'Club', RightMenuLayout: 'Default' }},
    {route: { path: ':clubUrl/submit', Contents: 'Submit', RightMenuLayout: 'Default' }},
    {route: { path: ':clubUrl/:postId', Contents: 'Post', RightMenuLayout: 'Default' }}
  ]
}];

function routeLayout(route) {
  let LeftMenuLayout, SectionLayout, Contents, RightMenuLayout;

  if (route.LeftMenuLayout) {
    LeftMenuLayout = require('./../Layout/' + route.LeftMenuLayout + '/LeftMenuLayout');
  }
  if (route.SectionLayout) {
    SectionLayout = require('./../Layout/' + route.SectionLayout + '/SectionLayout');
  }
  if (route.Contents) {
    Contents = require('./../Layout/' + route.Contents + '/Contents');
  }
  if (route.RightMenuLayout) {
    RightMenuLayout = require('./../Layout/' + route.RightMenuLayout + '/RightMenuLayout');
  }
  return (
    <Route path={path} components={null} />
  )
}

export default (
  <Router history={browserHistory}>
    <Route path="" component={DefaultLayout}>
      <Route path="/" components={{HeaderLayout: HeaderLayout, ContainerLayout: ContainerLayout}}>
        
        <Route components={{LeftMenuLayout: LeftMenuLayout, SectionLayout: SectionLayout}}>
        <IndexRoute components={{Contents: BestSection, RightMenuLayout: RightMenuLayout}} />
      </Route>

        <Route path="signin" components={{LeftMenuLayout: LeftMenuLayout, SectionLayout: SectionLayout}} >
          <IndexRoute components={{Contents: SigninSection, RightMenuLayout: RightMenuLayout}}/>
        </Route>

        <Route path="club" components={{LeftMenuLayout: LeftMenuLayout, SectionLayout: SectionLayout}} >
          <IndexRoute components={{Contents: ClubSection, RightMenuLayout: RightMenuLayout}}/>
          <Route path=":clubUrl" components={{Contents: ClubSection, RightMenuLayout: RightMenuLayout}} />
          <Route path=":clubUrl/submit" components={{Contents: SubmitSection, RightMenuLayout: RightMenuLayout}} />
          <Route path=":clubUrl/:postId" components={{Contents: PostSection, RightMenuLayout: RightMenuLayout}} />
        </Route>

      </Route>
    </Route>
    
    <Route path="" component={Default}>
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
          <Route path=":clubUrl/submit" components={{Section: SubmitSection}} />
          <Route path=":clubUrl/:postId" components={{Section: PostSection}} />
        </Route>

        <Route path="profile" components={{LeftMenu: ProfileLeft, SectionLayout: DefaultSection}} >
          <IndexRoute components={{Section: ProfileSection}}/>
        </Route>

        <Route path="community" components={{LeftMenu: ProfileLeft, SectionLayout: DefaultSection}} >
          <IndexRoute components={{Section: ProfileSection}}/>
        </Route>
        
      </Route>
    </Route>

    <Route path="" component={Default}>
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

    <Route path="/notFound" components={DefaultLayout}>
      <IndexRoute components={{header: Header, main: NotFound, sidebar: Sidebar}}/>
    </Route>

    <Route path="*" component={DefaultLayout}>
      <IndexRoute components={{header: Header, main: NotFound, sidebar: Sidebar}}/>
    </Route>
  </Router>
);

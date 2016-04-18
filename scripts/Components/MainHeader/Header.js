/**
 * Created by dobyeongsu on 2015. 10. 15..
 */
import React from 'react';
import {Link} from 'react-router';
import {Navbar} from 'react-bootstrap';

import connectToStores from '../../../node_modules/alt-utils/lib/connectToStores';
import UserStore from '../../Flux/Stores/UserStore';
import LoginStore from './LoginStore';
import LoginActions from './LoginActions';
import UserActions from '../../Flux/Actions/UserActions';

import HeaderLogo from './HeaderLogo';
import HeaderLoginButton from './HeaderLoginButton';
import HeaderUserButtons from './HeaderUserButtons';
import SearchBar from './HeaderSearchBar';
import styles from './HeaderStyle';

import LoginModalBox from './LoginModalBox';

if (process.env.BROWSER) {
  // require('./header.scss');
  require('./gnb.scss');
  require('./loginModal.scss');
}

let LoginButton = React.createClass({
  displayName: 'LoginButton',
  handleOpenLoginModal() {
    LoginActions.openLoginModal();
  },
  render() {
    return (
      <div className="item">
        <div className="ui mini button green"
             style={{padding: '5px 10px', borderRadius: '2px', backgroundColor: '#154945'}}
             onClick={this.handleOpenLoginModal} >
          {'로그인'}
        </div>
      </div>
    );
  }
});

let Header = React.createClass({
  displayName: 'Header',
  propTypes: {
    UserStore: React.PropTypes.shape({
      authSuccess: React.PropTypes.boolean
    })
  },
  statics: {
    getStores() {
      // this will handle the listening/unlistening for you
      return [UserStore, LoginStore];
    },

    getPropsFromStores() {
      // this is the data that gets passed down as props
      return {
        UserStore: UserStore.getState(),
        LoginStore: LoginStore.getState()
      };
    }
  },
  componentDidMount() {
    $('#profile_id_button')
      .popup({
        popup : $('#profile_popup'),
        position : 'bottom right',
        on    : 'click'
      });

    $('.large.alarm.icon')
      .popup({
        popup : $('#alarm_popup'),
        position : 'bottom right',
        on    : 'click'
      });
  },
  handleToggleAlarmPopup() {
    $('.large.alarm.icon').popup({ popup : $('#alarm_popup') }).popup('toggle');
  },
  handleToggleProfilePopup() {
    $('#profile_id_button').popup({ popup : $('#profile_popup') }).popup('toggle');
  },
  handleLogout() {
    UserActions.requestLogout();
  },

  handleSubmit() {
    console.log('Hello world handleSubmit');
    $(this.refs.loginform).form('validate form');
  },
  render() {
    const {logout, login, user} = this.props.UserStore;

    if (logout) {
      location.href = '/';
    }

    let loginButton,
        userButtons;

    if (!login) {
      loginButton = <LoginButton
        LoginStore={this.props.LoginStore}
        handleSubmit={this.handleSubmit}
      />;
    } else {
      userButtons = [
        <div className="item gnb_my_namebox">
          {
            !user.UserProfile.avatar_img &&
            <img className="gnb_my ui avatar image" src="/statics/img/default-male.png"/>
          }
          <a id="profile_id_button" className="text" >닉네임</a>
          <div id="profile_popup" className="ui popup">
            <div className="ui vertical menu secondary">
              <a className="active item">내 프로필</a>
              <a className="item">내 활동</a>
              <a className="item">도움말</a>
              <div className="ui divider"></div>
              <a href="http://www.google.com" className="item">
                설정
              </a>
              <a className="item" onClick={this.handleLogout}>
                로그아웃
              </a>
            </div>
          </div>
        </div>,

        <div className="item">
          <i className="large alarm icon" />
          <div id="alarm_popup" className="ui segment popup"  style={{width: 250}}>
            <div className="ui feed ">
              <div className="event">
                <div className="label">
                  <img src="http://dummyimage.com/40x40" />
                </div>
                <div className="content">
                  <div className="summary">
                    You added <a>Jenny Hess</a> to your <a>coworker</a> group.
                    <div className="date">
                      3 days ago
                    </div>
                  </div>
                </div>
              </div>
              <div className="event">
                <div className="label">
                  <img src="http://dummyimage.com/40x40" />
                </div>
                <div className="content">
                  <div className="summary">
                    You added <a>Jenny Hess</a> to your <a>coworker</a> group.
                    <div className="date">
                      3 days ago
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      ];
    }

    return (
      <div id="header">
        <div className="head_contents">
          <div className="top_area">
            <div className="top_contents">
              <h2 className="top_logo">
                <span className="logo_ci">
                  <a href="/" className="">Goblin Club</a>
                </span>
              </h2>

              <div className="top_menu">
                <div className="ui input fluid small">
                  <input type="text" placeholder="여기에 검색.." />
                    <div className="results"></div>
                </div>
              </div>

              <div className="my_area">
                <div id="gnb" className="gnb_dark_type2" style={{right: '20px'}}>
                  <div className="ui horizontal list" style={{color: '#fff'}}>

                    {
                      !login &&
                      <LoginButton
                        LoginStore={this.props.LoginStore}
                        handleSubmit={this.handleSubmit}
                      />
                    }

                    { userButtons }

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

export default connectToStores(Header);

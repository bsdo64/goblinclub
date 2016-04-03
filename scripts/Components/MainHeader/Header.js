/**
 * Created by dobyeongsu on 2015. 10. 15..
 */
import React from 'react';
import Radium, {Style} from 'radium';
import {Link} from 'react-router';
import {Navbar} from 'react-bootstrap';

import connectToStores from '../../../node_modules/alt-utils/lib/connectToStores';
import UserStore from '../../Flux/Stores/UserStore';
import AppStore from '../App/AppStore';

import HeaderLogo from './HeaderLogo';
import HeaderLoginButton from './HeaderLoginButton';
import HeaderUserButtons from './HeaderUserButtons';
import SearchBar from './HeaderSearchBar';
import LoginModal from '../Login/LoginModal';
import styles from './HeaderStyle';

if (process.env.BROWSER) {
  require('./header.scss');
  require('./gnb.scss');
  require('./loginModal.scss');
}

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
      return [UserStore, AppStore];
    },

    getPropsFromStores() {
      // this is the data that gets passed down as props
      return {
        UserStore: UserStore.getState(),
        AppStore: AppStore.getState()
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
  handleOpenLoginModal() {
    $('.ui.small.modal').modal('setting', {
      detachable: true,
      duration:	400
    }).modal('show');
  },
  render() {
    const {authSuccess, auth} = this.props.UserStore;
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
                <div className="ui search">
                  <input className="prompt" type="text" placeholder="Common passwords..." />
                    <div className="results"></div>
                </div>
              </div>

              <div className="my_area">
                <div id="gnb" className="gnb_dark_type2" style={{right: '20px'}}>
                  <div className="ui horizontal list" style={{color: '#fff'}}>
                    <div className="item">
                      <div className="ui mini button green"
                           style={{padding: '5px 10px', borderRadius: '2px', backgroundColor: '#154945'}}
                           onClick={this.handleOpenLoginModal}>
                        로그인
                      </div>

                      {/* Modal */}
                      <div className="ui small modal gb_login">
                        <i className="close icon"></i>
                        <div className="content">

                          <div id="daumHead" role="banner">
                            <h1>
                              <a href="/" id="daumServiceLogo"><span
                                className="ir_wa">Goblin Club</span></a>
                            </h1>
                          </div>

                          <div id="daumContent" role="main">
                            <div id="mArticle">
                              <form className="ui form">
                                <div className="field">
                                  <label>아이디</label>
                                  <input type="text" name="first-name" placeholder="아이디" />
                                </div>
                                <div className="field">
                                  <label>비밀번호</label>
                                  <input type="password" name="last-name" placeholder="비밀번호"/>
                                </div>
                                <div className="inline field">
                                  <div className="ui checkbox">
                                    <input type="checkbox" id="agreement-checkbox" />
                                    <label htmlFor="agreement-checkbox">약관에 동의하고 가입합니다</label>
                                  </div>
                                </div>
                                <button className="ui primary button fluid" type="submit">로그인</button>
                                <div className="login_append">
                                  <a href="/member/find/loginId" className="link_find">아이디</a>
                                  <span> / </span>
                                  <a href="/member/find/password" className="link_find">비밀번호찾기</a>
                                  <span className="txt_bar">|</span>
                                  <Link to="/signin" className="ico_comm link_join">회원 가입하기</Link>
                                </div>
                              </form>
                            </div>
                            <div id="daumFoot" className="footer_tistory" role="contentinfo">
                              <div className="inner_footer">
                                <address className="txt_copyright">Copyright © <a
                                  href="http://www.kakaocorp.com/" className="link_daum">Kakao Corp.</a>
                                  All rights reserved.
                                </address>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>

                    <div className="item gnb_my_namebox">
                      <img className="gnb_my ui avatar image" src="http://placehold.it/40x40"/>
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
                            <a href="http://www.google.com" className="item">
                              로그아웃
                            </a>
                        </div>
                      </div>
                    </div>

                    <div className="item">
                      <i className="large alarm icon" />
                      <div id="alarm_popup" className="ui segment popup"  style={{width: 250}}>
                        <div className="ui feed ">
                          <div className="event">
                            <div className="label">
                              <img src="http://placehold.it/40x40" />
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
                              <img src="http://placehold.it/40x40" />
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

export default connectToStores(Radium(Header));

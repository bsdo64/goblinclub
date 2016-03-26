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
    $('.gnb_my_namebox .gnb_my')
      .popup({
        popup : $('.custom.popup'),
        on    : 'click'
      });
  },
  handleOpenPopup() {
    $('.gnb_my_namebox .gnb_my').popup({ popup : $('.custom.popup') }).popup('toggle');
  },
  clickHandler() {
    $('.ui.small.modal').modal('setting', {
      detachable: true,
      duration:	400
    }).modal('show');
  },
  render() {
    const {authSuccess, auth} = this.props.UserStore;
    return (
      <div id="header">
        <Style
          rules={styles.INLINE_STYLE['.loginModal']}
          scopeSelector=".loginModal" />
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
                           onClick={this.clickHandler}>
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
                                <button id="login-button" className="ui button" type="submit">로그인</button>
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
                      <div className="gnb_my content" >
                        <a className="" >닉네임</a>
                      </div>

                      <div className="gnb_my_lyr ui custom popup top left transition hidden" id="gnb_my_lyr">
                        <div className="gnb_my_content">
                          <div className="gnb_img_area"><span className="gnb_mask"></span><img src="http://static.naver.net/common/myarea/myInfo.gif" width="80" height="80" alt="" /><a href="http://me.naver.com/profile.nhn" className="gnb_change"><span className="blind">프로필 사진 변경</span></a></div>
                          <div className="gnb_txt_area"><p className="gnb_account"><span className="gnb_name" id="gnb_name2"><a className="gnb_nick" href="http://me.naver.com/profile.nhn">bsdo</a>님</span><a className="gnb_btn_login" href="https://nid.naver.com/nidlogin.logout?returl=http://me.naver.com" id="gnb_logout_button"><span className="gnb_bg"></span><span className="gnb_bdr"></span><span className="gnb_txt">로그아웃</span></a>
                          </p><a href="http://mail.naver.com" className="gnb_mail_address">bsdo@naver.com</a>
                            <ul className="gnb_edit_lst">
                              <li className="gnb_info"><a href="https://nid.naver.com/user2/help/myInfo.nhn?menu=home">내정보</a>
                              </li>
                              <li className="gnb_secure" id="gnb_secure_lnk"><a href="https://nid.naver.com/user2/help/myInfo.nhn?m=viewSecurity&amp;menu=security">보안설정</a>
                              </li>
                            </ul>
                            <p className="gnb_pay_check" id="gnb_pay_check"><em>N
                              Pay</em><a href="http://pay.naver.com" id="gnb_pay_point"><span>내 페이포인트</span></a>
                            </p>
                          </div>
                        </div>
                        <div className="gnb_my_community"><a href="http://blog.naver.com/MyBlog.nhn" className="gnb_blog">내 블로그</a><a href="http://section.cafe.naver.com" className="gnb_cafe">가입한 카페</a><a href="http://pay.naver.com" className="gnb_pay"><span>N Pay</span></a>
                        </div>
                        <a href="#" className="gnb_my_interface" style="display:none"><span className="blind">환경설정</span></a>
                      </div>
                    </div>

                    <div className="item">
                      <i className="large mail icon" />

                      <div className="gnb_notice_lyr transition hidden" id="gnb_notice_lyr">
                        <div className="svc_noti svc_panel">
                          <div className="svc_scroll">
                            <div className="svc_head"><strong className="gnb_tit">전체
                              알림</strong>
                              <div className="task_right">
                                <button onclick="gnbNaverMeLayer.deleteReadList(this, event);" id="gnb_btn_read_noti_del">읽은 알림 삭제
                                </button>
                                <button onclick="gnbNaverMeLayer.showDeleteAlert();" id="gnb_btn_all_noti_del">모두 삭제
                                </button>
                              </div>
                            </div>
                            <div className="svc_body" id="gnb_naverme_layer"></div>
                          </div>
                          <div className="gnb_ly_alert" id="gnb_ly_alert" style="display: none;"><p className="gnb_msg"><strong>알림을
                            모두 삭제하시겠습니까?</strong></p>
                            <div className="gnb_btns">
                              <button id="ly_alert_confirm" onclick="gnbNaverMeLayer.deleteAllList(this, event);">
                                확인
                              </button>
                              <button onclick="gnbNaverMeLayer.hideDeleteAlert();">
                                취소
                              </button>
                            </div>
                            <button className="gnb_btn_close" onclick="gnbNaverMeLayer.hideDeleteAlert();">
                              <i>레이어 닫기</i></button>
                          </div>
                          <a href="http://me.naver.com/box/noti.nhn" className="gnb_notice_all">내 알림 전체보기</a></div>
                      </div>
                    </div>


                    <div className="item">
                      <i className="large alarm icon"/>
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

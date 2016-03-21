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

import styles from './HeaderStyle';

if (process.env.BROWSER) {
  require('./header.scss');
  require('./gnb.scss');
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
                <div id="gnb" className="gnb_dark_type2" style="right: -72px">
                  <ul className="gnb_lst" id="gnb_lst" style="display: block;">
                    <li className="gnb_login_li" id="gnb_login_layer">
                      <a className="gnb_btn_login" id="gnb_login_button">
                        <span className="gnb_bg"></span>
                        <span className="gnb_bdr"></span>
                        <span className="gnb_txt">로그인</span>
                      </a>
                    </li>
                    <li className="gnb_my_li" id="gnb_my_layer" style="display: inline-block;">
                      <div className="gnb_my_namebox" id="gnb_my_namebox" style="background-image: url(&quot;http://static.naver.net/common/gnb/2014/ico_arrow_wh.gif&quot;);">
                        <Link to="/hello" className="gnb_my" onclick="gnbUserLayer.clickToggle(); return false;"><img id="gnb_profile_img" src="http://static.naver.net/common/myarea/myInfo.gif" width="26" height="26" alt="" style="display: inline-block;"/> <span className="gnb_name" id="gnb_name1">bsdo</span><em className="blind">내정보 보기</em><span className="ico_arrow"></span></Link><a href="#" className="gnb_emp" id="gnb_emp" style="display: none;">(임직원혜택)</a>
                      </div>
                      <div className="gnb_my_lyr" id="gnb_my_lyr">
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
                            </p></div>
                        </div>
                        <div className="gnb_my_community"><a href="http://blog.naver.com/MyBlog.nhn" className="gnb_blog">내 블로그</a><a href="http://section.cafe.naver.com" className="gnb_cafe">가입한 카페</a><a href="http://pay.naver.com" className="gnb_pay"><span>N Pay</span></a>
                        </div>
                        <a href="#" className="gnb_my_interface" style="display:none"><span className="blind">환경설정</span></a>
                      </div>
                    </li>
                    <li className="gnb_notice_li" id="gnb_notice_layer" style="display:none"><a href="javascript:;" className="gnb_notice" onclick="gnbNaverMeLayer.clickToggle(); return false;"><span className="blind">알림</span><span className="gnb_icon"></span><em className="gnb_ico_num" id="gnb_me_menu" style="display:none"><span className="gnb_ico_new"><span className="gnb_count" id="gnb_me_count" style="display: inline-block;"></span></span></em><span className="ico_arrow"></span></a>
                      <div className="gnb_notice_lyr" id="gnb_notice_lyr">
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
                    </li>
                    <li className="mail_li" id="gnb_mail_layer" style="display: inline-block;"><a href="http://mail.naver.com" className="gnb_mail"><span className="blind">메일</span><span className="gnb_icon"></span><em className="gnb_ico_num" id="gnb_mail_menu" style="display:none"><span className="gnb_ico_new"><span className="gnb_count" id="gnb_mail_count" style="display: inline-block;"></span></span></em></a>
                    </li>
                  </ul>
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

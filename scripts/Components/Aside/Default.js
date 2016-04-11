/**
 * Created by dobyeongsu on 2016. 3. 23..
 */
import React from 'react';
import {Link} from 'react-router';

import connectToStores from 'alt-utils/lib/connectToStores';
import UserStore from '../../Flux/Stores/UserStore';
import LoginStore from '../MainHeader/LoginStore';
import _ from 'lodash';
import moment from 'moment';
moment.locale('ko');

if (process.env.BROWSER) {
  require('./Default.scss');
}

const Aside = React.createClass({
  displayName: 'Aside',
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
  render() {
    const { login, user } = this.props.UserStore;

    let avatarImg;
    if ( user && user.UserProfile ) {
      const { sex, avatar_img } = user.UserProfile;
      if (avatar_img) {
        avatarImg = <img src={'/image/files/' + avatar_img + '.png'} />;
      } else {
        if (sex) {
          avatarImg = <img src="/statics/img/default-male.png" />;
        } else {
          avatarImg = <img src="/statics/img/default-female.png" />;
        }
      }
    }

    _.reduce(user, (result, value, key) => {
      if (value.joined_at) {
        value.joined_at = moment(value.joined_at, moment.ISO_8601).format('YYYY-MM-DD');
      }
      if (value.created_at) {
        value.created_at = moment(value.created_at, moment.ISO_8601).format('YYYY-MM-DD');
      }
      if (value.updated_at) {
        value.updated_at = moment(value.updated_at, moment.ISO_8601).format('YYYY-MM-DD');
      }
      result[key] = value;
      return result;
    }, {});

    return (
      <div className="aside">
        <div className="widget_area _widget_area">
          <div className="ui menu secondary three item list dir_svc" style={{marginBottom: 10}}>
            <a href="/" className="item active">
              베스트
              <div className="floating ui teal mini label" style={{zIndex: 'inherit'}}>22</div>
            </a>
            <a href="/club" className="item">
              클럽
            </a>
            {
              login &&
              <a href="/profile" className="item">
                내 정보
              </a>
            }
          </div>

          <div id="section_cldmm">

            {
              !login &&
              <div id="section_signin" className="section_signin widget">
                <Link to="signin" className="ui submit primary button fluid small">
                  지금 가입하세요!
                </Link>
              </div>
            }

            <div id="section_info" className="widget">
              {
                login && user &&
                <div id="widget_user_info" className="ui cards">
                  <div className="card">
                    <div className="content userinfo_header" >
                      <div className="ui description" >회원 정보</div>
                    </div>
                    <div className="content">
                      <div className="ui items">
                        <div className="ui item">
                          <a className="ui tiny image">
                            { avatarImg }
                          </a>
                          <div className="content">
                            <a className="header">{user.nick}</a>
                            <div className="description">
                              <div className="item">
                                랭크 :
                                <div className="ui right floated bold"><b>{user.UserGrade.Grade.name}</b></div>
                              </div>
                              <div className="item">
                                명성 :
                                <div className="ui right floated">{user.UserReputation.amount + ' R'}</div>
                              </div>
                              <div className="item">
                                활동점수 :
                                <div className="ui right floated">{user.UserPoint.amount + ' P'}</div>
                              </div>
                              <div className="item">
                                가입일:
                                <div className="ui right floated">{user.UserProfile.joined_at}</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              }
            </div>

            <div className="notice_ftr">
              <ul>
                <li><a href="#" className="" onclick="openNoticeList(); return false;">공지사항</a><span id="newNoticeIcon" className="ico_new"><span className="blind">New</span></span></li>
                <li><a target="_blank" href="https://help.naver.com/support/service/main.nhn?serviceNo=984" className="">고객센터</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

export default connectToStores(Aside);

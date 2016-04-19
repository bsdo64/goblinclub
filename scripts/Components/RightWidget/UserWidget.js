import React from "react";
import _ from "lodash";
import moment from "moment";
import {Link} from 'react-router';

if (process.env.BROWSER) {
  require('./UserWidget.scss');
}

const UserWidget = React.createClass({
  displayName: 'UserWidget',
  render() {
    const { login, user } = this.props.UserStore.toJSON();

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
      <div id="section_cldmm" >

        {
          !login &&
          <div className="login_bar widget">
            <Link to="/signin"><button className="ui primary button">지금 가입하세요</button></Link>
          </div>
        }

        <div id="section_info" className="widget">
          {
            login && user &&
            <div id="widget_user_info" className="ui cards">
              <div className="card">
                <div className="content userinfo_header" >
                  <div className="ui description" >{user.nick}</div>
                  {' 의 트랜드박스'}
                </div>
                <div className="content">
                  <div className="ui items">
                    <div className="ui item">
                      <a className="ui tiny image">
                        { avatarImg }
                      </a>
                      <div className="content">
                        <div className="description">
                          <div className="item">
                            랭크 :
                            <div className="ui right floated bold"><b>{user.UserGrade.Grade.name}</b></div>
                          </div>
                          <div className="item">
                            명성 :
                            <div className="ui right floated point_color">{user.UserReputation.amount + ' R'}</div>
                          </div>
                          <div className="item">
                            활동점수 :
                            <div className="ui right floated point_color">{user.UserPoint.amount + ' P'}</div>
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
      </div>
    )
  }
});

export default UserWidget;
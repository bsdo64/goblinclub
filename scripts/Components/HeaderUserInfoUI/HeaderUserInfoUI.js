import React, {Component} from 'react';

import LoginActions from '../../Flux/Actions/LoginActions';

export default class HeaderUserUI extends Component {
  static displayName() {
    return 'HeaderUserUI';
  }
  constructor(props) {
    super();

    this.handleOpenLoginModal = this.handleOpenLoginModal.bind(this);
  }
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
  }
  handleToggleAlarmPopup() {
    $('.large.alarm.icon').popup({ popup : $('#alarm_popup') }).popup('toggle');
  }
  handleToggleProfilePopup() {
    $('#profile_id_button').popup({ popup : $('#profile_popup') }).popup('toggle');
  }
  handleLogout() {
    UserActions.requestLogout();
  }

  handleSubmit() {
    console.log('Hello world handleSubmit');
    $(this.refs.loginform).form('validate form');
  }

  handleOpenLoginModal() {
    LoginActions.openLoginModal();
  }

  render() {

    const {logout, login, user} = this.props.UserStore;

    if (logout) {
      location.href = '/';
    }

    let loginButton,
      userButtons;

    if (login) {
      userButtons = [
        <div className="item gnb_my_namebox" key="1">
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

        <div className="item" key="2">
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
      <div className="my_area">
        <div className="ui horizontal list">

          {
            !login &&
            <div className="item">
              <div className="ui mini button blue"
                   onClick={this.handleOpenLoginModal} >
                {'로그인'}
              </div>
            </div>
          }

          { userButtons }

        </div>
      </div>
    );
  }
}

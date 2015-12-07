/**
 * Created by dobyeongsu on 2015. 10. 15..
 */
import React from 'react';
import {Tab, Tabs} from 'react-bootstrap';

import connectToStores from 'alt/utils/connectToStores';
import UserStore from '../../Stores/UserStore';
import UserActions from '../../Actions/UserActions';

let AuthForm = React.createClass({
  displayName: 'AuthForm',
  propTypes: {
    UserStore: React.PropTypes.shape({
      loadingAuth: React.PropTypes.bool,
      authFail: React.PropTypes.bool,
      loadedAuth: React.PropTypes.bool,
      uiValidate: React.PropTypes.array,
      serverValidate: React.PropTypes.bool
    })
  },
  getInitialState: function () {
    return {
      open: false
    };
  },
  _sendLoginRequest(e) {
    e.preventDefault();
    let loginUser = {
      email: this.refs.loginEmail.value.trim(),
      password: this.refs.loginPassword.value.trim()
    };
    UserActions.loginUser(loginUser);
  },

  _sendSigninRequest(e) {
    e.preventDefault();
    let signinUser = {
      signinEmail: this.refs.signinEmail.value.trim(),
      signinNick: this.refs.signinNick.value.trim(),
      signinPassword: this.refs.signinPassword.value.trim(),
      signinPasswordCheck: this.refs.signinPasswordCheck.value.trim()
    };
    UserActions.signinUser(signinUser);
  },
  render() {
    const {loadingAuth, authFail, loadedAuth, uiValidate, serverValidate} = this.props.UserStore;

    let errorMessage = {
      email: null,
      password: null
    };

    if (loadedAuth && authFail && uiValidate) {
      let count = 0;
      let createItem = function (itemText, index) {
        count = count + 1;
        return <li key={index + count}>{itemText}</li>;
      };

      switch (uiValidate.type) {
      case 'loginUser':
        errorMessage.email = <ul>{uiValidate.errors.email.map(createItem)}</ul>;
        errorMessage.password = <ul>{uiValidate.errors.password.map(createItem)}</ul>;
        break;
      case 'signinUser':
        errorMessage.email = <ul>{uiValidate.errors.email.map(createItem)}</ul>;
        errorMessage.password = <ul>{uiValidate.errors.password.map(createItem)}</ul>;
        errorMessage.nick = <ul>{uiValidate.errors.nick.map(createItem)}</ul>;
        break;
      default:
        break;
      }
    }

    if (loadedAuth && authFail && serverValidate) {
      let count = 0;
      let createItem = function (itemText, index) {
        return <li key={index + count++}>{itemText.message}</li>;
      };
      switch (serverValidate.type) {
      case 'loginUser':
        for (let prop in serverValidate.fields) {
          if (serverValidate.fields.hasOwnProperty(prop)) {
            errorMessage[prop] = <ul>{serverValidate.errors.map(createItem)}</ul>;
          }
        }
        break;
      case 'signinUser':
        for (let prop in serverValidate.fields) {
          if (serverValidate.fields.hasOwnProperty(prop)) {
            errorMessage[prop] = <ul>{serverValidate.errors.map(createItem)}</ul>;
          }
        }
        break;
      default:
        break;
      }
    }

    return (
      <div >
        <Tabs defaultActiveKey={2} position="left"
              tabWidth={3}>
          <Tab eventKey={1} title="로그인">
            <form className="form" id="formLogin" onSubmit={this._sendLoginRequest}>
              <div className="form-element email-address" id="gmail-address-form-element">
                <label id="gmail-address-label">
                  {'아이디'}
                  <input id="loginEmail" name="loginEmail"
                         ref="loginEmail" type="text" />
                </label>
              </div>
              {
                authFail &&
                errorMessage.email
              }
              <div className="form-element" id="password-form-element">
                <label id="password-label">
                  {'비밀번호'}
                  <input id="loginPassword" name="loginPassword"
                         ref="loginPassword" type="password" />
                </label>
              </div>
              {
                authFail &&
                errorMessage.password
              }
              <button className="btn" id="btnLogin"
                      type="submit" >
                {loadingAuth ? '로딩중..' : '가입하기'}
              </button>
            </form>
          </Tab>
          <Tab eventKey={2} title="회원가입">
            <form className="form" id="formRegister"
                  onSubmit={this._sendSigninRequest}>
              <div className="form-element email-address" id="gmail-address-form-element">
                <label id="gmail-address-label">
                  {'이메일'}
                  <input id="signinEmail" name="signinEmail"
                         ref="signinEmail" type="text" />
                </label>
              </div>
              {
                authFail &&
                errorMessage.email
              }
              <div className="form-element" id="password-form-element">
                <label id="password-label">
                  {'닉네임'}
                  <input id="signinNick" name="signinNick"
                         ref="signinNick" type="text" />
                </label>
              </div>
              {
                authFail &&
                errorMessage.nick
              }
              <div className="form-element" id="password-form-element">
                <label id="password-label">
                  {'비밀번호'}
                  <input id="signinPassword" name="signinPassword"
                         ref="signinPassword" type="password" />
                </label>
              </div>
              <div className="form-element" id="password-form-element">
                <label id="password-label">
                  {'비밀번호 확인'}
                  <input id="signinPasswordCheck" name="signinPasswordCheck"
                         ref="signinPasswordCheck" type="password" />
                </label>
              </div>
              {
                authFail &&
                errorMessage.password
              }
              <div className="g-recaptcha" data-sitekey="6LddkhATAAAAAALuWnDw4tpG349vecZTkNdHYyF2"
                   ref="loginCapcha"></div>
              <button className="btn" id="btnRegister"
                      type="submit" >
                {'가입하기'}
              </button>
            </form>

          </Tab>
        </Tabs>

        <div>
          <a data-toggle="modal" href="#forgotPasswordModal"
             role="button">{'Forgot username or password?'}</a>
          <a data-toggle="modal" href="#contactModal"
             role="button">
            <small>{'Need help? Contact us'}</small>
          </a>
        </div>
      </div>
    );
  }
});

AuthForm = connectToStores({
  getStores() {
    // this will handle the listening/unlistening for you
    return [UserStore];
  },

  getPropsFromStores() {
    // this is the data that gets passed down as props
    return {
      UserStore: UserStore.getState()
    };
  }
}, AuthForm);
export default AuthForm;

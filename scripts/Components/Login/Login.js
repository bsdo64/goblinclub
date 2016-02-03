import React from 'react';
import {Tab, Tabs} from 'react-bootstrap';

import connectToStores from '../../../node_modules/alt-utils/lib/connectToStores';
import UserStore from '../../Flux/Stores/UserStore';
import UserActions from '../../Flux/Actions/UserActions';

let Login = React.createClass({
  displayName: 'Login',
  propTypes: {
    UserStore: React.PropTypes.shape({
      loadingAuth: React.PropTypes.bool,
      authFail: React.PropTypes.bool,
      loadedAuth: React.PropTypes.bool,
      uiValidate: React.PropTypes.array,
      serverValidate: React.PropTypes.bool
    })
  },

  statics: {
    getStores() {
      return [UserStore];
    },
    getPropsFromStores() {
      return {
        UserStore: UserStore.getState()
      };
    }
  },
  getInitialState: function () {
    return {
      open: false
    };
  },
  handleLoginRequest(e) {
    e.preventDefault();
    let loginUser = {
      email: this.refs.loginEmail.value.trim(),
      password: this.refs.loginPassword.value.trim()
    };
    UserActions.loginUser(loginUser);
  },

  handleSigninRequest(e) {
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

    function printError(createItem) {
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
    if (loadedAuth && authFail && serverValidate) {
      let count = 0;
      let createItem = function (itemText, index) {
        count = count + 1;
        return <li key={index + count}>{itemText.message}</li>;
      };
      printError(createItem);
    }

    const styles = {
      inputElement: {
        marginBottom: 5
      },
      input: {
        width: 250,
        height: 30,
        border: 'none',
        boxShadow: '1px 1px 1px #ccc',
        padding: 6,
        fontSize: 12
      },
      button: {
        borderRadius: 2,
        color: '#fff',
        backgroundColor: '#227973',
        width: 250
      }
    };
    return (
      <div style={{margin:'auto', width: 250}}>
        <Tabs defaultActiveKey={2} position="top"
              tabWidth={3} style={{color:'#aaa'}}>
          <Tab eventKey={1} title="로그인" style={{color:'#bbb'}}>
            <form className="form" id="formLogin"
                  onSubmit={this.handleLoginRequest}>
              <div style={styles.inputElement}>
                <input id="loginEmail" name="loginEmail"
                       placeholder="이메일" ref="loginEmail"
                       style={styles.input} type="text" />
              </div>
              {
                authFail &&
                errorMessage.email
              }
              <div style={styles.inputElement}>
                <input id="loginPassword" name="loginPassword"
                       placeholder="비밀번호" style={styles.input}
                       ref="loginPassword" type="password" />
              </div>
              {
                authFail &&
                errorMessage.password
              }
              <button className="btn" style={styles.button}
                      type="submit" >
                {loadingAuth ? '로딩중..' : '로그인'}
              </button>
            </form>
          </Tab>
          <Tab eventKey={2} title="회원가입" style={{color:'#ccc'}}>
            <form className="form" id="formRegister"
                  onSubmit={this.handleSigninRequest}>
              <div style={styles.inputElement}>
                <input id="signinEmail" name="signinEmail"
                       placeholder="이메일" ref="signinEmail"
                       style={styles.input} type="text" />
              </div>
              {
                authFail &&
                errorMessage.email
              }
              <div style={styles.inputElement}>
                <input id="signinNick" name="signinNick"
                       placeholder="닉네임" ref="signinNick"
                       style={styles.input} type="text" />
              </div>
              {
                authFail &&
                errorMessage.nick
              }
              <div style={styles.inputElement}>
                <input id="signinPassword" name="signinPassword"
                       placeholder="비밀번호" ref="signinPassword"
                       style={styles.input} type="password" />
              </div>
              <div style={styles.inputElement}>
                <input id="signinPasswordCheck" name="signinPasswordCheck"
                       placeholder="비밀번호 확인" ref="signinPasswordCheck"
                       style={styles.input} type="password" />
              </div>
              {
                authFail &&
                errorMessage.password
              }
              <div className="g-recaptcha" data-sitekey="6LddkhATAAAAAALuWnDw4tpG349vecZTkNdHYyF2"
                   ref="loginCaptcha"></div>

              <button className="btn" style={styles.button}
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

Login = connectToStores(Login);
export default Login;

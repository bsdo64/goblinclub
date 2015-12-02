/**
 * Created by dobyeongsu on 2015. 10. 15..
 */
import React, { Component } from 'react';
import {
    Popover,
    Button,
    Collapse,
    Tab,
    Tabs
} from 'react-bootstrap';
import { Link } from 'react-router';
import connectToStores from 'alt/utils/connectToStores';
import UserStore from '../../Stores/UserStore';
import UserActions from '../../Actions/UserActions';

class AuthForm extends Component {

    static getStores() {
        return [UserStore]
    }

    static getPropsFromStores() {
        return {
            UserStore : UserStore.getState()
        }
    }

    constructor(...props) {
        super(...props);
        this.state = { open : false };
    }

    componentDidMount() {

    }

    render() {
        const { loadingAuth, authFail, loadedAuth, uiValidate, serverValidate } = this.props.UserStore;

        let errorMessage = {
                email : null,
                password : null
            };

        if( loadedAuth && authFail && uiValidate ) {
            let count = 0;
            var createItem = function(itemText, index) {
                return <li key={index + count++}>{itemText}</li>;
            };
            switch (uiValidate.type) {
                case 'loginUser':
                    errorMessage.email    =  <ul>{uiValidate.errors.email.map(createItem)}</ul>;
                    errorMessage.password =  <ul>{uiValidate.errors.password.map(createItem)}</ul>;
                    break;
                case 'signinUser':
                    errorMessage.email    =  <ul>{uiValidate.errors.email.map(createItem)}</ul>;
                    errorMessage.password =  <ul>{uiValidate.errors.password.map(createItem)}</ul>;
                    errorMessage.nick     =  <ul>{uiValidate.errors.nick.map(createItem)}</ul>;
                default:
                    break;
            }

        }
        if( loadedAuth && authFail && serverValidate ) {
            let count = 0;
            var createItem = function(itemText, index) {
                return <li key={index + count++}>{itemText.message}</li>;
            };
            switch (serverValidate.type) {
                case 'loginUser':
                    for (let prop in serverValidate.fields) {
                        if( serverValidate.fields.hasOwnProperty( prop ) ) {
                            errorMessage[prop] = <ul>{serverValidate.errors.map(createItem)}</ul>;
                        }
                    }
                    break;
                case 'signinUser':
                    for (let prop in serverValidate.fields) {
                        if( serverValidate.fields.hasOwnProperty( prop ) ) {
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
                <Tabs defaultActiveKey={2} position="left" tabWidth={3}>
                    <Tab eventKey={1} title="로그인">
                        <form id="formLogin" className="form" onSubmit={this._sendLoginRequest.bind(this)}>
                            <div className="form-element email-address" id="gmail-address-form-element">
                                <label id="gmail-address-label">
                                    아이디
                                    <input ref="loginEmail" type="text" name="loginEmail" id="loginEmail" n="3" />
                                </label>
                            </div>
                            { authFail && errorMessage.email }

                            <div className="form-element" id="password-form-element">
                                <label id="password-label">
                                    비밀번호
                                    <input ref="loginPassword" type="password" name="loginPassword" id="loginPassword" n="4" />
                                </label>
                            </div>
                            { authFail && errorMessage.password }

                            <button type="submit" id="btnLogin" className="btn" >{loadingAuth ? '로딩중..' : '가입하기'}</button>
                        </form>
                    </Tab>
                    <Tab eventKey={2} title="회원가입">
                        <form id="formRegister" className="form" onSubmit={this._sendSigninRequest.bind(this)}>
                            <div className="form-element email-address" id="gmail-address-form-element">
                                <label id="gmail-address-label">

                                        이메일

                                    <input ref="signinEmail" type="text" name="signinEmail" id="signinEmail" />
                                </label>
                            </div>
                            { authFail && errorMessage.email }

                            <div className="form-element" id="password-form-element">
                                <label id="password-label">
                                    닉네임
                                    <input ref="signinNick" type="text" name="signinNick" id="signinNick" n="4" />
                                </label>
                            </div>
                            { authFail && errorMessage.nick }

                            <div className="form-element" id="password-form-element">
                                <label id="password-label">
                                    비밀번호
                                    <input ref="signinPassword" type="password" name="signinPassword" id="signinPassword" n="4" />
                                </label>
                            </div>
                            <div className="form-element" id="password-form-element">
                                <label id="password-label">
                                    비밀번호 확인
                                    <input ref="signinPasswordCheck" type="password" name="signinPasswordCheck" id="signinPasswordCheck" n="4" />
                                </label>
                            </div>
                            { authFail && errorMessage.password }

                            <div className="g-recaptcha" ref="loginCapcha" data-sitekey="6LddkhATAAAAAALuWnDw4tpG349vecZTkNdHYyF2"></div>

                            <button type="submit" id="btnRegister" className="btn">
                                가입하기
                            </button>
                        </form>

                    </Tab>
                </Tabs>

                <div>
                    <a data-toggle="modal" role="button"
                       href="#forgotPasswordModal">Forgot username or
                        password?</a>
                    <a data-toggle="modal" role="button"
                       href="#contactModal">
                        <small>Need help? Contact us</small>
                    </a>
                </div>
            </div>
        )
    }

    _sendLoginRequest (e) {
        e.preventDefault();
        var loginUser = {
            email :this.refs.loginEmail.value.trim(),
            password : this.refs.loginPassword.value.trim()
        };
        UserActions.loginUser(loginUser);
    }

    _sendSigninRequest (e) {
        e.preventDefault();
        var signinUser = {
            signinEmail :this.refs.signinEmail.value.trim(),
            signinNick : this.refs.signinNick.value.trim(),
            signinPassword : this.refs.signinPassword.value.trim(),
            signinPasswordCheck : this.refs.signinPasswordCheck.value.trim()
        };
        UserActions.signinUser(signinUser);
    }
}
export default AuthForm = connectToStores(AuthForm);
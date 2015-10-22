/**
 * Created by dobyeongsu on 2015. 10. 15..
 */
import React, { Component } from 'react';
import {
    Popover,
    Button,
    Collapse
} from 'react-bootstrap';
import connectToStores from 'alt/utils/connectToStores';
import UserStore from '../../stores/UserStore';
import UserActions from '../../Actions/UserActions';
import immutable from 'immutable';

@connectToStores
export default class loginPopover extends Component {

    static getStores() {
        return [UserStore]
    }

    static getPropsFromStores() {
        var store = UserStore.getState();

        if(store instanceof immutable.Map) {
            return store.toJS();
        } else {
            return store;
        }
    }

    constructor(...props) {
        super(...props);
        this.state = { open : false };
    }

    render() {
        const { loadingAuth, authFail, authSuccess, uiValidate } = this.props;

        let loadingMessage,
            errorMessage = {
                email : null,
                password : null
            };

        if( authFail ) {
            let count = 0;
            var createItem = function(itemText, index) {
                return <li key={index + count++}>{itemText}</li>;
            };
            errorMessage.email    =  <ul>{uiValidate.errors.email.map(createItem)}</ul>;
            errorMessage.password =  <ul>{uiValidate.errors.password.map(createItem)}</ul>;
        }
        if( loadingAuth ) {
            loadingMessage =  <p>로딩중..</p>;
        }
        return (
                <div >
                    <form id="formLogin" className="form" onSubmit={this._sendLoginRequest.bind(this)}>
                        <label>Login</label>
                        <input name="email" ref="email" id="email" type="text" placeholder="Email"
                               pattern="[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?" data-valid-min="6" title="Enter your Email"
                               required=""/>

                        { authFail && errorMessage.email }
                        {loadingMessage}

                        <input name="password" ref="password" id="password" type="password" placeholder="Password"
                               title="Enter your password" required=""/><br/>
                        { authFail && errorMessage.password }
                        <button type="submit" id="btnLogin" className="btn" >Login</button>
                    </form>

                    <div>
                        <a onClick={ ()=> this.setState({ open: !this.state.open })} href="#" title="Fast and free sign up!" id="btnNewUser"
                           data-toggle="collapse" data-target="#formRegister">처음 오셨나요? 가입하기</a>
                    </div>

                    <Collapse in={this.state.open}>
                        <div>
                            <form id="formRegister" className="form">
                                <input name="email" id="inputEmail" type="email" placeholder="Email" required=""/>
                                <input name="username" id="inputUsername" type="text" placeholder="Username" pattern="^[a-z,A-Z,0-9,_]{6,15}$" data-valid-min="6" title="Choose a username" required=""/><br />
                                <input name="password" id="inputpassword" type="password" placeholder="Password" required=""/>
                                <input name="verify" id="inputVerify" type="password" placeholder="Password (again)" required=""/><br />
                                <button type="button" id="btnRegister" className="btn">
                                    가입하기
                                </button>
                            </form>
                        </div>
                    </Collapse>

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
            email :this.refs.email.value.trim(),
            password : this.refs.password.value.trim()
        };

        loginUser = immutable.Map(loginUser);
        UserActions.loginUser(loginUser);
    }
}
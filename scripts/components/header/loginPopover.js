/**
 * Created by dobyeongsu on 2015. 10. 15..
 */
import React, { Component } from 'react';
import {
    Popover,
    Button,
    Collapse
} from 'react-bootstrap';

export default class loginPopover extends Component {
    constructor(...props) {
        super(...props);
        this.state = { open : false };
    }

    render() {
        return (
                <div >
                    <form id="formLogin" className="form">
                        <label>Login</label>
                        <input name="_csrf" id="token" type="hidden" value="HIBJ9fff-c8XJNxcZqMpyUrLK-U3oYAEGpA4"/>
                        <input name="username" id="username" type="text" placeholder="Username"
                               pattern="^[a-z,A-Z,0-9,_]{6,15}$" data-valid-min="6" title="Enter your username"
                               required=""/>
                        <input name="password" id="password" type="password" placeholder="Password"
                               title="Enter your password" required=""/><br/>
                        <button type="button" id="btnLogin" className="btn">Login</button>
                    </form>

                    <div>
                        <a onClick={ ()=> this.setState({ open: !this.state.open })} href="#" title="Fast and free sign up!" id="btnNewUser"
                           data-toggle="collapse" data-target="#formRegister">New User? Sign-up..</a>
                    </div>

                    <Collapse in={this.state.open}>
                        <div>
                            <form id="formRegister" className="form">
                                <input name="_csrf" id="token" type="hidden" value="HIBJ9fff-c8XJNxcZqMpyUrLK-U3oYAEGpA4"/>
                                <input name="email" id="inputEmail" type="email" placeholder="Email" required=""/>
                                <input name="username" id="inputUsername" type="text" placeholder="Username" pattern="^[a-z,A-Z,0-9,_]{6,15}$" data-valid-min="6" title="Choose a username" required=""/><br />
                                <input name="password" id="inputpassword" type="password" placeholder="Password" required=""/>
                                <input name="verify" id="inputVerify" type="password" placeholder="Password (again)" required=""/><br />
                                <button type="button" id="btnRegister" className="btn">Sign
                                    Up
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
}
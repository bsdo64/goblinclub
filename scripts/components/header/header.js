/**
 * Created by dobyeongsu on 2015. 10. 15..
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import {
    Navbar,
    NavBrand,
    Nav,
    NavItem,
    OverlayTrigger,
    NavDropdown,
    Popover,
    MenuItem,
    Button,
    Input
} from 'react-bootstrap';
import Radium, { Style } from 'radium';
import _ from 'lodash';
import connectToStores from 'alt/utils/connectToStores';
import UserStore from '../../stores/UserStore';
import PostStore from '../../stores/PostStore';
import UserActions from '../../Actions/UserActions';
import LoginPopover from './loginPopover';
import Immutable from 'immutable';
import alt from '../../alt'

import { createHistory } from 'history'

var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

@connectToStores
@Radium
export default class header extends Component {

    static getStores() {
        return [UserStore, PostStore];
    }

    static getPropsFromStores() {
        return {
            UserStore : UserStore.getState(),
            PostStore : PostStore.getState()
        }
    }

    constructor(...args) {
        super(...args);
        this.state = {
            openPopup: false,
            clickBody : false
        };

        this._toggle = this._toggle.bind(this);
        this._history = this._history.bind(this);
    }

    componentWillReceiveProps() {
    }

    render() {
        const { auth, authSuccess } = this.props.UserStore;

        let login = <Popover id="loginPopover" title="로그인 / 회원가입" {...this.props}><LoginPopover />  </Popover>;
        let userItem;

        if(auth.token) {
            userItem = (
                <NavDropdown eventKey={5} title={auth.user.email} id="basic-nav-dropdown">
                    <MenuItem eventKey="1">Action</MenuItem>
                    <MenuItem eventKey="2">Another action</MenuItem>
                    <MenuItem eventKey="3">Something else here</MenuItem>
                    <MenuItem divider />
                    <MenuItem eventKey="4" onClick={this._history}>로그아웃</MenuItem>
                </NavDropdown>
            );
        }

        return (
            <div id="header">
                <Style rules={{
                  "#header .container" : {
                    width: "100%"
                  },
                  "#app" : {
                    height: "calc(100vh - 50px)"
                  },
                  ".nano > .nano-pane" : {
                    background: 'rgba(0,0,0,.15)'
                  }
                }} />
                <Navbar fixedTop style={styles.base}>
                    <NavBrand><Link to="/">Goblin Club</Link></NavBrand>
                    <div id='searchBar' style={styles.search.container}>
                        <div style={styles.search.bar}>
                            <Input
                                standalone
                                type="text"
                                placeholder="Enter text"
                                ref="input" />
                        </div>
                    </div>

                    <Nav right>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/inbox">Inbox</Link></li>
                        <li><Link to="/user">User</Link></li>
                        { !authSuccess &&
                        <OverlayTrigger trigger="click" rootClose placement="bottom" overlay={login}>
                            <NavItem eventKey={3} onClick={this._toggle}>로그인 / 회원가입</NavItem>
                        </OverlayTrigger>
                        }

                        { authSuccess && userItem }

                        <NavDropdown eventKey={4} title="Dropdown" id="basic-nav-dropdown">
                            <MenuItem eventKey="1">Action</MenuItem>
                            <MenuItem eventKey="2">Another action</MenuItem>
                            <MenuItem eventKey="3">Something else here</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey="4">Separated link</MenuItem>
                        </NavDropdown>
                    </Nav>
                </Navbar>
            </div>
        )
    }

    closeModal() {

    }

    _history () {

    }

    _toggle () {
        this.setState({ openPopup : !this.state.openPopup });
    }
}

var styles = {
    base : {
        height: 50
    },
    search : {
        container: {
            float: 'left'
        },
        bar: {
            maxWidth: 600,
            width: 500,
            margin: 'auto',
            top: 7,
            position: 'relative',
            left: 115
        }
    }
}
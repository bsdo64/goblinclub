/**
 * Created by dobyeongsu on 2015. 10. 15..
 */
import React, { Component } from 'react';
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
    Panel
} from 'react-bootstrap';
import Radium, { Style } from 'radium';
import _ from 'lodash';
import connectToStores from 'alt/utils/connectToStores';
import UserStore from '../../stores/UserStore';
import UserActions from '../../Actions/UserActions';
import LoginPopover from './loginPopover';
import Immutable from 'immutable';
import alt from '../../alt'

@connectToStores
@Radium
export default class header extends Component {

    static getStores() {
        return [UserStore];
    }

    static getPropsFromStores() {
        return UserStore.getState();
    }

    constructor(...args) {
        super(...args);
        this.state = {show: true};

        this._toggle = this._toggle.bind(this);
    }

    componentWillReceiveProps() {

    }

    render() {
        const { auth, authSuccess } = this.props;

        let login = <Popover id="loginPopover" title="로그인 / 회원가입" {...this.props}><LoginPopover />  </Popover>;
        let userItem;

        console.log(auth);

        if(auth.token) {
            userItem = (
                <NavDropdown eventKey={5} title={auth.user.email} id="basic-nav-dropdown">
                    <MenuItem eventKey="1">Action</MenuItem>
                    <MenuItem eventKey="2">Another action</MenuItem>
                    <MenuItem eventKey="3">Something else here</MenuItem>
                    <MenuItem divider />
                    <MenuItem eventKey="4">로그아웃</MenuItem>
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
                    <Nav right>
                        <NavItem eventKey={1} href="/about">About</NavItem>
                        <NavItem eventKey={2} href="/inbox">Inbox</NavItem>
                        <NavItem eventKey={2} href="/user">User</NavItem>

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

    _toggle () {
        this.setState({ show : !this.state.show });
    }
}

var styles = {
    base : {
        height: 50
    }
}
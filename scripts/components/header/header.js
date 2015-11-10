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
    Input,
    Overlay,
    Modal
} from 'react-bootstrap';
import Radium, { Style } from 'radium';
import _ from 'lodash';
import connectToStores from 'alt/utils/connectToStores';
import UserStore from '../../stores/UserStore';
import PostStore from '../../stores/PostStore';
import UserActions from '../../Actions/UserActions';
import LoginForm from './loginPopover';
import Immutable from 'immutable';
import alt from '../../alt'

import { createHistory } from 'history'

var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

@Radium
class LoginButton extends Component {
    constructor () {
        super();
        this.state = {
            show : false
        };

        this._toggle = this._toggle.bind(this);
        this._close = this._close.bind(this);
    }

    _toggle() {
        this.setState({ show: !this.state.show });
    }
    _close() {
        this.setState({ show: false })
    }

    render() {
        const style = {
            position: 'absolute',
            backgroundColor: '#fff',
            boxShadow: '0 5px 10px rgba(0, 0, 0, 0.2)',
            border: '1px solid #CCC',
            borderRadius: 2,
            marginTop: 5,
            padding: 15
        };

        return (
            <div style={{ height: 50, position: 'relative' }}>
                <div ref="target" style={styles.menu.container} onClick={this._toggle}>
                    <button style={styles.menu.login}>로그인 / 회원가입</button>
                </div>

                <Modal show={this.state.show} onHide={this._close} >
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            안녕하세요 고블린 클럽에 오신것을 환영합니다
                            만나서 반갑습니다
                        </div>
                        <LoginForm />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this._close}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

@Radium
@connectToStores
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

    }

    render() {
        const { auth, authSuccess } = this.props.UserStore;

        let userItem;

        if(auth.token) {
            userItem = (
                <NavDropdown eventKey={5} title={auth.user.email} id="basic-nav-dropdown">
                    <MenuItem eventKey="1">Action</MenuItem>
                    <MenuItem eventKey="2">Another action</MenuItem>
                    <MenuItem eventKey="3">Something else here</MenuItem>
                    <MenuItem divider />
                    <MenuItem eventKey="4" >로그아웃</MenuItem>
                </NavDropdown>
            );
        }

        return (
            <div id="header" >
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
                <Navbar fixedTop style={styles.header}>
                    <NavBrand><Link to="/" style={styles.logo}>Goblin Club</Link></NavBrand>
                    <div id='searchBar' style={styles.search.layout}>
                        <div style={styles.search.container} >
                            <Input
                                style={styles.search.bar}
                                standalone
                                type="text"
                                placeholder="Enter text"
                                ref="input" />
                        </div>
                    </div>

                    <div id="menu" style={styles.menu.layout}>
                        <Nav right>
                            { !authSuccess &&
                                <LoginButton />
                            }


                            { authSuccess && userItem }
                        </Nav>
                    </div>
                </Navbar>
            </div>
        )
    }
}

var styles = {
    header : {
        height: 50,
        backgroundColor: '#01403c',
        minWidth: 1024,
        border: 'none'
    },
    logo : {
        color: '#fff',
        fontSize : '30px',
        fontWeight: 'bold',
        letterSpacing: 1
    },
    search : {
        layout: {
            marginLeft: 0,
            marginRight: 0,
            float: 'left'
        },
        container: {
            marginLeft: 35,
            padding: '12px 0',
            height: 50
        },
        bar: {
            margin: 'auto',
            position: 'relative',
            height: 26,
            width: 565,
            borderRadius: 2
        }
    },

    menu : {
        layout : {
            float: 'right'
        },
        container: {
            height: 50,
            padding: 12
        },
        login : {
            borderRadius: 1,
            boxShadow: '1px 1px 0 #000000',
            color: '#fff',
            backgroundColor: '#01403c',
            padding: '3px 10px',
            borderTop: 'solid #3b6b68 1px',
            borderLeft: 'solid #3b6b68 1px',
            borderBottom: 'none',
            borderRight: 'none',
            height: 25,
            fontSize: 13,
            ':hover': {
                backgroundColor: '#2b5f5b',
                backgroundImage: 'linear-gradient(to bottom, #2b5f5b, #01403c)',
                textDecoration: 'none'
            }
        }
    }
}
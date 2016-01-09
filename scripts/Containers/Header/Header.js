/**
 * Created by dobyeongsu on 2015. 10. 15..
 */
import React from 'react';
import {Link} from 'react-router';
import Radium, {Style} from 'radium';
import {
  Button,
  ButtonToolbar,
  Dropdown,
  Input,
  MenuItem,
  Modal,
  Navbar,
  NavBrand,
  Nav
} from 'react-bootstrap';

import connectToStores from 'alt/utils/connectToStores';
import UserStore from '../../Stores/UserStore';
import PostStore from '../../Stores/PostStore';

import {ModalAuthForm} from '../../Components/index';
import {Header as styles} from '../Styles/index';

const ButtonR = Radium(Button);

let LoginButton = React.createClass({
  displayName: 'LoginButton',
  getInitialState() {
    return {
      show: false
    };
  },

  handleToggle() {
    this.setState({show: !this.state.show});
  },

  handleClose() {
    this.setState({show: false});
  },

  render() {
    let modalStyle = {
      fontSize: 35,
      fontWeight: 'bold',
      color: '#176963',
      textShadow: '1px 1px 1px #ccc',
      textAlign: 'center',
      marginBottom: 30
    };
    return (
      <div style={{height: 50, position: 'relative'}}>
        <div onClick={this.handleToggle} ref="target"
             style={styles.menu.container} >
          <button style={styles.menu.item}>{'로그인 / 회원가입'}</button>
        </div>

        <Modal dialogClassName="loginModal" onHide={this.handleClose}
               show={this.state.show} >
          <Modal.Header style={{borderBottom:'none'}} closeButton />
          <Modal.Body>
            <div style={modalStyle}>
              {'Gobblin Club'}
            </div>
            <ModalAuthForm />
          </Modal.Body>
        </Modal>
      </div>
    );
  }
});

let UserButton = React.createClass({
  displayName: 'UserButton',
  getInitialState() {
    return {
      show: false
    };
  },

  render() {
    return (
      <div style={{height: 50, position: 'relative'}}>
        <ButtonToolbar style={styles.menu.container}>
          <Link to="/submit">
            <ButtonR style={[styles.menu.item, styles.menu.marginLeft]}>
              <i className="fa fa-pencil fa-fw"/>
            </ButtonR>
          </Link>

          <Link to="/submit">
            <ButtonR style={[styles.menu.item, styles.menu.marginLeft]}>
              <i className="fa fa-bell-slash-o fa-fw"/>
            </ButtonR>
          </Link>

          <Dropdown id="dropdown-custom-2">
            <Dropdown.Toggle key="c" style={styles.menu.item}>
              <i className="fa fa-cog fa-fw" />{' '}
            </Dropdown.Toggle>
            <Dropdown.Menu className="super-colors">
              <MenuItem eventKey="1">{'프로필'}</MenuItem>
              <MenuItem divider/>
              <MenuItem eventKey="4">{'로그아웃'}</MenuItem>
            </Dropdown.Menu>
          </Dropdown>
        </ButtonToolbar>
      </div>
    );
  }
});

let Header = React.createClass({
  displayName: 'Header',
  propTypes: {
    UserStore: React.PropTypes.shape({
      authSuccess: React.PropTypes.boolean
    })
  },
  render() {
    const {authSuccess} = this.props.UserStore;
    const inlineStyle = {
      '#header .container': {
        width: '100%'
      },
      '#app': {
        height: 'calc(100vh - 50px)'
      },
      '.nano > .nano-pane': {
        background: 'rgba(0,0,0,.15)'
      },
      '.loginModal .modal-content': {
        backgroundColor: '#f1f1f1'
      },
      '.loginModal .modal-content li > a': {
        padding: 5
      },
      '.loginModal .modal-content li.active > a': {
        backgroundColor: '#227973',
        color: '#fff'
      }
    };
    return (
      <div id="header">
        <Style rules={inlineStyle} />
        <Navbar fixedTop style={styles.header}>
          <NavBrand>
            <Link to="/" style={styles.logo}>{'Gobblin Club'}</Link>
          </NavBrand>

          <div id="searchBar" style={styles.search.layout}>
            <div style={styles.search.container}>
              <Input
                placeholder="Enter text"
                ref="input"
                standalone
                style={styles.search.bar}
                type="text" />
            </div>
          </div>

          <div id="menu" style={styles.menu.layout}>
            {
              !authSuccess &&
              <Nav pullRight>
                <LoginButton />
              </Nav>
            }

            {
              authSuccess &&
              <Nav pullRight>
                <UserButton />
              </Nav>
            }
          </div>
        </Navbar>
      </div>
    );
  }
});

LoginButton = Radium(LoginButton);
UserButton = Radium(UserButton);
Header = connectToStores({
  getStores() {
    // this will handle the listening/unlistening for you
    return [PostStore, UserStore];
  },

  getPropsFromStores() {
    // this is the data that gets passed down as props
    return {
      PostStore: PostStore.getState(),
      UserStore: UserStore.getState()
    };
  }
}, Radium(Header));
export default Header;

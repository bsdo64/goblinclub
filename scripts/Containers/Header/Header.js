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

import {AuthForm} from '../../Components/index';
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
    return (
      <div style={{height: 50, position: 'relative'}}>
        <div onClick={this.handleToggle} ref="target"
             style={styles.menu.container} >
          <button style={styles.menu.item}>{'로그인 / 회원가입'}</button>
        </div>

        <Modal onHide={this.handleClose} show={this.state.show} >
          <Modal.Header closeButton>
            <Modal.Title>{'Modal heading'}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              {'안녕하세요 고블린 클럽에 오신것을 환영합니다 만나서 반갑습니다'}
            </div>
            <AuthForm />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>{'Close'}</Button>
          </Modal.Footer>
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
              <MenuItem eventKey="1">{'Action'}</MenuItem>
              <MenuItem eventKey="2">{'Another action'}</MenuItem>
              <MenuItem active eventKey="3">{'Active Item'}</MenuItem>
              <MenuItem divider/>
              <MenuItem eventKey="4">{'Separated link'}</MenuItem>
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
      }
    };
    return (
      <div id="header">
        <Style rules={inlineStyle} />
        <Navbar fixedTop style={styles.header}>
          <NavBrand><a href="/" style={styles.logo}>{'Goblin Club'}</a></NavBrand>
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
              <Nav right>
                <LoginButton />
              </Nav>
            }

            {
              authSuccess &&
              <Nav right>
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

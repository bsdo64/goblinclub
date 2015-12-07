/**
 * Created by dobyeongsu on 2015. 10. 15..
 */
import React, {Component} from 'react';
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
class LoginButton extends Component {
  constructor() {
    super();
    this.state = {
      show: false
    };

    this._toggle = this._toggle.bind(this);
    this._close = this._close.bind(this);
  }

  _toggle() {
    this.setState({show: !this.state.show});
  }

  _close() {
    this.setState({show: false});
  }

  render() {
    return (
      <div style={{height: 50, position: 'relative'}}>
        <div onClick={this._toggle} ref='target'
             style={styles.menu.container} >
          <button style={styles.menu.item}>{'로그인 / 회원가입'}</button>
        </div>

        <Modal onHide={this._close} show={this.state.show} >
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
            <Button onClick={this._close}>{'Close'}</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

class UserButton extends Component {
  static getStores() {
    return [UserStore];
  }

  static getPropsFromStores() {
    return {
      UserStore: UserStore.getState()
    };
  }

  constructor() {
    super();
    this.state = {
      show: false
    };
  }

  render() {
    return (
      <div style={{height: 50, position: 'relative'}}>
        <ButtonToolbar style={styles.menu.container}>
          <Link to='/submit'>
            <ButtonR style={[styles.menu.item, styles.menu.marginLeft]}>
              <i className='fa fa-pencil fa-fw'/>
            </ButtonR>
          </Link>

          <Link to='/submit'>
            <ButtonR style={[styles.menu.item, styles.menu.marginLeft]}>
              <i className='fa fa-bell-slash-o fa-fw'/>
            </ButtonR>
          </Link>

          <Dropdown id='dropdown-custom-2'>
            <Dropdown.Toggle key='c' style={styles.menu.item}>
              <i className='fa fa-cog fa-fw' />{' '}
            </Dropdown.Toggle>
            <Dropdown.Menu className='super-colors'>
              <MenuItem eventKey='1'>{'Action'}</MenuItem>
              <MenuItem eventKey='2'>{'Another action'}</MenuItem>
              <MenuItem eventKey='3' active>{'Active Item'}</MenuItem>
              <MenuItem divider/>
              <MenuItem eventKey='4'>{'Separated link'}</MenuItem>
            </Dropdown.Menu>
          </Dropdown>
        </ButtonToolbar>
      </div>
    );
  }
}

class Header extends Component {
  static getStores() {
    return [UserStore, PostStore];
  }

  static getPropsFromStores() {
    return {
      UserStore: UserStore.getState(),
      PostStore: PostStore.getState()
    };
  }

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
      <div id='header'>
        <Style rules={inlineStyle} />
        <Navbar fixedTop style={styles.header}>
          <NavBrand><a href='/' style={styles.logo}>{'Goblin Club'}</a></NavBrand>
          <div id='searchBar' style={styles.search.layout}>
            <div style={styles.search.container}>
              <Input
                placeholder='Enter text'
                ref='input'
                standalone
                style={styles.search.bar}
                type='text' />
            </div>
          </div>

          <div id='menu' style={styles.menu.layout}>
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
}

LoginButton = Radium(LoginButton);
UserButton = connectToStores(Radium(UserButton));
export default Header = connectToStores(Radium(Header));

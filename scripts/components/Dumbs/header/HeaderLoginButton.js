/**
 * Created by dobyeongsu on 2016. 1. 9..
 */
import React from 'react';
import Radium from 'radium';
import {Nav} from 'react-bootstrap';

import AppActions from '../../../Flux/Actions/AppActions';

import {LoginModal} from '../../../Components/Dumbs/index';
import styles from '../../Style/style_header';

let LoginButton = React.createClass({
  displayName: 'LoginButton',
  handleToggle() {
    AppActions.toggleLoginModal(this.props.AppStore.openLoginModal);
  },

  render() {
    return (
      <Nav pullRight>
        <div style={{height: 50, position: 'relative'}}>
          <div onClick={this.handleToggle} ref="target"
               style={styles.menu.container} >
            <button style={styles.menu.item}>{'로그인 / 회원가입'}</button>
          </div>

          <LoginModal show={this.props.AppStore.openLoginModal} />
        </div>
      </Nav>
    );
  }
});

export default Radium(LoginButton);

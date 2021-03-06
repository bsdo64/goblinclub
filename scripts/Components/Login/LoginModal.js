/**
 * Created by dobyeongsu on 2016. 1. 9..
 */
import React from 'react';

import {Modal} from 'react-bootstrap';

import styles from './LoginModalStyle';
import ModalAuthForm from './ModalAuthForm';

import AppActions from '../Layout/AppActions';

let LoginModal = React.createClass({
  displayName: 'LoginModal',
  propTypes: {

  },
  handleClose() {
    AppActions.toggleLoginModal(this.props.show);
  },
  render() {
    return (
      <Modal dialogClassName="loginModal" onHide={this.handleClose}
             show={this.props.show} >
        <Modal.Header style={styles.header} closeButton />
        <Modal.Body>
          <div style={styles.logo}>
            {'Gobblin Club'}
          </div>
          <ModalAuthForm />
        </Modal.Body>
      </Modal>
    );
  }
});

export default LoginModal;

/**
 * Created by dobyeongsu on 2016. 1. 9..
 */
import React from 'react';
import {Link} from 'react-router';
import Radium from 'radium';
import {
  Button,
  ButtonToolbar,
  Dropdown,
  MenuItem,
  Nav
} from 'react-bootstrap';

import styles from '../../Style/style_header';

const ButtonR = Radium(Button);

let UserButton = React.createClass({
  displayName: 'UserButton',
  render() {
    return (
      <Nav pullRight>
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
      </Nav>
    );
  }
});

export default Radium(UserButton);

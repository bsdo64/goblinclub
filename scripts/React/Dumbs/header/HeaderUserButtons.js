/**
 * Created by dobyeongsu on 2016. 1. 9..
 */
import React from 'react';
import {Link, browserHistory} from 'react-router';
import Radium from 'radium';
import {
  Button,
  ButtonToolbar,
  Dropdown,
  DropdownButton,
  MenuItem,
  Nav,
  SplitButton
} from 'react-bootstrap';

import styles from '../../Style/style_header';

const ButtonR = Radium(Button);
const SplitButtonR = Radium(SplitButton);
const DropdownButtonR = Radium(DropdownButton);

let UserButton = React.createClass({
  displayName: 'UserButton',
  handleSelectSubmit(event, eventKey) {
    console.log(typeof eventKey);
    switch (eventKey) {
    case '1':
      browserHistory.push('/submit');
      break;
    case '2':
      browserHistory.push('/submit/club');
      break;
    default:
      break;
    }
  },
  handleWritePostPage() {
    browserHistory.push('/submit');
  },
  render() {
    return (
      <Nav pullRight>
        <div style={{height: 50, position: 'relative'}}>
          <ButtonToolbar style={styles.menu.container}>
            <div tabIndex="-1" className="dropdown btn-group">
              <button onClick={this.handleWritePostPage}
                      className="btn btn-default"
                      style={styles.menu.item}
                      type="button">
                <i className="fa fa-pencil fa-fw"/>{' '}
              </button>
              <DropdownButtonR id="dropdown-custom-2"
                               style={styles.menu.leftItem}
                               title="">
                <MenuItem eventKey="1" onSelect={this.handleSelectSubmit}>
                  {'포스트 쓰기'}
                </MenuItem>
                <MenuItem eventKey="2" onSelect={this.handleSelectSubmit}>
                  {'클럽 만들기'}
                </MenuItem>
              </DropdownButtonR>
            </div>

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

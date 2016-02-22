/**
 * Created by dobyeongsu on 2015. 11. 10..
 */
import React from 'react';
import Radium from 'radium';
import {Dropdown, MenuItem} from 'react-bootstrap';

import styles from './HeadLineStyle';
import AppActions from '../App/AppActions';

let HeadLine = React.createClass({
  displayName: 'HeadLine',
  propTypes: {
    title: React.PropTypes.string,
    rightMenu: React.PropTypes.bool
  },
  mixins: [
    require('react-onclickoutside')
  ],
  getInitialState: function () {
    return {
      clubSubscribed: false,
      openDropdown: false
    };
  },
  handleClickOutside: function(evt) {
    this.closeDrop();
  },
  toggleSub() {
    this.setState({clubSubscribed: !this.state.clubSubscribed});
  },
  toggleDrop() {
    this.setState({openDropdown: !this.state.openDropdown});
  },
  closeDrop() {
    this.setState({openDropdown: false});
  },
  getPost() {
    AppActions.initBest();
  },
  render() {
    let {openDropdown} = this.state;
    let {title, rightMenu, isClub} = this.props;
    let isSub = this.state.clubSubscribed;

    title = title || '고블린 클럽';
    if (typeof rightMenu === 'undefined') {
      rightMenu = false;
    }
    if (typeof isClub === 'undefined') {
      isClub = false;
    }

    return (
      <div style={styles.container}>
        {
          rightMenu &&
          <div style={styles.menu} >
            <a href="#" style={styles.menuItem} onClick={this.getPost} >{'인기순'}</a>
            <a style={styles.menuCaret} onClick={this.toggleDrop} className="ignore-react-onclickoutside">
              <i className="fa fa-caret-down"/>
              {
                rightMenu && openDropdown &&
                <ul style={styles.dropdown}>
                  <li key={1} href="#" style={styles.dropdownItem} >인기순</li>
                  <li key={2} href="#" style={styles.dropdownItem} >최신순</li>
                </ul>
              }
            </a>
          </div>
        }

        {
          isClub &&
          <i className={'fa ' + (isSub ? 'fa-heart' : 'fa-heart-o')} onClick={this.toggleSub} style={styles.subs}/>
        }
        <h2 style={styles.title}>{title}</h2>
      </div>
    );
  }
});

export default Radium(HeadLine);

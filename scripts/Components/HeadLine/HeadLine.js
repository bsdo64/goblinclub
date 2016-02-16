/**
 * Created by dobyeongsu on 2015. 11. 10..
 */
import React from 'react';
import Radium from 'radium';

import styles from './HeadLineStyle';

let HeadLine = React.createClass({
  displayName: 'HeadLine',
  propTypes: {
    title: React.PropTypes.string,
    rightMenu: React.PropTypes.bool
  },
  getInitialState: function () {
    return {
      clubSubscribed: false
    };
  },
  toggleSub() {
    this.setState({clubSubscribed: !this.state.clubSubscribed});
  },
  render() {
    let {title, rightMenu} = this.props;
    let isSub = this.state.clubSubscribed;

    title = title || '고블린 클럽';
    if (typeof rightMenu === 'undefined') {
      rightMenu = true;
    }

    return (
      <div style={styles.container}>
        {
          rightMenu &&
          <div style={styles.menu}>
            <a href="#" style={styles.menuItem}>{'인기순'}</a>
            {'|'}
            <a href="#" style={styles.menuItem}>{'최신순'}</a>
          </div>
        }

        {
          <i className={'fa ' + (isSub ? 'fa-heart' : 'fa-heart-o')} onClick={this.toggleSub} style={styles.subs}/>
        }
        <h2 style={styles.title}>{title}</h2>
      </div>
    );
  }
});

export default Radium(HeadLine);

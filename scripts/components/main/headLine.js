/**
 * Created by dobyeongsu on 2015. 11. 10..
 */
import React from 'react';
import Radium from 'radium';

import styles from '../Style/style_headline';

let HeadLine = React.createClass({
  displayName: 'HeadLine',
  render() {
    return (
      <div style={styles.container}>
        <div style={styles.menu}>
          <a href='#' style={styles.menuItem}>{'최신순'}</a>
          {'|'}
          <a href='#' style={styles.menuItem}>{'인기순'}</a>
        </div>
        <h2 style={styles.title}>{'오늘의 베스트'}</h2>
      </div>
    );
  }
});

export default Radium(HeadLine);

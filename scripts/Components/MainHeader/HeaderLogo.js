/**
 * Created by dobyeongsu on 2016. 1. 9..
 */
import React from 'react';

import {Link} from 'react-router';
import {NavbarBrand} from 'react-bootstrap';

import styles from './HeaderStyle';

let HeaderLogo = React.createClass({
  displayName: 'HeaderLogo',
  propTypes: {

  },
  render() {
    return (
      <NavbarBrand>
        <Link to="/" style={styles.logo}>{'Gobblin Club'}</Link>
      </NavbarBrand>
    );
  }
});

export default HeaderLogo;

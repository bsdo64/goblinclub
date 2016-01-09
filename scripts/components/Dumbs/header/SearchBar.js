import React from 'react';
import Radium from 'radium';
import {Input} from 'react-bootstrap';

import styles from '../../Style/style_header';

let SearchBar = React.createClass({
  displayName: 'SearchBar',
  propTypes: {

  },
  render() {
    return (
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
    );
  }
});

export default Radium(SearchBar);

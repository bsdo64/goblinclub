/**
 * Created by dobyeongsu on 2015. 10. 15..
 */
import React from 'react';
import Radium from 'radium';

import {HeadLine} from '../Dumbs/index';
import styles from '../Style/style_main';

let Main = React.createClass({
  displayName: 'Main',
  propTypes: {
    mainSection: React.PropTypes.element.isRequired
  },

  render() {
    return (
      <div style={styles.main}>

        <div id="bestPosts" style={styles.mainBox}>
          <HeadLine />

          <div id="Section" className="nano" style={styles.contents}>
            <div className="nano-content" style={styles.scrollContent}>
              {this.props.mainSection}
            </div>
          </div>

        </div>
      </div>
    );
  }
});

export default Radium(Main);

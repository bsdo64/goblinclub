/**
 * Created by dobyeongsu on 2015. 10. 15..
 */
import React from 'react';
import Radium from 'radium';

import {HeadLine} from '../../Components/index';
import {Main as styles} from '../Styles/index';

let Main = React.createClass({
  displayName: 'Main',
  propTypes: {
    mainSection: React.PropTypes.element.isRequired
  },
  componentDidMount() {
    $('.nano').nanoScroller();
    $('.nano-content').scrollTop(0);
  },

  render() {
    return (
      <div style={styles.main}>

        <div id="bestPosts" style={styles.mainBox}>
          <HeadLine />

          <div className="nano" style={styles.contents}>
            <div className="nano-content" style={styles.scrollContent}>
              {this.props.mainSection}
            </div>
          </div>

        </div>
      </div>
    );
  }
});

export default Main = Radium(Main);

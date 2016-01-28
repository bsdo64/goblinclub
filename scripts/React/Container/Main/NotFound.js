/**
 * Created by dobyeongsu on 2015. 11. 13..
 */
import React from 'react';
import Radium from 'radium';
import {Link} from 'react-router';

import PostActions from '../../../Flux/Actions/PostActions';
import styles from '../../style/style_post';

let NotFound = React.createClass({
  displayName: 'NotFound',
  propTypes: {

  },
  componentDidMount() {
    PostActions.resetNotFound();
  },
  render() {
    return (
      <div style={styles.posts.container}>
        <div style={[styles.posts.listObj, styles.posts.textCenter]}>
          <div>
            <img alt="Error: 404" src="//www.dropbox.com/static/images/psychobox.png" />
          </div>
          <div>
            <h1>{'오류(404)'}</h1>
            {'찾으려는 페이지가 없습니다. 도움이 필요한 경우 Gobblin CLub의 '}
            <Link to="/">{'도움말 센터'}</Link>
            {' 및 '}
            <Link to="/">{'포럼'}</Link>
            {' 을 참조하거나 '}
            <Link to="/">{'홈'}</Link>
            {' 으로 돌아가세요.'}
          </div>
        </div>
      </div>
    );
  }
});

export default Radium(NotFound);

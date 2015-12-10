/**
 * Created by dobyeongsu on 2015. 11. 13..
 */
import React from 'react';
import Radium from 'radium';
import _ from 'lodash';
import connectToStores from '../../../node_modules/alt/utils/connectToStores';
import UserStore from '../../Stores/UserStore';
import PostStore from '../../Stores/PostStore';

import {BestPostList} from '../../Components/index';
import styles from '../../Components/Style/style_post';

let Best = React.createClass({
  displayName: 'Best',
  propTypes: {
    PostStore: React.PropTypes.object.isRequired
  },
  componentWillMount() {
    console.log('Best, componentWillMount');
  },
  componentDidMount() {
    console.log('Best, componentDidMount');
  },
  render() {
    const {loadSuccess, bestList} = this.props.PostStore;
    const wrapper = function (posts) {
      return posts.map((post) => {
        return <BestPostList key={post.uid} post={post}/>;
      });
    };
    return (
      loadSuccess && !_.isEmpty(bestList) &&
      <div>
        <ul style={styles.posts.container}>
          {wrapper(bestList)}
        </ul>
      </div>
    );
  }
});

Best = connectToStores({
  getStores() {
    // this will handle the listening/unlistening for you
    return [PostStore, UserStore];
  },

  getPropsFromStores() {
    // this is the data that gets passed down as props
    return {
      PostStore: PostStore.getState(),
      UserStore: UserStore.getState()
    };
  }
}, Radium(Best));
export default Best;

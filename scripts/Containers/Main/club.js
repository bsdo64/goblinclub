/**
 * Created by dobyeongsu on 2015. 11. 13..
 */
import React from 'react';
import Radium from 'radium';
import _ from 'lodash';
import connectToStores from '../../../node_modules/alt/utils/connectToStores';
import PostStore from '../../Stores/PostStore';

import {ClubPostList} from '../../Components/index';
import styles from '../../Components/Style/style_post';

let Club = React.createClass({
  displayName: 'Club',
  propTypes: {
    PostStore: React.PropTypes.object.isRequired
  },
  componentWillMount() {
    console.log('Club, componentWillMount');
    console.log(this.props);
  },
  componentDidMount() {
    console.log('Club, componentDidMount');
  },

  render() {
    const {postList} = this.props.PostStore;
    const wrapper = function (posts) {
      return posts.map((post) => {
        return <ClubPostList key={post.uid} post={post}/>;
      });
    };
    return (
      !_.isEmpty(postList) &&
      <div>
        <ul style={styles.posts.container}>
          {
            wrapper(postList)
          }
        </ul>
      </div>
    );
  }
});

Club = connectToStores({
  getStores() {
    // this will handle the listening/unlistening for you
    return [PostStore];
  },

  getPropsFromStores() {
    // this is the data that gets passed down as props
    return {
      PostStore: PostStore.getState()
    };
  }
}, Radium(Club));

export default Club;

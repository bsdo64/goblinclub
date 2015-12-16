/**
 * Created by DoByeongSu on 2015. 11. 13..
 *
 */
import React from 'react';
import Radium from 'radium';
import _ from 'lodash';

import connectToStores from '../../../node_modules/alt/utils/connectToStores';
import UserStore from '../../Stores/UserStore';
import PostStore from '../../Stores/PostStore';
import PostActions from '../../Actions/PostActions';

import {CardPostItem, ThreadPostList} from '../../Components/index';

import styles from '../../Components/Style/style_post';

let Post = React.createClass({
  displayName: 'Post',
  propTypes: {
    PostStore: React.PropTypes.shape({
      readingPost: React.PropTypes.object,
      postList: React.PropTypes.array,
      commentList: React.PropTypes.array
    }),
    params: React.PropTypes.object
  },

  componentWillMount() {
    const params = this.props.params;
    PostActions.getClubPostLists(params);
  },

  componentDidMount() {
    console.log('Post, componentDidMount', this.props);
  },

  componentWillReceiveProps(nextProps) {
    if (this.props.params.article !== nextProps.params.article) {
      const params = nextProps.params;
      PostActions.getClubPostLists(params);
    }
  },

  render() {
    const {readingPost, postList, commentList} = this.props.PostStore;

    return (
      <div>
        {
          !_.isEmpty(readingPost) &&
          <ul style={styles.posts.container}>
            <li style={styles.posts.post}>
              <CardPostItem commentList={commentList} hasComment={true}
                            key={readingPost.uid} post={readingPost}/>
            </li>
          </ul>
        }

        {
          !_.isEmpty(postList) &&
          <ThreadPostList {...this.props} hasHeadLine={true}/>
        }
      </div>
    );
  }
});

Post = connectToStores({
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
}, Radium(Post));

export default Post;

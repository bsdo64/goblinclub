/**
 * Created by DoByeongSu on 2015. 11. 13..
 *
 */
import React from 'react';
import Radium from 'radium';
import _ from 'lodash';

import connectToStores from 'alt-utils/lib/connectToStores';
import UserStore from '../../../Flux/Stores/UserStore';
import PostStore from '../../../Flux/Stores/PostStore';
import PostActions from '../../../Flux/Actions/PostActions';

import {CardPostItem, ThreadPostList} from '../../../Components/Dumbs/index';

import styles from '../../../Components/Style/style_post';

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
  statics: {
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
  },

  componentWillMount() {
    const params = this.props.params;
    PostActions.getClubPostLists(params);
  },

  componentDidMount() {
    console.log('Post, componentDidMount');
    $('.nano-content').scrollTop(0);
  },

  componentWillReceiveProps(nextProps) {
    if (this.props.params.article !== nextProps.params.article) {
      const params = nextProps.params;
      PostActions.getClubPostLists(params);
      $('.nano-content').scrollTop(0);
    }

    console.log('Post, componentWillReceiveProps');
    if (nextProps.PostStore.status === 404) {
      this.props.history.pushState(
        null,
        nextProps.PostStore.redirectTo
      );
    }
  },

  render() {
    const {readingPost, postList, commentList} = this.props.PostStore;
    const {auth} = this.props.UserStore;

    return (
      <div>
        {
          !_.isEmpty(readingPost) &&
          <ul style={styles.posts.container}>
            <li style={styles.posts.post}>
              <CardPostItem auth={auth} commentList={commentList}
                            hasComment={true}
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

export default connectToStores(Radium(Post));

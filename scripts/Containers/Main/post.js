/**
 * Created by dobyeongsu on 2015. 11. 13..
 */
import React from 'react';
import Radium from 'radium';
import _ from 'lodash';

import connectToStores from '../../../node_modules/alt/utils/connectToStores';
import UserStore from '../../Stores/UserStore';
import PostStore from '../../Stores/PostStore';
import PostActions from '../../Actions/PostActions';

import {PostPage, ClubPostList, HeadLine} from '../../Components/index';

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
  },

  componentDidMount() {
    console.log('Post, componentDidMount', this.props);
    const params = this.props.params;
  },

  componentWillReceiveProps(nextProps) {
    if (this.props.params.article !== nextProps.params.article) {
      const params = nextProps.params;
      PostActions.getClubPostLists(params);
    }
  },

  render() {
    const {readingPost, postList, commentList} = this.props.PostStore;
    const {params} = this.props;
    const wrapper = function (post) {
      return (
        <PostPage commentList={commentList} key={post.uid}
                  post={post} />
      );
    };
    const listWrapper = function (posts) {
      return posts.map((post) => {
        return <ClubPostList key={post.uid} post={post} params={params}/>;
      });
    };
    return (
      <div>
        {
          !_.isEmpty(readingPost) && !_.isEmpty(postList) &&
          <div>
            <ul style={styles.posts.container}>
              {
                wrapper(readingPost)
              }
            </ul>
            <ul style={styles.posts.container}>
              <li><HeadLine /></li>
              {
                listWrapper(postList)
              }
            </ul>
          </div>
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

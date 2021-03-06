/**
 * Created by DoByeongSu on 2015. 11. 13..
 *
 */
import React from 'react';

import _ from 'lodash';
import {browserHistory} from 'react-router';

import connectToStores from '../../../node_modules/alt-utils/lib/connectToStores';
import UserStore from '../../Flux/Stores/UserStore';
import PostStore from '../../Flux/Stores/PostStore';
import PostActions from '../../Flux/Actions/PostActions';

import CardPostItem from '../PostsOfBest/CardPostItem';
import ThreadPostList from '../PostsByClub/ThreadPostList';
import ClubPagination from '../PostsByClub/ClubPagination';

import styles from './PostStyle';

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

  componentWillUnmount() {
    PostActions.removeClubPostLists();
  },

  componentDidMount() {
    console.log('Post, componentDidMount');
    $('#Section .nano-content').scrollTop(0);
    this.setScroller();
  },

  componentWillReceiveProps(nextProps) {
    if (this.props.params.article !== nextProps.params.article) {
      const params = nextProps.params;
      PostActions.getClubPostLists(params);
      $('#Section .nano-content').scrollTop(0);
    }

    console.log('Post, componentWillReceiveProps');
    if (nextProps.PostStore.status === 404) {
      browserHistory.push(nextProps.PostStore.redirectTo);
    }
    this.setScroller();
  },

  setScroller() {
    setTimeout(function () {
      $('#Section').nanoScroller();
    }, 200);
  },

  render() {
    const {readingPost, postList, commentList} = this.props.PostStore;
    const {auth, authSuccess} = this.props.UserStore;

    return (
      <div>
        {
          !_.isEmpty(readingPost) &&
          <ul style={styles.container}>
            <li style={styles.post}>
              <CardPostItem auth={auth} authSuccess={authSuccess}
                            commentList={commentList}
                            hasComment={true}
                            key={readingPost.uid} post={readingPost}/>
            </li>
          </ul>
        }
        {
          !_.isEmpty(postList) &&
          <div>
            <ThreadPostList hasHeadLine={true} {...this.props}/>

            <ClubPagination {...this.props}/>
          </div>
        }
      </div>
    );
  }
});

export default connectToStores(Post);

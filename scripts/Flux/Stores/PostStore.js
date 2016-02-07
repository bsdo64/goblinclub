import alt from '../../Utils/alt';
import assign from 'object-assign';
import _ from 'lodash';

import AppActions from '../../Components/App/AppActions';
import PostActions from '../Actions/PostActions';

import AppStore from './../../Components/App/AppStore';

class PostStore {
  constructor() {
    this.bindListeners({
      initBest: AppActions.initBest
    });
    this.bindActions(PostActions);

    this.state = {
      post: '',
      writingPost: {
        defaultClubList : 1,
        subscribeClubList : []
      },
      bestList: []
    };
  }

  initBest(stores) {
    this.waitFor(AppStore);

    let state = this.state;
    state.bestList = stores.PostStore.bestList;

    this.setState(state);
  }

  onSetDefaultClubList(club) {
    let state = this.state;
    assign(state, {writingPost: {defaultClubList: club}});

    this.setState(state);
  }

  onSetSubscribeClubList(clubList) {
    let state = this.state;
    state.writingPost.subscribeClubList = clubList;

    this.setState(state);
  }

  onSubmitPost(post) {
    let state = this.state;
    state.writingPost.success = true;
    state.writingPost.post = post;
    state.readingPost = post;

    this.setState(state);
  }

  onResetWritingPost() {
    let writingPost = {
      defaultClubList: 1,
      subscribeClubList: []
    }

    this.setState({writingPost: writingPost});
  }

  onGetClubPostLists(data) {
    let state = this.state;

    state.readingPost = data.PostStore.readingPost;
    state.postList = data.PostStore.postList;
    state.commentList = data.PostStore.commentList;

    this.setState(state);
  }

  onRedirectToNotFound(err) {
    let state = this.state;
    state = {
      redirectTo : '/notFound',
      status : 404,
      error: err
    };

    this.setState(state);
  }

  onResetNotFound(err) {
    let state = {
      post: null,
      writingPost: {
        defaultClubList: null,
        subscribeClubList: []
      },
      bestList: []
    };

    this.setState(state);
  }

  onGetPostsByClub(data) {
    let state = this.state;

    state.postList = data.PostStore.postList;

    this.setState(state);
  }

  onMoreBest(StoreData) {
    let posts = StoreData.PostStore.bestList;
    let state = this.state;
    for (let i = 0; i < posts.length; i += 1) {
      state.bestList.push(posts[i]);
    }

    this.setState(state);
  }

  onLike(uid) {
    let bestList = this.state.bestList;
    let postIndex = _.findIndex(bestList, {uid: uid});

    bestList[postIndex].voteCount = bestList[postIndex].voteCount + 1;
    bestList[postIndex].likeCount = bestList[postIndex].likeCount + 1;

    this.setState({bestList: bestList});
  }

  onDislike(uid) {
    let bestList = this.state.bestList;
    let postIndex = _.findIndex(bestList, {uid: uid});

    bestList[postIndex].voteCount = bestList[postIndex].voteCount - 1;
    bestList[postIndex].dislikeCount = bestList[postIndex].dislikeCount - 1;

    this.setState({bestList: bestList});
  }
}

export default alt.createStore(PostStore, 'PostStore');

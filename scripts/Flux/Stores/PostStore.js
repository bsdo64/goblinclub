import alt from '../../Utils/alt';
import assign from 'object-assign';

import AppActions from '../Actions/AppActions';
import PostActions from '../Actions/PostActions';

import AppStore from './AppStore';

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

  onRedirectToNotFound() {
    let state = this.state;
    state = {
      redirectTo : '/notFound',
      status : 404
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

  onLike() {

  }

  onDislike() {

  }
}

export default alt.createStore(PostStore, 'PostStore');

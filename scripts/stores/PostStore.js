import alt from '../alt';
import AppActions from '../Actions/AppActions';
import PostActions from '../Actions/PostActions';

import AppStore from '../Stores/AppStore';

class PostStore {
  constructor() {
    this.bindActions(PostActions);
    this.bindListeners({
      initBest: AppActions.INIT_BEST
    });

    this.state = {
      post: '',
      writingPost: {},
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
    state.writingPost.defaultClubList = club;

    this.setState(state);
  }

  onSetSubscribeClubList(clubList) {
    let state = this.state;
    state.writingPost.subscribeClubList = clubList;

    this.setState(state);
  }

  onSubmitPost(post) {
    console.log('onSubmitPost');
    let state = this.state;
    state.writingPost.success = true;
    state.writingPost.post = post;
    state.readingPost = post;

    this.setState(state);
  }

  onSubmitSuccess(post) {
    console.log('onSubmitSuccess');
    let state = this.state;
    state.writingPost.success = true;
    state.writingPost.post = post;
    state.readingPost = post;

    this.setState(state);
  }

  onGetClubPostLists(data) {
    let state = this.state;
    state.readingPost = data.PostStore.readingPost;
    state.postList = data.PostStore.postList;
    state.commentList = data.PostStore.commentList;

    this.setState(state);
  }

}

export default alt.createStore(PostStore, 'PostStore');

import alt from '../alt';
import PostActions from '../Actions/PostActions';

class PostStore {
  constructor() {
    this.bindActions(PostActions);

    this.state = {
      post: '',
      writingPost: {}
    };
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

    this.setState(state);
  }

}

export default alt.createStore(PostStore, 'PostStore');

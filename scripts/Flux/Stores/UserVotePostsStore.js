import alt from '../../Utils/alt';

class UserVotePostsStore {
  constructor() {
    this.state = {
      userHas: {}
    };
  }
}

export default alt.createStore(UserVotePostsStore, 'UserVotePostsStore');

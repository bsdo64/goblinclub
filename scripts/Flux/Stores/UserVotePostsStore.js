import alt from '../../alt';

class UserVotePostsStore {
  constructor() {
    this.state = {
      userHas: {}
    };
  }
}

export default UserVotePostsStore = alt.createStore(UserVotePostsStore);

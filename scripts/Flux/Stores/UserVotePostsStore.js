import alt from '../../utils/alt';

class UserVotePostsStore {
  constructor() {
    this.state = {
      userHas: {}
    };
  }
}

export default UserVotePostsStore = alt.createStore(UserVotePostsStore);

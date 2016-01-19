import alt from '../../alt';

class UserVoteCommentsStore {
  constructor() {
    this.state = {
      userHas: {}
    };
  }
}

export default UserVoteCommentsStore = alt.createStore(UserVoteCommentsStore, 'UserVoteCommentsStore');

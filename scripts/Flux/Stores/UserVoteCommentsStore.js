import alt from '../../Utils/alt';

class UserVoteCommentsStore {
  constructor() {
    this.state = {
      userHas: {}
    };
  }
}

export default alt.createStore(UserVoteCommentsStore, 'UserVoteCommentsStore');

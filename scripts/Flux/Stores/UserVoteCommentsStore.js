import alt from '../../utils/alt';

class UserVoteCommentsStore {
  constructor() {
    this.state = {
      userHas: {}
    };
  }
}

export default alt.createStore(UserVoteCommentsStore, 'UserVoteCommentsStore');

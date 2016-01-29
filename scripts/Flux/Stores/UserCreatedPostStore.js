import alt from '../../utils/alt';

class UserCreatedPostStore {
  constructor() {
    this.state = {
      userHas: {}
    };
  }
}

export default alt.createStore(UserCreatedPostStore, 'UserCreatedPostStore');

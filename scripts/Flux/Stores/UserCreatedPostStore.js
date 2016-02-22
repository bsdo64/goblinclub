import alt from '../../Utils/alt';

class UserCreatedPostStore {
  constructor() {
    this.state = {
      userHas: {}
    };
  }
}

export default alt.createStore(UserCreatedPostStore, 'UserCreatedPostStore');

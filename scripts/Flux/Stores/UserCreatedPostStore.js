import alt from '../../alt';

class UserCreatedPostStore {
  constructor() {
    this.state = {
      userHas: {}
    };
  }
}

export default UserCreatedPostStore = alt.createStore(UserCreatedPostStore, 'UserCreatedPostStore');

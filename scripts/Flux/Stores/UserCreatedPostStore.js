import alt from '../../utils/alt';

class UserCreatedPostStore {
  constructor() {
    this.state = {
      userHas: {}
    };
  }
}

export default UserCreatedPostStore = alt.createStore(UserCreatedPostStore);

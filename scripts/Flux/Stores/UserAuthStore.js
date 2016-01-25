import alt from '../../alt';

class UserAuthStore {
  constructor() {
    this.state = {
      userHas: {}
    };
  }
}

export default UserAuthStore = alt.createStore(UserAuthStore);

import alt from '../../Utils/alt';

class UserAuthStore {
  constructor() {
    this.state = {
      userHas: {}
    };
  }
}

export default alt.createStore(UserAuthStore, 'UserAuthStore');

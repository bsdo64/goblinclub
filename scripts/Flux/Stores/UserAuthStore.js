import alt from '../../utils/alt';

class UserAuthStore {
  constructor() {
    this.state = {
      userHas: {}
    };
  }
}

export default alt.createStore(UserAuthStore, 'UserAuthStore');

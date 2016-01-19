import alt from '../../alt';

class UserSubscribedClubStore {
  constructor() {
    this.state = {
      userHas: {}
    };
  }
}

export default UserSubscribedClubStore = alt.createStore(UserSubscribedClubStore, 'UserSubscribedClubStore');

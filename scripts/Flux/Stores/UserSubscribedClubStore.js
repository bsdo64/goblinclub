import alt from '../../utils/alt';

class UserSubscribedClubStore {
  constructor() {
    this.state = {
      userHas: {}
    };
  }
}

export default UserSubscribedClubStore = alt.createStore(UserSubscribedClubStore);

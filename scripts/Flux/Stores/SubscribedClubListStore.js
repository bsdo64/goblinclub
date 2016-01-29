import alt from '../../utils/alt';

class SubscribedClubListStore {
  constructor() {
    this.state = {
      userHas: {}
    };
  }
}

export default alt.createStore(SubscribedClubListStore, 'SubscribedClubListStore');

import alt from '../../utils/alt';

class SubscribedClubListStore {
  constructor() {
    this.state = {
      userHas: {}
    };
  }
}

export default SubscribedClubListStore = alt.createStore(SubscribedClubListStore);

import alt from '../../utils/alt';

class DefaultClubListStore {
  constructor() {
    this.state = {
      userHas: {}
    };
  }
}

export default alt.createStore(DefaultClubListStore, 'DefaultClubListStore');

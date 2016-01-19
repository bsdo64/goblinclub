import alt from '../../alt';

class ClubStore {
  constructor() {
    this.state = {
      userHas: {}
    };
  }
}

export default ClubStore = alt.createStore(ClubStore, 'ClubStore');

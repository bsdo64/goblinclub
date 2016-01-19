import alt from '../../alt';

class Club {
  constructor() {
    this.state = {
      userHas: {}
    };
  }
}

const ClubStore = alt.createStore(Club, 'ClubStore');
export default ClubStore;

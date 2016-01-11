import alt from '../alt';

class ClubStore {
  constructor() {
    this.state = {
      userHas: {}
    };
  }
}

module.exports = alt.createStore(ClubStore, 'ClubStore');

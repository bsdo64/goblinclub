import alt from '../../Utils/alt';

class HistoryStore {
  constructor() {
    this.state = {
      userHas: {}
    };
  }
}

export default alt.createStore(HistoryStore, 'HistoryStore');

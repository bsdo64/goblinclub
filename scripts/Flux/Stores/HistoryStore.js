import alt from '../../utils/alt';

class HistoryStore {
  constructor() {
    this.state = {
      userHas: {}
    };
  }
}

export default alt.createStore(HistoryStore, 'HistoryStore');

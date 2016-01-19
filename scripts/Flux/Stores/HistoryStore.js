import alt from '../../alt';

class HistoryStore {
  constructor() {
    this.state = {
      userHas: {}
    };
  }
}

export default HistoryStore = alt.createStore(HistoryStore, 'HistoryStore');

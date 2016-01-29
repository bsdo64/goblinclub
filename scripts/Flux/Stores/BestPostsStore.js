import alt from '../../utils/alt';

class BestPostStore {
  constructor() {
    this.state = {
      userHas: {}
    };
  }
}

export default alt.createStore(BestPostStore, 'BestPostStore');

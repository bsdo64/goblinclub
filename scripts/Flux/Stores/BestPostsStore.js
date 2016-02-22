import alt from '../../Utils/alt';

class BestPostStore {
  constructor() {
    this.state = {
      userHas: {}
    };
  }
}

export default alt.createStore(BestPostStore, 'BestPostStore');

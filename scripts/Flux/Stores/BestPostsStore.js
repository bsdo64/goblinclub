import alt from '../../utils/alt';

class BestPostStore {
  constructor() {
    this.state = {
      userHas: {}
    };
  }
}

export default BestPostStore = alt.createStore(BestPostStore);

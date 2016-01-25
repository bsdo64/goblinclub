import alt from '../../alt';

class DefaultClubListStore {
  constructor() {
    this.state = {
      userHas: {}
    };
  }
}

export default DefaultClubListStore = alt.createStore(DefaultClubListStore);

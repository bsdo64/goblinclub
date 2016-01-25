import alt from '../../alt';

class ClubPostsStore {
  constructor() {
    this.state = {
      userHas: {}
    };
  }
}

export default ClubPostsStore = alt.createStore(ClubPostsStore);

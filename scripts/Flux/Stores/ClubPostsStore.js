import alt from '../../Utils/alt';

class ClubPostsStore {
  constructor() {
    this.state = {
      userHas: {}
    };
  }
}

export default alt.createStore(ClubPostsStore, 'ClubPostsStore');

import alt from '../../../Utils/alt';
import ClubSectionActions from './ClubSectionActions';

class ClubSectionStore {
  constructor() {
    this.bindActions(ClubSectionActions);

    this.state = {};
  }

  onRequestPosts(result) {
    this.setState({
      list: result
    });
  }
}

export default alt.createStore(ClubSectionStore, 'ClubSectionStore');

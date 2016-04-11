import alt from '../../../Utils/alt';
import PostSectionActions from './PostSectionActions';

class PostSectionStore {
  constructor() {
    this.bindActions(PostSectionActions);

    this.state = {};
  }

  onRequestComment(comments) {
    this.setState({Comments: comments});
  }
}

export default alt.createStore(PostSectionStore, 'PostSectionStore');

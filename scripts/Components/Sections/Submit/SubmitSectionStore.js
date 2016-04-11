import alt from '../../../Utils/alt';
import SubmitActions from './SubmitActions';

class SubmitSectionStore {
  constructor() {
    this.bindActions(SubmitActions);

    this.state = {
      
    };
  }

  onRequestSubmitPost(post) {
    if (post.id) {
      this.setState({
        submitSuccess: post.id
      });
    }
  }
}

export default alt.createStore(SubmitSectionStore, 'SubmitSectionStore');

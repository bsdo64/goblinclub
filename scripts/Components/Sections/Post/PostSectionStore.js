import alt from '../../../Utils/alt';
import PostSectionActions from './PostSectionActions';

class PostSectionStore {
  constructor() {
    this.bindActions(PostSectionActions);

    this.state = {};
  }

  onCheckEmail(result) {
    if (result === 'ok') {
      this.setState({
        emailDup: false
      });
    } else {
      this.setState({
        emailDup: true
      });
    }
  }
  onCheckNick(result) {
    if (result === 'ok') {
      this.setState({
        nickDup: false
      });
    } else {
      this.setState({
        nickDup: true
      });
    }
  }
  onSubmit(result) {
    if (result === 'ok') {
      this.setState({
        submitResult: true
      });
    } else {
      this.setState({
        submitResult: false
      });
    }
  }
  onEmailVerify(result) {
    this.setState({verifyCode: result.verifyCode});
  }
  onEmailVerifySuccess(result) {
    this.setState({
      emailVerifySuccess: true,
      emailVerifyFail: false
    });
  }
  onEmailVerifyFail(result) {
    this.setState({emailVerifyFail: result});
  }
}

export default alt.createStore(PostSectionStore, 'PostSectionStore');

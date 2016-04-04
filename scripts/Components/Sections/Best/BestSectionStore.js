import alt from '../../../Utils/alt';
import BestSectionActions from './BestSectionActions';

class BestSectionStore {
  constructor() {
    this.bindActions(BestSectionActions);

    this.state = {
      emailDup: null,
      nickDup: null,
      submitResult: false,
      verifyCode: null,
      emailVerifySuccess: false,
      emailVerifyFail: false
    };
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

export default alt.createStore(BestSectionStore, 'BestSectionStore');

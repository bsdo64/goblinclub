import alt from '../../Utils/alt';
import LoginActions from './LoginActions';

class LoginStore {
  constructor() {
    this.state = {
      openLoginModal: false
    };

    this.bindActions(LoginActions);
  }

  onOpenLoginModal() {
    this.setState({openLoginModal: true});
  }
  onCloseLoginModal() {
    this.setState({openLoginModal: false});
  }
  onRequestLogin(result) {
    if (result.result === 'ok') {
      this.setState({loginFail: false, loginSuccess: true});
    } else {
      this.setState({loginFail: true});
    }
  }
}

export default alt.createStore(LoginStore, 'LoginStore');

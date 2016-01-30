import alt from '../../Utils/alt';
import UserActions from '../Actions/UserActions';

class UserStore {
  constructor() {
    this.bindActions(UserActions);

    this.state = {
      auth: {
        token: null,
        user: {}
      },
      loadingAuth: false,
      loadedAuth: false,
      authFail: false,
      authSuccess: false
    };
  }

  onLoginUser() {
    this.setState({loadingAuth: true});
  }

  onUiValidateFail(error) {
    this.setState({
      loadingAuth: false,
      authFail: true,
      authSuccess: false,
      loadedAuth: true,
      uiValidate: error,
      serverValidate: null
    });
  }

  onServerValidateFail(error) {
    this.setState({
      loadingAuth: false,
      authFail: true,
      authSuccess: false,
      loadedAuth: true,
      uiValidate: null,
      serverValidate: error
    });
  }

  onSuccess(result) {
    this.setState({
      auth: {
        loginAt: new Date(),
        state: 'login',
        user: {
          email: result.user.email,
          nick: result.user.nick
        }
      },
      user: {
        email: result.user.email,
        nick: result.user.nick
      },
      authFail: false,
      loadingAuth: false,
      loadedAuth: true,
      authSuccess: true
    });
  }

  onIsLogined(token) {
    let u = {id: 'bsdo', name: 'bsdo-name'};
    this.setState({
      user: u, token: token
    });
  }
}

export default alt.createStore(UserStore, 'UserStore');

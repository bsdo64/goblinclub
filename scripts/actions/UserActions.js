/**
 * Created by dobyeongsu on 2015. 10. 17..
 */
import alt from '../alt';
import Validator from '../Utils/validator';
import ApiClient from '../Utils/ApiClient';

class UserActions {
  loginUser(user) {
    this.dispatch();

    let uiValidator = new Validator();
    uiValidator.loginUser(user, (err, result) => {
      if (err) {
        this.dispatch(err);
      }

      if (result.result) {
        ApiClient.login(user, (errXHR, res) => {
          if (errXHR) {
            this.actions.serverFail(errXHR);
          } else if (res) {
            if (res.error) {
              res.error.type = 'loginUser';
              this.actions.serverValidateFail(res.error);
              return;
            }

            this.actions.success(res);
          }
        });
      } else {
        this.actions.uiValidateFail(result);
      }
    });
  }

  signinUser(newUser) {
    let uiValidator = new Validator();
    uiValidator.signinUser(newUser, (err, result) => {
      if (err) {
        this.dispatch(err);
      }

      if (result.result) {
        ApiClient.signin(newUser, (errXHR, res) => {
          if (errXHR) {
            this.actions.serverFail(errXHR);
          } else if (res) {
            if (res.error) {
              res.error.type = 'signinUser';
              this.actions.serverValidateFail(res.error);
              return;
            }
            this.actions.success(res);
          }
        });
      } else {
        this.actions.uiValidateFail(result);
      }
    });
  }

  uiValidateFail(result) {
    this.dispatch(result);
  }

  serverFail(err) {
    this.dispatch(err);
  }

  serverValidateFail(err) {
    this.dispatch(err);
  }

  success(res) {
    this.dispatch(res);
  }

  isLogined(token) {
    this.dispatch(token);
  }
}

export default alt.createActions(UserActions);

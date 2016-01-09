/**
 * Created by dobyeongsu on 2015. 10. 17..
 */
import alt from '../alt';
import Validator from '../Utils/validator';
import Api from '../Utils/ApiClient';

class UserActions {
  loginUser(user) {
    let uiValidator = new Validator();
    let Apis = new Api();
    let slf = this;

    uiValidator.loginUser(user, (err, result) => {
      if (err) {
        return (err);
      }

      if (result.result) {
        Apis
          .post('/login', user)
          .then(function (res) {
            slf.success(res);
          })
          .catch(function (error) {
            if (error) {
              slf.serverFail(error);
            }
            if (error.error) {
              error.error.type = 'loginUser';
              slf.serverValidateFail(error.error);
            }
          });
      } else {
        slf.uiValidateFail(result);
      }
    });
  }

  signinUser(newUser) {
    let uiValidator = new Validator();
    let slf = this;

    uiValidator.signinUser(newUser, (err, result) => {
      if (err) {
        return (err);
      }

      if (result.result) {
        Apis
          .post('/signin', newUser)
          .then(function (res) {
            slf.success(res);
          })
          .catch(function (error) {
            if (error) {
              slf.serverFail(error);
            }
            if (error.error) {
              error.error.type = 'loginUser';
              slf.serverValidateFail(error.error);
            }
          });
      } else {
        slf.uiValidateFail(result);
      }
    });
  }

  uiValidateFail(result) {
    return (result);
  }

  serverFail(err) {
    return (err);
  }

  serverValidateFail(err) {
    return (err);
  }

  success(res) {
    return (res);
  }

  isLogined(token) {
    return (token);
  }
}

export default alt.createActions(UserActions);

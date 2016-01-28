/**
 * Created by dobyeongsu on 2015. 10. 17..
 */
import alt from '../../utils/alt';
import Api from '../../Utils/ApiClient';
import Validator from '../../Utils/validator';

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
            return null;
          })
          .catch(function (error) {
            if (error) {
              slf.serverFail(error);
              return null;
            }
            if (error.error) {
              error.error.type = 'loginUser';
              slf.serverValidateFail(error.error);
              return null;
            }
          });
      } else {
        slf.uiValidateFail(result);
        return null;
      }
    });
  }

  signinUser(newUser) {
    let uiValidator = new Validator();
    let Apis = new Api();
    uiValidator.signinUser(newUser, (err, result) => {
      if (err) {
        return (err);
      }

      if (result.result) {
        Apis
          .post('/signin', newUser)
          .then(function (res) {
            this.success(res);
          }.bind(this))
          .catch(function (error) {
            if (error) {
              this.serverFail(error);
              return null;
            }
            if (error.error) {
              error.error.type = 'loginUser';
              this.serverValidateFail(error.error);
              return null;
            }
          }.bind(this));
      } else {
        this.uiValidateFail(result);
        return null;
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

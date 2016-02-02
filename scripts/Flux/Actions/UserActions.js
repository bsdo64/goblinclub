/**
 * Created by dobyeongsu on 2015. 10. 17..
 */
import alt from '../../Utils/alt';
import Api from '../../Utils/ApiClient';
import Validator from '../../Utils/validator';

class UserActions {
  loginUser(user) {
    const uiValidator = new Validator();

    uiValidator.loginUser(user, (err, result) => {
      if (err) {
        return (err);
      }

      if (result.result) {
        Api
          .post('/login', user)
          .then(function (res) {
            return this.success(res);
          }.bind(this))
          .catch(function (error) {
            if (error) {
              return this.serverFail(error);
            }
            if (error.error) {
              error.error.type = 'loginUser';
              return this.serverValidateFail(error.error);
            }
          }.bind(this));
      } else {
        return this.uiValidateFail(result);
      }
    });
  }

  signinUser(newUser) {
    let uiValidator = new Validator();
    uiValidator.signinUser(newUser, (err, result) => {
      if (err) {
        return (err);
      }

      if (result.result) {
        Api
          .post('/signin', newUser)
          .then(function (res) {
            this.success(res);
          }.bind(this))
          .catch(function (error) {
            if (error) {
              return this.serverFail(error);
            }
            if (error.error) {
              error.error.type = 'loginUser';
              return this.serverValidateFail(error.error);
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

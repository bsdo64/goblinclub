/**
 * Created by dobyeongsu on 2015. 10. 17..
 */
import alt from '../alt';
import Validator from '../utils/validator'
import ApiClient from '../utils/ApiClient';


class UserActions {
    loginUser(user) {

        this.dispatch();

        var uiValidator = new Validator();
        uiValidator.loginUser(user, (err, result) => {
            if (err) this.dispatch(err);

            if (result.result) {
                this.actions.loginUser_uiValidateSuccess(result, user);
            } else {
                this.actions.uiValidateFail(result);
            }
        });
    }
    loginUser_uiValidateSuccess(uiValidator, user) {
        this.dispatch(uiValidator);

        ApiClient.login(user, (err, res) => {
            if( err ) {
                this.actions.serverFail(err);

            } else if ( res ) {
                if ( res.error ) {
                    res.error.type = 'loginUser';
                    this.actions.serverValidateFail(res.error);
                    return;
                }

                this.actions.success(res);
            }
        })
    }

    signinUser(newUser) {
        var uiValidator = new Validator();
        uiValidator.signinUser(newUser, (err, result) => {
            if (err) this.dispatch(err);

            if (result.result) {
                this.actions.signinUser_uiVaildateSuccess(result, newUser);
            } else {
                this.actions.uiValidateFail(result);
            }
        })
    }
    signinUser_uiVaildateSuccess(uiValidator, user) {
        this.dispatch(uiValidator);

        ApiClient.signin(user, (err, res) => {
            if( err ) {
                this.actions.serverFail(err);

            } else if ( res ) {
                if ( res.error ) {
                    res.error.type = 'signinUser';
                    this.actions.serverValidateFail(res.error);
                    return;
                }

                this.actions.success(res);
            }
        })
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
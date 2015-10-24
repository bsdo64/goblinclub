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
        uiValidator.loginUser(user, (result) => {
            if (result.result) {
                this.actions.loginUser_uiValidateSuccess(result, user);
            } else {
                this.actions.loginUser_uiValidateFail(result);
            }
        });
    }

    loginUser_uiValidateSuccess(uiValidator, user) {
        this.dispatch(uiValidator);

        ApiClient.login(user, (err, res) => {
            if( err ) {
                this.actions.loginUser_serverFail(err);

            } else if ( res ) {
                this.actions.loginSuccess(res);
            }
        })
    }
    loginUser_uiValidateFail(result) {
        this.dispatch(result);
    }

    loginUser_serverFail(err) {

    }

    loginSuccess(res) {
        this.dispatch(res);
    }

    isLogined(token) {
        this.dispatch(token);

    }
}

export default alt.createActions(UserActions);
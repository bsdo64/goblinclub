/**
 * Created by dobyeongsu on 2015. 10. 17..
 */
import alt from '../alt';
import Validator from '../utils/validator'

class UserActions {
    loginUser(user) {

        this.dispatch();

        var uiValidator = new Validator();
        uiValidator.loginUser(user, (result) => {
            if (result.result) {
                this.actions.loginUser_uiValidateSuccess(result);
            } else {
                this.actions.loginUser_uiValidateFail(result);
            }
        });
    }

    loginUser_uiValidateSuccess(result) {
        this.dispatch(result);


    }
    loginUser_uiValidateFail(result) {
        this.dispatch(result);
    }

    isLogined(token) {

        this.dispatch(token);

    }
}

export default alt.createActions(UserActions);
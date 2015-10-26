/**
 * Created by dobyeongsu on 2015. 10. 17..
 */
import alt from '../alt';
import _ from 'lodash'
import UserActions from '../Actions/UserActions'

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
            authSuccess: false,
            uiValidate: {}
        };

    }

    onLoginUser() {
        this.setState({loadingAuth : true});
    }
    onLoginUser_uiValidateFail(result) {

        this.setState({
            loadingAuth : false,
            authFail: true,
            authSuccess: false,
            loadedAuth: true,
            uiValidate: result
        });
    }
    onLoginUser_uiValidateSuccess(result) {
        this.setState({
            loadingAuth : true,
            authFail: false,
            authSuccess: false,
            uiValidate: result
        });
    }

    onLoginSuccess(result) {
        this.setState({
            auth: {
                token : result.token,
                user : result.user
            },
            authFail: false,
            loadingAuth: false,
            loadedAuth: true,
            authSuccess: true
        })
    }

    onIsLogined(token) {
        let u = {id : "bsdo", name : "bsdo-name"};
        this.setState({
            user : u, token : token
        });
    }

}

export default alt.createStore(UserStore, 'UserStore');
import alt from '../alt';
import _ from 'lodash'
import UserActions from '../Actions/UserActions'

class PostStore {
    constructor() {

        this.bindActions(UserActions);

        this.state = {
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

export default alt.createStore(PostStore, 'PostStore');
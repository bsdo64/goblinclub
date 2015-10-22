/**
 * Created by dobyeongsu on 2015. 10. 17..
 */
import alt from '../alt';
import _ from 'lodash'
import UserActions from '../Actions/UserActions'
import Immutable from 'immutable';

class UserStore {
    constructor() {

        this.bindActions(UserActions);

        this.state = Immutable.Map({
            auth: {
                token: {},
                user: {}
            },
            loadingAuth: false,
            loadedAuth: false,
            authFail: false,
            authSuccess: false
        });

    }

    onLoginUser() {
        var data = this.state.set('loadingAuth', true);
        this.setState(data);
    }
    onLoginUser_uiValidateFail(result) {
        var data = this.state.set('loadingAuth', false);
        data = data.set('authFail', true);
        data = data.set('authSuccess', false);
        data = data.set('uiValidate', result);
        this.setState(data)
    }
    onLoginUser_uiValidateSuccess(result) {
        var data = this.state.set('loadingAuth', true);
        data = data.set('authFail', false);
        data = data.set('uiValidate', result);
        this.setState(data);
    }

    onIsLogined(token) {
        let u = {id : "bsdo", name : "bsdo-name"};
        this.setState({
            user : u, token : token
        });
    }

}

export default alt.createStore(UserStore, 'UserStore');
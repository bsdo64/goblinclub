/**
 * Created by dobyeongsu on 2015. 10. 17..
 */
import alt from '../alt';
import _ from 'lodash'
import UserActions from '../Actions/UserActions'


class UserStore {
    constructor() {
        this.bindListeners({
            loginUser: UserActions.LOGIN_USER,
            isLogined: UserActions.IS_LOGINED
        });

        this.state = {
            user: {},
            token: {}
        };

    }

    loginUser(user) {

        this.setState({ user: user });
    }

    isLogined(token) {
        let u = {id : "bsdo", name : "bsdo-name"};
        this.setState({user : u, token : token});
    }
}

export default alt.createStore(UserStore, 'UserStore');
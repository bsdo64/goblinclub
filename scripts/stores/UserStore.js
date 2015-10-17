/**
 * Created by dobyeongsu on 2015. 10. 17..
 */
import alt from '../alt';
import UserActions from '../Actions/UserActions'

class UserStore {
    constructor() {
        this.bindListeners({
            loginUser: UserActions.LOGIN_USER
        });

        this.state = {
            user: {}
        };
    }

    loginUser(user) {
        this.setState({ user: user });
    }
}

export default alt.createStore(UserStore, 'UserStore');
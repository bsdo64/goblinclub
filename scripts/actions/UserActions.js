/**
 * Created by dobyeongsu on 2015. 10. 17..
 */
import alt from '../alt';

class UserActions {
    loginUser(user) {
        this.dispatch(user);
    }
}

export default alt.createActions(UserActions);
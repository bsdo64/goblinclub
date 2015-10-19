/**
 * Created by dobyeongsu on 2015. 10. 17..
 */
import alt from '../alt';

class UserActions {
    loginUser(user) {
        return (user);
    }

    isLogined(token) {
        return token
    }
}

export default alt.createActions(UserActions);
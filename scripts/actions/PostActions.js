/**
 * Created by dobyeongsu on 2015. 10. 17..
 */
import alt from '../alt';
import fetch from '../utils/ApiClient';
import UserStore from '../stores/UserStore';

class PostActions {
    submitPost(post) {
        let user = UserStore.getState().user;

        this.dispatch(post);
        
        fetch.submitPost(user, post, function(err, post) {
            if (err) return err;

            this.dispatch(post);
        })
    }
}

export default alt.createActions(PostActions);
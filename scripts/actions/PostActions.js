/**
 * Created by dobyeongsu on 2015. 10. 17..
 */
import alt from '../alt';
import fetch from '../Utils/ApiClient';
import UserStore from '../Stores/UserStore';
import PostStore from '../Stores/PostStore';

class PostActions {
    setDefaultClubList(club) {
        this.dispatch(club);
    }
    setSubscribeClubList(clubList) {
        this.dispatch(clubList);
    }
    submitPost(post) {
        let user = UserStore.getState().user;
        let writingPost = PostStore.getState().writingPost;

        var newPost = {
            ...post,
            defaultClubList: writingPost.defaultClubList,
            subscribeClubList: writingPost.subscribeClubList
        };
        user = {
            email: user.email
        };

        return function (dispatch) {
            fetch.submitPost(user, newPost, function(err, post) {
                if (err) return err;

                dispatch(post);
            });
        }
    }

    getClubPostLists() {
        let user = UserStore.getState().user;
        let writingPost = PostStore.getState().writingPost;

        console.log(user);
        console.log(writingPost);

        return function (dispatch) {
            fetch.getClubPostLists(user, writingPost, function(err, post) {
                if (err) return err;

                dispatch(post);
            })
        }
    }
}

export default alt.createActions(PostActions);
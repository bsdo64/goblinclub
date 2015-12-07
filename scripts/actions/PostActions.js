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
    let newPost = {
      ...post,
      defaultClubList: writingPost.defaultClubList,
      subscribeClubList: writingPost.subscribeClubList
    };
    user = {
      email: user.email
    };

    return function (dispatch) {
      fetch.submitPost(user, newPost, function (err, submittedPost) {
        if (err) {
          return err;
        }
        dispatch(submittedPost);
      });
    };
  }

  getClubPostLists(params) {
    let user = UserStore.getState().user;

    return function (dispatch) {
      fetch.getClubPost(user, params, function (err, data) {
        if (err) {
          return err;
        }
        dispatch(data);
      });
    };
  }
}

export default alt.createActions(PostActions);

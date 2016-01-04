/**
 * Created by dobyeongsu on 2015. 10. 17..
 */
import alt from '../alt';
import Api from '../Utils/ApiClient';
import UserStore from '../Stores/UserStore';
import PostStore from '../Stores/PostStore';

class PostActions {
  setDefaultClubList(club) {
    return club;
  }

  setSubscribeClubList(clubList) {
    return clubList;
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
      Api.submitPost(user, newPost, function (err, submittedPost) {
        if (err) {
          return err;
        }
        dispatch(submittedPost);
      });
    };
  }

  getClubPostLists(params) {
    let user = UserStore.getState().user;
    let slf = this;

    return function (dispatch) {
      Api.getClubPost(user, params, function (err, data) {
        if (err) {
          return slf.actions.redirectToNotFound();
        }
        dispatch(data);
      });
    };
  }

  getPostsByClub(params) {
    let slf = this;

    return function (dispatch) {
      Api.getPostsByClub(params, function (err, data) {
        if (err) {
          return slf.actions.redirectToNotFound();
        }
        dispatch(data);
      });
    };
  }

  moreBest() {
    return null;
  }

  redirectToNotFound() {
    return null;
  }

  resetNotFound() {
    return null;
  }
}

export default alt.createActions(PostActions);

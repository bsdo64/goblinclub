/**
 * Created by dobyeongsu on 2015. 10. 17..
 */
import alt from '../alt';
import Api from '../Utils/ApiClient';
const Apis = new Api();

class PostActions {
  setDefaultClubList(club) {
    return club;
  }

  setSubscribeClubList(clubList) {
    return clubList;
  }

  submitPost(post) {
    let writingPost = post;
    let newPost = {
      ...post,
      defaultClubList: writingPost.defaultClubList,
      subscribeClubList: writingPost.subscribeClubList
    };

    return function (dispatch) {
      Apis
        .post('/submit', newPost)
        .then(function (res) {
          dispatch(res);
        })
        .catch(function (err) {
          return err;
        });
    };
  }

  getClubPostLists(params) {
    return (dispatch) => {
      Apis
        .get('/club/' + params.clubName + '/' + params.article, params)
        .then(function (res) {
          dispatch(res);
        })
        .catch(function (err) {
          this.redirectToNotFound(err);
        }.bind(this));
    };
  }

  getPostsByClub(params) {
    return (dispatch) => {
      Apis
        .get('/club/' + params.clubName)
        .then(function (res) {
          dispatch(res);
        })
        .catch(function (err) {
          this.redirectToNotFound(err);
        }.bind(this));
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

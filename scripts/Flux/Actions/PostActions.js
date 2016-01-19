/**
 * Created by dobyeongsu on 2015. 10. 17..
 */
import alt from '../../alt';
import Api from '../../Utils/ApiClient';
const Apis = new Api();

class PostActions {
  setDefaultClubList(clubId) {
    return clubId;
  }

  setSubscribeClubList(clubIds) {
    return clubIds;
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
        .get('/club/' + params.clubName + '/' + params.article)
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

  redirectToNotFound(err) {
    console.log(err);
    return err;
  }

  resetNotFound(err) {
    console.log(err);
    return err;
  }

  like(uid) {
    return uid;
  }

  dislike(uid) {
    return uid;
  }
}

export default alt.createActions(PostActions);

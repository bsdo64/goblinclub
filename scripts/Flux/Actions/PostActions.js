/**
 * Created by dobyeongsu on 2015. 10. 17..
 */
import alt from '../../Utils/alt';
import Api from '../../Utils/ApiClient';

class PostActions {
  setDefaultClubList(clubId) {
    return clubId;
  }

  setSubscribeClubList(clubIds) {
    return clubIds;
  }

  submitPost(post) {
    let newPost = post;

    return (dispatch) => {
      Api
        .post('/submit', newPost)
        .then((res) => {
          dispatch(res);
        })
        .catch((err) => {
          return err;
        });
    };
  }

  resetWritingPost() {
    return null;
  }

  getClubPostLists(params) {
    return (dispatch) => {
      Api
        .get('/club/' + params.clubName + '/' + params.article)
        .then((res) => {
          dispatch(res);
        })
        .catch((err) => {
          this.redirectToNotFound(err);
        });
    };
  }

  getPostsByClub(params) {
    return (dispatch) => {
      Api
        .get('/club/' + params.clubName)
        .then((res) => {
          dispatch(res);
        })
        .catch((err) => {
          this.redirectToNotFound(err);
        });
    };
  }

  moreBest(p) {
    return (dispatch) => {
      Api
        .get('/best?p=' + p)
        .then((res) => {
          dispatch(res);
        })
        .catch((err) => {
          if (err) {
            return err;
          }
        });
    };
  }

  redirectToNotFound(err) {
    return err;
  }

  resetNotFound(err) {
    return err;
  }

  like(uid) {
    return uid;
  }

  dislike(uid) {
    return uid;
  }

  likeFromDislike(uid) {
    return uid;
  }

  dislikeFromLike(uid) {
    return uid;
  }
}

export default alt.createActions(PostActions);

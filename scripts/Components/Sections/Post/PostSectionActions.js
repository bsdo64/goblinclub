/**
 * Created by dobyeongsu on 2016. 4. 5..
 */
import alt from '../../../Utils/alt';
import Api from '../../../Utils/ApiClient';

class PostSectionActions {
  requestComment(postId, page, perPage) {
    return (dispatch) => {
      Api
        .get('/comment/', {post_id: postId, page: page, limit: perPage})
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

  requestSubmitComment(postId, content) {
    return (dispatch) => {
      Api
        .post('/post/comment/', {post_id: postId, content: content})
        .then((res) => {
          dispatch(res);
        })
        .catch((err) => {
          if (err) {
            return err;
          }
        })
    }
  }
}

export default alt.createActions(PostSectionActions);

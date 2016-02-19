/**
 * Created by dobyeongsu on 2016. 2. 19..
 */
/**
 * Created by dobyeongsu on 2015. 10. 17..
 */
import alt from '../../Utils/alt';
import Api from '../../Utils/ApiClient';

class CommentActions {
  submitComment(params) {
    return (dispatch) => {
      Api
        .post('/submit/comment', params)
        .then((res) => {
          if (res.result === 'ok') {
            dispatch(res.comment);
          }
        })
        .catch((err) => {
          if (err) {
            return err;
          }
        });
    };
  }

  submitInnerComment(params) {
    return (dispatch) => {
      Api
        .post('/submit/comment', params)
        .then((res) => {
          if (res.result === 'ok') {
            dispatch(res.comment);
          }
        })
        .catch((err) => {
          if (err) {
            return err;
          }
        });
    };
  }
}

export default alt.createActions(CommentActions);


/**
 * Created by dobyeongsu on 2016. 4. 5..
 */
import alt from '../../../Utils/alt';
import Api from '../../../Utils/ApiClient';

class SubmitActions {
  requestSubmitPost(clubId, post) {
    return (dispatch) => {
      Api
        .post('/post/submit', {club_id: clubId, post: post})
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
}

export default alt.createActions(SubmitActions);

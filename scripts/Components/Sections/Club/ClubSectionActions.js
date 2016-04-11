
import alt from '../../../Utils/alt';
import Api from '../../../Utils/ApiClient';

class ClubSectionActions {
  requestPosts(club_id, pagination) {
    return (dispatch) => {
      Api
        .get('/posts', {club_id: club_id, page: pagination.page, limit: pagination.perPage})
        .then((res) => {
          dispatch(res);
        })
        .catch((err) => {
          return err;
        });
    };
  }
}

export default alt.createActions(ClubSectionActions);

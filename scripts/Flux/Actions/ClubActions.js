/**
 * Created by dobyeongsu on 2015. 10. 17..
 */
import alt from '../../utils/alt';
import Api from '../../Utils/ApiClient';
const Apis = new Api();

class ClubActions {
  submitClub(club) {
    return (dispatch) => {
      Apis
        .post('/submit/club', club)
        .then((res) => {
          dispatch(res);
        })
        .catch((err) => {
          return err;
        });
    };
  }
}

export default alt.createActions(ClubActions);

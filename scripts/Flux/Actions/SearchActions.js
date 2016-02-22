/**
 * Created by dobyeongsu on 2015. 10. 17..
 */
import alt from '../../Utils/alt';
import Api from '../../Utils/ApiClient';

class SearchActions {
  search(query) {
    return (dispatch) => {
      Api
        .post('/search/' + query)
        .then((res) => {
          if (res.result === 'ok') {
            dispatch(res.posts);
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

export default alt.createActions(SearchActions);

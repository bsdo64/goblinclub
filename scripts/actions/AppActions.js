/**
 * Created by dobyeongsu on 2015. 10. 17..
 */
import alt from '../alt';
import Api from '../Utils/ApiClient';

class AppActions {
  disableServerRender() {
    return {serverRendered: false};
  }

  initBest() {
    return function (dispatch) {
      Api.init.Best(function (err, data) {
        if (err) {
          return err;
        }
        dispatch(data);
      });
    };
  }

  initClub() {
    return function (dispatch) {
      Api.init.Club(function (err, data) {
        if (err) {
          return err;
        }
        dispatch(data);
      });
    };
  }

  initPost() {
    return function (dispatch) {
      Api.init.Post(function (err, data) {
        if (err) {
          return err;
        }
        dispatch(data);
      });
    };
  }

  initWritePost() {
    return function (dispatch) {
      Api.init.WritePost(function (err, data) {
        if (err) {
          return err;
        }
        dispatch(data);
      });
    };
  }
}

export default alt.createActions(AppActions);

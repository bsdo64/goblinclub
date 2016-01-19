/**
 * Created by dobyeongsu on 2015. 10. 17..
 */
import alt from '../../alt';
import Api from '../../Utils/ApiClient';
const Apis = new Api();

class AppActions {
  disableServerRender() {
    return {serverRendered: false};
  }

  toggleLoginModal(bool) {
    return {openLoginModal: !bool};
  }
  closeLoginModal() {
    return {openLoginModal: false};
  }

  initBest() {
    return function (dispatch) {
      Apis
        .get('/best')
        .then(function (res) {
          dispatch(res);
        })
        .catch(function (err) {
          if (err) {
            return err;
          }
        });
    };
  }

  initClub() {
    return function (dispatch) {
      Apis
        .get('/best')
        .then(function (res) {
          dispatch(res);
        })
        .catch(function (err) {
          if (err) {
            return err;
          }
        });
    };
  }

  initPost() {
    return function (dispatch) {
      Apis
        .get('/best')
        .then(function (res) {
          dispatch(res);
        })
        .catch(function (err) {
          if (err) {
            return err;
          }
        });
    };
  }

  initWritePost() {
    return function (dispatch) {
      Apis
        .get('/best')
        .then(function (res) {
          dispatch(res);
        })
        .catch(function (err) {
          if (err) {
            return err;
          }
        });
    };
  }
}

export default alt.createActions(AppActions);
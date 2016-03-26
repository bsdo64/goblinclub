/**
 * Created by dobyeongsu on 2016. 3. 25..
 */
import alt from '../../../Utils/alt';
import Api from '../../../Utils/ApiClient';

class SigninActions {

  checkEmail(params) {
    return (dispatch) => {
      Api
        .post('/signin/checkEmail', params)
        .then((res) => {
          dispatch(res);
        })
        .catch((err) => {
          return err;
        });
    };
  }

  checkNick(params) {
    return (dispatch) => {
      Api
        .post('/signin/checkNick', params)
        .then((res) => {
          dispatch(res);
        })
        .catch((err) => {
          return err;
        });
    };
  }

  submit(params) {
    console.log(params);
    return (dispatch) => {
      Api
        .post('/signin', params)
        .then((res) => {
          dispatch(res);
        })
        .catch((err) => {
          return err;
        });
    };
  }
  
  emailVerify(params) {
    return (dispatch) => {
      Api
        .post('/signin/emailVerify', params)
        .then((res) => {
          dispatch(res);
        })
        .catch((err) => {
          return err;
        });
    };
  }
  emailVerifySuccess() {
    return true;
  }
  emailVerifyFail() {
    return true;
  }
}

export default alt.createActions(SigninActions);

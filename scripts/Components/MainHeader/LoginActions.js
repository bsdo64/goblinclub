import alt from '../../Utils/alt';
import Api from '../../Utils/ApiClient';

class LoginActions {
  openLoginModal() {
    return true;
  }
  closeLoginModal() {
    return true;
  }
  requestLogin(params) {
    return (dispatch) => {
      Api
        .post('/login', params)
        .then((res) => {
          dispatch(res);
        })
        .catch((err) => {
          return err;
        });
    };
  }
}

export default alt.createActions(LoginActions); 

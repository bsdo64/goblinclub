/**
 * Created by dobyeongsu on 2015. 12. 12..
 */
import request from 'superagent';

class Api {
  constructor() {
    this.token = null;
    this.sessionId = null;
    this.ApiEndPoint = (process.env.NODE_ENV === 'production' ?
      'http://localhost:3001/compose' : 'http://localhost:3001/compose');
  }

  setToken(userToken) {
    this.token = userToken;
  }

  setSession(userSessionId) {
    this.sessionId = userSessionId;
  }

  get(url) {
    const requester = request.get(this.ApiEndPoint + url);
    if (this.token) {
      requester.set({token: this.token})
    }
    
    requester.set({sessionId: this.sessionId});
    return requester
  }
}

export default new Api();

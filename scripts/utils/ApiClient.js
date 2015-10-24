/**
 * Created by dobyeongsu on 2015. 10. 23..
 */
import request from 'superagent';

var ApiClient = {

    login : (user, callback) => {

        request
            .post('/login')
            .send({user : user})
            .set('Accept', 'application/json')
            .withCredentials()
            .end((xhrErr, xhrRes) => {
                if(xhrErr) {
                    callback(xhrErr, null);
                } else if (xhrRes) {
                    callback(null, xhrRes.body);
                }
            })
    }
};

export default ApiClient;
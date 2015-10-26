/**
 * Created by dobyeongsu on 2015. 10. 25..
 */
import jsonWebToken from 'jsonwebtoken';
import request from "superagent";

export default class Composer {
    constructor () {

        this.ComposeApi = 'http://localhost:3000/api/compose';
        this.ComposeApiRequest = (url) => request.get(this.ComposeApi+url);
        this.data = {};
        this.config = {
            'always': {

            },
            '/' : {
                'UserStore': {
                    auth: {
                        token: null,
                        user: {}
                    },
                    loadingAuth: false,
                    loadedAuth: true,
                    authFail: false,
                    authSuccess: true
                }
            }
        }
    }

    composeStore (url) {
        if( typeof this.config[url] === 'object') {
            this.ComposeApiRequest(url).end((errXHR, resXHR) => {
                if(errXHR) {
                    return errXHR;

                } else if(resXHR && resXHR.ok) {

                    this.data = resXHR.body;
                    let data = this.config[url];



                    return this.data;
                }
            })
        }
    }

    get getStoreState() {
        return this.data
    }


}
//
//router.use((req, res, next) => {
//    var token = req.cookies.token;
//    if(token) {
//        jsonWebToken.verify(token, 'secret', function(err, decoded) {
//            if( err ) {
//                next();
//            } else {
//                var data = {
//                    auth: {
//                        token: token,
//                        user: decoded
//                    },
//                    loadingAuth: false,
//                    loadedAuth: true,
//                    authFail: false,
//                    authSuccess: true
//                };
//                res.locals.data.UserStore =  data;
//                next();
//            }
//        });
//    } else {
//        next();
//    }
//});
//
//router.get('/', (req, res, next) => {
//    ComposeRequest.end(function (errXHR, jsonXHR) {
//            if (errXHR) {
//                next();
//            } else {
//                var body = jsonXHR.body;
//                var data = {
//                    posts : body,
//                    loadSuccess: true
//                };
//                res.locals.data.PostStore = data;
//                next();
//            }
//        });
//});

export default Composer;
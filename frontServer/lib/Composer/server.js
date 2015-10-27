/**
 * Created by dobyeongsu on 2015. 10. 25..
 */

import express from 'express';
var Composer = express.Router();

import jsonWebToken from 'jsonwebtoken';
import request from "superagent";

var ComposeApi = 'http://localhost:3000/api/compose';
var ComposeApiRequest = ((url) => {
    return request.get(ComposeApi + url)
});

var State = {
    UserStore: {
        auth: {
            token: null,
            user: {}
        },
        loadingAuth: false,
        loadedAuth: false,
        authFail: false,
        authSuccess: false
    }
};

Composer.use((req, res, next) => {
    res.locals.data = res.locals.data || State;

    var token = req.cookies.token;

    if(token) {
        jsonWebToken.verify(token, 'secret', function(err, decoded) {
            if( err ) {
                State.UserStore.authFail = true;

                res.locals.data = State;
                next();
            } else {
                console.log(decoded);
                State.UserStore = {
                    auth : {
                        token: token,
                        user: decoded
                    },
                    authSuccess : true,
                    loadedAuth : true
                };

                res.locals.data = State;
                next();
            }
        });
    } else {
        State.UserStore.authFail = true;

        res.locals.data = State;
        next();
    }
});

Composer.use('/', (req, res, next) => {
    ComposeApiRequest(req.url).end((errXHR, resXHR) => {
        if(errXHR) {

            State['Error'] = errXHR;
            next();
        } else if(resXHR && resXHR.ok) {

            let apiResult = resXHR.body;
            State['PostStore'] = {
                loadSuccess : true,
                posts : apiResult
            };
            next();
        }
    });
});

export default Composer;
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

Composer.use((req, res, next) => {
    let defaultState = {
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
    res.storeState = defaultState;

    const token = req.cookies.token;
    if(token) {
        jsonWebToken.verify(token, 'secret', function(err, decoded) {
            if( err ) {
                res.storeState.UserStore.authFail = true;
                next();
            } else {
                res.storeState.UserStore['auth'] = {
                    token: token,
                    user: decoded
                };
                res.storeState.UserStore.authSuccess = true,
                res.storeState.UserStore.loadedAuth = true,

                next();
            }
        });
    } else {
        next();
    }
});

Composer.use('/', (req, res, next) => {
    ComposeApiRequest(req.url).end((errXHR, resXHR) => {
        if(errXHR) {

            res.storeState['Error'] = errXHR;
            next();
        } else if(resXHR && resXHR.ok) {

            let apiResult = resXHR.body;
            res.storeState['PostStore'] = {
                loadSuccess : true,
                posts : apiResult
            };

            next();
        }
    });
});

export default Composer;
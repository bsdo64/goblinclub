/**
 * Created by dobyeongsu on 2015. 10. 25..
 */

import express from 'express';
var Composer = express.Router();

import jsonWebToken from 'jsonwebtoken';
import request from "superagent";

var ComposeApi = 'http://localhost:3001/compose';
var ComposeApiRequest = ((url) => {
    return request.get(ComposeApi + url)
});

Composer.use((req, res, next) => {
    let defaultState = {
        UserStore: {
            "user" : {
                "email" : null,
                "nick" : null
            },
            "auth" : {
                "state" : "login",
                "loginAt" : null,
                "device" : "Mac OS Chrome",
                "token" : null
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
                    token: token
                };
                res.storeState.UserStore['user'] = decoded;
                res.storeState.UserStore.authSuccess = true;
                res.storeState.UserStore.loadedAuth = true;

                console.log(decoded);

                next();
            }
        });
    } else {
        next();
    }
});

Composer.get('/', (req, res, next) => {
    ComposeApiRequest(req.url)
        .query({user: res.storeState.UserStore.user})
        .end((errXHR, resXHR) => {
        if(errXHR) {

            res.storeState['Error'] = errXHR;
            next();
        } else if(resXHR && resXHR.ok) {
            let apiResult = resXHR.body;
            res.storeState['PostStore'] = apiResult.postStore;
            res.storeState['PostStore']['loadSuccess'] = true;
            res.storeState['PostStore']['type'] = 'best';

            res.storeState['ClubStore'] = apiResult.clubStore;

            next();
        }
    });
});

Composer.get('/submit', (req, res, next) => {
    ComposeApiRequest(req.url)
        .query({user: res.storeState.UserStore.user})
        .end((errXHR, resXHR) => {
            if(errXHR) {

                res.storeState['Error'] = errXHR;
                next();
            } else if(resXHR && resXHR.ok) {
                let apiResult = resXHR.body;
                res.storeState['ClubStore'] = apiResult.clubStore;

                next();
            }
        });
});

Composer.get('/club/:clubName', (req, res, next) => {
    ComposeApiRequest(req.url)
        .query({user: res.storeState.UserStore.user})
        .end((errXHR, resXHR) => {
        if(errXHR) {

            res.storeState['Error'] = errXHR;
            next();
        } else if(resXHR && resXHR.ok) {
            let apiResult = resXHR.body;
            res.storeState['ClubStore'] = apiResult.clubStore;
            res.storeState['PostStore'] = apiResult.postStore;

            next();
        }
    });
});

Composer.get('/club/:clubName/:postName', (req, res, next) => {
    ComposeApiRequest(req.url)
        .query({user: res.storeState.UserStore.user})
        .end((errXHR, resXHR) => {
        if(errXHR) {
            res.storeState['Error'] = errXHR;
            next();
        } else if(resXHR && resXHR.ok) {
            let apiResult = resXHR.body;
            res.storeState['ClubStore'] = apiResult.clubStore;
            res.storeState['PostStore'] = apiResult.postStore;

            next();
        }
    });
});

export default Composer;
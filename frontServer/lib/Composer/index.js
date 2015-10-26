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
    res.locals.data = res.locals.data || {};
    next();
});

Composer.use('/', (req, res, next) => {
    ComposeApiRequest(req.url).end((errXHR, resXHR) => {
        if(errXHR) {

            res.locals.data = errXHR;
            next();
        } else if(resXHR && resXHR.ok) {

            res.locals.data['UserStore'] = {auth:{token:null, user:{email:"bsdoN", password:'1234'}}}
            res.locals.data['PostStore'] = resXHR.body;
            next();
        }
    });
});

export default Composer;
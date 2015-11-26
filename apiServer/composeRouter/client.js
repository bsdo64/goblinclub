/**
 * Created by dobyeongsu on 2015. 10. 25..
 */
var express = require('express');
var router = express.Router();
var jsonWebToken = require('jsonwebtoken');

var Model = require('../db');
var Post = Model.post;
var User = Model.user;
var shortId = require('shortid');

router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});

router.post('/login', function (req, res) {
    var user = req.body.user;

    try {
        var token = jsonWebToken.sign(user, 'secret', {expiresIn: "7d"});

        res.cookie('token', token, {
            expires: new Date(Date.now() + (24 * 60 * 60 * 1000)),
            httpOnly: true
        });

        res.json({
            token: token,
            user: user,
            message: "Loggined!"
        });

    } catch (err) {
        res.json({
            message: "can't make token",
            error: err
        });
    }
});

router.post('/signin', function (req, res) {
    var user = req.body.user;
    var newUser = {
        email : user.signinEmail,
        nick : user.signinNick,
        password : user.signinPassword
    };

    User
        .findOrCreate({where: newUser})
        .spread(function(user, created) {
            console.log(user.get({
                plain: true
            }));
            try {
                var token = jsonWebToken.sign(user, 'secret', {expiresIn: "7d"});

                res.cookie('token', token, {
                    expires: new Date(Date.now() + (24 * 60 * 60 * 1000)),
                    httpOnly: true
                });

                res.json({
                    token: token,
                    user: user,
                    message: "Loggined!"
                });

            } catch (err) {
                res.json({
                    message: "can't make token",
                    error: err
                });
            }
        }).catch(function (err) {
            res.json({
                type: "signinUser",
                message: "회원가입 오류",
                error: err
            })
        });
});

router.post('/submit', function (req, res) {
    var post = req.body.post;
    var author = req.body.author;

    if (!post || !author ) {
        res.status(400).json({
            message: "Fill out",
            error: "Fill out"
        });
    }

    User.find({
            where: author
        })
        .then(function(user) {
            return Post.create({
                _id: shortId.generate(),
                title: post.title,
                content: post.content,
                author: user.get('id')
            });
        });
});

router.get('/', function( req, res ) {
    res.json({a: 1});

});


module.exports = router;
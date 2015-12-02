/**
 * Created by dobyeongsu on 2015. 10. 25..
 */
var express = require('express');
var router = express.Router();
var jsonWebToken = require('jsonwebtoken');

var _ = require('lodash');

var Model = require('../db');
var Post = Model.post,
    User = Model.user,
    Club = Model.club;
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

    var createdPost, clubList=[];
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
        })
        .then(function(newPost) {

            createdPost = newPost;
            clubList.push(post.defaultClubList);
            clubList.push(post.subscribeClubList);
            _.flatten(clubList, true);
            _.compact(clubList);

            return Club.findAll({where: {id : { $or: clubList }}});
        })
        .then(function(clubs) {

            return createdPost.setClubs(clubs);
        })
        .then(function(club_post) {
            var postId = club_post[0][0].get()['post_id'];
            console.log(postId);
            return Post.find({
                where: {_id: postId},
                include: [
                    {model: User, required: true, attributes: ['nick', 'id']},
                    {model: Club, required: true}
                ]
            });
        })
        .then(function(post) {
            console.log(post);
            res.send(post);
        });
});

router.get('/clubPostLists', function (req, res) {
    var post = req.body.post;
    var user = req.body.user;

    if (!post || !user ) {
        res.status(400).json({
            message: "Fill out",
            error: "Fill out"
        });
    }

    Post.find({
            where: {_id: post._id},
            include: [
                {model: User, required: true, attributes: ['nick', 'id']},
                {model: Club, required: true}
            ]
    })
    .then(function(post) {
        console.log(post);
        res.send(post);
    });
});

router.get('/', function( req, res ) {
    res.json({a: 1});

});


module.exports = router;
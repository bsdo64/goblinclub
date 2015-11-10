/**
 * Created by dobyeongsu on 2015. 10. 25..
 */
var express = require('express');
var router = express.Router();
var async = require('async');
var Model = require('../db');
var shortId = require('shortid');
var _ = require('lodash');
var moment = require('moment');
moment.locale('ko');

router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});

router.get('/', function( req, res ) {
    // PostList, UserInfo, ClubList
    var User = Model.user,
        Post = Model.post,
        Club = Model.club

    var result = {
        Post : null,
        User : null,
        Club : null
    };
    User.findOrCreate({
            where: {
                email: "bsdo@naver.com",
                nick: "TEST",
                password: "dkbs1234"
            }})
        .then(function() {
            return User.findOne({
                where: {
                    email : "bsdo@naver.com"
                }
            })
        .then(function(user) {
            return Post.create({
                _id: shortId.generate(),
                title: "Hello world",
                content: "You aorle",
                author: user.get('id')
            });
        })
        .then(function(post) {
            return Club.find({where: {id: 2}}).then(function(club) {
                return post.setClubs([club]);
            })
        })
        .then(function(post) {
            console.log(post);
            return User.find({
                where: {
                    email: "bsdo@naver.com"
                }
            });
        })
        .then(function(posts) {
            return Club.find({where: { id: 2 }}).then(function(club) {
                return club.getPosts({order: [['createdAt', 'ASC']]});
            })
        })
        .then(function(user) {
            return Post.findAll({
                order: [
                    ['createdAt', 'DESC']
                ],
                include: [
                    { model: User, required: true, attributes: ['nick'] },
                    { model: Club, required: true, include: [
                        { model: User, required: true }
                    ]}
                ]
            })
        })
        .then(function(user) {
            return Post.findAll({
                order: [
                    ['createdAt', 'DESC']
                ],
                include: [
                    { model: User, required: true, attributes: ['nick'] },
                    { model: Club, required: true }
                ]
            })
        })
        .then(function(posts) {
            _.map(posts, function (post) {
                post.setDataValue('createdAt', moment(post.createdAt).fromNow());
                post.setDataValue('updatedAt', moment(post.updatedAt).fromNow());
                return post;
            });
            res.send(posts);
        });
    });
});

router.get('/club/:clubName', function( req, res ) {

    var User = Model.user,
        Post = Model.post,
        Club = Model.club

    var result = {
        Post: null,
        User: null,
        Club: null
    };
    User.findOrCreate({
            where: {
                email: "bsdo@naver.com",
                nick: "TEST",
                password: "dkbs1234"
            }
        })
        .then(function () {
            return Club.find({where: {url: req.params.clubName}}).then(function (club) {
                if (!club) { return []; }
                return club.getPosts({
                    order: [['createdAt', 'DESC']],
                    include: [ User, Club ]
                });
            })
        })
        .then(function(posts) {
            _.map(posts, function (post) {
                post.setDataValue('createdAt', moment(post.createdAt).fromNow());
                post.setDataValue('updatedAt', moment(post.updatedAt).fromNow());
                return post;
            });
            res.send(posts);
        });
});

router.get('/club/:clubName/:postName', function( req, res ) {

    var User = Model.user,
        Post = Model.post,
        Club = Model.club

    User.findOrCreate({
            where: {
                email: "bsdo@naver.com",
                nick: "TEST",
                password: "dkbs1234"
            }
        })
        .then(function () {
            return Post.findOne({where: {_id: req.params.postName}, include: [User, Club]}).then(function (post) {
                if (!post) { return []; }

                return post
            });
        })
        .then(function(post) {
            console.log(post);
            post.setDataValue('createdAt', moment(post.createdAt).fromNow());
            post.setDataValue('updatedAt', moment(post.updatedAt).fromNow());

            res.send([post]);
        });
});


module.exports = router;
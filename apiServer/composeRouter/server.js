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
        Post = Model.post;

    User.findOrCreate({
        where: {
            email: "bsdo@naver.com",
            nick: "TEST",
            password: "dkbs1234"
        }
        })
        .then(function() {
            return User.findOne({
                where: {
                    email : "bsdo@naver.com"
                }
        }).then(function(user) {
            return Post.create({
                _id: shortId.generate(),
                title: "Hello world",
                content: "You aorle",
                author: user.get('id')
            });
        }).then(function(post) {
            return User.findAll({
                where: {
                    email: "bsdo@naver.com"
                },
                include: [Post]
            });
        }).then(function(user) {
            return User.find({
                where: {
                    email: "bsdo@naver.com"
                }
            });
        }).then(function(user) {
                console.log(user.get());
            return user.getPosts();
        }).then(function(posts) {
                console.log(posts);
            var newPosts = _.map(posts, function (post) {
                post.setDataValue('createdAt', moment(post.createdAt).fromNow());
                post.setDataValue('updatedAt', moment(post.updatedAt).fromNow());
                return post;
            });
            res.send(newPosts);
        });
    });
});

module.exports = router;
/**
 * Created by dobyeongsu on 2015. 10. 25..
 */
var express = require('express');
var router = express.Router();
var _ = require('lodash');
var moment = require('moment');

var Model = require('../db');
var User = Model.user;
var Post = Model.post;
var Club = Model.club;
var Comment = Model.comment;

moment.locale('ko');

router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

router.get('/', function (req, res) {
  var user = req.query.user;

  var result = {
    postStore : {},
    clubStore : {}
  };
    Post.findAll({
            order: [
                ['createdAt', 'DESC']
            ],
            include: [
                { model: User, required: true, attributes: ['nick', 'id'] },
                { model: Club, required: true }
            ]
        })
        .then(function(bestPosts) {
            _.map(bestPosts, function (bestPost) {
                bestPost.setDataValue('createdAt', moment(bestPost.createdAt).fromNow());
                bestPost.setDataValue('updatedAt', moment(bestPost.updatedAt).fromNow());
                return bestPost;
            });
            result.postStore.bestList = bestPosts;

            return Club.findAll({where: {type: 'default'}});
        })
        .then(function(defaultClubs) {
            result.clubStore.defaultClubList = defaultClubs;

            if( !!user.email ) {
                var findUser;
                User
                .find({where: {email: user.email}})
                .then(function(user) {
                    findUser = user;
                    return Club.findAll({where:{creator:user.id}});
                })
                .then(function(userCreatedClubList) {
                    result.clubStore.userHas = {
                        createdClubList: userCreatedClubList
                    };
                    return findUser.getUserSubscribedClubs();
                })
                .then(function (userSubscribedClubs) {
                    result.clubStore.userHas = {
                        subscribedClubList: userSubscribedClubs
                    };

                    res.send(result);
                });
            } else {
                res.send(result);
            }
        });

});

router.get('/club/:clubName', function( req, res ) {
    var user = req.query.user;

    var result = {
        clubStore : {},
        postStore : {}
    };

    Club
        .findAll({where: {type: 'default'}})
        .then(function(defaultClubs) {
            result.clubStore.defaultClubList = defaultClubs;

            return Club.find({where: {url: req.params.clubName}}).then(function (club) {
                if (!club) { return []; }
                return club.getPosts({
                    order: [['createdAt', 'DESC']],
                    include: [ User, Club ]
                });
            });
        })
        .then(function(posts) {
            _.map(posts, function (post) {
                post.setDataValue('createdAt', moment(post.createdAt).fromNow());
                post.setDataValue('updatedAt', moment(post.updatedAt).fromNow());
                return post;
            });
            result.postStore.postList = posts;

        })
        .then(function() {
            if( !!user.email ) {
                var findUser;
                User
                    .find({where: {email: user.email}})
                    .then(function(user) {
                        findUser = user;
                        return Club.findAll({where:{creator:user.id}});
                    })
                    .then(function(userCreatedClubList) {
                        result.clubStore.userHas = {
                            createdClubList: userCreatedClubList
                        };
                        return findUser.getUserSubscribedClubs();
                    })
                    .then(function (userSubscribedClubs) {
                        result.clubStore.userHas = {
                            subscribedClubList: userSubscribedClubs
                        };

                        res.send(result);
                    });
            } else {
                res.send(result);
            }
        });
});

router.get('/club/:clubName/submit', function( req, res ) {
    var user = req.query.user;

    var result = {
        postStore : {},
        clubStore : {}
    };

    Club
    .findAll({where: {type: 'default'}})
    .then(function(defaultClubs) {
        result.clubStore.defaultClubList = defaultClubs;

        if( !!user.email ) {
            var findUser;
            User
                .find({where: {email: user.email}})
                .then(function(user) {
                    findUser = user;
                    return Club.findAll({where:{creator:user.id}});
                })
                .then(function(userCreatedClubList) {
                    result.clubStore.userHas = {
                        createdClubList: userCreatedClubList
                    };
                    return findUser.getUserSubscribedClubs();
                })
                .then(function (userSubscribedClubs) {
                    result.clubStore.userHas = {
                        subscribedClubList: userSubscribedClubs
                    };

                    res.send(result);
                });
        } else {
            res.send(result);
        }
    });
});

router.get('/submit', function( req, res ) {
    var user = req.query.user;

    var result = {
        clubStore : {}
    };

    Club
        .findAll({where: {type: 'default'}})
        .then(function(defaultClubs) {
            result.clubStore.defaultClubList = defaultClubs;

            if( !!user.email ) {
                var findUser;
                User
                    .find({where: {email: user.email}})
                    .then(function(user) {
                        findUser = user;
                        return Club.findAll({where:{creator:user.id}});
                    })
                    .then(function(userCreatedClubList) {
                        result.clubStore.userHas = {
                            createdClubList: userCreatedClubList
                        };
                        return findUser.getUserSubscribedClubs();
                    })
                    .then(function (userSubscribedClubs) {
                        result.clubStore.userHas = {
                            subscribedClubList: userSubscribedClubs
                        };

                        res.send(result);
                    });
            } else {
                res.send(result);
            }
        });
});

router.get('/club/:clubName/:postName', function( req, res ) {
    var user = req.query.user;
    var postName = req.params.postName;
    var clubName = req.params.clubName;

    var result = {
        postStore: {},
        clubStore: {}
    };

    var postId;
    Post.findOne({
            where: {_id: postName},
            include: [
                {model: User, required: true, attributes: ['nick', 'id']},
                {model: Club, required: true}
            ]
        })
        .then(function (post) {
            postId = post._id;
            post.setDataValue('createdAt', moment(post.createdAt).fromNow());
            post.setDataValue('updatedAt', moment(post.updatedAt).fromNow());
            result.postStore.readingPost = post;

        })
        .then(function(comment) {
            return Comment.findAll({
                limit: 5,
                include: [ {
                    model: Comment,
                    include: [ {model: User} ],
                    as: 'descendents',
                    hierarchy: true
                }, {
                    model: User
                } ],
                where: { hierarchyLevel: 1, post_id: postId }
            });
        })
        .then(function(comments) {
            console.log(JSON.parse(JSON.stringify(comments)));
            result.postStore.commentList = comments;

            return Club.find({where: {url: clubName}}).then(function (club) {
                if (!club) { return []; }
                return club.getPosts({
                    order: [['createdAt', 'DESC']],
                    include: [ User, Club ]
                });
            });
        })
        .then(function(posts) {
            _.map(posts, function (post) {
                post.setDataValue('createdAt', moment(post.createdAt).fromNow());
                post.setDataValue('updatedAt', moment(post.updatedAt).fromNow());
                return post;
            });
            result.postStore.postList = posts;

            return Club.findAll({where: {type: 'default'}});
        })
        .then(function(defaultClubs) {
            result.clubStore.defaultClubList = defaultClubs;

            if( !!user.email ) {
                var findUser;
                User
                    .find({where: {email: user.email}})
                    .then(function(user) {
                        findUser = user;
                        return Club.findAll({where:{creator:user.id}});
                    })
                    .then(function(userCreatedClubList) {
                        result.clubStore.userHas = {
                            createdClubList: userCreatedClubList
                        };
                        return findUser.getUserSubscribedClubs();
                    })
                    .then(function (userSubscribedClubs) {
                        result.clubStore.userHas = {
                            subscribedClubList: userSubscribedClubs
                        };

                        res.send(result);
                    });
            } else {
                res.send(result);
            }
        });
});


module.exports = router;
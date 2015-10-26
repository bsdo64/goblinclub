/**
 * Created by dobyeongsu on 2015. 10. 25..
 */
var express = require('express');
var router = express.Router();

router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});

router.get('/', function( req, res ) {
    var best = {
        total : 1,
        data : [
            {
                id : 1,
                title : "Test 입니다",
                author : "nick",
                submitDate : 1445751634,
                score : 10,
                club : 'test',
                vote : {
                    like : 20,
                    dislike : 10
                },
                comments : {
                    total : 2,
                    data : [
                        {
                            id: 1,
                            title : "comment",
                            author : "nick2",
                            submitDate : 1445751634,
                            score : 10,
                            vote : {
                                like : 20,
                                dislike : 10
                            },
                            postId : 1,
                            depth : 0
                        },
                        {
                            id: 2,
                            title : "comment",
                            author : "nick3",
                            submitDate : 1445751634,
                            score : 10,
                            vote : {
                                like : 20,
                                dislike : 10
                            },
                            postId : 1,
                            depth : 1,
                            commentId : 1
                        },
                        {
                            id: 3,
                            title : "comment",
                            author : "nick3",
                            submitDate : 1445751634,
                            score : 10,
                            vote : {
                                like : 20,
                                dislike : 10
                            },
                            postId : 1,
                            depth : 2,
                            commentId : 2
                        }
                    ]
                }
            }
        ]
    };

    res.json(best);

});


module.exports = router;
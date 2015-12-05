/**
 * Created by dobyeongsu on 2015. 12. 4..
 */
import React, { Component } from 'react';
import Radium, { Style } from 'radium';

var comment = {
    top: {
        padding: '10px 0'
    },
    red: {
        color: 'red'
    },
    boxHeadLine: {
        fontSize: 14,
        display: 'inline-block',
        margin: 0
    },
    selectBox: {
        margin: 0,
        padding: 0,
        display: 'inline-block',
        float: 'right'
    },
    inlineBlock: {
        display: 'inline-block'
    },
    hr: {
        margin: '0 0 10px'
    },
    writeBox: {
        margin: '10px 0',
        backgroundColor: 'rgba(231, 239, 239, 0.61)',
        borderRadius: 1,
        boxShadow: '1px 1px #b0c2c0',
        padding: '10px 6px 10px 6px',
        minHeight: 40
    },
    writeBoxLeft: {
        position: 'absolute',
        padding: 6
    },
    writeBoxName: {
        fontSize: 10,
        color: '#01403C',
        fontWeight: 'bold'
    },
    writeBoxRight: {
        marginLeft: 44,
        position: 'relative',
        background: '#fff',
        display: 'inline-block',
        width: 'calc(100% - 110px)'
    },
    inputBox: {
        width: '100%'
    },
    input: {
        width: 'calc(100% - 40px)',
        padding: 5,
        fontSize: 12
    },
    pictureBox: {
        position: 'absolute',
        bottom: 0,
        right: 0
    },
    picture: {
        margin: 7
    },
    remainText: {
        display: 'inline-block',
        fontSize: 11,
        paddingLeft: 5
    },

    marginLeft50: {
        marginLeft: 50
    },
    listBox: {
        padding: 0,
        listStyle: 'none'
    },
    box: {
        backgroundColor: '#F6F9F9',
        borderRadius: 1,
        boxShadow: '1px 1px #b0c2c0',
        padding: '10 10 6 10',
        minHeight: 40,
        borderBottom: '1px solid #B0C2C0',
        borderLeft: '3px solid #2B5F5B'
    },
    rightButtonBox: {
        fontSize: 10,
        display: 'inline-block',
        float: 'right'
    },
    voteButton: {
        fontSize: 12,
        color: 'rgb(170, 170, 170)',
        padding: '5px 10px'
    },
    replayCount: {
        fontSize: 11,
        color: '#aaa'
    },
    paddingLeft10: {
        paddingLeft: 10
    },
    contentLeft: {
        position: 'absolute',
        textAlign: 'center'
    },
    author: {
        fontSize: 12,
        fontWeight: 'bold'
    },
    point: {
        fontSize: 10,
        color: '#FF5711',
        fontWeight: 'bold'
    },
    contentRight: {
        marginLeft: 44,
        paddingTop: 0
    },
    content: {
        width: 'calc(100% - 200px)',
        display: 'inline-block'
    },
    p: {
        fontSize: 12,
        marginBottom: 3
    },
    img: {

    }
};

var WriteBox = React.createClass({
    render() {
        return (<div style={comment.writeBox}>
            <div style={comment.writeBoxLeft}>
                <div style={comment.writeBoxName}>
                    TEST
                </div>
            </div>
            <div style={comment.writeBoxRight}>
                <div style={comment.inputBox}>
                    <div contenteditable="true" style={comment.input}>
                        입력하기
                    </div>
                </div>
                <div style={comment.pictureBox}>
                    <div style={comment.picture}>
                        <i className="fa fa-camera"></i>
                    </div>
                </div>
            </div>
            <div style={comment.remainText}>
                (300/300)
            </div>
        </div>)
    }
});

var CommentHead = React.createClass({
    render() {
        return <div >
            <div id="sortComboBox" style={comment.top}>
                <h2 style={comment.boxHeadLine}>
                    <strong style={comment.red}>203</strong><span>개의 댓글</span>
                    <a href="#" title="새로 고침"><span>새로 고침</span></a>
                </h2>
                <ul id="sortlist" style={comment.selectBox}>
                    <li style={comment.inlineBlock}>
                        <input name="sort" type="radio"/> <label for="like" id="likability">호감순</label>
                    </li>
                    <li style={comment.inlineBlock}>
                        <input name="sort" type="radio"/> <label for="latest" id="newest">최신순</label>
                    </li>
                </ul>
            </div>
            <div>
                <hr style={comment.hr}/>
            </div>
        </div>
    }
});

var data = [{
    author: '야임마',
    vote: 102,
    content: '<p style="font-size:12px;margin-bottom:3px;">Hello </p> <div class="medium-insert-images"> <figure contenteditable="false"> <img alt="" class="" src="http://i.imgur.com/cJkCVwy.png"/> </figure> </div>',
    child: [{
        author: '안눙',
        vote: 121,
        content: '<p style="font-size:12px;margin-bottom:3px;">Hello </p> <div class="medium-insert-images"> <figure contenteditable="false"> <img alt="" class="" src="http://i.imgur.com/cJkCVwy.png"/> </figure> </div>'
    }, {
        author: '헬로',
        vote: 21,
        content: '<p style="font-size:12px;margin-bottom:3px;">Hello </p> <div class="medium-insert-images"> <figure contenteditable="false"> <img alt="" class="" src="http://i.imgur.com/cJkCVwy.png"/> </figure> </div>',
        child: [{
            author: '영자',
            vote: 1,
            content: '<p style="font-size:12px;margin-bottom:3px;">Hello </p> <div class="medium-insert-images"> <figure contenteditable="false"> <img alt="" class="" src="http://i.imgur.com/cJkCVwy.png"/> </figure> </div>',
        }, {
            author: '헐',
            vote: 10,
            content: '<p style="font-size:12px;margin-bottom:3px;">Hello </p> <div class="medium-insert-images"> <figure contenteditable="false"> <img alt="" class="" src="http://i.imgur.com/cJkCVwy.png"/> </figure> </div>',
        }]
    }]
}, {
    author: '헐키',
    vote: 21,
    content: '<p style="font-size:12px;margin-bottom:3px;">Hello </p> <div class="medium-insert-images"> <figure contenteditable="false"> <img alt="" class="" src="http://i.imgur.com/cJkCVwy.png"/> </figure> </div>'
}];

var CommentList = React.createClass({
    render() {

        var listing = function (val, index) {
            return <li>
                <div style={comment.box}>
                    <div style={comment.rightButtonBox}>
                        <span><span >하루 전</span> </span>
                        <div style={comment.inlineBlock}>
                            <a style={comment.voteButton}>
                                <i className="fa fa-thumbs-o-up"></i>
                            </a>
                            <a style={comment.voteButton}>
                                <i className="fa fa-thumbs-o-down"></i>
                            </a>
                            <a href="#" style={comment.replyCount}>
                                <span >댓글</span><span >{ val.child? val.child.length : 0 } 개</span>
                            </a>
                            <a href="#" style={[comment.replayCount, comment.paddingLeft10]}>
                                <span >댓글달기</span>
                            </a>
                        </div>
                    </div>
                    <div style={comment.contentLeft}>
                        <span style={comment.author}>
                            <a href="http://cafe.naver.com/joonggonara/member/qkrtlaud0647/article" target="_blank"><span >{ val.author }</span> </a>
                        </span>
                        <div style={comment.point}>{val.vote} 점</div>
                    </div>
                    <div style={comment.contentRight}>
                        <div >
                            <div style={comment.content}>
                                { val.content }
                            </div>
                            <hr style={comment.hr}/>
                        </div>
                    </div>

                    <WriteBox />
                </div>

                { val.child &&
                <ul style={[comment.listBox, comment.marginLeft50]}>
                    { val.child.map(listing) }
                </ul>
                }
            </li>
        };
        return (<div>
            <div id="sc_comment_box">

                <CommentHead />

                <WriteBox />

                <div>
                    <div >
                        <ul id="main-comment" style={comment.listBox}>
                            {data.map(listing) }
                        </ul>
                    </div>
                </div>

                <div >
                    <div>
                        <a href="#">
                            <span><span>(<strong>1-20</strong>)</span><span>더보기</span></span>
                        </a>
                    </div>
                </div>
            </div>
        </div>)
    }
});


export default CommentList = Radium(CommentList);


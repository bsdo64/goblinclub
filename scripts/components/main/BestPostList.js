import React, { Component } from 'react';
import Radium, { Style } from 'radium';
import { Link } from 'react-router';

class BtnArea extends Component {
    render() {
        const id = this.props.id;
        return (
            <div style={styles.posts.postButtons} className="btn_area" >
                <a key='thumbUp' style={styles.posts.thumbUp} >
                    <i className="fa fa-thumbs-o-up"></i>
                </a>
                <a key='thumbDown' style={styles.posts.thumbDown} >
                    <i className="fa fa-thumbs-o-down"></i>
                </a>
                <a key='commentButton' style={styles.posts.commentButton} >
                    <i className="fa fa-commenting-o"></i>
                </a>
            </div>
        )
    }
}

class BestPostList extends Component {

    render() {
        const {
            _id,                            // article id ( shortId )
            title,                          // article title
            createdAt,                      // moment formatted string
            clubs,                          // included clubs (array)
            content,                        // article body
            user,                           // author
            vote_count,                     // total vote ( like +1, dislike -1 )
            comment_count                   // total comment count ( including descendant )
        } = this.props.post;

        return (
            <li style={styles.posts.post} className="_ccast_item" >
                <div style={styles.posts.listObj} className="lst_obj">
                    <div className="con_desc">
                        <h4 style={styles.posts.postTitle}>
                            <Link to={'/club/' + clubs[0].url + '/' + _id }
                                  style={styles.posts.postTitleItem}>{title}</Link>
                        </h4>
                        <p style={styles.posts.postContentMeta} className="frm_svc">
                            <Link to="http://cafe.naver.com/joonggonara/member/qkrtlaud0647/article" >{user.nick} </Link>
                            <span className="wrt_time">{createdAt} </span>
                            {
                                clubs.map(function(val, index) {
                                    return (
                                        <Link key={index} to={"/club/" + val.url} style={styles.posts.postTitleClub} >
                                            {val.name+" "}
                                        </Link>
                                    )
                                })
                            }
                        </p>
                        <div className="lst_type2">
                            <div style={styles.posts.postContents} className="rgt_dsc">
                                <div id="fd_cont" dangerouslySetInnerHTML={{__html: content}}>

                                </div>
                            </div>
                            <BtnArea id={_id} />
                        </div>
                    </div>
                    <div className="ic_bookmark">
                        <a style={styles.posts.voteCount} href="#" title="추천하기">{vote_count} 점 </a>
                        <a style={styles.posts.commentCount} href="#" title="추천하기">댓글 {comment_count} 개</a>
                        <a style={styles.posts.deleteButton} >삭제하기</a>
                    </div>
                </div>
            </li>
        )
    }
}
BtnArea = Radium(BtnArea);
export default BestPostList = Radium(BestPostList);

var styles = {
    posts: {
        post: {
            listStyle: 'none',
            marginBottom: 10
        },
        listObj: {
            backgroundColor: '#fff',
            borderRadius: 1,
            boxShadow: '1px 1px #b0c2c0',
            padding: 15
        },
        postTitle: {
            margin: 0,
            padding: '0 0 5px 0',
            borderBottom: '1px solid #b0c2c0'
        },
        postTitleItem: {
            color: '#000',
            fontSize: '18px',
            fontWeight: 'bold'
        },
        postTitleClub: {
            color: '#00A99E',
            fontSize: 11,
            fontWeight: 'bold'
        },
        postContentMeta: {
            margin: '9px 0',
            fontSize: 10
        },
        postContents: {
            margin: '5px 0'
        },
        postButtons: {
            margin: '10px 0'
        },
        voteCount: {
            fontSize: 12,
            color: '#aaa'
        },
        commentCount: {
            fontSize: 12,
            color: '#aaa'
        },
        deleteButton: {
            float: 'right',
            fontSize: 12,
            color: '#aaa'
        },
        thumbUp: {
            fontSize: 12,
            color: '#aaa',
            padding: '5px 10px',
            ':hover': {
                color: 'red'
            }
        },
        thumbDown: {
            fontSize: 12,
            color: '#aaa',
            padding: '5px 10px',
            ':hover': {
                color: 'red'
            }
        },
        commentButton: {
            fontSize: 12,
            color: '#aaa',
            padding: '5px 10px',
            ':hover': {
                color: 'red'
            }
        }
    }
}
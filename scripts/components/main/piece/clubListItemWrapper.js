import React, { Component } from 'react';
import Radium, { Style } from 'radium';
import { Link } from 'react-router';

@Radium
class BtnArea extends Component {
    render() {
        const { vote_count, comment_count } = this.props;
        return (
            <div style={styles.posts.btnArea} className="btn_area" >
                <a key="up" style={styles.posts.thumbUp} >
                    <i className="fa fa-thumbs-o-up" ></i>
                </a>
                <a key="down" style={styles.posts.thumbDown} >
                    <i className="fa fa-thumbs-o-down" ></i>
                </a>
                <a style={styles.posts.voteCount} href="#" title="추천하기" >{vote_count} 점 </a>
                <a key="comment" style={styles.posts.commentButton} >
                    <i className="fa fa-commenting-o" ></i>
                </a>
                <a style={styles.posts.commentCount} href="#" title="추천하기" >댓글 {comment_count} 개</a>
            </div>
        )
    }
}

@Radium
export default class ClubListItemWrapper extends Component {
    render() {
        const { title, createdAt, clubs, user, vote_count, comment_count, _id } = this.props.post;

        return (
            <li style={styles.posts.post} className="_ccast_item" >
                <div style={styles.posts.listObj} className="lst_obj" >
                    <div style={styles.posts.thumbNail}>
                        <img style={styles.posts.thumbNailImg} src="//b.thumbs.redditmedia.com/fUE7ZBvN3clcZKU0CKag35Rc3zNc1LQtJPculHyxjxY.jpg" />
                    </div>
                    <div style={styles.posts.textBody}>
                        <h4 style={styles.posts.postTitle} >
                            <Link to={"/club/" + clubs[0].url + "/" + _id} style={styles.posts.postTitleItem} >{title}</Link>
                        </h4>
                        <div style={styles.posts.postContentMeta} >
                            <span className="h_title" ><a href="http://cafe.naver.com/joonggonara/member/qkrtlaud0647/article" target="_blank" >{user.nick} </a></span>
                            <span className="wrt_time" >{createdAt} </span>
                            <Link to="/" style={styles.posts.postTitleClub} >/club/{clubs[0].url}</Link>

                            <BtnArea vote_count={vote_count} comment_count={comment_count} />

                            <div className="ic_bookmark"  style={styles.posts.deleteButton}>
                                <a style={styles.posts.deleteButtonText} >삭제하기</a>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        )
    }
}

var styles = {
    posts: {
        post: {
            listStyle: 'none',
            borderBottom: '1px solid #B0C2C0'
        },
        listObj: {
            backgroundColor: '#fff',
            borderRadius: 1,
            boxShadow: '1px 1px #b0c2c0',
            padding: 12,
            borderLeft: '3px solid #2B5F5B',
            minHeight: 88
        },
        thumbNail: {
            position: 'absolute',
            width: 98,
            height: 66,
            paddingRight: 15
        },
        thumbNailImg: {
            width: 'inherit'
        },
        textBody: {
            marginLeft: 113
        },
        postTitle: {
            margin: 0,
            padding: '0 0 5px 0',
            borderBottom: '1px solid #DFE9E8'
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
            margin: '9px 0 0 0',
            fontSize: 10
        },
        postContents: {
            margin: '5px 0'
        },
        btnArea: {
            display: 'inline-block'
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
            position: 'relative',
            display: 'inline-block'
        },
        deleteButtonText: {
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
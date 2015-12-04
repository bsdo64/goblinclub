import React, { Component } from 'react';
import Radium, { Style } from 'radium';
import { Link } from 'react-router';

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
                <a key="comment" style={styles.posts.commentButton} >
                    <i className="fa fa-commenting-o" ></i>
                </a>
                <a style={styles.posts.commentCount} href="#" title="추천하기" >댓글 {comment_count} 개</a>
            </div>
        )
    }
}

class ClubPostList extends Component {
    render() {
        const { title, createdAt, clubs, user, vote_count, comment_count, _id } = this.props.post;

        return (
            <li style={styles.posts.post} className="_ccast_item" >
                <div style={styles.posts.listObj} className="lst_obj" >
                    <div style={styles.posts.thumbNail}>
                        <img style={styles.posts.thumbNailImg} src="//b.thumbs.redditmedia.com/fUE7ZBvN3clcZKU0CKag35Rc3zNc1LQtJPculHyxjxY.jpg" />
                    </div>
                    <div style={styles.posts.textBody}>
                        <div style={styles.posts.postTitle} >
                            <div style={styles.posts.postTitleContainer}>
                                <a style={styles.posts.voteCount} href="#" >{vote_count} 점 </a>
                                <Link to={"/club/" + clubs[0].url + "/" + _id} style={styles.posts.postTitleItem} >{title}</Link>
                            </div>
                            <div style={styles.posts.postContentMeta} >
                                {
                                    clubs.map(function(val, index) {
                                        return (
                                            <Link key={index} to={"/club/" + val.url} style={styles.posts.postTitleClub} >
                                                {val.name+" "}
                                            </Link>
                                        )
                                    })
                                }
                                <span className="h_title" ><a href="http://cafe.naver.com/joonggonara/member/qkrtlaud0647/article" target="_blank" >{user.nick} </a></span>
                                <span className="wrt_time" >{createdAt} </span>

                                <BtnArea vote_count={vote_count} comment_count={comment_count} />

                            </div>
                        </div>
                    </div>
                </div>
            </li>
        )
    }
}

BtnArea = Radium(BtnArea);
export default ClubPostList = Radium(ClubPostList);

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
            padding: '4px 12px 5px 12px',
            borderLeft: '3px solid #2B5F5B',
            minHeight: 35
        },
        thumbNail: {
            position: 'absolute',
            width: 30,
            height: 20,
            paddingTop: 3
        },
        thumbNailImg: {
            width: 'inherit'
        },
        textBody: {
            marginLeft: 45
        },
        postTitle: {
            margin: 0,
            padding: '3px 0 4px 0',
            borderBottom: '1px solid #DFE9E8'
        },
        postTitleContainer: {
            width: 'calc(100% - 320px)',
            display: 'inline-block'
        },
        postTitleItem: {
            color: '#000',
            fontSize: '14px',
            fontWeight: 'bold'
        },
        postTitleClub: {
            color: '#00A99E',
            fontSize: 11,
            fontWeight: 'bold'
        },
        postContentMeta: {
            float: 'right',
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
            fontSize: 11,
            color: '#aaa',
            padding: '0 5px'
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
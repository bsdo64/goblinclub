import React, { Component } from 'react';
import Radium, { Style } from 'radium';
import { Link } from 'react-router';
import md from '../../../utils/markdown';
import hljs from 'highlight.js'

@Radium
class BtnArea extends Component {
    render() {
        const id = this.props.id;
        return (
            <div style={styles.posts.postButtons} className="btn_area" >
                <a key={id+'thumbUp'} style={styles.posts.thumbUp} >
                    <i className="fa fa-thumbs-o-up"></i>
                </a>
                <a key={id+'thumbDown'} style={styles.posts.thumbDown} >
                    <i className="fa fa-thumbs-o-down"></i>
                </a>
                <a key={id+'commentButton'} style={styles.posts.commentButton} >
                    <i className="fa fa-commenting-o"></i>
                </a>
            </div>
        )
    }
}

@Radium
export default class BestListItemWrapper extends Component {
    componentDidMount() {
        hljs.initHighlightingOnLoad();
    }

    render() {
        const { title, createdAt, clubs, content, user, vote_count, comment_count, _id } = this.props.post;

        return (
            <li style={styles.posts.post} className="_ccast_item" >
                <div style={styles.posts.listObj} className="lst_obj">
                    <div className="con_desc">
                        <h4 style={styles.posts.postTitle}>
                            <Link to={'/club/' + clubs[0].url + '/' + _id }
                                  style={styles.posts.postTitleItem}
                                  target="_blank">{title}</Link>
                        </h4>
                        <p style={styles.posts.postContentMeta} className="frm_svc">
                                <span className="h_title">
                                    <a className="N=a:sbx*c.content" href="http://cafe.naver.com/joonggonara/member/qkrtlaud0647/article" target="_blank">{user.nick} </a>
                                </span>
                            <span className="wrt_time">{createdAt} </span>
                            <Link to="/" style={styles.posts.postTitleClub}>/club/{clubs[0].url}</Link>
                        </p>
                        <div className="lst_type2">
                            <div style={styles.posts.postContents} className="rgt_dsc">
                                <div id="fd_cont" dangerouslySetInnerHTML={{__html: md.render(content)}}>

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
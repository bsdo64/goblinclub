import React, { Component } from 'react';
import Radium from 'radium';
import { Link } from 'react-router';

import styles from './style/style_post';
import { CommentList } from '../index';

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

class PostPage extends Component {

    constructor () {
        super();

        this.clicked = this.clicked.bind(this);
    }

    componentWillReceiveProps(nextProps) {

    }

    render() {
        const { title, createdAt, clubs, content, user, vote_count, comment_count, _id } = this.props.post;

        console.log('post', this.props.post);
        return (
            <li style={styles.posts.post} className="_ccast_item" >
                <div style={styles.posts.listObj} className="lst_obj">
                    <div className="con_desc">
                        <h4 style={styles.posts.postTitle}>
                            <Link to="/" style={styles.posts.postTitleItem}
                                  onClick={this.clicked}>{title}</Link>
                        </h4>
                        <p style={styles.posts.postContentMeta} className="frm_svc">
                                <span className="h_title">
                                    <a className="N=a:sbx*c.content" href="http://cafe.naver.com/joonggonara/member/qkrtlaud0647/article" target="_blank">{user.nick} </a>
                                </span>
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
                        </div>
                    </div>
                    <div className="ic_bookmark" style={styles.posts.countInfo}>
                        <span >
                            <span style={styles.posts.voteCount}>{vote_count + ' '}</span>
                             점
                        </span>
                        <a href="#" style={styles.posts.paddingLeft10}>
                             답글
                            <span style={styles.posts.commentCount}>{' ' + comment_count + ' '}</span>
                             개
                        </a>
                        <a style={styles.posts.deleteButton}>삭제하기</a>
                    </div>
                    <BtnArea id={_id} />
                    <div className="comments">
                        <CommentList />
                    </div>

                </div>
            </li>
        )
    }

    clicked() {

    }
}

BtnArea = Radium(BtnArea);
export default PostPage = Radium(PostPage);
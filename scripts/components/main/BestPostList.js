import React, { Component } from 'react';
import Radium, { Style } from 'radium';
import { Link } from 'react-router';

import styles from './style/style_post';

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

                </div>
            </li>
        )
    }
}
BtnArea = Radium(BtnArea);
export default BestPostList = Radium(BestPostList);
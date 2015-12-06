import React from 'react';
import Radium from 'radium';
import {Link} from 'react-router';

import styles from './style/style_post';
import {CommentList} from '../index';

let BtnArea = React.createClass({
  displayName: 'BtnArea',

  render() {
    return (
      <div className="btn_area" style={styles.posts.postButtons} >
        <a key={'thumbUp'} style={styles.posts.thumbUp}>
          <i className="fa fa-thumbs-o-up"></i>
        </a>
        <a key={'thumbDown'} style={styles.posts.thumbDown}>
          <i className="fa fa-thumbs-o-down"></i>
        </a>
        <a key={'commentButton'} style={styles.posts.commentButton}>
          <i className="fa fa-commenting-o"></i>
        </a>
      </div>
    );
  }
});
BtnArea = Radium(BtnArea);

let PostPage = React.createClass({
  displayName: 'PostPage',
  propTypes: {
    commentList: React.PropTypes.arrayOf.isRequired,
    post: React.PropTypes.shape.isRequired
  },
  render() {
    const {title, createdAt, clubs, content, user, voteCount, commentCount} = this.props.post;
    const {commentList} = this.props;

    return (
      <li className="_ccast_item" style={styles.posts.post}>
        <div className="lst_obj" style={styles.posts.listObj}>
          <div className="con_desc">
            <h4 style={styles.posts.postTitle}>
              <Link style={styles.posts.postTitleItem} to="/">{title}</Link>
            </h4>
            <p className="frm_svc" style={styles.posts.postContentMeta}>
              <span className="h_title">
              <a
                  className="N=a:sbx*c.content" href="#"
                  target="_blank">{user.nick}
              </a>
              </span>
              <span className="wrt_time">{createdAt} </span>
              {
                clubs.map(function (val, index) {
                  return (
                    <Link
                        key={index} style={styles.posts.postTitleClub}
                        to={'/club/' + val.url}>
                      {val.name + ' '}
                    </Link>
                  );
                })
              }
            </p>
            <div className="lst_type2">
              <div className="rgt_dsc" style={styles.posts.postContents}>
                <div id="fd_cont" dangerouslySetInnerHTML={{__html: content}}>

                </div>
              </div>
            </div>
          </div>
          <div className="ic_bookmark" style={styles.posts.countInfo}>
            <span >
              <span style={styles.posts.voteCount}>{voteCount + ' 점'}</span>
            </span>
            <a href="#" style={styles.posts.paddingLeft10}>
              <span style={styles.posts.commentCount}>{'답글 ' + commentCount + ' 개'}</span>
            </a>
            <a style={styles.posts.deleteButton}>{'삭제하기'}</a>
          </div>
          <BtnArea />
          <div className="comments">
            <CommentList commentList={commentList} />
          </div>
        </div>
      </li>
    );
  }
});

export default PostPage = Radium(PostPage);

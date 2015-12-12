import React from 'react';
import Radium from 'radium';
import {Link} from 'react-router';

import styles from '../Style/style_clubpostlist';

let BtnArea = React.createClass({
  displayName: 'BtnArea',
  propTypes: {
    commentCount: React.PropTypes.number
  },
  render() {
    const {commentCount} = this.props;
    return (
      <div className="btn_area" style={styles.btnArea}>
        <a key="up" style={styles.thumbUp}>
          <i className="fa fa-thumbs-o-up" />
        </a>
        <a key="down" style={styles.thumbDown}>
          <i className="fa fa-thumbs-o-down" />
        </a>
        <a key="comment" style={styles.commentButton}>
          <i className="fa fa-commenting-o" />
        </a>
        <a href="#" style={styles.commentCount}>{'댓글 ' + commentCount + ' 개'}</a>
      </div>
    );
  }
});

let ClubPostList = React.createClass({
  displayName: 'ClubPostList',
  propTypes: {
    post: React.PropTypes.shape({
      uid: React.PropTypes.string.isRequired,
      title: React.PropTypes.string.isRequired,
      createdAt: React.PropTypes.string.isRequired,
      clubs: React.PropTypes.array.isRequired,
      user: React.PropTypes.object.isRequired,
      voteCount: React.PropTypes.number.isRequired,
      commentCount: React.PropTypes.number.isRequired
    })
  },
  render() {
    const {title, createdAt, clubs, user, voteCount, commentCount, uid} = this.props.post;
    const {params} = this.props;

    return (
      <li className="_ccast_item" style={styles.post}>
        <div className="lst_obj" style={styles.listObj}>
          <div style={styles.thumbNail}>
            <img src="//b.thumbs.redditmedia.com/fUE7ZBvN3clcZKU0CKag35Rc3zNc1LQtJPculHyxjxY.jpg"
                 style={styles.thumbNailImg}/>
          </div>
          <div style={styles.textBody}>
            <div style={styles.postTitle}>
              <div style={styles.postTitleContainer}>
                <a href="#" style={styles.voteCount}>{voteCount + ' 점'} </a>
                <Link style={styles.postTitleItem} to={'/club/' + params.clubName + '/' + uid}>
                  {title}
                </Link>
              </div>
              <div style={styles.postContentMeta}>
                {
                  clubs.map(function (val, index) {
                    return (
                      <Link key={index} style={styles.postTitleClub}
                            to={'/club/' + val.url}>
                        {val.name + ' '}
                      </Link>
                    );
                  })
                }
                <a href="http://cafe.naver.com/joonggonara/member/qkrtlaud0647/article"
                   target="_blank">{user.nick} </a>
                <span className="wrt_time">{createdAt}</span>
                <BtnArea commentCount={commentCount}/>
              </div>
            </div>
          </div>
        </div>
      </li>
    );
  }
});

BtnArea = Radium(BtnArea);
export default ClubPostList = Radium(ClubPostList);


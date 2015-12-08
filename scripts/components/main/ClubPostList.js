import React, {Component} from 'react';
import Radium from 'radium';
import {Link} from 'react-router';

import styles from '../Style/style_clubpostlist';

class BtnArea extends Component {
  render() {
    const {comment_count} = this.props;
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
        <a href="#" style={styles.commentCount}>{'댓글 ' + comment_count + ' 개'}</a>
      </div>
    );
  }
}

let ClubPostList = React.createClass({
  displayName: 'ClubPostList',
  propTypes: {
    post: React.PropTypes.shape({
      _id: React.PropTypes.string.isRequired,
      title: React.PropTypes.string.isRequired,
      createdAt: React.PropTypes.string.isRequired,
      clubs: React.PropTypes.string.isRequired,
      user: React.PropTypes.string.isRequired,
      vote_count: React.PropTypes.string.isRequired,
      comment_count: React.PropTypes.string.isRequired
    })
  },
  render() {
    const {title, createdAt, clubs, user, vote_count, comment_count, _id} = this.props.post;

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
                <a href="#" style={styles.voteCount}>{vote_count + ' 점'} </a>
                <Link style={styles.postTitleItem} to={'/club/' + clubs[0].url + '/' + _id}>
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
                <BtnArea comment_count={comment_count}/>
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


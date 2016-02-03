import React from 'react';
import Radium from 'radium';
import {Link} from 'react-router';

import PostActions from '../../Flux/Actions/PostActions';
import AppActions from '../App/AppActions';

import styles from './PostsByClubStyle';

const LinkR = Radium(Link);

let BtnArea = React.createClass({
  displayName: 'BtnArea',
  propTypes: {
    commentCount: React.PropTypes.number,
    uid: React.PropTypes.string
  },
  handleLike(uid, authSuccess) {
    if (authSuccess) {
      PostActions.like(uid);
    } else {
      AppActions.toggleLoginModal();
    }
  },
  handleDisLike(uid, authSuccess) {
    if (authSuccess) {
      PostActions.dislike(uid);
    } else {
      AppActions.toggleLoginModal();
    }
  },
  render() {
    const {auth, authSuccess, commentCount, postUrl, uid} = this.props;
    return (
      <div className="btn_area" style={styles.btnArea}>
        <a key="up"
           onClick={this.handleLike.bind(null, uid, authSuccess)}
           style={styles.thumbUp}>
          <i className="fa fa-thumbs-o-up" />
        </a>
        <a key="down"
           onClick={this.handleDisLike.bind(null, uid, authSuccess)}
           style={styles.thumbDown}>
          <i className="fa fa-thumbs-o-down" />
        </a>
        <LinkR key={'commentButton' + uid}
               style={styles.commentButton}
               to={postUrl}>
          <i className="fa fa-commenting-o" />
          {' ' + commentCount + ' 개'}
        </LinkR>
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
      belongingClubs: React.PropTypes.array.isRequired,
      user: React.PropTypes.object.isRequired,
      voteCount: React.PropTypes.number.isRequired,
      commentCount: React.PropTypes.number.isRequired
    })
  },
  render() {
    const {title, createdAt, belongingClubs, user, voteCount, commentCount, uid} = this.props.post;
    const {auth, authSuccess, params} = this.props;
    const postUrl = '/club/' + params.clubName + '/' + uid;
    return (
        <div className="lst_obj" style={styles.listObj}>
          <div style={styles.thumbNail}>
            <img src="//b.thumbs.redditmedia.com/fUE7ZBvN3clcZKU0CKag35Rc3zNc1LQtJPculHyxjxY.jpg"
                 style={styles.thumbNailImg}/>
          </div>
          <div style={styles.textBody}>
            <Link style={styles.postTitleItem} to={postUrl}>
              {title}
            </Link>
            <div style={styles.postTitle}>
              <div style={styles.postTitleContainer}>
                <a href="#" style={styles.voteCount}>{voteCount + ' 점'} </a>
              </div>
              <div style={styles.postContentMeta}>
                {
                  belongingClubs.map(function (val, index) {
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
                <BtnArea
                  auth={auth}
                  authSuccess={authSuccess}
                  postUrl={postUrl}
                  uid={uid}
                  commentCount={commentCount}/>
              </div>
            </div>
          </div>
        </div>
    );
  }
});

BtnArea = Radium(BtnArea);
export default ClubPostList = Radium(ClubPostList);


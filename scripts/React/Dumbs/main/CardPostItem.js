import React from 'react';
import Radium from 'radium';
import {Link} from 'react-router';

import styles from '../../Style/Post';
import {CommentList} from '../index';

import PostActions from '../../../Flux/Actions/PostActions';
import AppActions from '../../../Flux/Actions/AppActions';

const LinkR = Radium(Link);
let BtnArea = React.createClass({
  displayName: 'BtnArea',
  propTypes: {
    uid: React.PropTypes.string
  },
  handleLike(uid, auth) {
    if (auth) {
      PostActions.like(uid);
    } else {
      AppActions.toggleLoginModal();
    }
  },
  handleDisLike(uid, auth) {
    if (auth) {
      PostActions.dislike(uid);
    } else {
      AppActions.toggleLoginModal();
    }
  },
  render() {
    const {authSuccess, uid, postUrl} = this.props;
    return (
      <div className="btn_area" style={styles.postButtons}>
        <a key={'thumbUp' + uid}
           onClick={this.handleLike.bind(null, uid, authSuccess)}
           style={styles.thumbUp}>
          <i className="fa fa-thumbs-o-up" />
        </a>
        <a key={'thumbDown' + uid}
           onClick={this.handleDisLike.bind(null, uid, authSuccess)}
           style={styles.thumbDown}>
          <i className="fa fa-thumbs-o-down" />
        </a>
        <LinkR key={'commentButton' + uid}
              style={styles.commentButton}
              to={postUrl}>
          <i className="fa fa-commenting-o" />
        </LinkR>
      </div>
    );
  }
});

let CardPostItem = React.createClass({
  displayName: 'CardPostItem',
  propTypes: {
    post: React.PropTypes.shape({
      uid: React.PropTypes.string.isRequired,
      title: React.PropTypes.string.isRequired,
      createdAt: React.PropTypes.string.isRequired,
      belongingClubs: React.PropTypes.array.isRequired,
      content: React.PropTypes.string.isRequired,
      user: React.PropTypes.object.isRequired,
      voteCount: React.PropTypes.number.isRequired,
      commentCount: React.PropTypes.number.isRequired
    })
  },
  render() {
    const {
      uid,
      title,
      createdAt,
      belongingClubs,
      content,
      user,
      voteCount,
      commentCount
    } = this.props.post;
    const {hasComment, commentList} = this.props;
    const {auth, authSuccess} = this.props;
    const postUrl = '/club/' + belongingClubs[0].url + '/' + uid;
    return (
      <div className="lst_obj" style={styles.listObj}>
        <div className="con_desc">
          <h4 style={styles.postTitle}>
            <Link style={styles.postTitleItem}
                  to={postUrl}>{title}</Link>
          </h4>
          <p style={styles.defaultClubMeta}>
            {
              belongingClubs.map(function (val, index) {
                return (
                  <Link key={index} style={styles.postTitleClub}
                        to={'/club/' + val.url} >
                    {val.name + ' '}
                  </Link>
                );
              })
            }
          </p>
          <p className="frm_svc" style={styles.postContentMeta}>
            <span className="wrt_time">{createdAt} </span>
            <Link to="#">{user.nick} </Link>
          </p>
          <div className="lst_type2">
            <div className="rgt_dsc" style={styles.postContents}>
              <div dangerouslySetInnerHTML={{__html: content}} id="fd_cont"></div>
            </div>
          </div>
        </div>
        <div className="ic_bookmark" style={styles.countInfo}>
          <span style={styles.voteCount}>{voteCount + ' '}</span>
          {'점'}

          <a href="#" style={styles.paddingLeft10}>
            {'답글'}
            <span style={styles.commentCount}>{' ' + commentCount + ' '}</span>
            {'개'}
          </a>
          {
            auth.user && auth.user.nick === user.nick &&
            <a style={styles.deleteButton}>{'삭제하기'}</a>
          }
        </div>

        <BtnArea uid={uid} authSuccess={authSuccess} postUrl={postUrl}/>

        {
          hasComment && commentList &&
          <CommentList authSuccess={authSuccess} commentList={commentList}/>
        }
      </div>
    );
  }
});

BtnArea = Radium(BtnArea);
export default CardPostItem = Radium(CardPostItem);

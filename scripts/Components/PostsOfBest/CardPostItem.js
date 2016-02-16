import React from 'react';
import Radium from 'radium';
import {Link} from 'react-router';

import styles from './PostOfBestStyle';
import CommentList from '../Comments/CommentList';

import PostActions from '../../Flux/Actions/PostActions';
import AppActions from '../App/AppActions';

const LinkR = Radium(Link);
let BtnArea = React.createClass({
  displayName: 'BtnArea',
  propTypes: {
    uid: React.PropTypes.string
  },
  getInitialState: function () {
    return {
      voted: false
    };
  },

  handleLike(uid, auth) {
    if (auth) {
      if (!this.state.voted) {
        PostActions.like(uid);
        this.setState({voted: 'like'});
      }
      if (this.state.voted === 'dislike') {
        PostActions.likeFromDislike(uid);
        this.setState({voted: 'like'});
      }
    } else {
      AppActions.toggleLoginModal();
    }
  },
  handleDisLike(uid, auth) {
    if (auth) {
      if (!this.state.voted) {
        PostActions.dislike(uid);
        this.setState({voted: 'dislike'});
      }
      if (this.state.voted === 'like') {
        PostActions.dislikeFromLike(uid);
        this.setState({voted: 'dislike'});
      }
    } else {
      AppActions.toggleLoginModal();
    }
  },
  render() {
    const {authSuccess, uid, postUrl, voteCount, auth, commentCount, author} = this.props;
    return (
      <div className="btn_area" style={styles.postButtons}>
        <a href="#" style={[styles.thumbUp, styles.fontSize13]}>
          <span style={styles.voteCount}>{voteCount + ' '}</span>
          {'P'}
        </a>
        <a key="up"
           onClick={this.handleLike.bind(null, uid, authSuccess)}
           style={styles.thumbUp}>
          <i className={'fa' + (this.state.voted === 'like' ? ' fa-thumbs-up' : ' fa-thumbs-o-up')} />
        </a>
        <a key="down"
           onClick={this.handleDisLike.bind(null, uid, authSuccess)}
           style={styles.thumbDown}>
          <i className={'fa' + (this.state.voted === 'dislike' ? ' fa-thumbs-down' : ' fa-thumbs-o-down')} />
        </a>
        <LinkR key={'commentButton' + uid}
              style={styles.commentButton}
              to={postUrl}>
          <i className="fa fa-commenting-o" />
          {' ' + commentCount}
        </LinkR>
        {
          auth.user && auth.user.nick === author.nick &&
          <a style={styles.deleteButton}>{'삭제하기'}</a>
        }
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

        <hr />
        <BtnArea
          author={user}
          auth={auth}
          commentCount={commentCount}
          voteCount={voteCount}
          uid={uid}
          authSuccess={authSuccess}
          postUrl={postUrl}/>
        <hr style={styles.buttonHrBottom} />

        {
          hasComment && commentList &&
          <CommentList auth={auth} authSuccess={authSuccess} commentList={commentList}/>
        }
      </div>
    );
  }
});

BtnArea = Radium(BtnArea);
export default CardPostItem = Radium(CardPostItem);

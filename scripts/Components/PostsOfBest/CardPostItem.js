import React from 'react';

import {Link} from 'react-router';
import _ from 'lodash';

import styles from './PostOfBestStyle';
import CommentList from '../Comments/CommentList';

import PostActions from '../../Flux/Actions/PostActions';
import AppActions from '../App/AppActions';

const LinkR = Link;
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

  componentWillMount() {
    let {userVoted} = this.props;
    let voteKind;
    if (!_.isEmpty(userVoted)) {
      if (userVoted[0].kind) {
        voteKind = 'like';
      } else if (!userVoted[0].kind) {
        voteKind = 'dislike';
      }
      this.setState({voted: voteKind});
    }
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
          <i className={'fa' + (this.state.voted === 'like' ? ' fa-thumbs-up' : ' fa-thumbs-o-up')}
             style={this.state.voted === 'like' ? styles.red : {}} />
        </a>
        <a key="down"
           onClick={this.handleDisLike.bind(null, uid, authSuccess)}
           style={styles.thumbDown}>
          <i className={'fa' + (this.state.voted === 'dislike' ? ' fa-thumbs-down' : ' fa-thumbs-o-down')}
             style={this.state.voted === 'dislike' ? styles.red : {}} />
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
    auth: React.PropTypes.object,
    authSuccess: React.PropTypes.bool,
    commentList: React.PropTypes.Array,
    hasComment: React.PropTypes.bool,
    post: React.PropTypes.shape({
      uid: React.PropTypes.string.isRequired,
      title: React.PropTypes.string.isRequired,
      createdAt: React.PropTypes.string.isRequired,
      belongingDefaultClub: React.PropTypes.array.isRequired,
      belongingSubClubs: React.PropTypes.array.isRequired,
      content: React.PropTypes.string.isRequired,
      user: React.PropTypes.object.isRequired,
      voteCount: React.PropTypes.number.isRequired,
      commentCount: React.PropTypes.number.isRequired,
      userVoted: React.PropTypes.Array
    })
  },
  componentDidMount() {
    let post = document.getElementById('content-' + this.props.post.uid);
    let videos = post.getElementsByClassName('youtube-embed');

    function changeVideoEmbed() {
      return function () {
        // Create an iFrame with autoplay set to true
        let iframeString = '<iframe class="youtube-embed" src="https://www.youtube.com/embed/' + this.id + '?wmode=transparent&rel=0&autohide=1&autoplay=1&showinfo=0&enablejsapi=1" frameborder="0" allowfullscreen style="top:0; left: 0; width: 100%; height: 100%; position: absolute;"></iframe>';

        let wrapper = document.createElement('div');
        wrapper.innerHTML = iframeString;

        let iframe = wrapper.firstChild;

        this.parentNode.replaceChild(iframe, this);
      };
    }

    let videoLength = videos.length;
    for (let i = 0; i < videoLength; i = i + 1) {
      // Based on the YouTube ID, we can easily find the thumbnail image
      videos[i].style.backgroundImage = 'url(http://i.ytimg.com/vi/' + videos[i].id + '/sddefault.jpg)';

      // Overlay the Play icon to make it look like a video player
      let play = document.createElement('div');
      play.setAttribute('class', 'play');
      videos[i].appendChild(play);

      videos[i].onclick = changeVideoEmbed();
    }
  },

  render() {
    const {
      uid,
      title,
      createdAt,
      belongingDefaultClub,
      belongingSubClubs,
      content,
      user,
      voteCount,
      commentCount,
      userVoted
    } = this.props.post;
    const {hasComment, commentList} = this.props;
    const {auth, authSuccess} = this.props;
    const postUrl = '/club/' + belongingDefaultClub[0].url + '/' + uid;
    return (
      <div className="lst_obj" style={styles.listObj}>
        <div className="con_desc">
          <h4 style={styles.postTitle}>
            <Link style={styles.postTitleItem}
                  to={postUrl}>{title}</Link>
          </h4>
          <p style={styles.defaultClubMeta}>
            <Link style={styles.postTitleClub}
                  to={'/club/' + belongingDefaultClub[0].url}>
              {belongingDefaultClub[0].name + ' '}
            </Link>
            {
              !_.isEmpty(belongingSubClubs) &&
              <span>{' / '}</span>
            }
            {
              !_.isEmpty(belongingSubClubs) &&
              belongingSubClubs.map(function (val, index) {
                return (
                  <Link key={index} style={styles.postTitleClub}
                        to={'/club/' + val.url}>
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
              <div dangerouslySetInnerHTML={{__html: content}} id={'content-' + uid}></div>
            </div>
          </div>
        </div>

        <hr />
        <BtnArea
          author={user}
          userVoted={userVoted}
          auth={auth}
          commentCount={commentCount}
          voteCount={voteCount}
          uid={uid}
          authSuccess={authSuccess}
          postUrl={postUrl}/>
        <hr style={styles.buttonHrBottom} />

        {
          hasComment && commentList &&
          <CommentList
            {...this.props}
            auth={auth}
            authSuccess={authSuccess}
            commentList={commentList}
            uid={uid} />
        }
      </div>
    );
  }
});

export default CardPostItem ;

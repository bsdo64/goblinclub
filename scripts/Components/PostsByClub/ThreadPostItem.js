import React from 'react';
import Radium from 'radium';
import _ from 'lodash';
import {Link} from 'react-router';
import cheerio from 'cheerio';

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
    const {authSuccess, commentCount, postUrl, uid} = this.props;
    return (
      <div className="btn_area" style={styles.btnArea}>
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
    const {
      title,
      createdAt,
      belongingDefaultClub,
      belongingSubClubs,
      user,
      voteCount,
      commentCount,
      uid,
      content} = this.props.post;
    const {authSuccess, params} = this.props;
    const postUrl = '/club/' + params.clubName + '/' + uid;

    let $ = cheerio.load(content);
    let firstImgSrc = function () {
      let imgSrc = $('img').attr('src');
      let videoHas = $('div').hasClass('youtube-embed');
      let result;

      if (imgSrc) {
        result = imgSrc;
      }

      if (!imgSrc && videoHas) {
        result = $('.youtube-embed').css('background-image').split('url(')[1].slice(0, -1);
      }

      return result;
    }();

    return (
        <div className="lst_obj" style={styles.listObj}>
          <div style={styles.thumbNail}>
            <img src={firstImgSrc ? firstImgSrc : ''}
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
                <a href="http://cafe.naver.com/joonggonara/member/qkrtlaud0647/article"
                   target="_blank">{user.nick} </a>
                <span className="wrt_time">{createdAt}</span>
                <BtnArea
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


import React from 'react';
import Radium from 'radium';
import {Link} from 'react-router';

import styles from '../../Style/style_post';
import {CommentList} from '../index';

let BtnArea = React.createClass({
  displayName: 'BtnArea',
  render() {
    return (
      <div className="btn_area" style={styles.posts.postButtons}>
        <a key={'thumbUp'} style={styles.posts.thumbUp}>
          <i className="fa fa-thumbs-o-up" />
        </a>
        <a key={'thumbDown'} style={styles.posts.thumbDown}>
          <i className="fa fa-thumbs-o-down" />
        </a>
        <a key={'commentButton'} style={styles.posts.commentButton}>
          <i className="fa fa-commenting-o" />
        </a>
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
    const {auth} = this.props;

    return (
      <div className="lst_obj" style={styles.posts.listObj}>
        <div className="con_desc">
          <h4 style={styles.posts.postTitle}>
            <Link style={styles.posts.postTitleItem}
                  to={'/club/' + belongingClubs[0].url + '/' + uid}>{title}</Link>
          </h4>
          <p className="frm_svc" style={styles.posts.postContentMeta}>
            <Link to="#">{user.nick} </Link>
            <span className="wrt_time">{createdAt} </span>
            {
              belongingClubs.map(function (val, index) {
                return (
                  <Link key={index} style={styles.posts.postTitleClub}
                        to={'/club/' + val.url} >
                    {val.name + ' '}
                  </Link>
                );
              })
            }
          </p>
          <div className="lst_type2">
            <div className="rgt_dsc" style={styles.posts.postContents}>
              <div dangerouslySetInnerHTML={{__html: content}} id="fd_cont"></div>
            </div>
          </div>
        </div>
        <div className="ic_bookmark" style={styles.posts.countInfo}>
          <span style={styles.posts.voteCount}>{voteCount + ' '}</span>
          {'점'}

          <a href="#" style={styles.posts.paddingLeft10}>
            {'답글'}
            <span style={styles.posts.commentCount}>{' ' + commentCount + ' '}</span>
            {'개'}
          </a>
          {
            auth.user && auth.user.nick === user.nick &&
            <a style={styles.posts.deleteButton}>{'삭제하기'}</a>
          }
        </div>

        <BtnArea />

        {
          hasComment &&
          <div className="comments">
            <CommentList commentList={commentList}/>
          </div>
        }
      </div>
    );
  }
});

BtnArea = Radium(BtnArea);
export default CardPostItem = Radium(CardPostItem);

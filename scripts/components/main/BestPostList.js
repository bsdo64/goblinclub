import React, {Component} from 'react';
import Radium from 'radium';
import {Link} from 'react-router';

import styles from '../Style/style_post';

class BtnArea extends Component {
  render() {
    const id = this.props.id;
    return (
      <div className="btn_area" style={styles.posts.postButtons}>
        <a key={id+'thumbUp'} style={styles.posts.thumbUp}>
          <i className="fa fa-thumbs-o-up" />
        </a>
        <a key={id+'thumbDown'} style={styles.posts.thumbDown}>
          <i className="fa fa-thumbs-o-down" />
        </a>
        <a key={id+'commentButton'} style={styles.posts.commentButton}>
          <i className="fa fa-commenting-o" />
        </a>
      </div>
    );
  }
}

class BestPostList extends Component {

  render() {
    const {
      _id,
      title,
      createdAt,
      clubs,
      content,
      user,
      vote_count,
      comment_count
    } = this.props.post;

    return (
      <li className="_ccast_item" style={styles.posts.post}>
        <div className="lst_obj" style={styles.posts.listObj} >
          <div className="con_desc">
            <h4 style={styles.posts.postTitle}>
              <Link style={styles.posts.postTitleItem}
                    to={'/club/' + clubs[0].url + '/' + _id}>{title}</Link>
            </h4>
            <p className="frm_svc" style={styles.posts.postContentMeta}>
              <Link to="#">{user.nick} </Link>
              <span className="wrt_time">{createdAt} </span>
              {
                clubs.map(function (val, index) {
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
                <div id="fd_cont" dangerouslySetInnerHTML={{__html: content}}>

                </div>
              </div>
            </div>
          </div>
          <div className="ic_bookmark" style={styles.posts.countInfo}>
            <span style={styles.posts.voteCount}>{vote_count + ' '}</span>
            {'점'}

            <a href="#" style={styles.posts.paddingLeft10}>
              {'답글'}
              <span style={styles.posts.commentCount}>{' ' + comment_count + ' '}</span>
              {'개'}
            </a>
            <a style={styles.posts.deleteButton}>{'삭제하기'}</a>
          </div>
          <BtnArea id={_id}/>
        </div>
      </li>
    );
  }
}
BtnArea = Radium(BtnArea);
export default BestPostList = Radium(BestPostList);

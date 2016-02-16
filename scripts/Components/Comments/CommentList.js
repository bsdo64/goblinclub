/**
 * Created by dobyeongsu on 2015. 12. 4..
 */
import React from 'react';
import Radium from 'radium';
import Textarea from 'react-textarea-autosize';
import {Button} from 'react-bootstrap';

import HeadLine from '../HeadLine/HeadLine';

import AppActions from '../App/AppActions';
import styles from './styles';

let WriteBox = React.createClass({
  displayName: 'WriteBox',
  checkLogin() {
    const {authSuccess} = this.props;
    if (!authSuccess) {
      AppActions.toggleLoginModal();
    }
  },
  handleUploadPic() {
    console.log('Upload Picture');
  },
  handleChange() {
    console.log(this.refs.commentBox.value);
    this.setState({comment: this.refs.commentBox.value.length});
  },
  render() {
    const {auth} = this.props;
    return (
      <div style={styles.writeBox}>
        <div style={styles.writeBoxLeft}>
          <div style={styles.writeBoxName}>
            {auth.user.nick}
          </div>
        </div>
        <div style={styles.writeBoxRight}>
          <div style={styles.inputBox}>
            <Textarea
              style={styles.input}
              rows={1}
              ref="commentBox"
              onChange={this.handleChange}
              onFocus={this.checkLogin}
              placeholder="댓글을 입력하세요"
            />
          </div>
          <div style={styles.pictureBox}>
            <div style={styles.picture} onClick={this.handleUploadPic}>
              <i className="fa fa-camera" />
            </div>
          </div>
        </div>
        <Button style={styles.submitCommentBtn} bsStyle="default">등록</Button>
      </div>);
  }
});

let CommentHead = React.createClass({
  displayName: 'CommentHead',
  render() {
    return (
      <div >
        <HeadLine title="댓글" />
      </div>
    );
  }
});

let CommentBox = React.createClass({
  displayName: 'CommentBox',
  propTypes: {
    oneComment: React.PropTypes.shape({
      nick: React.PropTypes.string.isRequired,
      children: React.PropTypes.object
    })
  },
  getInitialState: function () {
    return {
      openWriteBox: false
    };
  },
  handleOpenWriteBox() {
    this.setState({openWriteBox: !this.state.openWriteBox});
  },
  render() {
    const {oneComment} = this.props;
    console.log(oneComment);
    return (
    <div style={styles.box}>
      <div style={styles.rightButtonBox}>
        {'하루 전 '}
        <div style={styles.inlineBlock}>
          <a style={styles.voteButton}>
            <i className="fa fa-thumbs-o-up" />
          </a>
          <a style={styles.voteButton}>
            <i className="fa fa-thumbs-o-down" />
          </a>
          <a href="#" style={styles.replayCount}>
            {'댓글 ' + (oneComment.children ? oneComment.children.length : 0) + ' 개'}
          </a>
          <a onClick={this.handleOpenWriteBox} style={[styles.replayCount, styles.paddingLeft10]}>
            {'댓글달기'}
          </a>
        </div>
      </div>
      <div style={styles.contentLeft}>
                <span style={styles.author}>
                    <a href="http://cafe.naver.com/joonggonara/member/qkrtlaud0647/article"
                       target="_blank">{oneComment.user.nick}</a>
                </span>
        <div style={styles.point}>{'0 점'}</div>
      </div>
      <div style={styles.contentRight}>
        <div style={styles.content}>
          {
            oneComment.content
          }
        </div>
        <hr style={styles.hr}/>
      </div>
      {
        this.state.openWriteBox && <WriteBox />
      }
    </div>);
  }
});

let CommentList = React.createClass({
  displayName: 'CommentList',
  propTypes: {
    commentList: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
  },
  render() {
    const {auth, authSuccess, commentList} = this.props;

    let listing = function (oneComment) {
      return (
        <li key={oneComment.commentId}>
        <CommentBox key={oneComment.commentId} oneComment={oneComment}/>

        {
          oneComment.children && oneComment.children.length > 0 &&
          <ul style={[styles.listBox, styles.marginLeft50]}>
            {
              oneComment.children.map(listing)
            }
          </ul>
        }
      </li>);
    };
    return (<div>
      <div id="sc_comment_box" style={styles.comment}>

        <CommentHead />

        <WriteBox auth={auth} authSuccess={authSuccess} />

        <div>
          <ul id="main-comment" style={styles.listBox}>
            {commentList.map(listing)}
          </ul>
        </div>

        <div >
          <a href="#">
            {'('} <strong>{'1-20'}</strong> {') 더보기'}
          </a>
        </div>
      </div>
    </div>);
  }
});


export default Radium(CommentList);

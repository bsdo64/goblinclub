/**
 * Created by dobyeongsu on 2015. 12. 4..
 */
import React from 'react';

import Textarea from 'react-textarea-autosize';
import {Button} from 'react-bootstrap';

import HeadLine from '../HeadLine/HeadLine';

import AppActions from '../Layout/AppActions';
import CommentActions from '../../Flux/Actions/CommentActions';
import styles from './styles';

let InnerWriteBox = React.createClass({
  displayName: 'WriteBox',
  propTypes: {
    auth: React.PropTypes.object,
    authSuccess: React.PropTypes.bool,
    commentId: React.PropTypes.string,
    uid: React.PropTypes.string
  },
  handleCheckLogin() {
    const {authSuccess} = this.props;
    if (!authSuccess) {
      AppActions.toggleLoginModal();
    }
  },
  handleUploadComment() {
    const {uid, commentId} = this.props;
    let params = {
      commentId: commentId,
      postId: uid,
      content: this.refs.innerCommentBox.value
    };
    CommentActions.submitInnerComment(params);
  },
  handleUploadPic() {
    console.log('Upload Picture');
  },
  handleChange() {
    this.setState({comment: this.refs.innerCommentBox.value.length});
  },
  render() {
    const {auth, authSuccess} = this.props;
    return (
      <div style={styles.writeBox}>
        <div style={styles.writeBoxLeft}>
          <div style={styles.writeBoxName}>
            {authSuccess && auth.user.nick}
          </div>
        </div>
        <div style={styles.writeBoxRight}>
          <div style={styles.inputBox}>
            <Textarea
              style={styles.input}
              rows={1}
              ref="innerCommentBox"
              onChange={this.handleChange}
              onFocus={this.handleCheckLogin}
              placeholder="댓글을 입력하세요" />
          </div>
          <div style={styles.pictureBox}>
            <div style={styles.picture} onClick={this.handleUploadPic}>
              <i className="fa fa-camera" />
            </div>
          </div>
        </div>
        <Button
          onClick={this.handleUploadComment}
          style={styles.submitCommentBtn}
          bsStyle="default">{'등록'}</Button>
      </div>);
  }
});

let WriteBox = React.createClass({
  displayName: 'WriteBox',
  propTypes: {
    auth: React.PropTypes.object,
    authSuccess: React.PropTypes.bool,
    uid: React.PropTypes.string.isRequired
  },
  handleCheckLogin() {
    const {authSuccess} = this.props;
    if (!authSuccess) {
      AppActions.toggleLoginModal();
    }
  },
  handleUploadComment() {
    const {uid} = this.props;
    let params = {
      postId: uid,
      content: this.refs.commentBox.value
    };
    CommentActions.submitComment(params);
  },
  handleUploadPic() {
    console.log('Upload Picture');
  },
  handleChange() {
    this.setState({comment: this.refs.commentBox.value.length});
  },
  render() {
    const {auth, authSuccess} = this.props;
    return (
      <div style={styles.writeBox}>
        <div style={styles.writeBoxLeft}>
          <div style={styles.writeBoxName}>
            {authSuccess && auth.user.nick}
          </div>
        </div>
        <div style={styles.writeBoxRight}>
          <div style={styles.inputBox}>
            <Textarea
              style={styles.input}
              rows={1}
              ref="commentBox"
              onChange={this.handleChange}
              onFocus={this.handleCheckLogin}
              placeholder="댓글을 입력하세요" />
          </div>
          <div style={styles.pictureBox}>
            <div style={styles.picture} onClick={this.handleUploadPic}>
              <i className="fa fa-camera" />
            </div>
          </div>
        </div>
        <Button
          onClick={this.handleUploadComment}
          style={styles.submitCommentBtn}
          bsStyle="default">{'등록'}</Button>
      </div>);
  }
});

let CommentHead = React.createClass({
  displayName: 'CommentHead',
  render() {
    return (
      <div >
        <HeadLine rightMenu title="댓글" />
      </div>
    );
  }
});

let CommentBox = React.createClass({
  displayName: 'CommentBox',
  propTypes: {
    auth: React.PropTypes.object,
    authSuccess: React.PropTypes.bool,
    oneComment: React.PropTypes.shape({
      nick: React.PropTypes.string.isRequired,
      children: React.PropTypes.object
    }),
    uid: React.PropTypes.string
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
    let {auth, authSuccess, uid} = this.props;

    return (
    <div style={styles.box}>
      <div style={styles.rightButtonBox}>
        {'하루 전 '}
        <div style={styles.inlineBlock}>
          <div style={[styles.point, styles.paddingRight15]}>{'0 P'}</div>
          <a style={[styles.voteButton, styles.paddingRight15]}>
            <i className="fa fa-thumbs-o-up" />
          </a>
          <a style={[styles.voteButton, styles.paddingRight15]}>
            <i className="fa fa-thumbs-o-down" />
          </a>
          <a href="#" style={[styles.replayCount, styles.paddingRight15]}>
            <i className="fa fa-commenting-o" />
            {' ' + (oneComment.children ? oneComment.children.length : 0)}
          </a>
          <a onClick={this.handleOpenWriteBox} style={styles.replayCount}>
            {'댓글달기'}
          </a>
        </div>
      </div>
      <div style={styles.contentLeft}>
        <span style={styles.author}>
            <a href="http://cafe.naver.com/joonggonara/member/qkrtlaud0647/article"
               target="_blank">{oneComment.user.nick}</a>
        </span>
      </div>
      <div style={styles.contentRight}>
        <div style={styles.content} dangerouslySetInnerHTML={{__html: oneComment.content}}>

        </div>
      </div>
      {
        this.state.openWriteBox &&
        <InnerWriteBox
          commentId={oneComment.commentId}
          uid={uid}
          auth={auth}
          authSuccess={authSuccess} />
      }
    </div>);
  }
});

let CommentListBox = React.createClass({
  displayName: 'CommentListBox',
  propTypes: {
    commentList: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
  },
  getInitialState: function () {
    return {
      hideChildComments: false
    };
  },
  toggleChildComments(commentId) {
    console.log(this.refs['childCommentBox' + commentId]);
  },
  render() {
    function createItem(oneComment) {
      return (
        <li key={oneComment.commentId}
            onClick={this.toggleChildComments.bind(this, oneComment.commentId)} >
          <CommentBox
            {...this.props}
            ref={'commentBox' + oneComment.commentId}
            key={oneComment.commentId}
            oneComment={oneComment} />

          {
            oneComment.children && oneComment.children.length > 0 &&
            <ul ref={'childCommentBox' + oneComment.commentId}
                style={[styles.listBox,
                styles.marginLeft50]} >
              {
                oneComment.children.map(createItem.bind(this))
              }
            </ul>
          }
        </li>);
    }

    return (
      <ul id="main-comment" style={styles.listBox}>
        {this.props.commentList.map(createItem.bind(this))}
      </ul>);
  }
});

let CommentList = React.createClass({
  displayName: 'CommentList',
  propTypes: {
    auth: React.PropTypes.object,
    authSuccess: React.PropTypes.bool,
    oneComment: React.PropTypes.shape({
      nick: React.PropTypes.string.isRequired,
      children: React.PropTypes.object
    }),
    uid: React.PropTypes.string
  },
  componentWillReceiveProps() {
    console.log('CommentList, componentWillReceiveProps');
  },
  render() {
    let {auth, authSuccess, uid} = this.props;

    return (<div>
      <div id="sc_comment_box" style={styles.comment}>

        <CommentHead />

        <WriteBox auth={auth}
                  authSuccess={authSuccess}
                  uid={uid} />

        <div>
          <CommentListBox {...this.props} />
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

export default CommentList;

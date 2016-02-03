/**
 * Created by dobyeongsu on 2015. 12. 4..
 */
import React from 'react';
import Radium from 'radium';
import Textarea from 'react-textarea-autosize';

import HeadLine from '../HeadLine/HeadLine';

import AppActions from '../App/AppActions';

let comment = {
  comment: {
    marginTop: 10
  },
  top: {
    padding: '10px 0'
  },
  red: {
    color: 'red'
  },
  boxHeadLine: {
    fontSize: 14,
    display: 'inline-block',
    margin: 0
  },
  selectBox: {
    margin: 0,
    padding: 0,
    display: 'inline-block',
    float: 'right'
  },
  inlineBlock: {
    display: 'inline-block'
  },
  hr: {
    margin: '0 0 10px'
  },
  writeBox: {
    marginBottom: 10,
    backgroundColor: 'rgba(231, 239, 239, 0.61)',
    borderRadius: 1,
    boxShadow: '1px 1px #b0c2c0',
    padding: '10px 6px 10px 6px',
    minHeight: 40
  },
  writeBoxLeft: {
    position: 'absolute',
    padding: 6
  },
  writeBoxName: {
    fontSize: 10,
    color: '#01403C',
    fontWeight: 'bold'
  },
  writeBoxRight: {
    marginLeft: 44,
    position: 'relative',
    background: '#fff',
    display: 'inline-block',
    width: 'calc(100% - 110px)'
  },
  inputBox: {
    width: '100%'
  },
  input: {
    width: 'calc(100% - 40px)',
    padding: 5,
    fontSize: 12,
    minHeight: 27,
    resize: 'none',
    border: 'none'
  },
  pictureBox: {
    position: 'absolute',
    bottom: 0,
    right: 0
  },
  picture: {
    margin: 7
  },
  remainText: {
    display: 'inline-block',
    fontSize: 11,
    paddingLeft: 5
  },

  marginLeft50: {
    marginLeft: 50
  },
  listBox: {
    padding: 0,
    listStyle: 'none'
  },
  box: {
    backgroundColor: '#F6F9F9',
    borderRadius: 1,
    boxShadow: '1px 1px #b0c2c0',
    padding: '10 10 6 10',
    minHeight: 40,
    borderBottom: '1px solid #B0C2C0',
    borderLeft: '3px solid #2B5F5B'
  },
  rightButtonBox: {
    fontSize: 10,
    display: 'inline-block',
    float: 'right'
  },
  voteButton: {
    fontSize: 12,
    color: 'rgb(170, 170, 170)',
    padding: '5px 10px'
  },
  replayCount: {
    fontSize: 11,
    color: '#aaa'
  },
  paddingLeft10: {
    paddingLeft: 10
  },
  contentLeft: {
    position: 'absolute',
    textAlign: 'center'
  },
  author: {
    fontSize: 12,
    fontWeight: 'bold'
  },
  point: {
    fontSize: 10,
    color: '#FF5711',
    fontWeight: 'bold'
  },
  contentRight: {
    marginLeft: 44,
    paddingTop: 0
  },
  content: {
    width: 'calc(100% - 200px)',
    display: 'inline-block'
  },
  p: {
    fontSize: 12,
    marginBottom: 3
  }
};

let WriteBox = React.createClass({
  displayName: 'WriteBox',
  getInitialState: function () {
    return {
      comment: 0
    };
  },
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
    return (
      <div style={comment.writeBox}>
        <div style={comment.writeBoxLeft}>
          <div style={comment.writeBoxName}>
            {'TEST'}
          </div>
        </div>
        <div style={comment.writeBoxRight}>
          <div style={comment.inputBox}>
            <Textarea
              style={comment.input}
              rows={1}
              ref="commentBox"
              onChange={this.handleChange}
              onFocus={this.checkLogin}
              placeholder="댓글을 입력하세요"
            />
          </div>
          <div style={comment.pictureBox}>
            <div style={comment.picture} onClick={this.handleUploadPic}>
              <i className="fa fa-camera" />
            </div>
          </div>
        </div>
        <div style={comment.remainText}>
          {'(' + this.state.comment + '/300)'}
        </div>
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
    <div style={comment.box}>
      <div style={comment.rightButtonBox}>
        {'하루 전 '}
        <div style={comment.inlineBlock}>
          <a style={comment.voteButton}>
            <i className="fa fa-thumbs-o-up" />
          </a>
          <a style={comment.voteButton}>
            <i className="fa fa-thumbs-o-down" />
          </a>
          <a href="#" style={comment.replayCount}>
            {'댓글 ' + (oneComment.children ? oneComment.children.length : 0) + ' 개'}
          </a>
          <a onClick={this.handleOpenWriteBox} style={[comment.replayCount, comment.paddingLeft10]}>
            {'댓글달기'}
          </a>
        </div>
      </div>
      <div style={comment.contentLeft}>
                <span style={comment.author}>
                    <a href="http://cafe.naver.com/joonggonara/member/qkrtlaud0647/article"
                       target="_blank">{oneComment.user.nick}</a>
                </span>
        <div style={comment.point}>{'0 점'}</div>
      </div>
      <div style={comment.contentRight}>
        <div style={comment.content}>
          {
            oneComment.content
          }
        </div>
        <hr style={comment.hr}/>
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
    const {authSuccess, commentList} = this.props;

    let listing = function (oneComment) {
      return (
        <li key={oneComment.commentId}>
        <CommentBox key={oneComment.commentId} oneComment={oneComment}/>

        {
          oneComment.children && oneComment.children.length > 0 &&
          <ul style={[comment.listBox, comment.marginLeft50]}>
            {
              oneComment.children.map(listing)
            }
          </ul>
        }
      </li>);
    };
    return (<div>
      <div id="sc_comment_box" style={comment.comment}>

        <CommentHead />

        <WriteBox authSuccess={authSuccess} />

        <div>
          <ul id="main-comment" style={comment.listBox}>
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

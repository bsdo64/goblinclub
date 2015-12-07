/**
 * Created by dobyeongsu on 2015. 12. 4..
 */
import React from 'react';
import Radium from 'radium';

var comment = {
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
    margin: '10px 0',
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
    fontSize: 12
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

var WriteBox = React.createClass({
  render() {
    return (<div style={comment.writeBox}>
      <div style={comment.writeBoxLeft}>
        <div style={comment.writeBoxName}>
          TEST
        </div>
      </div>
      <div style={comment.writeBoxRight}>
        <div style={comment.inputBox}>
          <div contentEditable="true" style={comment.input}>

          </div>
        </div>
        <div style={comment.pictureBox}>
          <div style={comment.picture}>
            <i className="fa fa-camera"></i>
          </div>
        </div>
      </div>
      <div style={comment.remainText}>
        (300/300)
      </div>
    </div>);
  }
});

var CommentHead = React.createClass({
  render() {
    return <div >
      <div id="sortComboBox" style={comment.top}>
        <h2 style={comment.boxHeadLine}>
          <strong style={comment.red}>{'203'}</strong><span>{'개의 댓글'}</span>
          <a href="#" title="새로 고침"><span>새로 고침</span></a>
        </h2>
        <ul id="sortlist" style={comment.selectBox}>
          <li style={comment.inlineBlock}>
            <input name="sort" type="radio"/> <label htmlFor="like" id="likability">호감순</label>
          </li>
          <li style={comment.inlineBlock}>
            <input name="sort" type="radio"/> <label htmlFor="latest" id="newest">최신순</label>
          </li>
        </ul>
      </div>
      <div>
        <hr style={comment.hr}/>
      </div>
    </div>
  }
});

var CommentBox = React.createClass({
  getInitialState: function () {
    return {
      openWriteBox: false
    };
  },

  openWriteBox() {
    this.setState({openWriteBox: !this.state.openWriteBox});
  },
  render() {
    const { oneComment } = this.props;
    return <div style={comment.box}>
      <div style={comment.rightButtonBox}>
        <span><span >하루 전</span> </span>
        <div style={comment.inlineBlock}>
          <a style={comment.voteButton}>
            <i className="fa fa-thumbs-o-up"></i>
          </a>
          <a style={comment.voteButton}>
            <i className="fa fa-thumbs-o-down"></i>
          </a>
          <a href="#" style={comment.replayCount}>
            <span >댓글</span><span >{ oneComment.children ? oneComment.children.length : 0} 개 </span>
          </a>
          <a
            onClick={this.openWriteBox}
            style={[comment.replayCount, comment.paddingLeft10]}>
            <span >댓글달기</span>
          </a>
        </div>
      </div>
      <div style={comment.contentLeft}>
                <span style={comment.author}>
                    <a href="http://cafe.naver.com/joonggonara/member/qkrtlaud0647/article"
                       target="_blank"><span >{ oneComment.user.nick }</span> </a>
                </span>
        <div style={comment.point}>0 점</div>
      </div>
      <div style={comment.contentRight}>
        <div style={comment.content}>
          { oneComment.content }
        </div>
        <hr style={comment.hr}/>
      </div>

      { this.state.openWriteBox && <WriteBox /> }
    </div>
  }
});

var CommentList = React.createClass({
  render() {

    const { commentList } = this.props;
    console.log({a: commentList});
    var listing = function (oneComment, index) {
      return <li key={oneComment.comment_id}>

        <CommentBox key={oneComment.comment_id} oneComment={oneComment}/>

        { oneComment.children && oneComment.children.length > 0 &&
        <ul style={[comment.listBox, comment.marginLeft50]}>
          { oneComment.children.map(listing) }
        </ul>
        }
      </li>
    };
    return (<div>
      <div id="sc_comment_box">

        <CommentHead />

        <WriteBox />

        <div>
          <ul id="main-comment" style={comment.listBox}>
            {commentList.map(listing) }
          </ul>
        </div>

        <div >
          <a href="#">
            <span><span>(<strong>1-20</strong>)</span><span>더보기</span></span>
          </a>
        </div>
      </div>
    </div>)
  }
});


export default CommentList = Radium(CommentList);


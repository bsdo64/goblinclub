import React from 'react';
import Paginatior from '../../../Lib/Paginatior';

import PostSectionActions from './PostSectionActions';

if (process.env.BROWSER) {
  require('./Post.scss');
}

const CommentItem = React.createClass({
  displayName: 'CommentItem',
  getInitialState() {
    return {
      openSubComment: false
    };
  },
  toggleOpenSubComment() {
    this.setState({openSubComment: !this.state.openSubComment});
  },
  render() {
    const { comment } = this.props;
    function createSubComments(SubComments) {
      if (SubComments && SubComments.length > 0) {
        return <SubCommentList SubComments={SubComments} />
      }
    }

    let avatarImg;
    if ( comment.User && comment.User.UserProfile ) {
      const { sex, avatar_img } = comment.User.UserProfile;
      if (avatar_img) {
        avatarImg = <img src={'/image/files/' + avatar_img + '.png'} />;
      } else {
        if (sex) {
          avatarImg = <img src="/statics/img/default-male.png" />;
        } else {
          avatarImg = <img src="/statics/img/default-female.png" />;
        }
      }
    }

    return (
      <div className="comment">
        <a className="avatar">
          { avatarImg }
        </a>
        <div className="content">
          <a className="author">{comment.User.nick}</a>
          <div className="metadata">
            <div className="date">
              {comment.created_at}
            </div>
          </div>
          <div className="text">
            {comment.content}
          </div>
          <div className="actions">
            <a className="reply active">
              <i className="heart icon"></i>
              <span>{'좋아요 ' + comment.comment_like_count}</span></a>
            <a onClick={this.toggleOpenSubComment}>
              <i className="comment icon"></i>
              <span>{'댓글 ' + comment.sub_comment_count}</span>
            </a>
          </div>
          {
            this.state.openSubComment &&
            createSubComments(comment.SubComments)
          }
          {
            this.state.openSubComment &&
            <form className="ui reply form">
              <div className="field">
                <textarea className="comment_textarea" rows="2"></textarea>
              </div>
              <div className="ui primary submit labeled icon button">
                <i className="icon edit"></i>
                <span>댓글 달기</span>
              </div>
            </form>
          }
        </div>
      </div>
    );
  }
});

const SubCommentItem = React.createClass({
  displayName: 'CommentItem',
  render() {
    const { subcomment } = this.props;
    return (
      <div className="comment">
        <a className="avatar">
          <img src="http://dummyimage.com/40x40" />
        </a>
        <div className="content">
          <a className="author">{subcomment.User.nick}</a>
          <div className="metadata">
            <span className="date">{subcomment.created_at}</span>
          </div>
          <div className="text">
            {subcomment.content}
          </div>
          <div className="actions">
            <div className="actions">
              <a className="reply active">
                <i className="heart icon"></i>
                <span>{'좋아요 ' + subcomment.sub_comment_like_count}</span></a>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

const SubCommentList = React.createClass({
  displayName: 'SubcommentList',
  render() {
    function subCommentItem(subcomment, index) {
      return <SubCommentItem subcomment={subcomment} />;
    }
    return (
      <div className="comments">
        {this.props.SubComments.map(subCommentItem)}
      </div>
    );
  }
});

const CommentList = React.createClass({
  displayName: 'CommentList',
  render() {
    const { comments } = this.props;

    function commentItem(comment, index) {
      return <CommentItem comment={comment} />;
    }

    return (
      <div>
        {comments.map(commentItem)}
      </div>
    );
  }
});

const PostComment = React.createClass({
  displayName: 'PostComment',
  getInitialState() {
    return {
      commentValue: ''
    }
  },
  handleSetPage(pagination) {
    PostSectionActions.requestComment(this.props.postId, pagination.page, pagination.perPage);
  },
  handleComment(e) {
    this.setState({commentValue: e.target.value})
  },
  handleSubmitComment() {
    if (this.props.postId && (this.state.commentValue.length > 10)) {
      PostSectionActions.requestSubmitComment(
        this.props.postId,
        this.state.commentValue
      );

      this.setState({commentValue: ''});
    } else {
      $('.ui.basic.modal')
        .modal({
          duration  : 200,
          closable  : true,
          onApprove : function() {
            console.log('a');
          }
        })
        .modal('show')
      ;
    }
  },
  render() {
    const { comments, total } = this.props; // = this.props.comments;
    const commentValue = this.state.commentValue.replace('\\n', '\n');

    const page = 1,
          limit = 10,
          paginationVisible = page * limit < total;

    return (
      <div>
        <div className="ui hidden divider"></div>

        <div className="ui extra">
          <div className="ui comments">
            <h5 className="ui dividing header">{'댓글 ' + total + '개'}</h5>

            <CommentList comments={comments} />

            <form className="ui reply form">
              <div className="field">
                <textarea className="comment_textarea" rows="2" onChange={this.handleComment} value={commentValue} />
              </div>
              <div className="ui primary submit labeled icon button" onClick={this.handleSubmitComment}>
                <i className="icon edit"></i>
                <span>댓글 달기</span>
              </div>

              { /* Modal */ }
              <div className="ui small basic modal">
                <div className="ui icon header">
                  <i className="archive icon"></i>
                  댓글이 너무 짧아요!
                </div>
                <div className="ui container center aligned grid">
                  <p>최소 10글자 이상 입력해 주세요</p>
                </div>
                <div className="actions">
                  <div className="ui green ok inverted button">
                    <i className="checkmark icon"></i>
                    Yes
                  </div>
                </div>
              </div>

            </form>

            <div className="ui center aligned container segment basic">
              {
                paginationVisible &&
                <Paginatior
                  total={total}
                  limit={limit}
                  page={page}
                  handleSetPage={this.handleSetPage}
                />

              }
            </div>

          </div>
        </div>

      </div>
    );
  }
});

export default PostComment;

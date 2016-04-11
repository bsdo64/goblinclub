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
    return (
      <div className="comment">
        <a className="avatar">
          <img src="http://dummyimage.com/40x40"/></a>
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
                <textarea></textarea>
              </div>
              <div className="ui primary submit labeled icon button">
                <i className="icon edit"></i>
                <span> Add Reply</span>
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
  handleSetPage(pagination) {
    PostSectionActions.requestComment(this.props.postId, pagination.page, pagination.perPage);
  },
  render() {
    const { comments, total } = this.props; // = this.props.comments;
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
                <textarea></textarea>
              </div>
              <div className="ui primary submit labeled icon button">
                <i className="icon edit"></i>
                <span> Add Reply</span>
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

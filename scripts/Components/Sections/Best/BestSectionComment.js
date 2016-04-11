import React from 'react';

if (process.env.BROWSER) {
  require('./BestSections.scss');
}

const tmpCommentconf = {
  commentLength: 25,
  subCommentLength: 25
};

let tempData = {
  page: 1,
  limit: 5,
  total: tmpCommentconf.commentLength,
  data: []
};

for (let i = 0; i < tmpCommentconf.commentLength; i++) {
  let tempSubcomment = [];

  for (let j = 0; j < tmpCommentconf.subCommentLength; j++) {
    tempSubcomment.push({
      id: j + 1,
      content: 'Hello sub comment' + j,
      User: { nick: '안녕' + j},
      created_at: (j + 1) + '일 전',
      sub_comment_like_count: j
    });
  }

  tempData.data.push({
    id: i + 1,
    content: 'Hello comment1',
    created_at: (i + 1) + '일 전',
    comment_like_count: i + 1,
    sub_comment_count: tmpCommentconf.subCommentLength,
    User: { nick: 'test' + i},
    SubComments: tempSubcomment
  });
  tempSubcomment = [];
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

const BestSectionComment = React.createClass({
  displayName: 'BestSectionComment',
  render() {
    const { page, limit, total, data } = tempData; // = this.props.comments;
    return (
      <div>
        <div className="ui hidden divider"></div>

        <div className="ui extra">
          <div className="ui comments">
            <h5 className="ui dividing header">{'댓글 ' + data.length + '개'}</h5>

            <CommentList comments={data} />

            <form className="ui reply form">
              <div className="field">
                <textarea></textarea>
              </div>
              <div className="ui primary submit labeled icon button">
                <i className="icon edit"></i>
                <span> Add Reply</span>
              </div>
            </form>
          </div>
        </div>

      </div>
    );
  }
});

export default BestSectionComment;

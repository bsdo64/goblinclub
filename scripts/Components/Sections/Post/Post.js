/**
 * Created by dobyeongsu on 2016. 3. 25..
 */
/**
 * Created by dobyeongsu on 2016. 3. 23..
 */
import React from 'react';
import ClubSections from '../Club/ClubSections';

import connectToStores from 'alt-utils/lib/connectToStores';
import PostSectionStore from './PostSectionStore';

import PostComment from './PostComment';

if (process.env.BROWSER) {
  require('./Post.scss');
}

const TagList = React.createClass({
  render: function() {
    var createItem = function(item) {
      return <a className="item" key={item.name}>{item.name}</a>;
    };
    return (
      <div className="ui extra">
        <div className="ui horizontal bulleted link list">
          <a className="item ">
            <i className="fa fa-hashtag" />
          </a>
          {this.props.items.map(createItem)}
        </div>
      </div>
    );
  }
});

const NotFoundPostPage = React.createClass({
  displayName: 'NotFoundPostPage',
  render() {
    return (
      <div style={{padding: '25px'}} id="post_view">

        <div className="ui breadcrumb">
          <a className="section">고블린 클럽</a>
          <i className="right chevron icon divider"></i>
          <a className="section">존재하지 않는 글</a>
        </div>
        <h3 className="ui header">페이지를 찾을 수 없습니다 </h3>
        <div className="ui center aligned container segment basic" >
          <i className="huge icons aligned middle">
            <i className="big red dont icon"></i>
            <i className="black file text outline icon"></i>
          </i>
          <div className="sub header">
            페이지가 존재하지 않습니다. 뒤로 이동하시거나 홈으로 돌아가주세요.
          </div>
        </div>

        <ClubSections />

      </div>
    );
  }
});

const PostPage = React.createClass({
  displayName: 'PostPage',
  render() {
    const { id, title, content, comment_count, User, Tags, created_at, Club, like_count} = this.props.PostSectionStore;
    return (
      <div style={{padding: '25px'}} id="post_view">

        <div className="ui breadcrumb">
          <a className="section">고블린 클럽</a>
          <i className="right chevron icon divider"></i>
          <a className="section">{Club.ClubGroup.title}</a>
          <i className="right arrow icon divider"></i>
          <div className="active section">{Club.title}</div>
        </div>
        <div id="" className="ui items">
          <div className="ui item">
            <div className="ui tiny image">
              <img src="http://placehold.it/40x40"/>
            </div>
            <div className="ui content">

              { /* Title */}
              <h2 className="ui header">{title}</h2>

              { /* Metas */}
              <div className="ui meta">
                <div className="ui horizontal divided list">
                  <div className="item primary">
                    {User.nick}
                  </div>
                  <div className="item">
                    {Club.ClubGroup.title + ' > '}<a href={'/club/' + Club.url}>{Club.title}</a>
                  </div>
                  <div className="item">
                    {created_at}
                  </div>
                </div>
              </div>

              { /* Content */}
              <div className="ui description" dangerouslySetInnerHTML={{ __html: content }}></div>

              { /* Tags */}
              <TagList items={Tags} />

              { /* Buttons */}
              <div className="ui extra">
                <div className="ui mini labeled button">
                  <div className="ui mini button red">
                    <i className="heart icon"></i><span>좋아요</span>
                  </div>
                  <a className="ui mini basic label">{like_count}</a>
                </div>
                <div className="ui mini labeled button">
                  <div className="ui mini button">
                    <i className="comment outline icon"></i><span>댓글</span>
                  </div>
                  <a className="ui mini basic label">{comment_count}</a>
                </div>
              </div>

              { /* Comment */}
              <div className="ui extra" id="comment_section">
                <PostComment comments={null} />
              </div>
            </div>
          </div>

        </div>

        <ClubSections />

      </div>
    );
  }
});

let Post = React.createClass({
  displayName: 'Post',
  statics: {
    getStores() {
      // this will handle the listening/unlistening for you
      return [PostSectionStore];
    },

    getPropsFromStores() {
      // this is the data that gets passed down as props
      return {
        PostSectionStore: PostSectionStore.getState()
      };
    }
  },
  render() {
    let findPage = function (PostSectionStore) {
      if (PostSectionStore.id) {
        return <PostPage PostSectionStore={PostSectionStore} />;
      } else {
        return <NotFoundPostPage />;
      }
    };
    return findPage(this.props.PostSectionStore);
  }
});

export default connectToStores(Post);

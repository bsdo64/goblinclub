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

import Aside from '../../Aside/Default';

if (process.env.BROWSER) {
  require('./Post.scss');
}

const TagList = React.createClass({
  render: function() {
    var createItem = function(item) {
      return <a className="item" key={item.name}>{item.name}</a>;
    };
    return <div className="ui extra">
      <div className="ui horizontal bulleted link list">
        <a className="item ">
          <i className="fa fa-hashtag" />
        </a>
        {this.props.items.map(createItem)}
      </div>
    </div>
  }
});

let Post = React.createClass({
  displayName: 'Post',
  statics: {
    getStores() {
      // this will handle the listening/unlistening for you
      return [PostSectionStore]
    },

    getPropsFromStores() {
      // this is the data that gets passed down as props
      return {
        PostSectionStore: PostSectionStore.getState()
      };
    }
  },
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
              <h2 className="ui header">{title}</h2>
              <div className="ui meta">
                <div className="ui horizontal divided list">
                  <div className="item primary">
                    {User.nick}
                  </div>
                  <div className="item">
                    {Club.ClubGroup.title} > <a href={"/club/" + Club.url}>{Club.title}</a>
                  </div>
                  <div className="item">
                    {created_at}
                  </div>
                </div>
              </div>
              <div className="ui description" dangerouslySetInnerHTML={{ __html: content }}></div>

              <TagList items={Tags} />

              <div className="ui extra">
                <div className="ui mini labeled button">
                  <div className="ui mini button red">
                    <i className="heart icon"></i><span> 좋아요</span>
                  </div>
                  <a className="ui mini basic label">{like_count}</a>
                </div>
                <div className="ui mini labeled button">
                  <div className="ui mini button">
                    <i className="comment outline icon"></i><span> 댓글</span>
                  </div>
                  <a className="ui mini basic label">{comment_count}</a>
                </div>
              </div>
              <div className="ui hidden divider"></div>
              <div className="ui extra">
                <div className="ui comments">
                  <h3 className="ui dividing header">댓글 {comment_count}개</h3>
                  <div className="comment">
                    <a className="avatar">
                      <img src="http://placehold.it/40x40"/></a>
                    <div className="content">
                      <a className="author">Matt</a>
                      <div className="metadata">
                        <div className="date">
                          2일전
                        </div>
                      </div>
                      <div className="text">
                        How artistic!
                      </div>
                      <div className="actions">
                        <a className="reply active"><i className="heart icon"></i><span>5 좋아요</span></a><a><i
                        className="comment icon"></i><span>댓글</span></a>
                      </div>
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
                  <div className="comment">
                    <a className="avatar">
                      <img src="http://placehold.it/40x40"/></a>
                    <div className="content">
                      <a className="author">Matt</a>
                      <div className="metadata">
                        <div className="date">
                          2일전
                        </div>
                      </div>
                      <div className="text">
                        How artistic!
                      </div>
                      <div className="actions">
                        <a className="reply active">
                          <i className="heart icon"></i>
                          <span>5 좋아요</span>
                        </a>
                        <a>
                          <i className="comment icon"></i>
                          <span>댓글</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <form className="ui reply form">
                    <div className="field">
                      <textarea></textarea>
                    </div>
                    <div className="ui primary submit labeled icon button">
                      <i className="icon edit"></i>
                      <span> Add Reply</span>
                    </div>
                  </form>
                  <div className="ui center aligned container">
                    <div className="ui pagination menu">
                      <a className="active item">1</a>
                      <div className="disabled item">
                        ...
                      </div>
                      <a className="item">10</a>
                      <a className="item">11</a>
                      <a className="item">12</a>
                    </div>
                    <div className="ui search" style={{padding:'15px'}}>
                      <div className="ui icon input">
                        <input className="prompt" type="text" placeholder="Search animals..."/>
                        <i className="search icon"></i>
                      </div>
                      <div className="results"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        <ClubSections />
    </div>
    );
  }
});

export default connectToStores(Post);

import React from 'react';

import connectToStores from 'alt-utils/lib/connectToStores';
import BestSectionActions from './BestSectionActions';
import BestSectionStore from './BestSectionStore';

if (process.env.BROWSER) {
  require('./BestSections.scss');
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

const BestSection = React.createClass({
  statics: {
    getStores() {
      // this will handle the listening/unlistening for you
      return [BestSectionStore]
    },

    getPropsFromStores() {
      // this is the data that gets passed down as props
      return {
        BestSectionStore: BestSectionStore.getState()
      };
    }
  },
  render() {
    const { data } = this.props.BestSectionStore;

    var createPostItem = function(item) {
      const {
              id, title, content, like_count, comment_count, deleted, has_img, has_video, created_at,
              ClubGroup, Club, User, Tags
            } = item;

      return <div key={item.id} className="ui item">
        <div className="ui image">
          <img src="http://placehold.it/40x40" />
        </div>
        <div className="ui content">
          <h2 className="ui header"><a href={"/club/" + Club.url + "/" + id}>{title}</a></h2>
          <div className="meta">
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
              <h5 className="ui dividing header">댓글 2개</h5>
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
                <div className="ui pagination menu small">
                  <a className="active item">
                    1
                  </a>
                  <div className="disabled item">
                    ...
                  </div>
                  <a className="item">
                    10
                  </a>
                  <a className="item">
                    11
                  </a>
                  <a className="item">
                    12
                  </a>
                </div>
                <div className="ui search mini" style={{padding: '15px'}}>
                  <div className="ui icon input">
                    <input className="prompt" type="text" placeholder="Search animals..." />
                    <i className="search icon"></i>
                  </div>
                  <div className="results"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    };

    return (
      <div className="thrd_contents _news_box" >
        <div id="item_list" className="ui items">
          {data.map(createPostItem)}
        </div>

        <div className="err_load _more_show" style={{display: 'block'}}>
          <p className="_more_show"><span className="_more_show">더보기</span></p>
        </div>
      </div>

    )
  }
});

export default connectToStores(BestSection);
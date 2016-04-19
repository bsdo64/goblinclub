import React from 'react';

import connectToStores from 'alt-utils/lib/connectToStores';
import BestSectionActions from './BestSectionActions';
import BestSectionStore from './BestSectionStore';

import BestSectionComment from './BestSectionComment';

if (process.env.BROWSER) {
  require('./BestSections.scss');
}

const TagList = React.createClass({
  displayName: 'TagList',
  render: function () {
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

const BestPost = React.createClass({
  displayName: 'BestPost',
  getInitialState: function () {
    return {
      openBestSectionComment: false
    };
  },
  toggleOpenBestSectionComment() {
    this.setState({openBestSectionComment : !this.state.openBestSectionComment});
  },
  render() {
    const {
      id, title, content, like_count, comment_count, deleted, has_img, has_video, created_at,
      ClubGroup, Club, User, Tags
    } = this.props.post;

    let avatarImg;
    if ( User && User.UserProfile ) {
      const { sex, avatar_img } = User.UserProfile;
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
      <div key={id} className="ui item">
        <div className="ui image tiny">
          { avatarImg }
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
                <i className="heart icon"></i>{'좋아요'}
              </div>
              <a className="ui mini basic label">{like_count}</a>
            </div>
            <div className="ui mini labeled button">
              <div className="ui mini button" onClick={this.toggleOpenBestSectionComment}>
                <i className="comment outline icon"></i>{'댓글'}
              </div>
              <a className="ui mini basic label">{comment_count}</a>
            </div>
          </div>
          {
            this.state.openBestSectionComment &&
            <BestSectionComment comments={null} />
          }
        </div>
      </div>
    );
  }
});

const BestSection = React.createClass({
  displayName: 'BestSection',
  statics: {
    getStores() {
      // this will handle the listening/unlistening for you
      return [BestSectionStore];
    },

    getPropsFromStores() {
      // this is the data that gets passed down as props
      return {
        BestSectionStore: BestSectionStore.getState()
      };
    }
  },
  componentDidMount() {
    $('#item_list')
      .visibility({
        once: false,
        // update size when new content loads
        observeChanges: true,
        // load content on bottom edge visible
        onTopVisible: function () {
          console.log('top visible');
        },
        onBottomVisible: function() {
          // loads a max of 5 times
          console.log('bottom');
        }
      });

  },
  render() {
    const { data } = this.props.BestSectionStore.postsData;

    const createPostItem = function (item) {
      return <BestPost post={item} key={item.id} />;
    };

    return (
      <div className="thrd_contents _news_box" >
        <div id="item_list" className="ui items">
          {
            data.map(createPostItem)
          }
        </div>

        <div className="ui items">
          <div className="ui item ">
            <div className="ui text active loader inline centered"></div>
          </div>

        </div>
      </div>
    );
  }
});

export default connectToStores(BestSection);

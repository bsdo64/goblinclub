/**
 * Created by dobyeongsu on 2016. 3. 25..
 */
/**
 * Created by dobyeongsu on 2016. 3. 23..
 */
import React from 'react';

import Paginator from '../../../Lib/Paginatior';

import connectToStores from 'alt-utils/lib/connectToStores';
import ClubSectionActions from './ClubSectionActions';
import ClubSectionStore from './ClubSectionStore';
import UserStore from '../../../Flux/Stores/UserStore';


if (process.env.BROWSER) {
  require('./ClubSections.scss');
}

const PostList = React.createClass({
  displayName: 'PostList',
  render: function () {
    const { id, title, Prefix, User, created_at, view_count, like_count, comment_count } = this.props.item;
    const { defaultPageUrl, page } = this.props;

    let activeClass;
    if (id === this.props.postId) {
      activeClass = 'active';
    }

    return (
      <tr className={activeClass}>
        <td className="center aligned collapsing">{Prefix && Prefix.name}</td>
        <td className="center aligned collapsing">{like_count}</td>
        <td className="center aligned collapsing">{view_count}</td>
        <td className="right aligned collapsing">{comment_count}</td>
        <td className="left aligned"><a href={defaultPageUrl + id + '?p=' + page}>{title}</a></td>
        <td className="right aligned collapsing">{User.nick}</td>
        <td className="center aligned collapsing">{created_at}</td>
      </tr>
    );
  }
});

let ClubSections = React.createClass({
  displayName: 'ClubSections',
  statics: {
    getStores() {
      // this will handle the listening/unlistening for you
      return [ClubSectionStore, UserStore];
    },

    getPropsFromStores() {
      // this is the data that gets passed down as props
      return {
        ClubSectionStore: ClubSectionStore.getState(),
        UserStore: UserStore.getState()
      };
    }
  },
  handleSetPage(pagination) {
    ClubSectionActions.requestPosts(this.props.ClubSectionStore.club.id, pagination);
  },
  render() {
    const { list, club } = this.props.ClubSectionStore;
    const { user, login } = this.props.UserStore;
    const { title, description, url, ClubGroup } = club;
    const { page, limit, total, data } = list;
    const { postId } = this.props;

    const defaultPageUrl = '/club/' + url + '/';
    return (
      <div id="club_section">
        <div className="ui small breadcrumb">
          <a className="section">고블린 클럽</a>
          <i className="right chevron icon divider"></i>
          <a className="section">{ClubGroup.title}</a>
          <i className="right chevron icon divider"></i>
          <div className="active section">{title}</div>
        </div>
        <h3 className="ui header">
          {title}
          <div className="sub header">{description}</div>
        </h3>
        <div className="ui divider"></div>
        <div className="ui horizontal celled list">
          <div className="item" style={{fontWeight: 'bold'}}>
            <div className="middle aligned content bold">전체</div>
          </div>
          <div className="item">
            <div className="middle aligned content">샴푸 (150)</div>
          </div>
          <div className="item">
            <div className="middle aligned content">샴푸 (150)</div>
          </div>
          <div className="item">
            <div className="middle aligned content">샴푸 (150)</div>
          </div>
        </div>
        <table className="ui table very compact" >
          <thead>
          <tr>
            <th className="center aligned collapsing">말머리</th>
            <th className="center aligned collapsing">좋아요</th>
            <th className="center aligned collapsing">조회</th>
            <th className="center aligned collapsing">댓글</th>
            <th className="center aligned">제목</th>
            <th className="center aligned collapsing">글쓴이</th>
            <th className="center aligned collapsing">등록일</th>
          </tr>
          </thead>
          <tbody>

          {
            data &&
            data.map(function (item) {
              return (
                <PostList item={item} defaultPageUrl={defaultPageUrl} 
                          postId={postId} page={page} />
              );
            })
          }

          <tr>
            <td className="center aligned collapsing">샴푸나라</td>
            <td className="center aligned collapsing">10</td>
            <td className="center aligned collapsing">120</td>
            <td className="right aligned collapsing">120</td>
            <td className="left aligned">스마트폰 액정필름, 케이스 제공 (중앙광장 T월드)</td>
            <td className="right aligned collapsing">닉네임</td>
            <td className="center aligned collapsing">2012.11.11</td>
          </tr>


          <tr>
            <td className="center aligned collapsing">샴푸나라</td>
            <td className="center aligned collapsing">10</td>
            <td className="center aligned collapsing">1200</td>
            <td className="right aligned collapsing">12012</td>
            <td className="left aligned">스마트폰 액정필름, 케이스 제공 (중앙광장 T월드)</td>
            <td className="right aligned collapsing">닉네임</td>
            <td className="center aligned collapsing">2012.11.11</td>
          </tr>
          </tbody>
        </table>

        {
          user && login &&
          <div className="ui right aligned container">
            <a className="ui button primary tiny" href={'/club/' + url + '/submit'}>글쓰기</a>
          </div>
        }

        <div className="ui divider"></div>


        <div className="ui center aligned container">

          <Paginator
            total={total}
            limit={limit}
            page={page}
            handleSetPage={this.handleSetPage}
          />

          <div className="ui search mini" style={{padding: '15px'}}>
            <div className="ui icon input">
              <input className="prompt" type="text" placeholder="Search animals..." />
              <i className="search icon"></i>
            </div>
            <div className="results"></div>
          </div>
        </div>


      </div>
    );
  }
});

export default connectToStores(ClubSections);
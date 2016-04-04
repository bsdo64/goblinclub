/**
 * Created by dobyeongsu on 2016. 3. 25..
 */
/**
 * Created by dobyeongsu on 2016. 3. 23..
 */
import React from 'react';

import connectToStores from 'alt-utils/lib/connectToStores';
import ClubSectionActions from './ClubSectionActions';
import ClubSectionStore from './ClubSectionStore';


if (process.env.BROWSER) {
  require('./ClubSections.scss');
}

let ClubSections = React.createClass({
  displayName: 'ClubSections',
  statics: {
    getStores() {
      // this will handle the listening/unlistening for you
      return [ClubSectionStore]
    },

    getPropsFromStores() {
      // this is the data that gets passed down as props
      return {
        ClubSectionStore: ClubSectionStore.getState()
      };
    }
  },
  render() {
    const { data } = this.props.ClubSectionStore;
    console.log(data);
    return (
      <div id="club_section">
        <div className="ui small breadcrumb">
          <a className="section">Home</a>
          <i className="right chevron icon divider"></i>
          <a className="section">Registration</a>
          <i className="right chevron icon divider"></i>
          <div className="active section">Personal Information</div>
        </div>
        <h3 className="ui header">
          탈모 게시판
          <div className="sub header">탈모에관한 이야기를 나눠봅시다
          </div>
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
            <th className="center aligned collapsing">조회</th>
            <th className="center aligned collapsing">좋아요</th>
            <th className="center aligned collapsing">댓글</th>
            <th className="center aligned">제목</th>
            <th className="center aligned collapsing">글쓴이</th>
            <th className="center aligned collapsing">등록일</th>
          </tr>
          </thead>
          <tbody>
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


        <div className="ui right aligned container">
          <a className="ui button primary tiny" href="/club/it/submit">글쓰기</a>
        </div>
        <div className="ui divider"></div>


        <div className="ui center aligned container">
          <div className="ui pagination menu">
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
          <div className="ui search" style={{padding: '15px'}}>
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
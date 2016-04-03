/**
 * Created by dobyeongsu on 2016. 3. 25..
 */
/**
 * Created by dobyeongsu on 2016. 3. 23..
 */
import React from 'react';

import Aside from '../../Aside/Default';

if (process.env.BROWSER) {
  require('./Account.scss');
}

let Account = React.createClass({
  displayName: 'Account', render() {
    return (
      <div style={{padding: '25px'}} id="post_view">
        <div className="ui breadcrumb">
          <a className="section">Home</a>
          <i className="right chevron icon divider"></i>
          <a className="section">Registration</a>
          <i className="right arrow icon divider"></i>
          <div className="active section">Personal Information</div>
        </div>
        <div id="" className="ui items">
          <div className="ui item">
            <div className="ui tiny image">
              <img src="http://placehold.it/40x40"/>
            </div>
            <div className="ui content">
              <h2 className="ui header">중고 팩스, 삼성 팩스, 분당지역</h2>
              <div className="ui meta">
                <span>닉네임</span><span>|</span><span>클럽 &gt;
                모발샴푸</span><span>|</span><span>15초전</span>
              </div>
              <div className="ui description">
                <p>
                  중고나라 공식 앱 다운받기 판 매 양 식아이디이메일싸이,블로그,타카페,타사이트 링크시 삭제 및 강퇴거주지역도,시,동까지 정확히 기재판매
                  제품명구입시기년,월 기재희망가격정확히 기재: (3만~4만등의 경매 유도글 삭제)거래방법직거래, 택배, 안전거래상세설명사진 및 상세내 중고나라
                  공식 앱 다운받기 판 매 양 식아이디이메일싸이,블로그,타카페,타사이트 링크시 삭제 및 강퇴거주지역도,시,동까지 정확히 기재판매
                  제품명구입시기년,월 기재희망가격정확히 기재: (3만~4만등의 경매 유도글 삭제)거래방법직거래, 택배, 안전거래상세설명사진 및
                  상세내..</p></div>
              <div className="ui extra">
                <div className="ui tiny labels">
                  <a className="ui label">
                    Smart
                  </a>
                  <a className="ui label">
                    Insane
                  </a>
                  <a className="ui label">
                    Exciting
                  </a>
                </div>
              </div>
              <div className="ui extra">
                <div className="ui mini labeled button">
                  <div className="ui mini button red">
                    <i className="heart icon"></i><span> 좋아요</span>
                  </div>
                  <a className="ui mini basic label">2,048</a>
                </div>
                <div className="ui mini labeled button">
                  <div className="ui mini button">
                    <i className="comment outline icon"></i><span> 댓글</span>
                  </div>
                  <a className="ui mini basic label">2,048</a>
                </div>
              </div>
              <div className="ui hidden divider"></div>
              <div className="ui extra">
                <div className="ui comments">
                  <h3 className="ui dividing header">댓글 2개</h3>
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

        <div id="club_section">
          <h3 className="ui header">
            <span>탈모 게시판</span>
            <div className="sub header">탈모에관한 이야기를 나눠봅시다</div>
          </h3>
          <div className="ui divider"
          ></div>
          <div className="ui horizontal celled list">
            <div className="item" style={{fontWeight:'bold'}}>
              <div className="middle aligned content bold">
                전체
              </div>
            </div>
            <div className="item">
              <div className="middle aligned content">
                샴푸 (150)
              </div>
            </div>
            <div className="item">
              <div className="middle aligned content">
                샴푸 (150)
              </div>
            </div>
            <div className="item">
              <div className="middle aligned content">
                샴푸 (150)
              </div>
            </div>
          </div>
          <table className="ui table very compact">
            <thead>
            <tr>
              <th className="center aligned collapsing">
                말머리
              </th>
              <th className="center aligned collapsing">
                조회
              </th>
              <th className="center aligned collapsing">
                좋아요
              </th>
              <th className="center aligned collapsing">
                댓글
              </th>
              <th className="center aligned">
                제목
              </th>
              <th className="center aligned collapsing">
                글쓴이
              </th>
              <th className="center aligned collapsing">
                등록일
              </th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td className="center aligned collapsing">
                샴푸나라
              </td>
              <td className="center aligned collapsing">
                10
              </td>
              <td className="center aligned collapsing">
                120
              </td>
              <td className="right aligned collapsing">
                120
              </td>
              <td className="left aligned">
                스마트폰 액정필름, 케이스 제공 (중앙광장 T월드)
              </td>
              <td className="right aligned collapsing">
                닉네임
              </td>
              <td className="center aligned collapsing">
                2012.11.11
              </td>
            </tr>
            <tr>
              <td className="center aligned collapsing">
                샴푸나라
              </td>
              <td className="center aligned collapsing">
                10
              </td>
              <td className="center aligned collapsing">
                1200
              </td>
              <td className="right aligned collapsing">
                12012
              </td>
              <td className="left aligned">
                스마트폰 액정필름, 케이스 제공 (중앙광장 T월드)
              </td>
              <td className="right aligned collapsing">
                닉네임
              </td>
              <td className="center aligned collapsing">
                2012.11.11
              </td>
            </tr>
            </tbody>
          </table>
          <div className="ui right aligned container">
            <div>글쓰기</div>
          </div>
          <div className="ui divider"></div>
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
    );
  }
});

export default Account;

/**
 * Created by dobyeongsu on 2016. 3. 23..
 */
import React from 'react';

if (process.env.BROWSER) {
  require('../Default.scss');
}

let ProfileLeft = React.createClass({
  displayName: 'ProfileLeft',
  render() {
    return (
      <div className="lft_area _side_menu">
        <h3 className="h_menu on"><a href="#" className="_side_item ">전체보기</a></h3>
        <div className="ui middle aligned divided list">
          <div className="item">
            <div className="content">
              <div className="header">회원 정보</div>
            </div>
            <div className="list">
              <div className="item"><a href="/club/it">프로필</a></div>
              <div className="item">설정</div>
            </div>
          </div>

          <div className="item">
            <div>내 활동</div>
            <div className="list">
              <div className="item">쓴 글</div>
              <div className="item">쓴 댓글</div>
              <div className="item">좋아요</div>
              <div className="item">사용한 명성</div>
            </div>
          </div>
          <div className="item">
            <div>커뮤니티</div>
            <div className="list">
              <div className="item">받은 댓글</div>
              <div className="item">받은 좋아요</div>
              <div className="item">받은 명성</div>
            </div>
          </div>
        </div>

      </div>
    );
  }
});

export default ProfileLeft;
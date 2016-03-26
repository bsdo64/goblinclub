/**
 * Created by dobyeongsu on 2016. 3. 25..
 */
/**
 * Created by dobyeongsu on 2016. 3. 23..
 */
import React from 'react';
import {Link} from 'react-router';

if (process.env.BROWSER) {
  require('./ClubLeft.scss');
}

let ClubLeft = React.createClass({
  displayName: 'ClubLeft', render() {
    return (
      <div className="lft_area _side_menu">
        <h3 className="h_menu on">
          <a href="#" className="_side_item ">전체보기</a>
        </h3>
        <div className="ui middle aligned divided list">
          <div className="item">
            <div className="content">
              <div className="header">공지</div>
            </div>
            <div className="list">
              <div className="item"><Link to="/club/it">공지사항</Link></div>
              <div className="item">운영 게시판</div>
              <div className="item">이벤트</div>
            </div>
          </div>

          <div className="item">
            <div>회원</div>
            <div className="list">
              <div className="item">인사 나누기</div>
              <div className="item">출석체크</div>

            </div>
          </div>
          <div className="item">
            <div>커뮤니티</div>
            <div className="list">
              <div className="item">놀이터</div>
              <div className="item">토론하기</div>

            </div>
          </div>
          <div className="item">
            <div>탈모 자료실</div>
            <div className="list">
              <div className="item">탈모 대백과</div>
              <div className="item">탈모 뉴스 (의학 정보)</div>
              <div className="item">탈모 치료법 공유</div>
            </div>
          </div>
          <div className="item">
            <div>고민 나눔</div>
            <div className="list">
              <div className="item">탈모 고민 &amp; 확인</div>
              <div className="item">여성 전용</div>

            </div>
          </div>
          <div className="item">
            <div>치료 후기</div>
            <div className="list">
              <div className="item">모발 이식 후기</div>
              <div className="item">탈모 치료제 후기</div>

              <div className="item">탈모 병원 후기</div>
              <div className="item">탈모 한의원 후기</div>
              <div className="item">헤어제품 후기</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

export default ClubLeft;
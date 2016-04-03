import React from 'react';

import Aside from '../../Aside/Default';

if (process.env.BROWSER) {
  require('./BestSections.scss');
}

const BestSection = React.createClass({
  render() {
    return (
      <div className="thrd_contents _news_box" >
        <div id="item_list" className="ui items">
          <div className="ui item">
            <div className="ui image">
              <img src="http://placehold.it/40x40" />
            </div>
            <div className="ui content">
              <h2 className="header">중고 팩스, 삼성 팩스, 분당지역</h2>
              <div className="meta">
                <div className="ui mini horizontal divided list">
                  <div className="item primary">
                      닉네임
                  </div>
                  <div className="item">
                    클럽 > 모발샴푸
                  </div>
                  <div className="item">
                    15 초전
                  </div>
                </div>
              </div>
              <div className="ui description">
                <p>
                  중고나라 공식 앱 다운받기 판 매 양 식아이디이메일싸이,블로그,타카페,타사이트 링크시 삭제 및 강퇴거주지역도,시,동까지 정확히 기재판매
                  제품명구입시기년,월 기재희망가격정확히 기재: (3만~4만등의 경매 유도글 삭제)거래방법직거래, 택배, 안전거래상세설명사진 및 상세내 중고나라
                  공식 앱 다운받기 판 매 양 식아이디이메일싸이,블로그,타카페,타사이트 링크시 삭제 및 강퇴거주지역도,시,동까지 정확히 기재판매
                  제품명구입시기년,월 기재희망가격정확히 기재: (3만~4만등의 경매 유도글 삭제)거래방법직거래, 택배, 안전거래상세설명사진 및
                  상세내..
                </p></div>
              <div className="ui extra">
                <div className="ui horizontal bulleted link list">
                  <a className="item ">
                    <i className="fa fa-hashtag" />
                  </a>
                  <a className="item">
                    Privacy Policy
                  </a>
                  <a className="item">
                    Contact Us
                  </a>
                  <a className="item">
                    Terms and Conditions
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

        <div className="err_load _more_show" style={{display: 'block'}}>
          <p className="_more_show"><span className="_more_show">더보기</span></p>
        </div>
      </div>

    )
  }
});

export default BestSection;
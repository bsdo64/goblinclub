/**
 * Created by dobyeongsu on 2016. 3. 23..
 */
import React from 'react';
import {Link} from 'react-router';

if (process.env.BROWSER) {
  require('./Default.scss');
}

const Aside = React.createClass({
  displayName: 'Aside',
  render() {
    return (
      <div className="aside">
        <div className="widget_area _widget_area">
          <ul className="dir_svc">
            <li className="mail">
              <a href="/" className=""
                 title="메일" id="acs1">
                <span className="">베스트</span>
                <span className="ico_num" style={{display:'block'}}><span className="num_lft"></span>2</span>
              </a>
            </li>
            <li className="calendar">
              <a href="/club" className="" title="클럽">
                <span className="">클럽</span>
                                <span className="" style={{display:'block'}}>
                                    <span className="num_lft"></span>
                                </span>
              </a>
            </li>
            <li className="address">
              <a href="http://contact.naver.com/" className="" title="주소록">
                <span className="">글쓰기</span>
                                <span className="" style={{display:'block'}}>
                                    <span className="num_lft"></span>
                                </span>
              </a>
            </li>
          </ul>

          <div id="section_cldmm">

            <div id="section_signin" className="section_signin widget">
              <div className="signin_button">
                <Link to="signin" id="signin_button">
                  지금 가입하세요!
                </Link>
              </div>
            </div>

            <div id="section_userinfo" className="widget">
              <div className="ui cards">
                <div className="card">
                  <div className="content userinfo_header" >
                    <div className="ui description" >회원 정보</div>
                  </div>
                  <div className="content">
                    <div className="ui items">
                      <div className="ui item">
                        <a className="ui tiny image">
                          <img src="http://placehold.it/100x100" />
                        </a>
                        <div className="content">
                          <a className="header">닉네임</a>
                          <div className="description">
                            <div className="item">
                              등급 :  
                              <div className="ui right floated bold"><b>일반 회원</b></div>
                            </div>
                            <div className="item">
                              명성 :
                              <div className="ui right floated">1032 점</div>
                            </div>
                            <div className="item">
                              포인트 : 
                              <div className="ui right floated">120 P</div>
                            </div>
                            <div className="item">
                              가입일: 
                            <div className="ui right floated">2015.11.11</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="notice_ftr">
              <ul>
                <li><a href="#" className="" onclick="openNoticeList(); return false;">공지사항</a><span id="newNoticeIcon" className="ico_new"><span className="blind">New</span></span></li>
                <li><a target="_blank" href="https://help.naver.com/support/service/main.nhn?serviceNo=984" className="">네이버me 고객센터</a></li>
              </ul>
            </div>
            <div className="btn_top" style={{top: '50%'}}>
              <a href="#" title="맨위로"><em className="blind">맨위로</em></a>
            </div>
          </div>
        </div>
      </div>

    )
  }
});

export default Aside;
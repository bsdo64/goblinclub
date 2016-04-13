/**
 * Created by dobyeongsu on 2015. 10. 15..
 */
import React from 'react';
import {Link} from 'react-router';

import HeadLine from '../HeadLine/HeadLine';
import styles from './MainSectionStyle';

if (process.env.BROWSER) {
  require('./Main.scss');
  require('./Aside.scss');
}

let Main = React.createClass({
  displayName: 'Main',
  propTypes: {
    mainSection: React.PropTypes.element.isRequired
  },

  render() {
    return (
      <div id="container">
        <div className="lft_area _side_menu">
          <h3 className="h_menu on"><a href="#" className="_side_item ">전체보기</a></h3>
          <menu className="snb">
            <li>
              <ul>
                <li className=""><a href="#" className="_side_item ">이웃블로그</a></li>

                <li className=""><a href="#" className="_side_item ">카페</a></li>

                <li className=""><a href="#" className="_side_item ">구독블로그</a></li>

                <li className=""><a href="#" className="_side_item ">지식iN</a></li>

                <li className=""><a href="#" className="_side_item ">웹툰</a></li>

                <li className=""><a href="#" className="_side_item ">오픈캐스트</a></li>

                <li className=""><a href="#" className="_side_item ">RSS</a></li>

                <li className=""><a href="#" className="_side_item ">네이버캐스트</a>
                </li>

                <li className=""><a href="#" className="_side_item ">책</a></li>

                <li className=""><a href="#" className="_side_item ">영화</a></li>

                <li className=""><a href="#" className="_side_item ">관심지역</a></li>

                <li className=""><a href="#" className="_side_item ">해피빈</a></li>

                <li className=""><a href="#" className="_side_item ">쇼핑</a></li>

                <li className=""><a href="#" className="_side_item ">웹소설</a></li>

                <li className=""><a href="#" className="_side_item ">뉴스</a></li>

                <li className=""><a href="#" className="_side_item ">포토갤러리</a>
                </li>

                <li className=""><a href="#" className="_side_item ">뮤직</a></li>

                <li className=""><a href="#" className="_side_item ">스포츠</a></li>

                <li className=""><a href="#" className="_side_item ">포스트</a></li>

                <li className=""><a href="#" className="_side_item ">매거진캐스트</a></li>

                <li className=""><a href="#" className="_side_item ">자동차</a></li>
              </ul>
            </li>
          </menu>

        </div>
        <div className="section">
          <div className="contents">
            <div id="bestPosts" style={styles.mainBox}>
              <HeadLine isClub />

              <div id="Section" className="nano" style={styles.contents}>
                <div className="nano-content" style={styles.scrollContent}>
                  {this.props.mainSection}
                </div>
              </div>

            </div>

          </div>
          <div className="aside">
            <div className="widget_area _widget_area">
              <ul className="dir_svc">
                <li className="mail">
                  <a href="http://mail.naver.com/" className="" title="메일" id="acs1">
                    <span className="">베스트</span>
                    <span className="ico_num" style={{display:'block'}}><span className="num_lft"></span>2</span>
                  </a>
                </li>
                <li className="calendar">
                  <a href="club.html" className="" title="캘린더">
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

                <div className="section_signin widget" id="section_signin">
                  <div className="signin_button">
                    <Link to="signin" id="signin_button">
                      지금 가입하세요!
                    </Link>
                  </div>
                </div>

                <div className="section_mail widget" id="section_mail" >
                  <ul className="lst_ma">
                    <li className="first">
                      <a href="http://mail.naver.com/list/unread" target="_blank" className="_new_mail ">
                        <strong className="mt"><span className="blind">새 메일</span></strong>
						<span className="mnum _mail_num">
							<span className="blind">0</span><span className="n0"></span>
						</span>
                      </a>
                    </li>
                    <li>
                      <a href="http://mail.naver.com/note" target="_blank" className="_new_note ">
                        <strong className="mt2 _no_read_note"><span className="blind">새 쪽지</span></strong>
						<span className="mnum _note_num">
							<span className="blind">0</span><span className="n0"></span>
						</span>
                      </a>
                    </li>
                    <li>
                      <a href="http://mail.naver.com/list/mark?svc=naverme" target="_blank" className="_important_mail ">
                        <strong className="mt3 _important_mail"><span className="blind">중요 메일</span></strong>
                        <span className="ma_imp _important_mail"></span>
                      </a>
                    </li>
                  </ul>
                  <div className="btn_wrap _widget_bottom">
                    <button type="button" title="메일쓰기" className="ma_wr _write_mail "><span className="blind">메일쓰기</span>
                    </button>
                    <button type="button" title="내게쓰기" className="ma_me _write_mail_to_me "><span className="blind">내게쓰기</span></button>
                    <button type="button" title="새로고침" className="btn_refresh _widget_refresh "><span className="blind">새로고침</span></button>
                  </div>
                  <div className="round"><span className="tl"></span><span className="tr"></span><span className="bl"></span><span className="br"></span></div>
                </div>



                <div className="section_ndr widget " id="section_ndr" >
                  <h2 className="blind">네이버클라우드 위젯</h2>
                  <ul className="lst_ndr _list">
                    <li>
                      <a href="#" className="_ndr_shared " target="_blank">
                        <strong className="ndr_tit"><span className="blind">공유받음</span></strong>
							<span className="ndnum _count_shared">
								<span className="blind">0</span><span className="n0"></span>
							</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="_ndr_sharing " target="_blank">
                        <strong className="ndr_tit2"><span className="blind">공유함</span></strong>
							<span className="ndnum _count_sharing">
								<span className="blind">0</span><span className="n0"></span>
							</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="lst_ndr2 _list">
                    <li>
                      <a href="#" className="_ndr_music " target="_blank">
                        <strong className="music"><span className="blind">음악</span></strong>
							<span className="ndnum _count_music">
								<span className="blind">0곡</span><span className="n0"></span><span className="u1"></span>
							</span>
							<span className="ndnum bu _size_music">
								<span className="blind">0MB</span><span className="n0"></span><span className="mb"></span>
							</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="_ndr_photo " target="_blank">
                        <strong className="photo"><span className="blind">사진</span></strong>
							<span className="ndnum _count_photo">
								<span className="blind">0장</span><span className="n0"></span><span className="u2"></span>
							</span>
							<span className="ndnum bu _size_photo">
								<span className="blind">0GB</span><span className="n0"></span><span className="gb"></span>
							</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="_ndr_movie " target="_blank">
                        <strong className="mov"><span className="blind">동영상</span></strong>
							<span className="ndnum _count_movie">
								<span className="blind">0개</span><span className="n0"></span><span className="u3"></span>
							</span>
							<span className="ndnum bu _size_movie">
								<span className="blind">0GB</span><span className="n0"></span><span className="gb"></span>
							</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="_ndr_word " target="_blank">
                        <strong className="word"><span className="blind">문서</span></strong>
							<span className="ndnum _count_word">
								<span className="blind">0개</span><span className="n0"></span><span className="u3"></span>
							</span>
							<span className="ndnum bu _size_word">
								<span className="blind">0KB</span><span className="n0"></span><span className="kb"></span>
							</span>
                      </a>
                    </li>
                  </ul>
                  <div className="btn_wrap _widget_bottom">
                    <button type="button" title="파일올리기" className="btn_file _ndr_upload "><span className="blind">파일올리기</span></button>
                    <button type="button" title="새로고침" className="btn_refresh _ndr_refresh "><span className="blind">새로고침</span></button>
                  </div>

                  <div className="round"><span className="tl"></span><span className="tr"></span><span className="bl"></span><span className="br"></span></div>

                </div>







                <div id="section_photoalbum" className="widget  section_photo" >
                  <div className="_photo_area photo_con"></div>
                  <div className="btn_wrap">
                    <button type="button" title="설정하기" className="_album_more_view btn_select "><span className="blind">설정하기</span></button>
                    <button className="_album_reload btn_refresh " title="새로고침" type="button"><span className="blind">새로고침</span>
                    </button>
                  </div>
                  <div className="round"><span className="tl"></span><span className="tr"></span><span className="bl"></span><span className="br"></span></div>
                </div>







                <div className="widget section_wth" id="section_weather">
                  <h2 className="blind">날씨위젯 - 국내</h2>
                  <ul className="lst_wth">
                  </ul>

                  <div className="_footer_btn btn_wrap">
                    <button className="_local_tab wth_kr on " title="국내" type="button"><span className="blind">국내</span></button>
                    <a className="_local_loc _local_tab loc " href="#"></a>
                    <span className="bar">|</span>
                    <button className="_world_tab wth_frg " title="해외" type="button"><span className="blind">해외</span></button>
                    <a className="_world_loc _world_tab loc hide " href="#"></a>

                    <span className="_wth_time time"></span>

                    <button className="_refesh btn_refresh " title="새로고침" type="button"><span className="blind">새로고침</span></button>
                  </div>


                  <div className="_locly_div ly_loc hide">
                    <p></p>
                    <div className="_locly_list scroll">
                    </div>
                    <a className="_close_ly btn_close" href="#" title="닫기"><span className="blind">닫기</span></a>
                  </div>


                  <div className="round"><span className="tl"></span><span className="tr"></span><span className="bl"></span><span className="br"></span></div>
                </div>



                <div id="section_fortune" className="widget section_wth" >
                  <h2 className="blind">운세위젯</h2>
                  <ul className="_fortune_area lst_ft">
                  </ul>
                  <dl className="_sub_title wth_top" style={{display: 'none'}}>
                    <dt className="txt_cl7"><span className="ic"></span><span className="ir">사자자리</span></dt>
                    <dd>
                      <span className="num">7</span>월<span className="num">23</span>일<span>~</span><span className="num">8</span>월<span className="num">22</span>일
                      <a className="other_cl" href="#">다른 별자리 보기</a></dd>
                  </dl>
                  <p className="_sub_content scroll" style={{display: 'none'}}></p>
                  <div className="_footer_btn btn_wrap">

                    <button className="_fortune_zodiac ft_zodiac on " title="띠별 운세" type="button"><span className="blind">띠별 운세</span>
                    </button>
                    <span className="bar">|</span>
                    <button className="_fortune_horoscope ft_star " title="별자리 운세" type="button"><span className="blind">별자리 운세</span></button>
                  </div>


                  <div className="round"><span className="tl"></span><span className="tr"></span><span className="bl"></span><span className="br"></span></div>

                </div>



                <div className="widget widget_ccast section_game" id="section_game" >
                  <h2 className="blind">게임 위젯</h2>
                  <div className="_wggame_title">
                    <a href="http://game.naver.com" target="_blank" title="추천 게임">추천
                      게임</a>
                    <h2 className="blind">추천 게임</h2>
                  </div>
                  <ul className="_wggame_ul">
                  </ul>
                  <div className="_btn btn_wrap">
                    <div className="paginate">
                      <span className="_wggame_page pnum"><em>2</em> <em>/</em> 50</span>
                      <span className="_wggame_prevBtn_span btn_prev_off"><button title="이전 게임목록" type="button" className="_wggame_prevBtn_button "><span className="blind">이전 게임목록</span></button></span><span className="_wggame_nextBtn_span btn_next_off"><button title="다음 게임목록" type="button" className="_wggame_nextBtn_button "><span className="blind">다음 게임목록</span></button></span>
                    </div>
                  </div>
                </div>







                <div id="section_noti" className="widget section_alarm" style={{display: 'block'}}>
                  <div className="alarm_area _noti_area">
                    <h4><a href="#" className="" onclick="nhn.naverme.topMenu.changeByTopMenu('noti');return false;"><span className="blind">알림 위젯</span></a></h4>
                    <div className="alarm_bx _noti_box"><p className="no_alarm">알림이 없습니다.</p>
                    </div>
                    <p className="go_all">
                      <button type="button" className="_go_noti "><span className="blind">전체보기</span></button>
                      <button type="button" className=" env_bubble" onclick="nhn.naverme.config.initialize({menu : 'noti'});">
                        <span className="blind">설정</span></button>
                    </p>
                  </div>
                </div>
                <div className="widget section_svc" id="section_servicelink" style={{display: 'block'}}>
                  <h2 className="blind">자주가는 위젯</h2>
                  <div className="svc_con">
                    <ul>
                      <li className="_li_list"><a href="http://section.blog.naver.com" className="_choice " target="_blank"><span className="blog"></span>블로그</a></li>
                      <li className="_li_list"><a href="http://section.cafe.naver.com" className="_choice " target="_blank"><span className="cafe"></span>카페</a></li>
                      <li className="_li_list"><a href="http://mail.naver.com/note" className="_choice " target="_blank"><span className="note"></span>쪽지</a></li>
                      <li className="_li_list"><a href="http://moneybook.naver.com/mybook/write.nhn" className="_choice " target="_blank"><span className="dirary"></span>가계부</a></li>
                      <li className="_li_list"><a href="#" onclick="nhn.naverme.serviceLink.openSendMemoPop(this); return false;" className="_choice " target="_blank"><span className="sms"></span>문자전송</a></li>
                      <li className="_li_list"><a href="#" onclick="nhn.naverme.serviceLink.showMusicPlayer(this); return false;" className="_choice " target="_blank"><span className="player"></span>뮤직플레이어</a></li>
                      <li className="_li_list"><a href="http://kin.naver.com" className="_choice " target="_blank"><span className="edu"></span>지식iN</a></li>
                      <li className="_li_list"><a href="http://finance.naver.com/mystock/itemList.nhn" className="_choice " target="_blank"><span className="finance"></span>My금융</a></li>
                      <li className="_li_list"><a href="http://comic.naver.com" className="_choice " target="_blank"><span className="webtoon"></span>만화</a></li>
                      <li className="_li_list"><a href="http://music.naver.com" className="_choice " target="_blank"><span className="music"></span>뮤직</a></li>
                      <li className="_li_list"><a href="http://shopping.naver.com" className="_choice " target="_blank"><span className="shopping"></span>쇼핑</a></li>
                      <li className="_li_list"><a href="http://finance.naver.com" className="_choice " target="_blank"><span className="vi"></span>증권</a>
                      </li>
                      <li className="_li_list"><a href="http://sports.news.naver.com" className="_choice " target="_blank"><span className="sports"></span>스포츠</a></li>
                      <li className="_li_list"><a href="http://photo.naver.com" className="_choice " target="_blank"><span className="photo"></span>포토갤러리</a></li>
                      <li className="_li_list"><a href="http://health.naver.com/promotion/healthRecord.nhn" className="_choice " target="_blank"><span className="health"></span>건강기록부</a></li>
                      <li className="_li_list"><a href="http://dic.naver.com" className="_choice " target="_blank"><span className="dic"></span>사전</a></li>
                      <li className="_li_list"><a href="http://news.naver.com" className="_choice " target="_blank"><span className="news"></span>뉴스</a></li>
                      <li className="_li_list"><a href="http://tvguide.naver.com" className="_choice " target="_blank"><span className="tv"></span>TV편성표</a>
                      </li>
                      <li className="_li_list"><a href="http://movie.naver.com" className="_choice " target="_blank"><span className="movie"></span>영화</a></li>
                      <li className="_li_list"><a href="http://opencast.naver.com/home/myCastList.nhn" className="_choice " target="_blank"><span className="cast"></span>MY캐스트</a></li>
                      <li className="_li_list"><a href="http://map.naver.com" className="_choice " target="_blank"><span className="map"></span>지도</a></li>
                      <li className="_li_list"><a href="http://search.naver.com/search.naver?where=nexearch&amp;query=%C5%C3%B9%E8+%B9%E8%BC%DB%C1%B6%C8%B8&amp;sm=nme_pcl" className="_choice " target="_blank"><span className="qick"></span>택배조회</a></li>
                      <li className="_li_list"><a href="http://book.naver.com" className="_choice " target="_blank"><span className="books"></span>책</a></li>
                    </ul>
                  </div>

                  <div className="btn_wrap">
                    <button className="_servicelink_setting btn_select" title="설정하기" type="button"><span className="blind">설정하기</span></button>
                    <ul className="move_mode">
                      <li><a title="맨위로" href="#" className="_top ">맨위로</a><span className="bar"></span>
                      </li>
                      <li className="mode_top"><a title="위로" href="#" className="_up "><em className="_up"></em>위로</a><span className="bar"></span></li>
                      <li className="mode_bot"><a title="아래" href="#" className="_down "><em className="_down"></em>아래</a><span className="bar"></span></li>
                      <li><a title="맨아래" href="#" className="_bottom ">맨아래</a></li>
                    </ul>
                  </div>
                  <div className="round"><span className="tl"></span><span className="tr"></span><span className="bl"></span><span className="br"></span></div>
                </div>
                <div id="section_mm" className="_body widget" style={{display: 'block'}}>
                  <h2 className="blind">메모</h2>
                  <div className="_writer mm mm_before">
                    <fieldset className="_writer_field mm_wr">
                      <legend className="blind">메모 입력</legend>
                      <div style={{display: 'none'}} className="_memo_writer_guide b4_tx">간단한
                        메모나 스크랩 하고 싶은 URL을<br/>메모에 저장하고 활용해 보세요.
                      </div>
                      <textarea cols="35" rows="5" id="acs5" className="_memo_writer tx"></textarea>
						<span className="_memo_length_span lth">
							<span className="blind">길이</span>50000<span className="blind">자</span>


						</span>
                      <div className="_save_btn_div smit smit_dis" style={{display: 'none'}}>
                        <button type="submit" title="저장하기" className="btn_sv _memo_save_btn " disabled="disabled"><span className="blind">저장하기</span>
                        </button>
                      </div>
                      <div className="mm_act _open_btn_div" style={{display: 'none'}}>
                                        <span className="btn_snd"><button type="button" title="큰 화면에서 쓰기" className="_memo_open_btn ">
                                          <span className="blind">큰 화면에서 쓰기</span></button></span>
                      </div>
                    </fieldset>
                    <span className="mm_imp"><input type="checkbox" id="isimp_writer" /><label for="isimp_writer" title="중요한 메모는 클릭해주세요" className="_memo_imp "><span className="blind">중요 표시</span></label></span>

                    <div className="round"><span className="tl"></span><span className="tr"></span><span className="bl"></span><span className="br"></span></div>

                  </div>

                  <div className="_memoList mm_lst_on">
                    <div className="btn_mm_fd">
                      <button type="button" title="메모 접기" className="_mm_off on "><span className="blind">메모 접기</span>
                      </button>
                      <button type="button" title="메모 펼치기" className="_mm_on off "><span className="blind">메모 펼치기</span>
                      </button>
                    </div>

                    <div className="_search_ui mm_srch">

                                    <span className="_refresh_button_container btn_reload"><button type="button" className="_refresh_button " title="데스크톱이나 모바일에서 작성한 메모를 동기화하려면 새로고침 버튼을 클릭해 주세요.">
                                      <span className="blind">새로고침</span></button></span>


                      <fieldset className="cont">
                        <legend className="blind">메모 검색</legend>
                        <label for="input_mm_srch" className="blind">검색어</label><input id="input_mm_srch" type="text" className="_search_keyword" value="메모 빠른 검색" />
                        <span className="btn_srch"><button type="button" className="_search_button " title="검색"><span className="blind">검색</span></button></span>
                      </fieldset>



                      <div className="mm_sort">
                                        <span className="_rollview_btn_parent btn_mini max"><button type="button" className="_rollview_button " title="펼쳐보기"><span className="blind">펼쳐보기</span>
                                        </button></span>
                                        <span className="_go_trash btn_big"><button type="button" title="휴지통으로 이동" className="_go_trash ">
                                          <span className="blind">휴지통으로 이동</span></button></span>
                      </div>

                      <span className="mm_imp"><input type="checkbox" id="isimp_search" /><label for="isimp_search" title="중요" className="_important_list_button "><span className="blind">중요 표시</span></label></span>
                      <div className="_search_result_container mm_srch_rslt" ></div>
                      <div className="_calendar_ui mm_cld" ></div>
                    </div>



                    <div className="_mm_sync_area mm mm_sync" style={{display: 'none'}}>
                      <div className="mm_vw">
                        <div className="_mm_sync_count cont"><strong>0개</strong>의 메모가
                          동기화 되었습니다.
                        </div>
                      </div>
                      <span className="btn_clse"><button title="닫기" type="button" className="_mm_sync_close"><span className="blind">닫기</span></button></span>

                      <div className="round"><span className="tl"></span><span className="tr"></span><span className="bl"></span><span className="br"></span></div>


                    </div>


                    <div className="_list mm_lst">
                      <div className="_item mm mm_sel mm_min" date="20140618163204" itemid="335205">
                        <fieldset className="_memo_modify_form mm_wr" style={{display: 'none'}}>
                          <legend className="blind">메모 입력</legend>
                          <textarea style="height: 172px;overflow-y: hidden;" className="_memo_modify_content tx fcs" rows="5" cols="35"></textarea> <span className="_memo_length_span lth"> <span className="blind">길이</span>50000<span className="blind">자</span> </span>
                          <dl className="scrab_link" >
                            <dt>담은 링크 :</dt>
                            <dd>
                              <a href="http://blog.naver.com/ssarmang/220021244200">파일
                                가져와서, 저장하는 GUI 프로그램 만들기
                                출처 : 네이버 블로그</a></dd>
                          </dl>
                          <div className="smit"><span className="btn_resv"><button className="_memo_modify_save " title="저장" type="submit"><span className="blind">저장</span></button></span> <span className="btn_cncl"><button className="_memo_modify_cancel " title="취소" type="button"><span className="blind">취소</span></button></span></div>
                          <div className="mm_act"><span className="btn_snd"><button type="button" title="큰 화면에서 수정하기" className="_memo_modify_open "><span className="blind">큰 화면에서 수정하기</span></button></span>
                          </div>
                          <ul className="lst_img" ></ul>
                        </fieldset>
                        <div className="_memo_list_view mm_vw">
                          <div className="_memo_content cont ">파일 가져와서, 저장하는 GUI 프로그램
                            만들기<br/>출처 : 네이버 블로그
                          </div>
                          <ul className="lst_img" ></ul>
                          <dl className="scrab_link" >
                            <dt>담은 링크 :</dt>
                            <dd>
                              <a href="http://blog.naver.com/ssarmang/220021244200">파일
                                가져와서, 저장하는 GUI 프로그램 만들기
                                출처 : 네이버 블로그</a></dd>
                          </dl>
                                            <span className="_memo_all_btn  btn_via" ><button title="전체보기" type="button" className="_memo_over_view ">
                                              <span className="blind">전체보기</span></button></span>
                          <span className="_memo_time_container info" ><span className="_memo_time time_num">2014.6.18 16:32</span></span>
                          <span className="_memo_more cont_back" style={{display: 'none'}}><button className="_memo_more_btn " title="접기" type="button"><span className="blind">접기</span></button></span></div>
                        <span className="mm_imp"><input type="checkbox" checked="checked" id="isimp335205" /><label className="_memo_imp  " title="중요한 메모는 클릭해주세요" for="isimp335205"><span className="blind">중요 표시 비활성화</span></label></span>
                        <button type="button" title="더보기" className="btn_mm_more"><span className="blind">더보기</span></button>
                        <div className="_memo_btn mm_act" style={{display: 'none'}}>

                                            <span className="btn_snd"><button className="_memo_send " title="큰 화면으로 보기" type="button" target="_blank">
                                              <span className="blind">큰 화면으로 보기</span></button></span>
                          <span className="btn_edt"><button className="_memo_modify_btn " title="수정" type="button"><span className="blind">수정</span></button></span> <span className="btn_del"><button className="_memo_del_btn " title="삭제" type="button"><span className="blind">삭제</span></button></span>
                        </div>
                        <div className="round"><span className="tl"></span><span className="tr"></span><span className="bl"></span><span className="br"></span></div>
                      </div>
                    </div>
                    <div className="_filtering_list mm_lst mm_hide"></div>
                    <div className="mm" style="visibility: hidden; z-index: -1; position: absolute; top: -10000px; left: -1000px;">
                      <div className="mm_vw">
                        <div className="_memo_content_hidden cont">파일 가져와서, 저장하는 GUI
                          프로그램 만들기<br/>출처 : 네이버 블로그
                        </div>
                      </div>
                    </div>


                    <div className="_more_button_container mm mm_more" style={{display: 'none'}}>
                      <button type="button" className="_more_button_wrapper btn_more _more_button " title="메모 더보기" style={{display: 'none'}}>더보기
                      </button>
                      <span className="go_mm"><a href="http://memo.naver.com" title="메모홈으로 가기" target="_blank"><em className="blind">메모 홈</em></a></span>
                      <div className="round"><span className="tl"></span><span className="tr"></span><span className="bl"></span><span className="br"></span></div>

                    </div>

                  </div>
                </div>
                <div className="section_cafe cafe_on widget" id="section_cafe" style={{display: 'block'}}>
                  <h2 className="blind">가입카페 목록 위젯</h2>
                  <div className="title">
                    <h2><a href="http://section.cafe.naver.com" className="" target="_blank"><span className="blind">가입 카페 목록</span></a></h2>
                    <a className="_cafe_fold_btn btn_fold " href="#" title="가입 카페 목록 접기"><span className="blind">가입 카페 목록 접기</span></a>
                  </div>
                  <div className="lst_cafe">
                    <iframe title="가입 카페 목록리스트" src="http://cafe.naver.com/MyCafeListGNBView.nhn?viewType=1&amp;linkTarget=1" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" width="257" height="308"></iframe>
                  </div>
                  <div className="bg_on_bottom"></div>
                </div>
                <div className="widget section_naverPay" id="section_coin" style={{display: 'block'}}>
                  <h2 className="blind">네이버 페이 위젯</h2>
                  <div className="pay_bx">
                    <ul>
                      <li>
                        <a title="네이버페이" className="_pay_top_value " href="http://pay.naver.com" target="_blank">
                          <span className="ic_naverPay"></span>
                          <dl>
                            <dt>네이버페이 포인트</dt>
                            <dd className="_pay_value" title="1,584">1,584</dd>
                          </dl>
                        </a>
                      </li>
                      <li>
                        <a title="선물" className="_gift_top_value " href="http://gift.naver.com/receivegiftlist.nhn?menu=gift_sub_m1" target="_blank">
                          <span className="ic_gift"></span>
                          <dl>
                            <dt>선물</dt>
                            <dd className="_gift_value" title="0">0</dd>
                          </dl>
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="round"><span className="tl"></span><span className="tr"></span><span className="bl"></span><span className="br"></span></div>

                </div>
                <div className="widget_set">
                  <a href="#" className="" onclick="nhn.naverme.config.initialize({'menu' : 'widget'});"><span className="ic"></span><em className="more_tx">위젯 설정</em></a>
                  <span className="bar"></span>
                  <a href="#" className="" onclick="nhn.naverme.config.initialize({'menu' : 'widget', 'order' : true});"><span className="ic"></span><em className="more_tx2">순서 변경하기</em></a>
                </div>

                <div className="notice_ftr">
                  <ul>
                    <li><a href="#" className="" onclick="openNoticeList(); return false;">공지사항</a><span id="newNoticeIcon" className="ico_new"><span className="blind">New</span></span></li>
                    <li><a target="_blank" href="https://help.naver.com/support/service/main.nhn?serviceNo=984" className="">네이버me 고객센터</a></li>
                  </ul>
                </div>
                <div className="btn_top" style="top:50%">
                  <a href="#" title="맨위로"><em className="blind">맨위로</em></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

export default Main;

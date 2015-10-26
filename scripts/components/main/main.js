/**
 * Created by dobyeongsu on 2015. 10. 15..
 */
import React, { Component } from 'react';
import Radium, { Style } from 'radium';
import connectToStores from 'alt/utils/connectToStores';
import UserStore from '../../stores/UserStore';
import PostStore from '../../stores/PostStore';

@connectToStores
@Radium
export default class Main extends Component {
    static getStores() {
        return [UserStore, PostStore];
    }

    static getPropsFromStores() {
        return {
            UserStore : UserStore.getState(),
            PostStore : PostStore.getState()
        }
    }

    componentDidMount () {
        $('.nano').nanoScroller();
    }

    render() {
        const { loadSuccess, posts } = this.props.PostStore;

        let postList;
        var createItem = (v, k) => {
            return (
                <li className="_ccast_item" key={k}>
                    <div className="lst_obj">
                        <p className="thumb">
                            <a className="N=a:sbx*c.img" href="http://cafe.naver.com/joonggonara/member/qkrtlaud0647/article" target="_blank">
                                <img alt="" height="40" onerror="this.parentElement.classNameName += &quot; cafe&quot;;this.src=&quot;http://static.naver.net/me/blank.gif&quot;;"
                                     width="40" /> <span className="mask"></span></a>

                        </p>
                        <div className="desc_bx">
                            <div className="con_desc">
                                <h4><a className="N=a:sbx*c.content _ccast_item_url"
                                       href="http://cafe.naver.com/joonggonara/287427195"
                                       target="_blank">{v.title}</a>
                                </h4>
                                <p className="frm_svc">
                                    <span className="h_title">
                                        <a className="N=a:sbx*c.content" href="http://cafe.naver.com/joonggonara/member/qkrtlaud0647/article" target="_blank">{v.author}</a>
                                    </span>
                                    <span className="wrt_time">{v.submitDate}</span>
                                    <span className="h_subject">
                                        <a className="N=a:sbx*c.content" href="http://cafe.naver.com/joonggonara" target="_blank">클럽</a> &gt; <a className="N=a:sbx*c.content" href="http://cafe.naver.com/ArticleList.nhn?search.clubid=10050146&amp;search.menuid=736&amp;search.boardtype=L" target="_blank">{v.club}</a></span> <span className="svc_name"><a className="N=a:sbx*c.content" href="http://cafe.naver.com" target="_blank">카페</a>
                                    </span>
                                </p>
                                <div className="lst_type2">
                                    <div className="rgt_dsc">
                                        <div className="fd_cont">
                                            <a className="N=a:sbx*c.content _ccast_item_url"
                                               href="http://cafe.naver.com/joonggonara/287427195"
                                               target="_blank">가격은 9만원 이내로서울직거래
                                                합니다레오폴드 fc900r led 갈축삽니다.구성품 풀박스 이면
                                                좋겠고여 깨끗한거 삽니다.파실분은 카톡 evidence0647 로
                                                톡주세요</a>
                                        </div>
                                    </div>
                                    <div className="btn_area" >
                                        <button className="N=a:sbx*c.cmt btn_reple _ccast_feed_button_comment"
                                                data-link="http://cafe.naver.com/joonggonara/287427195"
                                                data-messagekey="{&quot;clubid&quot;:10050146,&quot;articleid&quot;:287427195}"
                                                data-messagekeymap="{clubid=10050146, articleid=287427195}"
                                                data-nclick="N=a:sbx*c" data-serviceid="cafe" type="button"><span className="frnt"></span> <span className="tx_node _ccast_feed_button_comment">좋아요<em className="cnt _ccast_feed_button_comment"></em></span></button>
                                        <button className="N=a:sbx*c.cmt btn_reple _ccast_feed_button_comment"
                                                data-link="http://cafe.naver.com/joonggonara/287427195"
                                                data-messagekey="{&quot;clubid&quot;:10050146,&quot;articleid&quot;:287427195}"
                                                data-messagekeymap="{clubid=10050146, articleid=287427195}"
                                                data-nclick="N=a:sbx*c" data-serviceid="cafe" type="button"><span className="frnt"></span> <span className="tx_node _ccast_feed_button_comment">싫어요<em className="cnt _ccast_feed_button_comment"></em></span></button>
                                        <button className="N=a:sbx*c.cmt btn_reple _ccast_feed_button_comment"
                                                data-link="http://cafe.naver.com/joonggonara/287427195"
                                                data-messagekey="{&quot;clubid&quot;:10050146,&quot;articleid&quot;:287427195}"
                                                data-messagekeymap="{clubid=10050146, articleid=287427195}"
                                                data-nclick="N=a:sbx*c" data-serviceid="cafe" type="button"><span className="frnt"></span> <span className="tx_node _ccast_feed_button_comment">댓글<em className="cnt _ccast_feed_button_comment"></em></span></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="ic_bookmark">
                            <a className="_bookmark_icon N=a:sbx*c.bmk" href="#" title="추천하기"><span className="blind">추천하기</span></a>
                        </div>
                        <button className="N=a:sbx*c.del feed_del _ccast_button_delete" type="button"><span className="blind">상기 내용 삭제</span></button>
                    </div>
                </li>
            )
        };
        if (loadSuccess) {
            postList = <ul>{posts.data.map(createItem)}</ul>
        }

        return (
            <div style={styles.main}>
                <Style rules={{
                  "#bestPosts" : {
                    background: "#ccc",
                    height: "100%",
                    overflow: "hidden"
                  }
                }} />
                <div id="bestPosts" className="">
                    <div style={styles.headLine}>
                        <div className="view_mode _view_mode">
                            <ul>
                                <li className="on"><a href="#" className="_news_menu N=a:sbx.feedall" servicecode="feedall">최신순</a> <span>|</span></li>
                                <li className=""><a href="#" className="_news_menu N=a:sbx.rankall" servicecode="rankall">인기순</a></li>
                            </ul>
                        </div>
                        <button type="button" className="N=a:scx.set go_btn_env _open_config"><span className="blind">환경설정</span></button>
                        <span className="me_btn btn_board _cafe_fil_span" ><button type="button" className="N=a:scx*c.selbbs _cafe_fil_btn">전체게시판</button></span>
                        <div  className="ly_cafe _cafe_fil_lst"></div>
                        <button type="button" className="btn_reload _refresh N=a:scx.refresh"><span className="blind">새로 고침</span></button>
                    </div>
                    <div className="lst_area _lst_area nano" style={styles.contents}>
                        <div className="nano-content" style={styles.scrollContent}>

                            { loadSuccess && postList }

                            <ul className="">
                                <li className="_ccast_item">
                                    <div className="lst_obj">
                                        <p className="thumb">
                                            <a className="N=a:sbx*c.img" href="http://cafe.naver.com/joonggonara/member/qkrtlaud0647/article" target="_blank">
                                                <img alt="" height="40" onerror="this.parentElement.classNameName += &quot; cafe&quot;;this.src=&quot;http://static.naver.net/me/blank.gif&quot;;"
                                                     width="40" /> <span className="mask"></span></a>

                                        </p>
                                        <div className="desc_bx">
                                            <div className="con_desc">
                                                <h4><a className="N=a:sbx*c.content _ccast_item_url"
                                                       href="http://cafe.naver.com/joonggonara/287427195"
                                                       target="_blank">레오폴드 fc 900r led 갈축삽니다</a><span className="wrt_time">10초전</span>
                                                </h4>
                                                <p className="frm_svc">
                                            <span className="h_title"><a className="N=a:sbx*c.content" href="http://cafe.naver.com/joonggonara/member/qkrtlaud0647/article"
                                                                         target="_blank">텐카로스6</a></span> <span className="h_subject"><a className="N=a:sbx*c.content" href="http://cafe.naver.com/joonggonara" target="_blank">중고나라</a> &gt; <a className="N=a:sbx*c.content" href=
                                                    "http://cafe.naver.com/ArticleList.nhn?search.clubid=10050146&amp;search.menuid=736&amp;search.boardtype=L" target="_blank">M 가전/컴퓨터</a></span> <span className="svc_name"><a className="N=a:sbx*c.content" href="http://cafe.naver.com" target=
                                                    "_blank">카페</a></span>
                                                </p>
                                                <div className="lst_type2">
                                                    <div className="rgt_dsc">
                                                        <div className="fd_cont">
                                                            <a className="N=a:sbx*c.content _ccast_item_url"
                                                               href="http://cafe.naver.com/joonggonara/287427195"
                                                               target="_blank">가격은 9만원 이내로서울직거래
                                                                합니다레오폴드 fc900r led 갈축삽니다.구성품 풀박스 이면
                                                                좋겠고여 깨끗한거 삽니다.파실분은 카톡 evidence0647 로
                                                                톡주세요</a>
                                                        </div>
                                                    </div>
                                                    <div className="btn_area" >
                                                        <button className="N=a:sbx*c.cmt btn_reple _ccast_feed_button_comment"
                                                                data-link="http://cafe.naver.com/joonggonara/287427195"
                                                                data-messagekey="{&quot;clubid&quot;:10050146,&quot;articleid&quot;:287427195}"
                                                                data-messagekeymap="{clubid=10050146, articleid=287427195}"
                                                                data-nclick="N=a:sbx*c" data-serviceid="cafe" type="button"><span className="frnt"></span> <span className="tx_node _ccast_feed_button_comment">댓글<em className="cnt _ccast_feed_button_comment"></em></span></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ic_bookmark">
                                            <a className="_bookmark_icon N=a:sbx*c.bmk" href="#" title=
                                                "북마크하기"><span className="blind">북마크하기</span></a>
                                        </div>
                                        <button className="N=a:sbx*c.del feed_del _ccast_button_delete" type="button"><span className="blind">상기 내용 삭제</span></button>
                                    </div>
                                </li>
                                <li className="_ccast_item">
                                    <div className="lst_obj">
                                        <p className="thumb">
                                            <a className="N=a:sbx*c.img" href="http://cafe.naver.com/joonggonara/member/qkrtlaud0647/article" target="_blank">
                                                <img alt="" height="40" onerror="this.parentElement.classNameName += &quot; cafe&quot;;this.src=&quot;http://static.naver.net/me/blank.gif&quot;;"
                                                     width="40" /> <span className="mask"></span></a>

                                        </p>
                                        <div className="desc_bx">
                                            <div className="con_desc">
                                                <h4><a className="N=a:sbx*c.content _ccast_item_url"
                                                       href="http://cafe.naver.com/joonggonara/287427195"
                                                       target="_blank">레오폴드 fc 900r led 갈축삽니다</a><span className="wrt_time">10초전</span>
                                                </h4>
                                                <p className="frm_svc">
                                            <span className="h_title"><a className="N=a:sbx*c.content" href="http://cafe.naver.com/joonggonara/member/qkrtlaud0647/article"
                                                                         target="_blank">텐카로스6</a></span> <span className="h_subject"><a className="N=a:sbx*c.content" href="http://cafe.naver.com/joonggonara" target="_blank">중고나라</a> &gt; <a className="N=a:sbx*c.content" href=
                                                    "http://cafe.naver.com/ArticleList.nhn?search.clubid=10050146&amp;search.menuid=736&amp;search.boardtype=L" target="_blank">M 가전/컴퓨터</a></span> <span className="svc_name"><a className="N=a:sbx*c.content" href="http://cafe.naver.com" target=
                                                    "_blank">카페</a></span>
                                                </p>
                                                <div className="lst_type2">
                                                    <div className="rgt_dsc">
                                                        <div className="fd_cont">
                                                            <a className="N=a:sbx*c.content _ccast_item_url"
                                                               href="http://cafe.naver.com/joonggonara/287427195"
                                                               target="_blank">가격은 9만원 이내로서울직거래
                                                                합니다레오폴드 fc900r led 갈축삽니다.구성품 풀박스 이면
                                                                좋겠고여 깨끗한거 삽니다.파실분은 카톡 evidence0647 로
                                                                톡주세요</a>
                                                        </div>
                                                    </div>
                                                    <div className="btn_area" >
                                                        <button className="N=a:sbx*c.cmt btn_reple _ccast_feed_button_comment"
                                                                data-link="http://cafe.naver.com/joonggonara/287427195"
                                                                data-messagekey="{&quot;clubid&quot;:10050146,&quot;articleid&quot;:287427195}"
                                                                data-messagekeymap="{clubid=10050146, articleid=287427195}"
                                                                data-nclick="N=a:sbx*c" data-serviceid="cafe" type="button"><span className="frnt"></span> <span className="tx_node _ccast_feed_button_comment">댓글<em className="cnt _ccast_feed_button_comment"></em></span></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ic_bookmark">
                                            <a className="_bookmark_icon N=a:sbx*c.bmk" href="#" title=
                                                "북마크하기"><span className="blind">북마크하기</span></a>
                                        </div>
                                        <button className="N=a:sbx*c.del feed_del _ccast_button_delete" type="button"><span className="blind">상기 내용 삭제</span></button>
                                    </div>
                                </li>
                                <li className="_ccast_item">
                                    <div className="lst_obj">
                                        <p className="thumb">
                                            <a className="N=a:sbx*c.img" href="http://cafe.naver.com/joonggonara/member/qkrtlaud0647/article" target="_blank">
                                                <img alt="" height="40" onerror="this.parentElement.classNameName += &quot; cafe&quot;;this.src=&quot;http://static.naver.net/me/blank.gif&quot;;"
                                                     width="40" /> <span className="mask"></span></a>

                                        </p>
                                        <div className="desc_bx">
                                            <div className="con_desc">
                                                <h4><a className="N=a:sbx*c.content _ccast_item_url"
                                                       href="http://cafe.naver.com/joonggonara/287427195"
                                                       target="_blank">레오폴드 fc 900r led 갈축삽니다</a><span className="wrt_time">10초전</span>
                                                </h4>
                                                <p className="frm_svc">
                                            <span className="h_title"><a className="N=a:sbx*c.content" href="http://cafe.naver.com/joonggonara/member/qkrtlaud0647/article"
                                                                         target="_blank">텐카로스6</a></span> <span className="h_subject"><a className="N=a:sbx*c.content" href="http://cafe.naver.com/joonggonara" target="_blank">중고나라</a> &gt; <a className="N=a:sbx*c.content" href=
                                                    "http://cafe.naver.com/ArticleList.nhn?search.clubid=10050146&amp;search.menuid=736&amp;search.boardtype=L" target="_blank">M 가전/컴퓨터</a></span> <span className="svc_name"><a className="N=a:sbx*c.content" href="http://cafe.naver.com" target=
                                                    "_blank">카페</a></span>
                                                </p>
                                                <div className="lst_type2">
                                                    <div className="rgt_dsc">
                                                        <div className="fd_cont">
                                                            <a className="N=a:sbx*c.content _ccast_item_url"
                                                               href="http://cafe.naver.com/joonggonara/287427195"
                                                               target="_blank">가격은 9만원 이내로서울직거래
                                                                합니다레오폴드 fc900r led 갈축삽니다.구성품 풀박스 이면
                                                                좋겠고여 깨끗한거 삽니다.파실분은 카톡 evidence0647 로
                                                                톡주세요</a>
                                                        </div>
                                                    </div>
                                                    <div className="btn_area" >
                                                        <button className="N=a:sbx*c.cmt btn_reple _ccast_feed_button_comment"
                                                                data-link="http://cafe.naver.com/joonggonara/287427195"
                                                                data-messagekey="{&quot;clubid&quot;:10050146,&quot;articleid&quot;:287427195}"
                                                                data-messagekeymap="{clubid=10050146, articleid=287427195}"
                                                                data-nclick="N=a:sbx*c" data-serviceid="cafe" type="button"><span className="frnt"></span> <span className="tx_node _ccast_feed_button_comment">댓글<em className="cnt _ccast_feed_button_comment"></em></span></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ic_bookmark">
                                            <a className="_bookmark_icon N=a:sbx*c.bmk" href="#" title=
                                                "북마크하기"><span className="blind">북마크하기</span></a>
                                        </div>
                                        <button className="N=a:sbx*c.del feed_del _ccast_button_delete" type="button"><span className="blind">상기 내용 삭제</span></button>
                                    </div>
                                </li>
                                <li className="_ccast_item">
                                    <div className="lst_obj">
                                        <p className="thumb">
                                            <a className="N=a:sbx*c.img" href="http://cafe.naver.com/joonggonara/member/qkrtlaud0647/article" target="_blank">
                                                <img alt="" height="40" onerror="this.parentElement.classNameName += &quot; cafe&quot;;this.src=&quot;http://static.naver.net/me/blank.gif&quot;;"
                                                     width="40" /> <span className="mask"></span></a>

                                        </p>
                                        <div className="desc_bx">
                                            <div className="con_desc">
                                                <h4><a className="N=a:sbx*c.content _ccast_item_url"
                                                       href="http://cafe.naver.com/joonggonara/287427195"
                                                       target="_blank">레오폴드 fc 900r led 갈축삽니다</a><span className="wrt_time">10초전</span>
                                                </h4>
                                                <p className="frm_svc">
                                            <span className="h_title"><a className="N=a:sbx*c.content" href="http://cafe.naver.com/joonggonara/member/qkrtlaud0647/article"
                                                                         target="_blank">텐카로스6</a></span> <span className="h_subject"><a className="N=a:sbx*c.content" href="http://cafe.naver.com/joonggonara" target="_blank">중고나라</a> &gt; <a className="N=a:sbx*c.content" href=
                                                    "http://cafe.naver.com/ArticleList.nhn?search.clubid=10050146&amp;search.menuid=736&amp;search.boardtype=L" target="_blank">M 가전/컴퓨터</a></span> <span className="svc_name"><a className="N=a:sbx*c.content" href="http://cafe.naver.com" target=
                                                    "_blank">카페</a></span>
                                                </p>
                                                <div className="lst_type2">
                                                    <div className="rgt_dsc">
                                                        <div className="fd_cont">
                                                            <a className="N=a:sbx*c.content _ccast_item_url"
                                                               href="http://cafe.naver.com/joonggonara/287427195"
                                                               target="_blank">가격은 9만원 이내로서울직거래
                                                                합니다레오폴드 fc900r led 갈축삽니다.구성품 풀박스 이면
                                                                좋겠고여 깨끗한거 삽니다.파실분은 카톡 evidence0647 로
                                                                톡주세요</a>
                                                        </div>
                                                    </div>
                                                    <div className="btn_area" >
                                                        <button className="N=a:sbx*c.cmt btn_reple _ccast_feed_button_comment"
                                                                data-link="http://cafe.naver.com/joonggonara/287427195"
                                                                data-messagekey="{&quot;clubid&quot;:10050146,&quot;articleid&quot;:287427195}"
                                                                data-messagekeymap="{clubid=10050146, articleid=287427195}"
                                                                data-nclick="N=a:sbx*c" data-serviceid="cafe" type="button"><span className="frnt"></span> <span className="tx_node _ccast_feed_button_comment">댓글<em className="cnt _ccast_feed_button_comment"></em></span></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ic_bookmark">
                                            <a className="_bookmark_icon N=a:sbx*c.bmk" href="#" title=
                                                "북마크하기"><span className="blind">북마크하기</span></a>
                                        </div>
                                        <button className="N=a:sbx*c.del feed_del _ccast_button_delete" type="button"><span className="blind">상기 내용 삭제</span></button>
                                    </div>
                                </li>
                                <li className="_ccast_item">
                                    <div className="lst_obj">
                                        <p className="thumb">
                                            <a className="N=a:sbx*c.img" href="http://cafe.naver.com/joonggonara/member/qkrtlaud0647/article" target="_blank">
                                                <img alt="" height="40" onerror="this.parentElement.classNameName += &quot; cafe&quot;;this.src=&quot;http://static.naver.net/me/blank.gif&quot;;"
                                                     width="40" /> <span className="mask"></span></a>

                                        </p>
                                        <div className="desc_bx">
                                            <div className="con_desc">
                                                <h4><a className="N=a:sbx*c.content _ccast_item_url"
                                                       href="http://cafe.naver.com/joonggonara/287427195"
                                                       target="_blank">레오폴드 fc 900r led 갈축삽니다</a><span className="wrt_time">10초전</span>
                                                </h4>
                                                <p className="frm_svc">
                                            <span className="h_title"><a className="N=a:sbx*c.content" href="http://cafe.naver.com/joonggonara/member/qkrtlaud0647/article"
                                                                         target="_blank">텐카로스6</a></span> <span className="h_subject"><a className="N=a:sbx*c.content" href="http://cafe.naver.com/joonggonara" target="_blank">중고나라</a> &gt; <a className="N=a:sbx*c.content" href=
                                                    "http://cafe.naver.com/ArticleList.nhn?search.clubid=10050146&amp;search.menuid=736&amp;search.boardtype=L" target="_blank">M 가전/컴퓨터</a></span> <span className="svc_name"><a className="N=a:sbx*c.content" href="http://cafe.naver.com" target=
                                                    "_blank">카페</a></span>
                                                </p>
                                                <div className="lst_type2">
                                                    <div className="rgt_dsc">
                                                        <div className="fd_cont">
                                                            <a className="N=a:sbx*c.content _ccast_item_url"
                                                               href="http://cafe.naver.com/joonggonara/287427195"
                                                               target="_blank">가격은 9만원 이내로서울직거래
                                                                합니다레오폴드 fc900r led 갈축삽니다.구성품 풀박스 이면
                                                                좋겠고여 깨끗한거 삽니다.파실분은 카톡 evidence0647 로
                                                                톡주세요</a>
                                                        </div>
                                                    </div>
                                                    <div className="btn_area" >
                                                        <button className="N=a:sbx*c.cmt btn_reple _ccast_feed_button_comment"
                                                                data-link="http://cafe.naver.com/joonggonara/287427195"
                                                                data-messagekey="{&quot;clubid&quot;:10050146,&quot;articleid&quot;:287427195}"
                                                                data-messagekeymap="{clubid=10050146, articleid=287427195}"
                                                                data-nclick="N=a:sbx*c" data-serviceid="cafe" type="button"><span className="frnt"></span> <span className="tx_node _ccast_feed_button_comment">댓글<em className="cnt _ccast_feed_button_comment"></em></span></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ic_bookmark">
                                            <a className="_bookmark_icon N=a:sbx*c.bmk" href="#" title=
                                                "북마크하기"><span className="blind">북마크하기</span></a>
                                        </div>
                                        <button className="N=a:sbx*c.del feed_del _ccast_button_delete" type="button"><span className="blind">상기 내용 삭제</span></button>
                                    </div>
                                </li>
                                <li className="_ccast_item">
                                    <div className="lst_obj">
                                        <p className="thumb">
                                            <a className="N=a:sbx*c.img" href="http://cafe.naver.com/joonggonara/member/qkrtlaud0647/article" target="_blank">
                                                <img alt="" height="40" onerror="this.parentElement.classNameName += &quot; cafe&quot;;this.src=&quot;http://static.naver.net/me/blank.gif&quot;;"
                                                     width="40" /> <span className="mask"></span></a>

                                        </p>
                                        <div className="desc_bx">
                                            <div className="con_desc">
                                                <h4><a className="N=a:sbx*c.content _ccast_item_url"
                                                       href="http://cafe.naver.com/joonggonara/287427195"
                                                       target="_blank">레오폴드 fc 900r led 갈축삽니다</a><span className="wrt_time">10초전</span>
                                                </h4>
                                                <p className="frm_svc">
                                            <span className="h_title"><a className="N=a:sbx*c.content" href="http://cafe.naver.com/joonggonara/member/qkrtlaud0647/article"
                                                                         target="_blank">텐카로스6</a></span> <span className="h_subject"><a className="N=a:sbx*c.content" href="http://cafe.naver.com/joonggonara" target="_blank">중고나라</a> &gt; <a className="N=a:sbx*c.content" href=
                                                    "http://cafe.naver.com/ArticleList.nhn?search.clubid=10050146&amp;search.menuid=736&amp;search.boardtype=L" target="_blank">M 가전/컴퓨터</a></span> <span className="svc_name"><a className="N=a:sbx*c.content" href="http://cafe.naver.com" target=
                                                    "_blank">카페</a></span>
                                                </p>
                                                <div className="lst_type2">
                                                    <div className="rgt_dsc">
                                                        <div className="fd_cont">
                                                            <a className="N=a:sbx*c.content _ccast_item_url"
                                                               href="http://cafe.naver.com/joonggonara/287427195"
                                                               target="_blank">가격은 9만원 이내로서울직거래
                                                                합니다레오폴드 fc900r led 갈축삽니다.구성품 풀박스 이면
                                                                좋겠고여 깨끗한거 삽니다.파실분은 카톡 evidence0647 로
                                                                톡주세요</a>
                                                        </div>
                                                    </div>
                                                    <div className="btn_area" >
                                                        <button className="N=a:sbx*c.cmt btn_reple _ccast_feed_button_comment"
                                                                data-link="http://cafe.naver.com/joonggonara/287427195"
                                                                data-messagekey="{&quot;clubid&quot;:10050146,&quot;articleid&quot;:287427195}"
                                                                data-messagekeymap="{clubid=10050146, articleid=287427195}"
                                                                data-nclick="N=a:sbx*c" data-serviceid="cafe" type="button"><span className="frnt"></span> <span className="tx_node _ccast_feed_button_comment">댓글<em className="cnt _ccast_feed_button_comment"></em></span></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ic_bookmark">
                                            <a className="_bookmark_icon N=a:sbx*c.bmk" href="#" title=
                                                "북마크하기"><span className="blind">북마크하기</span></a>
                                        </div>
                                        <button className="N=a:sbx*c.del feed_del _ccast_button_delete" type="button"><span className="blind">상기 내용 삭제</span></button>
                                    </div>
                                </li>
                                <li className="_ccast_item">
                                    <div className="lst_obj">
                                        <p className="thumb">
                                            <a className="N=a:sbx*c.img" href="http://cafe.naver.com/joonggonara/member/qkrtlaud0647/article" target="_blank">
                                                <img alt="" height="40" onerror="this.parentElement.classNameName += &quot; cafe&quot;;this.src=&quot;http://static.naver.net/me/blank.gif&quot;;"
                                                     width="40" /> <span className="mask"></span></a>

                                        </p>
                                        <div className="desc_bx">
                                            <div className="con_desc">
                                                <h4><a className="N=a:sbx*c.content _ccast_item_url"
                                                       href="http://cafe.naver.com/joonggonara/287427195"
                                                       target="_blank">레오폴드 fc 900r led 갈축삽니다</a><span className="wrt_time">10초전</span>
                                                </h4>
                                                <p className="frm_svc">
                                            <span className="h_title"><a className="N=a:sbx*c.content" href="http://cafe.naver.com/joonggonara/member/qkrtlaud0647/article"
                                                                         target="_blank">텐카로스6</a></span> <span className="h_subject"><a className="N=a:sbx*c.content" href="http://cafe.naver.com/joonggonara" target="_blank">중고나라</a> &gt; <a className="N=a:sbx*c.content" href=
                                                    "http://cafe.naver.com/ArticleList.nhn?search.clubid=10050146&amp;search.menuid=736&amp;search.boardtype=L" target="_blank">M 가전/컴퓨터</a></span> <span className="svc_name"><a className="N=a:sbx*c.content" href="http://cafe.naver.com" target=
                                                    "_blank">카페</a></span>
                                                </p>
                                                <div className="lst_type2">
                                                    <div className="rgt_dsc">
                                                        <div className="fd_cont">
                                                            <a className="N=a:sbx*c.content _ccast_item_url"
                                                               href="http://cafe.naver.com/joonggonara/287427195"
                                                               target="_blank">가격은 9만원 이내로서울직거래
                                                                합니다레오폴드 fc900r led 갈축삽니다.구성품 풀박스 이면
                                                                좋겠고여 깨끗한거 삽니다.파실분은 카톡 evidence0647 로
                                                                톡주세요</a>
                                                        </div>
                                                    </div>
                                                    <div className="btn_area" >
                                                        <button className="N=a:sbx*c.cmt btn_reple _ccast_feed_button_comment"
                                                                data-link="http://cafe.naver.com/joonggonara/287427195"
                                                                data-messagekey="{&quot;clubid&quot;:10050146,&quot;articleid&quot;:287427195}"
                                                                data-messagekeymap="{clubid=10050146, articleid=287427195}"
                                                                data-nclick="N=a:sbx*c" data-serviceid="cafe" type="button"><span className="frnt"></span> <span className="tx_node _ccast_feed_button_comment">댓글<em className="cnt _ccast_feed_button_comment"></em></span></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ic_bookmark">
                                            <a className="_bookmark_icon N=a:sbx*c.bmk" href="#" title=
                                                "북마크하기"><span className="blind">북마크하기</span></a>
                                        </div>
                                        <button className="N=a:sbx*c.del feed_del _ccast_button_delete" type="button"><span className="blind">상기 내용 삭제</span></button>
                                    </div>
                                </li>
                                <li className="_ccast_item">
                                    <div className="lst_obj">
                                        <p className="thumb">
                                            <a className="N=a:sbx*c.img" href="http://cafe.naver.com/joonggonara/member/qkrtlaud0647/article" target="_blank">
                                                <img alt="" height="40" onerror="this.parentElement.classNameName += &quot; cafe&quot;;this.src=&quot;http://static.naver.net/me/blank.gif&quot;;"
                                                     src=""
                                                     width="40" /> <span className="mask"></span></a>

                                        </p>
                                        <div className="desc_bx">
                                            <div className="con_desc">
                                                <h4><a className="N=a:sbx*c.content _ccast_item_url"
                                                       href="http://cafe.naver.com/joonggonara/287427195"
                                                       target="_blank">레오폴드 fc 900r led 갈축삽니다</a><span className="wrt_time">10초전</span>
                                                </h4>
                                                <p className="frm_svc">
                                            <span className="h_title"><a className="N=a:sbx*c.content" href="http://cafe.naver.com/joonggonara/member/qkrtlaud0647/article"
                                                                         target="_blank">텐카로스6</a></span> <span className="h_subject"><a className="N=a:sbx*c.content" href="http://cafe.naver.com/joonggonara" target="_blank">중고나라</a> &gt; <a className="N=a:sbx*c.content" href=
                                                    "http://cafe.naver.com/ArticleList.nhn?search.clubid=10050146&amp;search.menuid=736&amp;search.boardtype=L" target="_blank">M 가전/컴퓨터</a></span> <span className="svc_name"><a className="N=a:sbx*c.content" href="http://cafe.naver.com" target=
                                                    "_blank">카페</a></span>
                                                </p>
                                                <div className="lst_type2">
                                                    <div className="rgt_dsc">
                                                        <div className="fd_cont">
                                                            <a className="N=a:sbx*c.content _ccast_item_url"
                                                               href="http://cafe.naver.com/joonggonara/287427195"
                                                               target="_blank">가격은 9만원 이내로서울직거래
                                                                합니다레오폴드 fc900r led 갈축삽니다.구성품 풀박스 이면
                                                                좋겠고여 깨끗한거 삽니다.파실분은 카톡 evidence0647 로
                                                                톡주세요</a>
                                                        </div>
                                                    </div>
                                                    <div className="btn_area" >
                                                        <button className="N=a:sbx*c.cmt btn_reple _ccast_feed_button_comment"
                                                                data-link="http://cafe.naver.com/joonggonara/287427195"
                                                                data-messagekey="{&quot;clubid&quot;:10050146,&quot;articleid&quot;:287427195}"
                                                                data-messagekeymap="{clubid=10050146, articleid=287427195}"
                                                                data-nclick="N=a:sbx*c" data-serviceid="cafe" type="button"><span className="frnt"></span> <span className="tx_node _ccast_feed_button_comment">댓글<em className="cnt _ccast_feed_button_comment"></em></span></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ic_bookmark">
                                            <a className="_bookmark_icon N=a:sbx*c.bmk" href="#" title=
                                                "북마크하기"><span className="blind">북마크하기</span></a>
                                        </div>
                                        <button className="N=a:sbx*c.del feed_del _ccast_button_delete" type="button"><span className="blind">상기 내용 삭제</span></button>
                                    </div>
                                </li>
                                <li className="_ccast_item">
                                    <div className="lst_obj">
                                        <p className="thumb">
                                            <a className="N=a:sbx*c.img" href="http://cafe.naver.com/joonggonara/member/qkrtlaud0647/article" target="_blank">
                                                <img alt="" height="40" onerror="this.parentElement.classNameName += &quot; cafe&quot;;this.src=&quot;http://static.naver.net/me/blank.gif&quot;;"
                                                     src=""
                                                     width="40" /> <span className="mask"></span></a>

                                        </p>
                                        <div className="desc_bx">
                                            <div className="con_desc">
                                                <h4><a className="N=a:sbx*c.content _ccast_item_url"
                                                       href="http://cafe.naver.com/joonggonara/287427195"
                                                       target="_blank">레오폴드 fc 900r led 갈축삽니다</a><span className="wrt_time">10초전</span>
                                                </h4>
                                                <p className="frm_svc">
                                            <span className="h_title"><a className="N=a:sbx*c.content" href="http://cafe.naver.com/joonggonara/member/qkrtlaud0647/article"
                                                                         target="_blank">텐카로스6</a></span> <span className="h_subject"><a className="N=a:sbx*c.content" href="http://cafe.naver.com/joonggonara" target="_blank">중고나라</a> &gt; <a className="N=a:sbx*c.content" href=
                                                    "http://cafe.naver.com/ArticleList.nhn?search.clubid=10050146&amp;search.menuid=736&amp;search.boardtype=L" target="_blank">M 가전/컴퓨터</a></span> <span className="svc_name"><a className="N=a:sbx*c.content" href="http://cafe.naver.com" target=
                                                    "_blank">카페</a></span>
                                                </p>
                                                <div className="lst_type2">
                                                    <div className="rgt_dsc">
                                                        <div className="fd_cont">
                                                            <a className="N=a:sbx*c.content _ccast_item_url"
                                                               href="http://cafe.naver.com/joonggonara/287427195"
                                                               target="_blank">가격은 9만원 이내로서울직거래
                                                                합니다레오폴드 fc900r led 갈축삽니다.구성품 풀박스 이면
                                                                좋겠고여 깨끗한거 삽니다.파실분은 카톡 evidence0647 로
                                                                톡주세요</a>
                                                        </div>
                                                    </div>
                                                    <div className="btn_area" >
                                                        <button className="N=a:sbx*c.cmt btn_reple _ccast_feed_button_comment"
                                                                data-link="http://cafe.naver.com/joonggonara/287427195"
                                                                data-messagekey="{&quot;clubid&quot;:10050146,&quot;articleid&quot;:287427195}"
                                                                data-messagekeymap="{clubid=10050146, articleid=287427195}"
                                                                data-nclick="N=a:sbx*c" data-serviceid="cafe" type="button"><span className="frnt"></span> <span className="tx_node _ccast_feed_button_comment">댓글<em className="cnt _ccast_feed_button_comment"></em></span></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ic_bookmark">
                                            <a className="_bookmark_icon N=a:sbx*c.bmk" href="#" title=
                                                "북마크하기"><span className="blind">북마크하기</span></a>
                                        </div>
                                        <button className="N=a:sbx*c.del feed_del _ccast_button_delete" type="button"><span className="blind">상기 내용 삭제</span></button>
                                    </div>
                                </li>
                                <li className="_ccast_item">
                                    <div className="lst_obj">
                                        <p className="thumb">
                                            <a className="N=a:sbx*c.img" href="http://cafe.naver.com/joonggonara/member/qkrtlaud0647/article" target="_blank">
                                                <img alt="" height="40" onerror="this.parentElement.classNameName += &quot; cafe&quot;;this.src=&quot;http://static.naver.net/me/blank.gif&quot;;"
                                                     width="40" /> <span className="mask"></span></a>

                                        </p>
                                        <div className="desc_bx">
                                            <div className="con_desc">
                                                <h4><a className="N=a:sbx*c.content _ccast_item_url"
                                                       href="http://cafe.naver.com/joonggonara/287427195"
                                                       target="_blank">레오폴드 fc 900r led 갈축삽니다</a><span className="wrt_time">10초전</span>
                                                </h4>
                                                <p className="frm_svc">
                                            <span className="h_title"><a className="N=a:sbx*c.content" href="http://cafe.naver.com/joonggonara/member/qkrtlaud0647/article"
                                                                         target="_blank">텐카로스6</a></span> <span className="h_subject"><a className="N=a:sbx*c.content" href="http://cafe.naver.com/joonggonara" target="_blank">중고나라</a> &gt; <a className="N=a:sbx*c.content" href=
                                                    "http://cafe.naver.com/ArticleList.nhn?search.clubid=10050146&amp;search.menuid=736&amp;search.boardtype=L" target="_blank">M 가전/컴퓨터</a></span> <span className="svc_name"><a className="N=a:sbx*c.content" href="http://cafe.naver.com" target=
                                                    "_blank">카페</a></span>
                                                </p>
                                                <div className="lst_type2">
                                                    <div className="rgt_dsc">
                                                        <div className="fd_cont">
                                                            <a className="N=a:sbx*c.content _ccast_item_url"
                                                               href="http://cafe.naver.com/joonggonara/287427195"
                                                               target="_blank">가격은 9만원 이내로서울직거래
                                                                합니다레오폴드 fc900r led 갈축삽니다.구성품 풀박스 이면
                                                                좋겠고여 깨끗한거 삽니다.파실분은 카톡 evidence0647 로
                                                                톡주세요</a>
                                                        </div>
                                                    </div>
                                                    <div className="btn_area" >
                                                        <button className="N=a:sbx*c.cmt btn_reple _ccast_feed_button_comment"
                                                                data-link="http://cafe.naver.com/joonggonara/287427195"
                                                                data-messagekey="{&quot;clubid&quot;:10050146,&quot;articleid&quot;:287427195}"
                                                                data-messagekeymap="{clubid=10050146, articleid=287427195}"
                                                                data-nclick="N=a:sbx*c" data-serviceid="cafe" type="button"><span className="frnt"></span> <span className="tx_node _ccast_feed_button_comment">댓글<em className="cnt _ccast_feed_button_comment"></em></span></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ic_bookmark">
                                            <a className="_bookmark_icon N=a:sbx*c.bmk" href="#" title=
                                                "북마크하기"><span className="blind">북마크하기</span></a>
                                        </div>
                                        <button className="N=a:sbx*c.del feed_del _ccast_button_delete" type="button"><span className="blind">상기 내용 삭제</span></button>
                                    </div>
                                </li>
                                <li className="_ccast_item">
                                    <div className="lst_obj">
                                        <p className="thumb">
                                            <a className="N=a:sbx*c.img" href="http://cafe.naver.com/joonggonara/member/qkrtlaud0647/article" target="_blank">
                                                <img alt="" height="40" onerror="this.parentElement.classNameName += &quot; cafe&quot;;this.src=&quot;http://static.naver.net/me/blank.gif&quot;;"
                                                     width="40" /> <span className="mask"></span></a>

                                        </p>
                                        <div className="desc_bx">
                                            <div className="con_desc">
                                                <h4><a className="N=a:sbx*c.content _ccast_item_url"
                                                       href="http://cafe.naver.com/joonggonara/287427195"
                                                       target="_blank">레오폴드 fc 900r led 갈축삽니다</a><span className="wrt_time">10초전</span>
                                                </h4>
                                                <p className="frm_svc">
                                            <span className="h_title"><a className="N=a:sbx*c.content" href="http://cafe.naver.com/joonggonara/member/qkrtlaud0647/article"
                                                                         target="_blank">텐카로스6</a></span> <span className="h_subject"><a className="N=a:sbx*c.content" href="http://cafe.naver.com/joonggonara" target="_blank">중고나라</a> &gt; <a className="N=a:sbx*c.content" href=
                                                    "http://cafe.naver.com/ArticleList.nhn?search.clubid=10050146&amp;search.menuid=736&amp;search.boardtype=L" target="_blank">M 가전/컴퓨터</a></span> <span className="svc_name"><a className="N=a:sbx*c.content" href="http://cafe.naver.com" target=
                                                    "_blank">카페</a></span>
                                                </p>
                                                <div className="lst_type2">
                                                    <div className="rgt_dsc">
                                                        <div className="fd_cont">
                                                            <a className="N=a:sbx*c.content _ccast_item_url"
                                                               href="http://cafe.naver.com/joonggonara/287427195"
                                                               target="_blank">가격은 9만원 이내로서울직거래
                                                                합니다레오폴드 fc900r led 갈축삽니다.구성품 풀박스 이면
                                                                좋겠고여 깨끗한거 삽니다.파실분은 카톡 evidence0647 로
                                                                톡주세요</a>
                                                        </div>
                                                    </div>
                                                    <div className="btn_area" >
                                                        <button className="N=a:sbx*c.cmt btn_reple _ccast_feed_button_comment"
                                                                data-link="http://cafe.naver.com/joonggonara/287427195"
                                                                data-messagekey="{&quot;clubid&quot;:10050146,&quot;articleid&quot;:287427195}"
                                                                data-messagekeymap="{clubid=10050146, articleid=287427195}"
                                                                data-nclick="N=a:sbx*c" data-serviceid="cafe" type="button"><span className="frnt"></span> <span className="tx_node _ccast_feed_button_comment">댓글<em className="cnt _ccast_feed_button_comment"></em></span></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ic_bookmark">
                                            <a className="_bookmark_icon N=a:sbx*c.bmk" href="#" title=
                                                "북마크하기"><span className="blind">북마크하기</span></a>
                                        </div>
                                        <button className="N=a:sbx*c.del feed_del _ccast_button_delete" type="button"><span className="blind">상기 내용 삭제</span></button>
                                    </div>
                                </li>
                                <li className="_ccast_item">
                                    <div className="lst_obj">
                                        <p className="thumb">
                                            <a className="N=a:sbx*c.img" href="http://cafe.naver.com/joonggonara/member/qkrtlaud0647/article" target="_blank">
                                                <img alt="" height="40" onerror="this.parentElement.classNameName += &quot; cafe&quot;;this.src=&quot;http://static.naver.net/me/blank.gif&quot;;"
                                                     width="40" /> <span className="mask"></span></a>

                                        </p>
                                        <div className="desc_bx">
                                            <div className="con_desc">
                                                <h4><a className="N=a:sbx*c.content _ccast_item_url"
                                                       href="http://cafe.naver.com/joonggonara/287427195"
                                                       target="_blank">레오폴드 fc 900r led 갈축삽니다</a><span className="wrt_time">10초전</span>
                                                </h4>
                                                <p className="frm_svc">
                                            <span className="h_title"><a className="N=a:sbx*c.content" href="http://cafe.naver.com/joonggonara/member/qkrtlaud0647/article"
                                                                         target="_blank">텐카로스6</a></span> <span className="h_subject"><a className="N=a:sbx*c.content" href="http://cafe.naver.com/joonggonara" target="_blank">중고나라</a> &gt; <a className="N=a:sbx*c.content" href=
                                                    "http://cafe.naver.com/ArticleList.nhn?search.clubid=10050146&amp;search.menuid=736&amp;search.boardtype=L" target="_blank">M 가전/컴퓨터</a></span> <span className="svc_name"><a className="N=a:sbx*c.content" href="http://cafe.naver.com" target=
                                                    "_blank">카페</a></span>
                                                </p>
                                                <div className="lst_type2">
                                                    <div className="rgt_dsc">
                                                        <div className="fd_cont">
                                                            <a className="N=a:sbx*c.content _ccast_item_url"
                                                               href="http://cafe.naver.com/joonggonara/287427195"
                                                               target="_blank">가격은 9만원 이내로서울직거래
                                                                합니다레오폴드 fc900r led 갈축삽니다.구성품 풀박스 이면
                                                                좋겠고여 깨끗한거 삽니다.파실분은 카톡 evidence0647 로
                                                                톡주세요</a>
                                                        </div>
                                                    </div>
                                                    <div className="btn_area" >
                                                        <button className="N=a:sbx*c.cmt btn_reple _ccast_feed_button_comment"
                                                                data-link="http://cafe.naver.com/joonggonara/287427195"
                                                                data-messagekey="{&quot;clubid&quot;:10050146,&quot;articleid&quot;:287427195}"
                                                                data-messagekeymap="{clubid=10050146, articleid=287427195}"
                                                                data-nclick="N=a:sbx*c" data-serviceid="cafe" type="button"><span className="frnt"></span> <span className="tx_node _ccast_feed_button_comment">댓글<em className="cnt _ccast_feed_button_comment"></em></span></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ic_bookmark">
                                            <a className="_bookmark_icon N=a:sbx*c.bmk" href="#" title=
                                                "북마크하기"><span className="blind">북마크하기</span></a>
                                        </div>
                                        <button className="N=a:sbx*c.del feed_del _ccast_button_delete" type="button"><span className="blind">상기 내용 삭제</span></button>
                                    </div>
                                </li>

                            </ul>

                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

var styles = {
    main : {
        position: "relative",
        overflow: "hidden",
        marginTop: "50px",
        marginLeft: "240px",
        marginRight: "340px",
        boxSizing: "border-box",
        backgroundColor: "#aaa",
        height: "100%"
    },
    scrollContent: {
        right: 0,
        width: "auto",
        height: "auto",
        overflow: "hidden",
        overflowY: "scroll",
        bottom: 0,
        left: 0,
        top: 0
    },
    headLine : {
        background: "#555"
    },
    contents : {
        height: "calc(100vh - 150px)"
    }
};
/**
 * Created by dobyeongsu on 2015. 12. 4..
 */
import React, { Component } from 'react';
import Radium, { Style } from 'radium';

var comment = {
    top: {
        padding: '10px 0'
    }
};

let CommentList = React.createClass({
    render() {
        return (<div>
            <div id="sc_comment_box">

                <div >
                    <div id="sortComboBox" style={comment.top}>
                        <h2 style="font-size: 14px;display: inline-block;margin: 0;">
                            <strong style=" color: #F30C0C;">203</strong><span>개의 댓글</span>
                            <a href="#" title="새로 고침"><span>새로 고침</span></a>
                        </h2>
                        <ul id="sortlist" style="margin: 0; display: inline-block; float: right; padding: 0;">
                            <li style=" display: inline-block;">
                                <input name="sort" type="radio"/> <label for="like" id="likability"
                                                                         onclick="setSortingFlag('sns.comment.detail', 'likability');">호감순</label>
                            </li>
                            <li style=" display: inline-block;">
                                <input name="sort" type="radio"/> <label for="latest" id="newest"
                                                                         onclick="setSortingFlag('sns.comment.detail', 'newest');">최신순</label>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <hr style=" margin: 0 0 10px;"/>
                    </div>
                </div>

                <div style="margin: 10px 0;background-color: rgba(231, 239, 239, 0.61);-webkit-border-radius:1px;-webkit-box-shadow:1px 1px #b0c2c0;padding: 10px;padding-bottom: 6px;min-height: 25px;border-left: 3px solid #2B5F5B;">
                    <div style="position:absolute;padding: 6px;">
                        <div style="font-size: 10px; color: #01403C; font-weight: bold;">
                            TEST
                        </div>
                    </div>
                    <div style="margin-left: 44px;position: relative;background: #fff;display: inline-block;width: calc(100% - 110px);">
                        <div style=" width: 100%;">
                            <div contenteditable="true" style=" background: #fff; width: calc(100% - 40px); padding: 5px; font-size: 12;">
                                입력하기
                            </div>
                        </div>
                        <div style=" right: 0px; position: absolute; bottom: 0;">
                            <div aria-label="사진 첨부" data-hover="tooltip" data-tooltip-alignh="center" id="js_v" style=" margin: 7px;">
                                <i className="fa fa-camera"></i>
                            </div>
                        </div>
                    </div>
                    <div style=" display: inline-block; font-size: 11px; padding-left: 5px;">(300/300)
                    </div>
                </div>
                <div>
                    <div style="">
                        <ul id="main-comment" style="/* margin-left: 50px; */ padding: 0; list-style: none;">
                            <li style="list-style:none;">
                                <div style="background-color: #F6F9F9;-webkit-border-radius:1px;-webkit-box-shadow:1px 1px #b0c2c0;padding: 10px;padding-bottom: 6px;min-height: 27px;border-bottom: 1px solid #B0C2C0;border-left: 3px solid #2B5F5B;">
                                    <div style="/* margin:9px 0 0 0; */font-size:10px;display: inline-block;float: right;">
                                        <span><span >하루 전</span> </span>
                                        <div style="display:inline-block;">
                                            <a style="font-size: 12px; color: rgb(170, 170, 170); padding: 5px 10px;">
                                                <i className="fa fa-thumbs-o-up"></i>
                                            </a>
                                            <a style="font-size: 12px; color: rgb(170, 170, 170); padding: 5px 10px;">
                                                <i className="fa fa-thumbs-o-down"></i>
                                            </a>
                                            <a href="#" style="font-size: 11px;color:#aaa;">
                                                <span >댓글</span><span >0</span>
                                            </a>
                                            <a href="#" style="font-size: 11px;color:#aaa;padding-left: 10px;">
                                                <span >댓글달기</span>
                                            </a>
                                        </div>
                                    </div>
                                    <div style="position:absolute;text-align: center;">
                                        <span style=" font-size: 12px; font-weight: bold;">
                                            <a href="http://cafe.naver.com/joonggonara/member/qkrtlaud0647/article" target="_blank"><span >TEST</span> </a>
                                        </span>
                                        <div style=" font-size: 10px; color: #FF5711; font-weight: bold;">1232 점</div>
                                    </div>
                                    <div style="margin-left: 44px;padding-top: 0px;">
                                        <div style="">
                                            <div style=" width: calc(100% - 200px); display: inline-block;">
                                                <p style=" font-size: 12px; margin-bottom: 3px;">
                                                    Hello
                                                </p>
                                                <div className="medium-insert-images">
                                                    <figure contenteditable="false">
                                                        <img alt="" className="" src=
                                                            "http://i.imgur.com/cJkCVwy.png"/>
                                                    </figure>
                                                </div>
                                                <p style=" font-size: 12px; margin-bottom: 3px;">
                                                    Hello
                                                </p>
                                            </div>
                                            <hr style=" margin: 2px 0 0px 0;"/>
                                        </div>
                                    </div>
                                    <div style="margin: 10px 0;background-color: rgba(231, 239, 239, 0.61);-webkit-border-radius:1px;-webkit-box-shadow:1px 1px #b0c2c0;padding: 10px;padding-bottom: 6px;padding-top: 5px; min-height: 40px;">
                                        <div style="position:absolute;padding: 6px;">
                                            <div style=" font-size: 10px; color: #01403C; font-weight: bold;">
                                                TEST
                                            </div>
                                        </div>
                                        <div style="margin-left: 44px;position: relative;background: #fff;display: inline-block;width: calc(100% - 110px);">
                                            <div style=" width: 100%;">
                                                <div contenteditable="true" style=" background: #fff; width: calc(100% - 40px); padding: 5px; font-size: 12;">
                                                    솔직히 인정해야한다. 솔직히 너무 이쁘다!
                                                </div>
                                            </div>
                                            <div style=" right: 0px; position: absolute; bottom: 0;">
                                                <div aria-label="사진 첨부" data-hover="tooltip" data-tooltip-alignh="center" id="js_v" style=" margin: 7px;">
                                                    <i className="fa fa-camera"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div style=" display: inline-block; font-size: 11px; padding-left: 5px;">
                                            (300/300)
                                        </div>
                                    </div>
                                </div>

                            </li>
                        </ul>
                    </div>
                </div>

                <div style="">
                    <div>
                        <a href="#">
                            <span><span>(<strong>1-20</strong>)</span><span>더보기</span></span>
                        </a>
                    </div>
                    <div style="display:none">
                        <span><span><span className="loading">로딩중입니다</span></span></span>
                    </div>
                </div>
            </div>
        </div>)
    }
});


export default CommentList = Radium(CommentList);


/**
 * Created by dobyeongsu on 2016. 3. 23..
 */
import React from 'react';

let LeftMenuLayout = React.createClass({
  displayName: 'LeftMenuLayout',
  render() {
    return (
      <div className="left_col">
        <div class="left_col" data-reactid="18">
          <div id="category" style="
    height: 40px;
    background: #3769ac;
    color: #fff;
    vertical-align: middle;
                          ">
            <div style="
    padding: 10px 25px 10px 30px;
    font-size: 18px;
">
              <i class="fa fa-bars" style="
"></i>
              <i class="fa fa-caret-right" aria-hidden="true" style="
    float: right;
"></i>
              <div style="
    display: inline;
    padding-left: 75px;
">카테고리
              </div>

            </div>
          </div>
          <div id="sub_category" style="
    height: 40px;
    color: #3769ac;
    vertical-align: middle;
    position: relative;
    ">
            <div style="
    padding: 12px 25px;
    font-size: 16px;
">

              <div style="position: absolute;right: 25px;">베스트</div>

            </div>
          </div>
          <menu class="snb" data-reactid="21" style="
    height: 240px;
    background: #3769AC;
    color: #fff;
    margin: 0;
    position: relative;
    padding: 20px 30px;
">
            <h4 style="
    right: 25px;
    position: absolute;
">베스트</h4>
            <ul data-reactid="23">
              <li class="" data-reactid="24"><a href="#" class="_side_item "
                                                data-reactid="25">베스트</a></li>
            </ul>
          </menu>
          <h3 class="h_menu on" data-reactid="19"><a href="#" class="_side_item " data-reactid="20">전체보기</a>
          </h3></div>
        <h3 className="h_menu on"><a href="#" className="_side_item ">전체보기</a></h3>
        <menu className="snb">
          <li>
            <ul>
              <li className=""><a href="#" className="_side_item ">베스트</a></li>
            </ul>
          </li>
        </menu>

      </div>
    );
  }
});

export default LeftMenuLayout;

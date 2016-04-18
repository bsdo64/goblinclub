/**
 * Created by dobyeongsu on 2016. 3. 23..
 */
import React from 'react';

if (process.env.BROWSER) {
  require('./LeftMenuLayout.scss');
}

let LeftMenuLayout = React.createClass({
  displayName: 'LeftMenuLayout', 
  render() {
    return (
      <div className="left_col">
        <div id="category_menu">
          <div className="category_button">
            <i className="fa fa-bars"></i>
            <i className="fa fa-caret-right" aria-hidden="true"></i>
            <div className="category_text">카테고리</div>
          </div>
        </div>
        <div id="sub_category">
          <div className="sub_category_button">
            <div className="sub_category_text">베스트</div>
          </div>
        </div>
        <menu className="sub_category_list">
          <div className="sub_category_header">전체보기</div>
          <ul >
            <li >
              <div className="sub_category item">
                <a href="#">바디 / 헤어</a>
              </div>
            </li>
            <li >
              <div className="sub_category item">
                <a href="#">화장품</a>
              </div>
            </li>
            <li >
              <div className="sub_category item">
                <a href="#">탈모</a>
              </div>
            </li>
          </ul>
        </menu>
      </div>
    );
  }
});

export default LeftMenuLayout;
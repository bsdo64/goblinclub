/**
 * Created by dobyeongsu on 2016. 3. 23..
 */
import React from 'react';

let LeftMenuLayout = React.createClass({
  displayName: 'LeftMenuLayout',
  render() {
    return (
      <div className="left_col">
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

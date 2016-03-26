/**
 * Created by dobyeongsu on 2016. 3. 23..
 */
import React from 'react';

if (process.env.BROWSER) {
  require('../Default.scss');
}

let MainLeft = React.createClass({
  displayName: 'MainLeft',
  render() {
    return (
      <div className="lft_area _side_menu">
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

export default MainLeft;
/**
 * Created by dobyeongsu on 2016. 3. 23..
 */
import React from 'react';

if (process.env.BROWSER) {
  require('./RightMenuLayout.scss');
}

let LeftMenuLayout = React.createClass({
  displayName: 'LeftMenuLayout',
  render() {
    return (
      <div className="right_col">
        <div className="login_bar widget">
          <a href="/signin"><button>지금 가입하세요</button></a>
        </div>
      </div>
    );
  }
});

export default LeftMenuLayout;
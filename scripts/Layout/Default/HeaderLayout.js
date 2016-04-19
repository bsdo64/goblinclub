/**
 * Created by dobyeongsu on 2016. 3. 23..
 */
import React from 'react';

import HeaderUserInfoContainer from '../../Container/HeaderUserInfoContainer';

if (process.env.BROWSER) {
  require('./HeaderLayout.scss');
}

let HeaderLayout = React.createClass({
  displayName: 'HeaderLayout',
  render() {
    return (
      <div id="header">
        <div className="head_contents">
          <div className="top_area">
            <div className="top_contents">
              <h2 className="top_logo">
                <span className="logo_ci">
                  <a href="/" className="">Trend Clear</a>
                </span>
              </h2>
              <div className="top_menu">
                <div className="ui input fluid small">
                  <input type="text" placeholder="여기에 검색.." />
                  <div className="results"></div>
                </div>
              </div>
              <HeaderUserInfoContainer />
            </div>
          </div>
        </div>
      </div>
    );
  }
});

export default HeaderLayout;

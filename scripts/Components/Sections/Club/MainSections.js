/**
 * Created by dobyeongsu on 2016. 3. 25..
 */
/**
 * Created by dobyeongsu on 2016. 3. 23..
 */
import React from 'react';

import Aside from '../../Aside/Default';

if (process.env.BROWSER) {
  require('./ClubSections.scss');
}

let MainSection = React.createClass({
  displayName: 'MainSection',
  render() {
    return (
      <div className="contents _contents">
        <div id="club_main_section">
          <h3 className="ui dividing header" >
            {'클럽 메인'}
            <div className="sub header" >고블린 클럽에 오신것을 환영합니다.</div>
          </h3>
          <img src="/statics/img/sample.png" />
        </div>
      </div>
    );
  }
});

export default MainSection;
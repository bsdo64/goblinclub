/**
 * Created by dobyeongsu on 2016. 3. 23..
 */
import React from 'react';

import UserBoxContainer from '../../Container/RightWidget/UserBoxContainer';

if (process.env.BROWSER) {
  require('./RightMenuLayout.scss');
}

let LeftMenuLayout = React.createClass({
  displayName: 'LeftMenuLayout',
  render() {
    return (
      <div className="right_col">
        <UserBoxContainer />
      </div>
    );
  }
});

export default LeftMenuLayout;
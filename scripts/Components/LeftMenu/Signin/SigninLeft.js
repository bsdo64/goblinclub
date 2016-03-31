/**
 * Created by dobyeongsu on 2016. 3. 23..
 */
import React from 'react';

if (process.env.BROWSER) {
  require('../Default.scss');
}

let SigninLeft = React.createClass({
  displayName: 'SigninLeft',
  render() {
    return (
      <div className="lft_area _side_menu">
        <h3 className="h_menu on"><a href="#" className="_side_item ">회원가입</a></h3>

      </div>
    );
  }
});

export default SigninLeft;
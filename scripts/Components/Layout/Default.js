/**
 * Created by dobyeongsu on 2016. 3. 23..
 */
import React from 'react';

import AppActions from './AppActions';
import LoginModalBox from '../HeaderUserUI/LoginModalBox';

if (process.env.BROWSER) {
  require('./Default.scss');
}

let Default = React.createClass({
  displayName: 'Default',
  propTypes: {
    Container: React.PropTypes.element.isRequired,
    Header: React.PropTypes.element.isRequired
  },
  componentDidMount() {
    // 모든 하위 컴포넌트 마운트 완료 -> AppStore.serverRendered: false
    AppActions.disableServerRender();

    $('script[data-iso-key="_0"]').remove();
  },
  render() {
    const {Header, Container} = this.props;
    return (
      <div id="wrap">
        {Header}

        {Container}
        <LoginModalBox />
      </div>
    );
  }
});

export default Default;

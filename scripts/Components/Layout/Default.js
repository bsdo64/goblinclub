/**
 * Created by dobyeongsu on 2016. 3. 23..
 */
import React from 'react';
import Radium, {StyleRoot} from 'radium';

import AppActions from '../App/AppActions';
import LoginModalBox from '../MainHeader/LoginModalBox';

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
Default = Radium(Default);

let RootDefault = React.createClass({
  displayName: 'RootDefault',
  render() {
    return (
      <StyleRoot>
        <Default {...this.props} />
      </StyleRoot>
    );
  }
});

export default Radium(RootDefault);

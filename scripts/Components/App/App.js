/**
 * Created by dobyeongsu on 2015. 10. 15..
 */
import React from 'react';
import Radium, {Style, StyleRoot} from 'radium';

import AppActions from './AppActions';

if (process.env.BROWSER) {
  require('./App.scss');
}

let App = React.createClass({
  displayName: 'App',
  propTypes: {
    header: React.PropTypes.element.isRequired,
    main: React.PropTypes.element.isRequired,
    sidebar: React.PropTypes.element.isRequired
  },
  componentDidMount() {
    // 모든 하위 컴포넌트 마운트 완료 -> AppStore.serverRendered: false
    AppActions.disableServerRender();

    $('script[data-iso-key="_0"]').remove();
  },
  render() {
    const {header, main, sidebar} = this.props;
    const style = {
      a: {
        color: '#2b5f5b',
        textDecoration: 'none',
        cursor: 'pointer'
      }
    };
    return (
      <div id="wrap">
        <Style rules={style} />

        {header}

        <div>
          {main}

          {sidebar}
        </div>
      </div>
    );
  }
});
App = Radium(App);

let RootApp = React.createClass({
  displayName: 'RootApp',
  render() {
    return (
      <StyleRoot>
        <App {...this.props} />
      </StyleRoot>
    );
  }
});

export default Radium(RootApp);

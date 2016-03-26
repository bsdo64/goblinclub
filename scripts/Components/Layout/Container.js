/**
 * Created by dobyeongsu on 2016. 3. 23..
 */
import React from 'react';

if (process.env.BROWSER) {
  require('./Container.scss')
}

let Container = React.createClass({
  displayName: 'Container',
  propTypes: {

  },
  componentDidMount() {
    // 모든 하위 컴포넌트 마운트 완료 -> ContainerStore.serverRendered: false
    $('script[data-iso-key="_0"]').remove();
  },
  render() {
    const {LeftMenu, SectionLayout} = this.props;
    return (
      <div id="container">
        {LeftMenu}

        {SectionLayout}
      </div>
    );
  }
});

export default Container;

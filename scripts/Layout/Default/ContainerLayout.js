/**
 * Created by dobyeongsu on 2016. 3. 23..
 */
import React from 'react';

if (process.env.BROWSER) {
  require('./ContainerLayout.scss');
}

let ContainerLayout = React.createClass({
  displayName: 'ContainerLayout',
  render() {
    const { LeftMenuLayout, SectionLayout } = this.props;
    return (
      <div id="container">
        { LeftMenuLayout }

        { SectionLayout }
        
      </div>
    );
  }
});

export default ContainerLayout;
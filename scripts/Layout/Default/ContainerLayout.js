/**
 * Created by dobyeongsu on 2016. 3. 23..
 */
import React from 'react';

import LeftMenuLayout from './LeftMenuLayout';
import SectionLayout from './SectionLayout';

if (process.env.BROWSER) {
  require('./ContainerLayout.scss');
}

let ContainerLayout = React.createClass({
  displayName: 'ContainerLayout',
  render() {
    return (
      <div id="container">
        <LeftMenuLayout />
        
        <SectionLayout />
        
      </div>
    );
  }
});

export default ContainerLayout;
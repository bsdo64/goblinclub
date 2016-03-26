import React from 'react';

import Aside from '../Aside/Default';

if (process.env.BROWSER) {
  require('./DefaultSection.scss');
}

const DefaultSection = React.createClass({
  render() {
    const Section = this.props.Section;
    return (
      <div className="section _section">
        
        {Section}
        
        <Aside />
      </div>
    );
  }
});

export default DefaultSection;

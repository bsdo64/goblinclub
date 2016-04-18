import React from 'react';

import LoginModalBox from '../../Components/HeaderUserUI/LoginModalBox';

if (process.env.BROWSER) {
  // require('./Default.scss');
}

let Default = React.createClass({
  displayName: 'Default',
  propTypes: {
    Container: React.PropTypes.element.isRequired,
    Header: React.PropTypes.element.isRequired
  },
  componentDidMount() {
    $('script[data-iso-key="_0"]').remove();
  },
  render() {
    const {HeaderLayout, ContainerLayout} = this.props;
    return (
      <div id="wrap">
        {HeaderLayout}

        {ContainerLayout}
        <LoginModalBox />
      </div>
    );
  }
});

export default Default;

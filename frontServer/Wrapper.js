import React from 'react';
import Radium from 'radium';

class WrapperComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {React.cloneElement(this.props.children, {
          radiumConfig: this.props.radiumConfig
        })}
      </div>
    );
  }
};

export default Radium(WrapperComponent);

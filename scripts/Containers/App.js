/**
 * Created by dobyeongsu on 2015. 10. 15..
 */
import React from 'react';
import Radium, {Style} from 'radium';

let App = React.createClass({
  displayName: 'App',
  propTypes: {
    header: React.PropTypes.element.isRequired,
    main: React.PropTypes.element.isRequired,
    sidebar: React.PropTypes.element.isRequired
  },
  render() {
    const {header, main, sidebar} = this.props;
    const style = {
      a: {
        color: '#2b5f5b',
        textDecoration: 'none',
        cursor: 'pointer'
      },
      pre: {
        backgroundColor: 'rgba(255, 255, 255, 0)',
        border: 'none',
        borderRadius: 0
      }
    };
    return (
      <div>
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
export default App = Radium(App);

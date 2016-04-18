import React, {Component} from 'react';

export default class HeaderUserUI extends Component {
  static displayName() {
    return 'HeaderUserUI';
  }
  constructor(props) {
    super();
  }
  render() {
    console.log(this.props);
    return (
      <div className="my_area">
        <div className="ui horizontal list">
          <div className="item">
            <div className="ui mini button green">로그인</div>
          </div>
        </div>
      </div>
    );
  }
}

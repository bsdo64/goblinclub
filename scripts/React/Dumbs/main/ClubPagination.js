/**
 * Created by dobyeongsu on 2016. 1. 16..
 */
import React from 'react';
import Radium from 'radium';

import url from 'url';

import style from '../../Style/style_clublist';

let ClubPagination = React.createClass({
  displayName: 'ClubPagination',
  getInitialState() {
    let p = parseInt(this.getLocation().query.p, 10) || 0;
    return {
      activePage: p
    };
  },
  componentWillReceiveProps(nextProps) {
    let loc = this.props.location.pathname.split('/');
    if (loc[1] === 'club') {
      let loc2 = nextProps.location.pathname.split('/');
      if (loc[2] !== loc2[2]) {
        this.setState({activePage: 0});
      }
    }
  },
  
  handleNextPage() {
    this.setState({activePage: this.state.activePage + 1});
  },
  handlePreviousPage() {
    this.setState({activePage: this.state.activePage - 1});
  },
  getLocation() {
    let path = this.props.location.pathname + this.props.location.search;
    return url.parse(path, true);
  },
  render() {
    let thisPage = this.state.activePage;
    let removePreviousButton = thisPage > 0;

    return (
      <div>
        <ul className="pager" style={style.pager}>
          {
            removePreviousButton &&
            <li className="previous">
              <a onClick={this.handlePreviousPage}
                 ref="previousPage"
                 style={style.pagerButton}>
                {'← 이전 페이지'}
              </a>
            </li>
          }
          <li className="next" >
            <a onClick={this.handleNextPage}
               ref="nextPage"
               style={style.pagerButton}>
              {'다음페이지 →'}
            </a>
          </li>
        </ul>
      </div>
    );
  }
});

export default Radium(ClubPagination);

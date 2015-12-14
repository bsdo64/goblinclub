/**
 * Created by dobyeongsu on 2015. 11. 30..
 */
/**
 * Created by dobyeongsu on 2015. 11. 10..
 */
import React from 'react';
import Radium from 'radium';
import {Link} from 'react-router';

import styles from '../Style/style_clublist';

let Club = React.createClass({
  displayName: 'Club',
  propTypes: {
    link: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired
  },
  getClubName(pathname) {

  },
  render() {
    let {link, name} = this.props;
    let active = [styles.listElement];
    if (this.props.location.pathname === '/club/' + link) {
      active.push(styles.listActive);
    }
    return (
      <Link to={'/club/' + link}>
        <div style={active}>{name}</div>
      </Link>
    );
  }
});

let ClubList = React.createClass({
  displayName: 'ClubList',
  propTypes: {
    clubList: React.PropTypes.array,
    title: React.PropTypes.string.isRequired
  },
  render() {
    let defaultClubList = this.props.clubList;
    let title = this.props.title;

    let createItem = function (val, index) {
      return (
        <li key={val.url + index}>
          <Club
            location={this.props.location}
            link={val.url}
            name={val.name} />
        </li>);
    }.bind(this);

    return (
      <ul style={styles.element}>
        <li style={styles.title}>{title}</li>
        <ul style={styles.list}>{defaultClubList.map(createItem)}</ul>
      </ul>
    );
  }
});

Club = Radium(Club);
export default ClubList = Radium(ClubList);

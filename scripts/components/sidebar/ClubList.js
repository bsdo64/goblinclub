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
  render() {
    let {link, name, type} = this.props;
    let active = [styles.listElement];
    let clubName = function (name) {
      let url = this.props.location.pathname.split('/');
      if (type === 'best') {
        if (name === '/' && url[1] === '') {
          active.push(styles.listActive);
        }
      } else if (type === 'club') {
        link = '/club/' + name;

        if (name === url[2]) {
          active.push(styles.listActive);
        }
      }
    }.bind(this);
    clubName(link);
    return (
      <Link to={link}>
        <div style={active}>{name}</div>
      </Link>
    );
  }
});

let ClubList = React.createClass({
  displayName: 'ClubList',
  propTypes: {
    clubList: React.PropTypes.array,
    best: React.PropTypes.bool,
    title: React.PropTypes.string.isRequired
  },
  render() {
    let clubList = this.props.clubList;
    let title = this.props.title;

    let createItem = function (val, index) {
      return (
        <li key={val.url + index}>
          <Club
            location={this.props.location}
            link={val.url}
            name={val.name}
            type={'club'} />
        </li>);
    }.bind(this);

    return (
      <div style={styles.element}>
        <div style={styles.title}>
          {title}
          {/* 검색 입력 */}
        </div>
        {
          this.props.best &&
          <li >
            <Club
              location={this.props.location}
              link={'/'}
              name={'베스트'}
              type={'best'} />
          </li>
        }
        { clubList &&
          clubList.map(createItem)
        }
      </div>
    );
  }
});

Club = Radium(Club);
export default ClubList = Radium(ClubList);

/**
 * Created by dobyeongsu on 2015. 11. 30..
 */
/**
 * Created by dobyeongsu on 2015. 11. 10..
 */
import React, { Component } from 'react';
import Radium, { Style } from 'radium';
import { Link } from 'react-router';

class Club extends Component {
  render() {
    var { link, name } = this.props;
    return (
      <Link to={'/club/' + link}>
        <div style={styles.clubs.listElement}>{name}</div>
      </Link>
    )
  }
}


class ClubList extends Component {
  render() {
    var defaultClubList = this.props.clubList,
      title = this.props.title;

    var createItem = function (val, index) {
      return <li key={val.url+index}>
        <Club
          link={val.url}
          name={val.name}
        />
      </li>
    };

    return (
      <ul style={styles.clubs.element}>
        <li style={styles.clubs.title}>{title}</li>
        <ul style={styles.clubs.list}>{defaultClubList.map(createItem)}</ul>
      </ul>
    )
  }
}

Club = Radium(Club);
export default ClubList = Radium(ClubList);

var styles = {
  clubs: {
    container: {
      color: '#00B1A3',
      fontSize: 13,
      fontWeight: 'bold',
      paddingTop: 26
    },
    element: {
      listStyle: 'none',
      margin: 0,
      padding: '0 0 15px 0'
    },
    title: {
      listStyle: 'none',
      fontSize: 13,
      paddingLeft: 17
    },
    list: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      color: '#2b5f5b'
    },
    listElement: {
      listStyle: 'none',
      paddingLeft: 32,
      color: '#001f35',
      ':hover': {
        backgroundColor: '#2b5f5b',
        color: '#fff'
      }
    },
    listActive: {
      backgroundColor: '#2b5f5b',
      color: '#fff'
    }
  }
};
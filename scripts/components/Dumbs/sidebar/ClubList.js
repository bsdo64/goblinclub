/**
 * Created by dobyeongsu on 2015. 11. 30..
 */
/**
 * Created by dobyeongsu on 2015. 11. 10..
 */
import React from 'react';
import Radium from 'radium';
import {Link} from 'react-router';
import {Overlay} from 'react-bootstrap';

import styles from '../../Style/style_clublist';

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
    best: React.PropTypes.bool,
    clubList: React.PropTypes.array,
    title: React.PropTypes.string.isRequired
  },
  getInitialState() {
    return { show: false };
  },

  toggleAddClubHelp() {
    this.setState({ show: !this.state.show });
  },
  render() {
    let {clubList, title, location, best} = this.props;

    function createItem(val, index) {
      return (
        <li key={val.url + index}>
          <Club
            location={location}
            link={val.url}
            name={val.name}
            type={'club'} />
        </li>);
    }

    return (
      <div style={styles.element}>
        <div style={styles.title}>
          {title}
          {/* 검색 입력 */}
        </div>
        {
          best &&
          <li >
            <Club
              location={location}
              link={'/'}
              name={'베스트'}
              type={'best'} />
          </li>
        }
        {
          clubList &&
          clubList.map(createItem.bind(this))
        }

        {
          !clubList.length &&
          <div style={{position: 'relative'}}>
            <button
              onClick={this.toggleAddClubHelp}
              style={styles.addClubButton}>
              {'클럽을 추가하세요 + '}
            </button>

            <Overlay
              rootClose
              show={this.state.show}
              onHide={() => this.setState({ show: false })}
              placement="bottom"
              container={this}
              target={() => this.refs.target} >

              <div style={styles.addClubHelp}>
                <strong>Holy guacamole!</strong> Check this info.
              </div>
            </Overlay>
          </div>
        }
      </div>
    );
  }
});

Club = Radium(Club);
export default ClubList = Radium(ClubList);

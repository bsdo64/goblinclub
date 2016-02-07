/**
 * Created by dobyeongsu on 2015. 11. 30..
 */
/**
 * Created by dobyeongsu on 2015. 11. 10..
 */
import React from 'react';
import Radium from 'radium';
import Popups from '../../Lib/Popups';
import {Link} from 'react-router';

import styles from './ClubListStyle';

let Popup = React.createClass({
  render: function () {
    let fadeIn = Radium.keyframes({
      '0%': {opacity: 0},
      '100%': {opacity: 1}
    });
    let popup_style = {
      height: this.props.height || 300,
      width: this.props.width || 200,
      backgroundColor: '#fff',
      boxShadow: '1px 1px 1px 1px #aaa',
      // Use a placeholder animation name in `animation`
      animation: 'fadeIn 200ms',
      // Assign the result of `keyframes` to `animationName`
      animationName: fadeIn
    };
    return (
      <div>
        <div style={popup_style}>
          <div>info: {this.props.data}</div>
          <div>other:</div>
          <ul>
            <li><PopupLink data="universe">Univesrse</PopupLink></li>
            <li><PopupLink data="planets">planets</PopupLink></li>
            <li><PopupLink data="stars">stars</PopupLink></li>
            <li><PopupLink data="galaxies">galaxies</PopupLink></li>
            <li><PopupLink data="intergalactic space">intergalactic space</PopupLink></li>
            <li><PopupLink data="dark matter">dark matter</PopupLink></li>
            <li><PopupLink data="dark energy">dark energy</PopupLink></li>
          </ul>
        </div>
      </div>
    );
  }
});
Popup = Radium(Popup);

let PopupLink = React.createClass({
  render() {
    let link_style = {
      cursor: 'pointer',
      color: '#2b5f5b'
    };
    return (
      <span data={this.props.data} data-width={200} data-height={300} style={link_style}>
        {this.props.children}
      </span>
    );
  }
});

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
          <div>
            <button style={styles.addClubButton}>
              <PopupLink data={'universe'}>
                {'클럽을 추가하세요 + '}
              </PopupLink>
            </button>
            <Popups handler={Popup} clickButtons={[0]} />
          </div>
        }
      </div>
    );
  }
});

Club = Radium(Club);
export default ClubList = Radium(ClubList);
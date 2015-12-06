/**
 * Created by dobyeongsu on 2015. 10. 15..
 */
import React from 'react';
import Radium from 'radium';
import {Link} from 'react-router';

import connectToStores from '../../../node_modules/alt/utils/connectToStores';
import UserStore from '../../Stores/UserStore';
import ClubStore from '../../Stores/ClubStore';

import {Sidebar as styles} from '../Styles/index';
import {ClubList} from '../../Components/index';

let Sidebar = React.createClass({
  displayName: 'Sidebar',
  propTypes: {
    ClubStore: React.PropTypes.shape.isRequired,
    UserStore: React.PropTypes.shape.isRequired
  },
  componentWillReceiveProps(nextProps) {
    console.log('Sidebar', nextProps);
  },
  render() {
    const {auth} = this.props.UserStore;
    const {defaultClubList, userHas} = this.props.ClubStore;

    console.log('ClubStore', this.props.ClubStore);
    return (
      <div style={styles.base}>
        <div id='clubs'>
          <div id='clubsContainer' style={styles.clubs.container} >
            <ul style={styles.clubs.element}>
              <li style={styles.clubs.title}>{'베스트'}</li>
              <ul style={styles.clubs.list}>
                <li >
                  <Link to="/club">
                    <div key={1} style={[styles.clubs.listElement, styles.clubs.listActive]}>
                      {'오늘의 베스트'}
                    </div>
                  </Link>
                </li>
              </ul>
            </ul>
            <ul style={styles.clubs.element}>
              <li key={2} style={styles.clubs.title}>{'핫 클럽'}</li>
              <ul style={styles.clubs.list}>
                <li>
                  <Link to="/club/starcraft2">
                    <div key={4} style={styles.clubs.listElement}>{'스타2'}</div>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <div key={5} style={styles.clubs.listElement}>{'리그오브레전드'}</div>
                  </Link>
                </li>
                <li>
                  <Link to="/submit">
                    <div key={6} style={styles.clubs.listElement}>{'리그오브레전드'}</div>
                  </Link>
                </li>
              </ul>
            </ul>
            {
              defaultClubList.length &&
              <ClubList clubList={defaultClubList} title="메인 클럽"/>
            }

            {
              auth.token &&
              <ClubList clubList={userHas.subscribedClubList} title="구독 클럽" />
            }
          </div>
        </div>
      </div>
    );
  }
});

Sidebar = connectToStores({
  getStores() {
    // this will handle the listening/unlistening for you
    return [UserStore, ClubStore];
  },

  getPropsFromStores() {
    // this is the data that gets passed down as props
    return {
      UserStore: UserStore.getState(),
      ClubStore: ClubStore.getState()
    };
  }
}, Radium(Sidebar));

export default Sidebar;


/**
 * Created by dobyeongsu on 2015. 10. 15..
 */
import React from 'react';
import Radium from 'radium';

import connectToStores from 'alt-utils/lib/connectToStores';
import UserStore from '../../../Stores/UserStore';
import ClubStore from '../../../Stores/ClubStore';

import styles from '../../Style/style_sidebar';
import {ClubList} from '../../../Components/Dumbs/index';

let Sidebar = React.createClass({
  displayName: 'Sidebar',
  propTypes: {
    ClubStore: React.PropTypes.object.isRequired,
    UserStore: React.PropTypes.object.isRequired
  },
  statics: {
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
  },
  componentWillReceiveProps(nextProps) {

  },
  render() {
    const {authSuccess} = this.props.UserStore;
    const {defaultClubList, userHas} = this.props.ClubStore;

    return (
      <div style={styles.base}>
        <div id="clubs">
          <div id="clubsContainer" style={styles.clubs.container} >
            {
              defaultClubList &&
              <ClubList best={true} clubList={defaultClubList}
                        title="메인 클럽" {...this.props} />
            }
            {
              authSuccess && userHas &&
              <ClubList clubList={userHas.subscribedClubList} searchClub={true}
                        title="나의 클럽" {...this.props} />
            }
          </div>
        </div>
      </div>
    );
  }
});

export default connectToStores(Radium(Sidebar));


/**
 * Created by dobyeongsu on 2015. 10. 15..
 */
import React from 'react';
import Radium from 'radium';

import connectToStores from '../../../../node_modules/alt-utils/lib/connectToStores';
import UserStore from '../../../Flux/Stores/UserStore';
import ClubStore from '../../../Flux/Stores/ClubStore';

import styles from '../../Style/Sidebar';
import {ClubList} from '../../Dumbs/index';

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
  componentDidMount() {
    $('#Sidebar').nanoScroller();
    console.log('Sidebar, componentDidMount');
  },
  componentWillReceiveProps(nextProps) {
    $('#Sidebar').nanoScroller();
    console.log('Sidebar, componentWillReceiveProps');
  },
  componentWillUnmount() {

  },
  handleScroll(event) {
    this.setState({scrollTop: event.target.scrollTop});
  },
  render() {
    const {authSuccess} = this.props.UserStore;
    const {defaultClubList, userHas} = this.props.ClubStore;

    return (
      <div id="Sidebar" className="nano" style={styles.base} >
        <div className="nano-content" id="clubs" ref="clubs">
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

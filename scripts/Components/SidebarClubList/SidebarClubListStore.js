import alt from '../../Utils/alt';

import AppActions from '../App/AppActions';
import ClubActions from './../ClubEditor/ClubEditorActions';
import AppStore from './../App/AppStore';

import assign from 'object-assign';

class ClubStore {
  constructor() {
    this.state = {
      userHas: {
        subscribedClubList: []
      }
    };
    this.bindListeners({
      onInitBest: AppActions.initBest
    });
    this.bindActions(ClubActions);
  }

  onInitBest() {
    this.waitFor(AppStore.dispatchToken);

    let defaultClubs = AppStore.getState().initData.ClubStore.defaultClubList;

    this.setState({defaultClubList: defaultClubs});
  }

  onSubmitClub(club) {
    let userHas = this.state.userHas;
    userHas.subscribedClubList.push(club);

    assign(userHas, {subscribedClubList: userHas.subscribedClubList});
    this.setState({userHas: userHas});
  }
}

export default alt.createStore(ClubStore, 'ClubStore');

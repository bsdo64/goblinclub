import alt from '../alt';
import AppActions from '../Actions/AppActions';

class AppStore {
  constructor() {
    this.state = {
      serverRendered: true,
      initData:{}
    };

    this.bindActions(AppActions);
  }

  onDisableServerRender(state) {
    this.setState({serverRendered: state.serverRendered});
  }

  onInitBest(data) {
    this.setState({initData: data});
  }
}

export default alt.createStore(AppStore, 'AppStore');

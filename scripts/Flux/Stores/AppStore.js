import alt from '../../utils/alt';
import AppActions from '../Actions/AppActions';

class AppStore {
  constructor() {
    this.state = {
      serverRendered: true,
      openLoginModal: false,
      initData: {}
    };

    this.bindActions(AppActions);
    this.bindListeners({
      onLoginModal: [AppActions.closeLoginModal, AppActions.toggleLoginModal]
    });
  }

  onLoginModal(state) {
    this.setState(state);
  }

  onDisableServerRender(state) {
    this.setState({serverRendered: state.serverRendered});
  }

  onInitBest(data) {
    this.setState({initData: data});
  }
}

export default alt.createStore(AppStore, 'AppStore');

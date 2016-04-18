import React from 'react';
import connectToStores from 'alt-utils/lib/connectToStores';
import HeaderUserUI from '../Components/HeaderUserUI/HeaderUserUI';

import UserStore from '../Flux/Stores/UserStore';
import LoginStore from '../Flux/Stores/LoginStore';

const HeaderUserContainer = connectToStores({
  getStores() {
    // this will handle the listening/unlistening for you
    return [UserStore, LoginStore];
  },

  getPropsFromStores() {
    return {
      UserStore: UserStore.getState(),
      LoginStore: LoginStore.getState()
    }
  }
}, React.createClass({
  displayName: 'HeaderUserContainer',

  render() {
    return (<HeaderUserUI {...this.props} />);
  }
}));

export default HeaderUserContainer;

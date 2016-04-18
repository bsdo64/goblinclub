import React from 'react';
import connectToStores from 'alt-utils/lib/connectToStores';
import HeaderUserUI from '../Components/HeaderUser/HeaderUser';
import UserStore from '../Flux/Stores/UserStore';

const HeaderUser = connectToStores({
  getStores() {
    // this will handle the listening/unlistening for you
    return [UserStore];
  },

  getPropsFromStores() {
    return {
      UserStore: UserStore.getState()
    }
  }
}, React.createClass({
  displayName: 'HeaderUser',

  render() {
    return (<HeaderUserUI {...this.props} />);
  }
}));

export default HeaderUser;

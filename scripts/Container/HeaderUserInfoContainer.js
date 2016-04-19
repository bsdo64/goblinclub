import React from 'react';

import HeaderUserInfoUI from '../Components/HeaderUserInfoUI/HeaderUserInfoUI';

import AltContainer from 'alt-container';
import UserStore from '../Flux/Stores/UserStore';
import LoginStore from '../Flux/Stores/LoginStore';

const HeaderUserContainer = React.createClass({
  displayName: 'HeaderUserContainer',

  render() {
    return (
    <AltContainer
      stores={
        {
          UserStore: UserStore,
          LoginStore: LoginStore
        }
      }
    >
      <HeaderUserInfoUI />
    </AltContainer>
    );
  }
});

export default HeaderUserContainer;

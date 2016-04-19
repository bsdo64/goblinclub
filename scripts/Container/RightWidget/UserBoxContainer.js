import React from 'react';

import UserWidget from '../../Components/RightWidget/UserWidget';

import AltContainer from 'alt-container';
import UserStore from '../../Flux/Stores/UserStore';
import LoginStore from '../../Flux/Stores/LoginStore';

const UserBoxContainer = React.createClass({
  displayName: 'UserBoxContainer',

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
        <UserWidget />
      </AltContainer>
    );
  }
});

export default UserBoxContainer;

/**
 * Created by dobyeongsu on 2015. 10. 15..
 */
import React from 'react';
import Radium, {Style} from 'radium';
import {Navbar} from 'react-bootstrap';

import connectToStores from 'alt-utils/lib/connectToStores';
import UserStore from '../../../Stores/UserStore';
import PostStore from '../../../Stores/PostStore';
import AppStore from '../../../Stores/AppStore';

import {
  HeaderLogo,
  HeaderLoginButton,
  HeaderUserButtons,
  SearchBar
} from '../../../Components/Dumbs/index';

import styles from '../../Style/style_header';

let Header = React.createClass({
  displayName: 'Header',
  propTypes: {
    UserStore: React.PropTypes.shape({
      authSuccess: React.PropTypes.boolean
    })
  },
  statics: {
    getStores() {
      // this will handle the listening/unlistening for you
      return [PostStore, UserStore, AppStore];
    },

    getPropsFromStores() {
      // this is the data that gets passed down as props
      return {
        PostStore: PostStore.getState(),
        UserStore: UserStore.getState(),
        AppStore: AppStore.getState()
      };
    }
  },
  render() {
    const {authSuccess} = this.props.UserStore;
    return (
      <div id="header">
        <Style rules={styles.INLINE_STYLE} />
        <Navbar fixedTop style={styles.header}>
          <HeaderLogo />

          <SearchBar />

          <div id="menu" style={styles.menu.layout}>
            {
              !authSuccess &&
              <HeaderLoginButton AppStore={this.props.AppStore} />
            }

            {
              authSuccess &&
              <HeaderUserButtons />
            }
          </div>
        </Navbar>
      </div>
    );
  }
});

export default connectToStores(Radium(Header));

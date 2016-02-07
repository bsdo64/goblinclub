/**
 * Created by dobyeongsu on 2015. 10. 15..
 */
import React from 'react';
import Radium, {Style} from 'radium';
import {Navbar} from 'react-bootstrap';

import connectToStores from '../../../node_modules/alt-utils/lib/connectToStores';
import UserStore from '../../Flux/Stores/UserStore';
import AppStore from '../App/AppStore';

import HeaderLogo from './HeaderLogo';
import HeaderLoginButton from './HeaderLoginButton';
import HeaderUserButtons from './HeaderUserButtons';
import SearchBar from './HeaderSearchBar';

import styles from './HeaderStyle';

if (process.env.BROWSER) {
  var a = require('./hello.scss');
  console.log(a.nav);
}

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
      return [UserStore, AppStore];
    },

    getPropsFromStores() {
      // this is the data that gets passed down as props
      return {
        UserStore: UserStore.getState(),
        AppStore: AppStore.getState()
      };
    }
  },
  render() {
    const {authSuccess} = this.props.UserStore;
    return (
      <div id="header">
        <Style
          rules={styles.INLINE_STYLE['#header']}
          scopeSelector="#header" />
        <Style
          rules={styles.INLINE_STYLE['.nano']}
          scopeSelector=".nano" />
        <Style
          rules={styles.INLINE_STYLE['.loginModal']}
          scopeSelector=".loginModal" />
        <Navbar fixedTop style={styles.header}>
          <HeaderLogo />

          <div id="menu" style={styles.menu.layout}>
            {
              !authSuccess &&
              <HeaderLoginButton AppStore={this.props.AppStore} />
            }

            {
              authSuccess &&
              <div style={{float: 'left', color: '#fff'}}>
                <ul style={{height: 50, margin: 0, padding: 18}}>
                  <li style={{display: 'inline-block', paddingRight: 10}}>Nick
                  </li>
                  <li style={{display: 'inline-block'}}>100,200 P
                  </li>
                </ul>
              </div>
            }

            {
              authSuccess &&
              <HeaderUserButtons {...this.props} />
            }
          </div>

          <SearchBar />
        </Navbar>
      </div>
    );
  }
});

export default connectToStores(Radium(Header));
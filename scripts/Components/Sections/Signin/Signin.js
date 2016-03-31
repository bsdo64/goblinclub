/**
 * Created by dobyeongsu on 2016. 3. 23..
 */
import React from 'react';

import {Link} from 'react-router';

if (process.env.BROWSER) {
  require('./Signin.scss');
}

import SigninContents from './SigninContents';
import SigninFormContents from './SigninFormContents';
import Aside from '../../Aside/Default';

let HeaderLogo = React.createClass({
  displayName: 'HeaderLogo', propTypes: {}, contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState() {
    return {
      term: false, privacy: false, agree: false
    };
  }, submitAgreement() {
    const { term, privacy } = this.state;

    if (term && privacy) {
      this.setState({ agree: true });
    }
  }, handleCheckTerms() {
    this.setState({ term: !this.state.term });
  }, handleCheckPrivacy() {
    this.setState({ privacy: !this.state.privacy });
  }, render() {
    const { agree } = this.state;
    return (
      <div id="signing">
        {
          agree && <SigninFormContents />
        }

        {
          !agree && <SigninContents
            {...this.props}
            {...this.state}
            handleCheckTerms={this.handleCheckTerms}
            handleCheckPrivacy={this.handleCheckPrivacy}
            submitAgreement={this.submitAgreement}/>
        }
      </div>
    );
  }
});

export default HeaderLogo;

/**
 * Created by dobyeongsu on 2015. 11. 13..
 */
import React from 'react';
import Radium from 'radium';
import _ from 'lodash';

import connectToStores from '../../../node_modules/alt-utils/lib/connectToStores';
import PostStore from '../../Flux/Stores/PostStore';
import UserStore from '../../Flux/Stores/UserStore';
import PostActions from '../../Flux/Actions/PostActions';

import ThreadPostList from './ThreadPostList';
import ClubPagination from './ClubPagination';

let Club = React.createClass({
  displayName: 'Club',
  propTypes: {
    PostStore: React.PropTypes.object.isRequired
  },
  statics: {
    getStores() {
      // this will handle the listening/unlistening for you
      return [PostStore, UserStore];
    },

    getPropsFromStores() {
      // this is the data that gets passed down as props
      return {
        PostStore: PostStore.getState(),
        UserStore: UserStore.getState()
      };
    }
  },
  componentWillMount() {
    const params = this.props.params;
    PostActions.getPostsByClub(params);
  },
  componentWillUnmount() {
    PostActions.removePostsByClub();
  },
  componentDidMount() {
    console.log('Club, componentDidMount');
    $('#Section .nano-content').scrollTop(0);
    this.setScroller();
  },
  componentWillReceiveProps(nextProps) {
    if (this.props.params.clubName !== nextProps.params.clubName) {
      const params = nextProps.params;
      PostActions.getPostsByClub(params);
      $('#Section .nano-content').scrollTop(0);
    }
    this.setScroller();
  },
  setScroller() {
    setTimeout(function () {
      $('#Section').nanoScroller();
    }, 200);
  },
  render() {
    const {postList} = this.props.PostStore;
    return (
      <div>
        {
          !_.isEmpty(postList) &&
          <ThreadPostList hasHeadLine={false} {...this.props}/>
        }

        <ClubPagination {...this.props}/>
      </div>
    );
  }
});

export default connectToStores(Radium(Club));

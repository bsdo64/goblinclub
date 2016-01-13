/**
 * Created by dobyeongsu on 2015. 11. 13..
 */
import React from 'react';
import Radium from 'radium';
import _ from 'lodash';

import connectToStores from 'alt-utils/lib/connectToStores';
import PostStore from '../../../Stores/PostStore';
import PostActions from '../../../Actions/PostActions';

import {ThreadPostList} from '../../../Components/Dumbs/index';

let Club = React.createClass({
  displayName: 'Club',
  propTypes: {
    PostStore: React.PropTypes.object.isRequired
  },
  statics: {
    getStores() {
      // this will handle the listening/unlistening for you
      return [PostStore];
    },

    getPropsFromStores() {
      // this is the data that gets passed down as props
      return {
        PostStore: PostStore.getState()
      };
    }
  },
  componentWillMount() {
    const params = this.props.params;
    PostActions.getPostsByClub(params);
  },
  componentDidMount() {
    console.log('Club, componentDidMount');
    $('.nano-content').scrollTop(0);
  },
  componentWillReceiveProps(nextProps) {
    if (this.props.params.clubName !== nextProps.params.clubName) {
      const params = nextProps.params;
      PostActions.getPostsByClub(params);
      $('.nano-content').scrollTop(0);
    }
  },
  render() {
    const {postList} = this.props.PostStore;
    return (
      <div>
        {
          !_.isEmpty(postList) &&
          <ThreadPostList hasHeadLine={false} {...this.props}/>
        }
      </div>
    );
  }
});

export default connectToStores(Radium(Club));

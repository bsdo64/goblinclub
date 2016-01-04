/**
 * Created by dobyeongsu on 2015. 11. 13..
 */
import React from 'react';
import Radium from 'radium';
import _ from 'lodash';

import connectToStores from '../../../node_modules/alt/utils/connectToStores';
import PostStore from '../../Stores/PostStore';
import PostActions from '../../Actions/PostActions';

import {ThreadPostList} from '../../Components/index';

let Club = React.createClass({
  displayName: 'Club',
  propTypes: {
    PostStore: React.PropTypes.object.isRequired
  },
  componentWillMount() {
    const params = this.props.params;
    PostActions.getPostsByClub(params);
  },
  componentDidMount() {
    console.log('Club, componentDidMount', this.props);
  },
  componentWillReceiveProps(nextProps) {
    if (this.props.params.clubName !== nextProps.params.clubName) {
      const params = nextProps.params;
      PostActions.getPostsByClub(params);
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

Club = connectToStores({
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
}, Radium(Club));

export default Club;

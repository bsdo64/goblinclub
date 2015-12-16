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
    console.log('Club, componentWillMount');
  },
  componentDidMount() {
    console.log('Club, componentDidMount');
  },

  componentWillReceiveProps(nextProps) {
    console.log('Club, componentWillReceiveProps');
  },

  componentWillUpdate(nextProps, nextState) {
    console.log('Club, componentWillUpdate');
  },
  _fetch() {

  },
  wrapper(posts) {
    return posts.map((post) => {
      return <ThreadPostList key={post.uid} post={post} params={this.props.params}/>;
    });
  },
  render() {
    const {postList} = this.props.PostStore;
    const {params} = this.props;

    console.log('Render');
    console.log(this.props);
    PostActions.getClubPostLists(params);

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

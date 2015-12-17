/**
 * Created by dobyeongsu on 2015. 11. 13..
 */
import React from 'react';
import Radium from 'radium';

import connectToStores from '../../../node_modules/alt/utils/connectToStores';
import UserStore from '../../Stores/UserStore';
import PostStore from '../../Stores/PostStore';

import {CardPostList} from '../../Components/index';

let Best = React.createClass({
  displayName: 'Best',
  propTypes: {
    PostStore: React.PropTypes.object.isRequired
  },
  componentWillMount() {
    console.log('Best, componentWillMount');
  },
  componentDidMount() {
    console.log('Best, componentDidMount');
  },
  componentWillReceiveProps() {
    console.log('Best, componentWillReceiveProps');
  },
  componentWillUpdate() {
    console.log('Best, componentWillUpdate');
  },
  render() {
    return <CardPostList {...this.props} />;
  }
});

Best = connectToStores({
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
}, Radium(Best));
export default Best;

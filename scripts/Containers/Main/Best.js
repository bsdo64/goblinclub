/**
 * Created by dobyeongsu on 2015. 11. 13..
 */
import React, { Component } from 'react';
import Radium from 'radium';
import _ from 'lodash';
import connectToStores from '../../../node_modules/alt/utils/connectToStores';
import UserStore from '../../Stores/UserStore';
import PostStore from '../../Stores/PostStore';

import {BestPostList} from '../../Components/index';
import styles from '../../Components/Style/style_post';

class Best extends Component {
  static getStores() {
    return [UserStore, PostStore];
  }

  static getPropsFromStores() {
    return {
      UserStore: UserStore.getState(),
      PostStore: PostStore.getState()
    };
  }
  componentWillMount() {
    console.log('Best, componentWillMount');
  }
  componentDidMount() {
    console.log('Best, componentDidMount');
  }

  render() {
    const {loadSuccess, bestList} = this.props.PostStore;
    const wrapper = function (posts) {
      return posts.map((post) => {
        return <BestPostList key={post._id} post={post}/>;
      });
    };
    return (
      loadSuccess && !_.isEmpty(bestList) &&
      <div>
        <ul style={styles.posts.container}>
          {wrapper(bestList)}
        </ul>
      </div>
    );
  }
}

export default Best = connectToStores(Radium(Best));

/**
 * Created by dobyeongsu on 2015. 10. 15..
 */
import React from 'react';
import Radium from 'radium';

import connectToStores from 'alt-utils/lib/connectToStores';
import PostStore from '../../../Stores/PostStore';
import ClubStore from '../../../Stores/ClubStore';

import {Editor} from '../../../Components/Dumbs/index';

let WritePost = React.createClass({
  displayName: 'WritePost',
  propTypes: {
    ClubStore: React.PropTypes.object.isRequired,
    history: React.PropTypes.object.isRequired
  },
  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps');
    if (nextProps.PostStore.writeSuccess) {
      this.props.history.pushState(null, '/');
    }
  },

  render() {
    return (
      <div>
        <Editor
          {...this.props}
          ClubStore={this.props.ClubStore} />

      </div>
    );
  }
});

WritePost = connectToStores({
  getStores() {
    // this will handle the listening/unlistening for you
    return [PostStore, ClubStore];
  },

  getPropsFromStores() {
    // this is the data that gets passed down as props
    return {
      PostStore: PostStore.getState(),
      ClubStore: ClubStore.getState()
    };
  }
}, Radium(WritePost));

export default WritePost;
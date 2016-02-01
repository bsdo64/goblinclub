import React from 'react';
import Radium from 'radium';

import styles from '../../Style/ClubPostList';
import styles2 from '../../Style/Post';

import {ThreadPostItem, HeadLine} from '../index';

let ClubPostList = React.createClass({
  displayName: 'ClubPostList',
  propTypes: {
    post: React.PropTypes.shape({
      uid: React.PropTypes.string.isRequired,
      title: React.PropTypes.string.isRequired,
      createdAt: React.PropTypes.string.isRequired,
      clubs: React.PropTypes.array.isRequired,
      user: React.PropTypes.object.isRequired,
      voteCount: React.PropTypes.number.isRequired,
      commentCount: React.PropTypes.number.isRequired
    })
  },
  printListItem(list) {
    return list.map((item) => {
      return (
        <li key={item.uid} style={styles.post}>
          <ThreadPostItem
            key={item.uid}
            post={item}
            params={this.props.params}
            auth={this.props.UserStore.auth}
            authSuccess={this.props.UserStore.authSuccess}/>
        </li>
      );
    });
  },
  render() {
    const {postList} = this.props.PostStore;
    const {hasHeadLine} = this.props;

    return (
      <ul style={styles2.container}>
        {
          hasHeadLine &&
          <li><HeadLine /></li>
        }

        {this.printListItem(postList)}
      </ul>
    );
  }
});

export default ClubPostList = Radium(ClubPostList);


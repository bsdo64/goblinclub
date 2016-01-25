import React from 'react';
import Radium from 'radium';

import {CardPostItem} from '../index';
import styles from '../../Style/style_post';

let CardPostList = React.createClass({
  displayName: 'CardPostList',
  propTypes: {
    post: React.PropTypes.shape({
      uid: React.PropTypes.string.isRequired,
      title: React.PropTypes.string.isRequired,
      createdAt: React.PropTypes.string.isRequired,
      clubs: React.PropTypes.array.isRequired,
      content: React.PropTypes.string.isRequired,
      user: React.PropTypes.object.isRequired,
      voteCount: React.PropTypes.number.isRequired,
      commentCount: React.PropTypes.number.isRequired
    })
  },
  printListItem(list, auth, authSuccess) {
    return list.map((item) => {
      return (
        <li key={item.uid} style={styles.posts.post}>
          <CardPostItem hasComment={false}
                        post={item}
                        auth={auth}
                        authSuccess={authSuccess}/>
        </li>
      );
    });
  },
  render() {
    const {bestList} = this.props.PostStore;
    const {auth, authSuccess} = this.props.UserStore;

    return (
      <ul style={styles.posts.container}>
        {
          bestList &&
          this.printListItem(bestList, auth, authSuccess)
        }
      </ul>
    );
  }
});

export default Radium(CardPostList);

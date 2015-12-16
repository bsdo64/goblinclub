import React from 'react';
import Radium from 'radium';

import {CardPostItem} from '../index';
import styles from '../Style/style_post';

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
  printListItem(list) {
    return list.map((item) => {
      return (
        <li key={item.uid} style={styles.posts.post}>
          <CardPostItem hasComment={false}
                        post={item}/>
        </li>
      );
    });
  },
  render() {
    const {bestList} = this.props.PostStore;

    return (
      <ul style={styles.posts.container}>
        {this.printListItem(bestList)}
      </ul>
    );
  }
});

export default Radium(CardPostList);

import React from 'react';


import CardPostItem from './CardPostItem';
import styles from './PostOfBestStyle';

if (!process.env.NODE) {
  require('./youtube.scss');
}
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
  componentDidMount() {

  },

  printListItem(list, auth, authSuccess) {
    return list.map((item) => {
      return (
        <li key={item.uid} style={styles.post}>
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
      <ul style={styles.container}>
        {
          bestList &&
          this.printListItem(bestList, auth, authSuccess)
        }
      </ul>
    );
  }
});

export default CardPostList;

import React from 'react';


import styles from './HeaderStyle';
import SearchActions from '../../Flux/Actions/SearchActions';
import SearchStore from '../../Flux/Stores/SearchStore';

let SearchBar = React.createClass({
  displayName: 'SearchBar',
  statics: {
    getStores() {
      // this will handle the listening/unlistening for you
      return [SearchStore];
    },

    getPropsFromStores() {
      // this is the data that gets passed down as props
      return {
        SearchStore: SearchStore.getState()
      };
    }
  },
  search(evt) {
    if (evt.charCode === 13) {
      SearchActions.search(this.refs.searchInput.value);
    }
  },
  render() {
    return (
      <div id="searchBar" style={styles.search.layout}>
        <div style={styles.search.container}>
          <input
            ref="searchInput"
            onKeyPress={this.search}
            placeholder="클럽, 포스트 검색하기"
            style={styles.search.bar}
            type="text"
            className="form-control" />
          </div>
      </div>
    );
  }
});

export default SearchBar;

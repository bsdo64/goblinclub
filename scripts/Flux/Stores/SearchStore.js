/**
 * Created by dobyeongsu on 2016. 2. 22..
 */
import alt from '../../Utils/alt';
import SearchActions from '../Actions/SearchActions';

class SearchStore {
  constructor() {
    this.bindActions(SearchActions);

    this.state = {
      posts: {}
    };

  }

  onSearch(posts) {
    console.log(posts);
    this.setState({posts: posts});
  }
}

export default alt.createStore(SearchStore, 'SearchStore');

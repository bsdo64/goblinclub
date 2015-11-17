import alt from '../alt';
import _ from 'lodash'
import PostActions from '../Actions/PostActions'

class PostStore {
    constructor() {

        this.bindActions(PostActions);

        this.state = {
            post: null
        };
    }

    onSubmitPost(post) {
        console.log('store1');
        console.log('setState : ', post);
        this.setState({post: post})
        console.log('store2');
    }

}

export default alt.createStore(PostStore, 'PostStore');
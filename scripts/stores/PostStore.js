import alt from '../alt';
import _ from 'lodash'
import PostActions from '../Actions/PostActions'

class PostStore {
    constructor() {

        this.bindActions(PostActions);

        this.state = {
            post: ''
        };
    }

    onSubmitPost(post) {
        this.setState({post: post})
    }

}

export default alt.createStore(PostStore, 'PostStore');
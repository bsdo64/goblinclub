import alt from '../alt';
import _ from 'lodash'
import PostActions from '../Actions/PostActions'

class PostStore {
    constructor() {

        this.bindActions(PostActions);

        this.state = {
            post: '',
            writingPost: {}
        };
    }

    onSetDefaultClubList(club) {
        var state = this.state;
        state.writingPost['defaultClubList'] = club;

        this.setState(state)
    }
    onSetSubscribeClubList(clubList) {
        var state = this.state;
        state.writingPost['subscribeClubList'] = clubList;

        this.setState(state)
    }
    onSubmitPost(post) {

        console.log('onSubmitPost');
        var state = this.state;
        state.writingPost['success'] = true;
        state.writingPost['post'] = post;
        state.readingPost= post;

        this.setState(state)
    }
    onSubmitSuccess(post) {
        console.log('onSubmitPost');
        var state = this.state;
        state.writingPost['success'] = true;
        state.writingPost['post'] = post;
        state.readingPost= post;

        this.setState(state)
    }

}

export default alt.createStore(PostStore, 'PostStore');
import alt from '../../Utils/alt';
import assign from 'object-assign';
import _ from 'lodash';

import AppActions from '../../Components/App/AppActions';
import PostActions from '../Actions/PostActions';
import CommentActions from '../Actions/CommentActions';

import AppStore from './../../Components/App/AppStore';

class PostStore {
  constructor() {
    this.bindListeners({
      initBest: AppActions.initBest,
      onSubmitComment: CommentActions.submitComment,
      onSubmitInnerComment: CommentActions.submitInnerComment
    });
    this.bindActions(PostActions);

    this.state = {
      post: '',
      writingPost: {
        defaultClubList : 1,
        subscribeClubList : []
      },
      bestList: []
    };
  }

  initBest(stores) {
    this.waitFor(AppStore);

    let state = this.state;
    state.bestList = stores.PostStore.bestList;

    this.setState(state);
  }

  onSetDefaultClubList(club) {
    let state = this.state;
    assign(state, {writingPost: {defaultClubList: club}});

    this.setState(state);
  }

  onSetSubscribeClubList(clubList) {
    let state = this.state;
    state.writingPost.subscribeClubList = clubList;

    this.setState(state);
  }

  onSubmitPost(post) {
    let state = this.state;
    state.writingPost.success = true;
    state.writingPost.post = post;
    state.readingPost = post;

    this.setState(state);
  }

  onResetWritingPost() {
    let writingPost = {
      defaultClubList: 1,
      subscribeClubList: []
    }

    this.setState({writingPost: writingPost});
  }

  onGetClubPostLists(data) {
    let state = this.state;

    state.readingPost = data.PostStore.readingPost;
    state.postList = data.PostStore.postList;
    state.commentList = data.PostStore.commentList;

    this.setState(state);
  }

  onRemoveClubPostLists() {
    this.setState({
      readingPost: [],
      postList: [],
      commentList: []
    });
  }

  onRedirectToNotFound(err) {
    let state = this.state;
    state = {
      redirectTo : '/notFound',
      status : 404,
      error: err
    };

    this.setState(state);
  }

  onResetNotFound(err) {
    let state = {
      post: null,
      writingPost: {
        defaultClubList: null,
        subscribeClubList: []
      },
      bestList: []
    };

    this.setState(state);
  }

  onGetPostsByClub(data) {
    let state = this.state;

    state.postList = data.PostStore.postList;

    this.setState(state);
  }

  onRemovePostsByClub() {
    this.setState({
      postList: []
    });
  }

  onMoreBest(StoreData) {
    let posts = StoreData.PostStore.bestList;
    let state = this.state;
    for (let i = 0; i < posts.length; i = i + 1) {
      state.bestList.push(posts[i]);
    }

    this.setState(state);
  }

  onLike(uid) {
    let readingPost = this.state.readingPost;
    if (readingPost && readingPost.uid === uid) {
      readingPost.voteCount = readingPost.voteCount + 1;
      readingPost.likeCount = readingPost.likeCount + 1;

      this.setState({readingPost: readingPost});
    }

    let bestList = this.state.bestList;
    let bestIndex = _.findIndex(bestList, {uid: uid});

    if (bestIndex > -1) {
      bestList[bestIndex].voteCount = bestList[bestIndex].voteCount + 1;
      bestList[bestIndex].likeCount = bestList[bestIndex].likeCount + 1;

      this.setState({bestList: bestList});
    }

    let postList = this.state.postList;
    let postIndex = _.findIndex(postList, {uid: uid});

    if (postIndex > -1) {
      postList[postIndex].voteCount = postList[postIndex].voteCount + 1;
      postList[postIndex].likeCount = postList[postIndex].likeCount + 1;

      this.setState({postList: postList});
    }
  }

  onDislike(uid) {
    let readingPost = this.state.readingPost;
    if (readingPost && readingPost.uid === uid) {
      readingPost.voteCount = readingPost.voteCount - 1;
      readingPost.likeCount = readingPost.likeCount - 1;

      this.setState({readingPost: readingPost});
    }

    let bestList = this.state.bestList;
    let bestIndex = _.findIndex(bestList, {uid: uid});

    if (bestIndex > -1) {
      bestList[bestIndex].voteCount = bestList[bestIndex].voteCount - 1;
      bestList[bestIndex].likeCount = bestList[bestIndex].likeCount - 1;

      this.setState({bestList: bestList});
    }

    let postList = this.state.postList;
    let postIndex = _.findIndex(postList, {uid: uid});

    if (postIndex > -1) {
      postList[postIndex].voteCount = postList[postIndex].voteCount - 1;
      postList[postIndex].likeCount = postList[postIndex].likeCount - 1;

      this.setState({postList: postList});
    }
  }

  onLikeFromDislike(uid) {
    let readingPost = this.state.readingPost;
    if (readingPost && readingPost.uid === uid) {
      readingPost.voteCount = readingPost.voteCount + 2;
      readingPost.likeCount = readingPost.likeCount + 2;

      this.setState({readingPost: readingPost});
    }

    let bestList = this.state.bestList;
    let bestIndex = _.findIndex(bestList, {uid: uid});

    if (bestIndex > -1) {
      bestList[bestIndex].voteCount = bestList[bestIndex].voteCount + 2;
      bestList[bestIndex].likeCount = bestList[bestIndex].likeCount + 2;

      this.setState({bestList: bestList});
    }

    let postList = this.state.postList;
    let postIndex = _.findIndex(postList, {uid: uid});

    if (postIndex > -1) {
      postList[postIndex].voteCount = postList[postIndex].voteCount + 2;
      postList[postIndex].likeCount = postList[postIndex].likeCount + 2;

      this.setState({postList: postList});
    }
  }

  onDislikeFromLike(uid) {
    let readingPost = this.state.readingPost;
    if (readingPost && readingPost.uid === uid) {
      readingPost.voteCount = readingPost.voteCount - 2;
      readingPost.likeCount = readingPost.likeCount - 2;

      this.setState({readingPost: readingPost});
    }

    let bestList = this.state.bestList;
    let bestIndex = _.findIndex(bestList, {uid: uid});

    if (bestIndex > -1) {
      bestList[bestIndex].voteCount = bestList[bestIndex].voteCount - 2;
      bestList[bestIndex].likeCount = bestList[bestIndex].likeCount - 2;

      this.setState({bestList: bestList});
    }

    let postList = this.state.postList;
    let postIndex = _.findIndex(postList, {uid: uid});

    if (postIndex > -1) {
      postList[postIndex].voteCount = postList[postIndex].voteCount - 2;
      postList[postIndex].likeCount = postList[postIndex].likeCount - 2;

      this.setState({postList: postList});
    }
  }

  onSubmitComment(comment) {
    let state = this.state;

    if (state.readingPost && state.commentList) {
      state.readingPost.commentCount += 1;
      state.commentList = comment;

      this.setState(state);
    }
  }

  onSubmitInnerComment(comment) {
    let state = this.state;

    if (state.readingPost && state.commentList) {
      state.readingPost.commentCount += 1;
      state.commentList = comment;

      this.setState(state);
    }
  }
}

export default alt.createStore(PostStore, 'PostStore');

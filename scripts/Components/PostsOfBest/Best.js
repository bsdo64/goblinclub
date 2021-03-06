/**
 * Created by dobyeongsu on 2015. 11. 13..
 */
import React from 'react';


import AppActions from '../Layout/AppActions';
import PostActions from '../../Flux/Actions/PostActions';

import connectToStores from '../../../node_modules/alt-utils/lib/connectToStores';
import AppStore from '../Layout/AppStore';
import UserStore from '../../Flux/Stores/UserStore';
import PostStore from '../../Flux/Stores/PostStore';

import CardPostList from './CardPostList';

let Best = React.createClass({
  displayName: 'Best',
  propTypes: {
    PostStore: React.PropTypes.object.isRequired
  },
  getInitialState: function () {
    return {
      initialized: false,
      page: 1
    };
  },
  statics: {
    getStores() {
      // this will handle the listening/unlistening for you
      return [PostStore, UserStore];
    },

    getPropsFromStores() {
      // this is the data that gets passed down as props
      return {
        PostStore: PostStore.getState(),
        UserStore: UserStore.getState()
      };
    }
  },

  /**
   * 컴포넌트가 처음으로 마운트 되고 난 후에 실행된다. 데이터 업데이트와는 관계없다.
   * 렌더링 전에 실행된다.
   *
   * @returns {void}
   */
  componentWillMount() {
    if (!AppStore.getState().serverRendered) {
      this.setState({initialized: true});
      AppActions.initBest();
    }
  },

  getPageState() {
    return this.state.page;
  },
  updatePage() {
    this.setState({page: this.state.page + 1});
  },
  /**
   * 컴포넌트가 처음으로 마운트 되고 난 후에 실행된다. 데이터 업데이트와는 관계없다
   * 따라서 마운트때, 렌더링 후에 단 한번만 실행된다.
   *
   * @returns {void}
   */
  componentDidMount() {
    /*$('#Section').nanoScroller();

    let scrollContent = document.getElementsByClassName('nano-content')[0];
    scrollContent.onscroll = function () {
      let bottomGap = scrollContent.scrollHeight - (scrollContent.offsetHeight + scrollContent.scrollTop);
      if (bottomGap <= 0) {
        PostActions.moreBest(this.getPageState());
        this.updatePage();
        $('#Section').nanoScroller();
      }
    }.bind(this);*/
  },

  /**
   * 데이터 업데이트시 호출된다 setState 를 사용할 수 있지만 렌더링 되지 않는다
   * 이때는 props 를 사용한 componentWillUpdate 를 사용한다
   *
   * @returns {void}
   */
  componentWillReceiveProps() {
    if (!AppStore.getState().serverRendered && !this.state.initialized) {
      this.setState({initialized: true});
    }
  },

  /**
   * 데이터 업데이트시 렌더링 전에 호출 된다
   *
   * @returns {void}
   */
  componentWillUpdate() {

  },

  /**
   * 데이터 업데이트시 모든 라이프 사이클이 끝나고 호출 된다
   *
   * @returns {void}
   */
  componentDidUpdate() {

  },

  /**
   * 컴포넌트가 바뀔때(사라질때) 단 한번만 호출되고 사라진다
   *
   * @returns {void}
   */
  componentWillUnmount() {
    let scrollContent = document.getElementsByClassName('nano-content')[0];
    scrollContent.onscroll = null;
  },

  render() {
    return <CardPostList {...this.props} />;
  }
});

export default connectToStores(Best);

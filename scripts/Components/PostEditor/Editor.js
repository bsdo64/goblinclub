/**
 * Created by dobyeongsu on 2015. 11. 14..
 */
import React from 'react';
import Radium from 'radium';
import Select from 'react-select';
import _ from 'lodash';
import {Button} from 'react-bootstrap';
import {browserHistory} from 'react-router';

import styles from './PostEditorStyle';
import PostActions from '../../Flux/Actions/PostActions';

import HeadLine from './../HeadLine/HeadLine';
import {medium, mediumInsertConfig} from './config';

let SubscribeClubs = React.createClass({
  displayName: 'SubscribeClubs',
  getInitialState() {
    return {
      subscribedClubIds: []
    };
  },

  handleSelectCheckbox(val) {
    if (val.length <= 3) {
      this.setState({
        subscribedClubIds: val
      }, function () {
        PostActions.setSubscribeClubList(this.state.subscribedClubIds);
      });
    }
  },

  getOptions(list) {
    let result = [];
    if (Array.isArray(list)) {
      list.map(function (val) {
        result.push({value: val.id, label: val.name});
      });
    }
    return result;
  },

  render() {
    let {ClubStore} = this.props;
    return (
    <div className="form-group" ref="subscribedClubList" >
      <label className="control-label col-xs-2">{'가입 클럽 (최대 3)'}</label>
      <div className="col-xs-10">
        {
          ClubStore.userHas &&
          <Select
            clearable
            multi
            name="subscribed-club-select"
            onChange={this.handleSelectCheckbox}
            options={this.getOptions(ClubStore.userHas.subscribedClubList)}
            value={this.state.subscribedClubIds} />
        }
      </div>
    </div>
    );
  }
});

let MainClubs = React.createClass({
  displayName: 'MainClubs',
  getInitialState() {
    let defaultClub = (function (props) {
      if (_.has(props, 'PostStore.writingPost.defaultClubList')) {
        return props.PostStore.writingPost.defaultClubList;
      }

      PostActions.setDefaultClubList(1);
      return 1;
    })(this.props);
    return {
      defaultClubId: defaultClub ? defaultClub : 1
    };
  },
  handleSelectCheckbox(val) {
    this.setState({
      defaultClubId: val.value
    }, function () {
      PostActions.setDefaultClubList(this.state.defaultClubId);
    });
  },

  getOptions(list) {
    let result = [];
    if (Array.isArray(list)) {
      list.map(function (val) {
        result.push({value: val.id, label: val.name});
      });
    }
    return result;
  },

  render() {
    let {ClubStore} = this.props;
    return (
      <div className="form-group" ref="defaultClubList" >
          <label className="control-label col-xs-2">{'메인 클럽 (필수)'}</label>
          <div className="col-xs-10">
            <Select
              clearable={false}
              name="default-club-select"
              onChange={this.handleSelectCheckbox}
              options={this.getOptions(ClubStore.defaultClubList)}
              value={this.state.defaultClubId} />
          </div>
      </div>
    );
  }
});

let Editor = React.createClass({
  displayName: 'Editor',
  componentDidMount() {
    this.editor = new MediumEditor('.editable', medium);
    $('.editable').mediumInsert(mediumInsertConfig(this.editor));
    if (_.has(this.props, 'PostStore.writingPost.success')) {
      if (this.props.PostStore.writingPost.success) {
        PostActions.resetWritingPost();
      }
    }
  },
  componentWillReceiveProps(nextProps) {
    let PostStore = nextProps.PostStore;
    if (PostStore.writingPost && PostStore.writingPost.success) {
      browserHistory.push(
        '/club/' + PostStore.readingPost.belongingClubs[0].url + '/' + PostStore.readingPost.uid
      );
      console.log('subsscse');
    }
  },

  submit() {
    let allContents = this.editor.serialize();
    let el = allContents['element-0'].value;
    let writingPost =
      this.props.PostStore.writingPost ? this.props.PostStore.writingPost : {defaultClubList: 1};

    let subscribeClubList =
      writingPost ? _.map(writingPost.subscribeClubList, 'value') : [];

    let newPost = {
      content: el,
      defaultClubList: writingPost.defaultClubList,
      subscribeClubList: subscribeClubList,
      title: this.refs.title.value.trim()
    };
    PostActions.submitPost(newPost);
  },
  render() {
    return (
      <div style={styles.widget.container}>
        <HeadLine title="글 쓰기" rightMenu={false}/>
        <div style={styles.widget.listObj1}>
          <input placeholder="제목입니다" ref="title"
                 style={styles.widget.textarea1} />
          <div className="editable"></div>
        </div>

        <HeadLine title="클럽 선택하기" rightMenu={false}/>
        <form className="form-horizontal" style={styles.widget.listObj1}>
          <MainClubs {...this.props} />
          <SubscribeClubs {...this.props} />
        </form>

        <div className="form-group">
          <div className="col-xs-offset-2 col-xs-10">
            <Button onClick={this.submit} label="Checkbox">{'저장하기'}</Button>
          </div>
        </div>
      </div>
    );
  }
});

SubscribeClubs = Radium(SubscribeClubs);
MainClubs = Radium(MainClubs);
export default Editor = Radium(Editor);

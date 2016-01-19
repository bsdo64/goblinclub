/**
 * Created by dobyeongsu on 2015. 11. 14..
 */
import React from 'react';
import Radium from 'radium';
import Select from 'react-select';

import {editor as styles} from '../../Style/style_editor';
import PostActions from '../../../Flux/Actions/PostActions';

import HeadLine from './HeadLine';

if (!process.env.NODE) {
  console.log(process.env);
  require('react-select/dist/react-select.css');
};
let SubscribeClubs = React.createClass({
  displayName: 'SubscribeClubs',
  getInitialState() {
    return {
      subscribedClubIds: []
    };
  },

  handleSelectCheckbox(val) {
    this.setState({
      subscribedClubIds: val
    }, function () {
      PostActions.setSubscribeClubList(this.state.subscribedClubIds);
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
      <div ref="subscribedClubList" >
        <h4>{'가입한 클럽(최대 3개)'}</h4>
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
    );
  }
});

let MainClubs = React.createClass({
  displayName: 'MainClubs',
  getInitialState() {
    return {
      defaultClubId: 1
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
      <div ref="defaultClubList" >
        <h4>{'메인 클럽(필수)'}</h4>
        <Select
          clearable={false}
          name="default-club-select"
          onChange={this.handleSelectCheckbox}
          options={this.getOptions(ClubStore.defaultClubList)}
          value={this.state.defaultClubId} />
      </div>
    );
  }
});

let Editor = React.createClass({
  displayName: 'Editor',
  componentDidMount() {
    this.editor = new MediumEditor('.editable', {imageDragging: false});
    $('.editable').mediumInsert({
      editor: this.editor,
      addons: {
        images: {
          deleteScript: '/image/image/files/',
          deleteMethod: 'DELETE',
          preview: true,
          captions: true,
          captionPlaceholder: '이미지 캡션을 입력하세요(옵션)',
          fileUploadOptions: {
            url: 'http://localhost:3000/image',
            acceptFileTypes: /(\.|\/)(gif|jpe?g|png)$/i
          }
        }
      }
    });
  },
  componentWillReceiveProps(nextProps) {
    let PostStore = nextProps.PostStore;
    if (PostStore.writingPost && PostStore.writingPost.success) {
      this.props.history.pushState(
        null,
        '/club/' + PostStore.readingPost.clubs[0].url + '/' + PostStore.readingPost.uid
      );
    }
  },

  submit() {
    let allContents = this.editor.serialize();
    let el = allContents['element-0'].value;

    PostActions.submitPost({
      title: this.refs.title.value.trim(),
      content: el
    });
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
        <div style={styles.widget.listObj1}>
          <MainClubs ClubStore={this.props.ClubStore} />
          <SubscribeClubs ClubStore={this.props.ClubStore} />
        </div>

        <div>
          <button onClick={this.submit}>{'저장하기'}</button>
        </div>
      </div>
    );
  }
});

SubscribeClubs = Radium(SubscribeClubs);
MainClubs = Radium(MainClubs);
export default Editor = Radium(Editor);

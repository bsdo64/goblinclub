/**
 * Created by dobyeongsu on 2015. 11. 14..
 */
import React from 'react';
import Radium from 'radium';
import {Input} from 'react-bootstrap';

import {editor as styles} from '../Style/style_editor';
import PostActions from '../../Actions/PostActions';
import alt from '../../alt';
import HeadLine from './HeadLine';

let SubscribeClubs = React.createClass({
  displayName: 'SubscribeClubs',
  getInitialState() {
    return {
      value: ''
    };
  },

  handleChange() {
    this.setState({
      value: this.getValue()
    }, function () {
      PostActions.setSubscribeClubList(this.getValue());
    });
  },
  getValue() {
    let result;
    // convert HTMLCollection  to Array
    let inputs = this.getButtonGroupNode().querySelectorAll('input[type=checkbox]');
    let children = Array.prototype.slice.call(inputs);
    // find out the radio which was checked
    result = children.filter(item => {
      return item.checked;
    });
    result = result.map(function (i) {
      return i.value;
    });

    return result;
  },
  getButtonGroupNode() {
    return this.refs.subscribedClubList;
  },

  render() {
    let {ClubStore} = this.props;
    let createItem = function (val, index) {
      return (
        <div className="checkbox-inline" key={val.url + index}>
          <label >
            <input
              label={val.name}
              name="subscribedClubList"
              onClick={this.handleChange}
              readOnly
              type="checkbox"
              value={val.id} />
            <span >{val.name}</span>
          </label>
        </div>
      );
    }.bind(this);
    return (
      <div ref="subscribedClubList" style={styles.widget.clubSelectOption}>
        <h4>{'가입한 클럽(최대 3개)'}</h4>
        {
          ClubStore.userHas &&
          ClubStore.userHas.subscribedClubList.map(createItem)
        }
      </div>
    );
  }
});


let MainClubs = React.createClass({
  displayName: 'MainClubs',
  getInitialState() {
    return {
      value: ''
    };
  },

  handleChange() {
    // This could also be done using ReactLink:
    // http://facebook.github.io/react/docs/two-way-binding-helpers.html
    this.setState({
      value: this.getValue()
    }, function () {
      PostActions.setDefaultClubList(this.getValue());
    });
  },
  getValue() {
    let result;
    // convert HTMLCollection  to Array
    let inputs = this.getButtonGroupNode().querySelectorAll('input[type=radio]');
    let children = Array.prototype.slice.call(inputs);
    // find out the radio which was checked
    result = children.filter(item => {
      return item.checked;
    });
    // checkbox group only one can be checked.
    return result[0].value;
  },
  getButtonGroupNode() {
    return this.refs.defaultClubList;
  },

  render() {
    let {ClubStore} = this.props;
    let createItem = function (val) {
      return (
        <Input
          key={val.url}
          label={val.name}
          name="defaultClubList"
          onClick={this.handleChange}
          readOnly
          type="radio"
          value={val.id} />
      );
    }.bind(this);
    return (
      <div ref="defaultClubList" style={styles.widget.clubSelect}>
        <h4>{'메인 클럽(필수)'}</h4>
        {
          ClubStore.defaultClubList.map(createItem)
        }
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
            url: '/image',
            acceptFileTypes: /(\.|\/)(gif|jpe?g|png)$/i
          }
        }
      }
    });
  },
  componentWillReceiveProps() {
    let PostStore = alt.getStore('PostStore').getState();
    if (PostStore.writingPost.success) {
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

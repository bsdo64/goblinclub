/**
 * Created by dobyeongsu on 2015. 11. 14..
 */
import React, { Component } from 'react';
import Radium from 'radium';
import { Link } from 'react-router';
import { Input } from 'react-bootstrap';

import { editor as styles } from './style/style_editor'
import PostActions from '../../Actions/PostActions';
import alt from '../../alt';
import HeadLine from './HeadLine';

var SubscribeClubs = React.createClass({
    getInitialState() {
        return {
            value: ''
        };
    },

    handleChange () {
        this.setState({
            value: this.getValue()
        }, function() {
            PostActions.setSubscribeClubList(this.getValue());
        });
    },
    getValue() {
        let result;
        // convert HTMLCollection  to Array
        let children = Array.prototype.slice.call(this.getButtonGroupNode().querySelectorAll('input[type=checkbox]'));
        // find out the radio which was checked
        result = children.filter(item => {
            return item.checked;
        });
        result = result.map(function (i) {
            return i.value
        });

        return result;
    },
    getButtonGroupNode() {
        return this.refs.subscribedClubList;
    },

    render() {
        var slf = this;
        var { ClubStore } = this.props;
        var createItem = function (val, index) {
            return <div key={val.url+index} className="checkbox-inline">
                <label >
                    <input
                        type="checkbox"
                        name="subscribedClubList"
                        label={val.name}
                        readOnly
                        value={val.id}
                        onClick={slf.handleChange}
                    />
                    <span >{val.name}</span>
                </label>
            </div>
        };
        return <div ref="subscribedClubList" style={styles.widget.clubSelectOption}>
            <h4>가입한 클럽(최대 3개)</h4>
            {
                ClubStore.userHas.subscribedClubList.map(createItem)
            }
        </div>
    }
});


var MainClubs = React.createClass({
    getInitialState() {
        return {
            value: ''
        };
    },

    handleChange () {
        // This could also be done using ReactLink:
        // http://facebook.github.io/react/docs/two-way-binding-helpers.html
        this.setState({
            value: this.getValue()
        }, function() {
            PostActions.setDefaultClubList(this.getValue());
        });
    },
    getValue() {
        let result;
        // convert HTMLCollection  to Array
        let children = Array.prototype.slice.call(this.getButtonGroupNode().querySelectorAll('input[type=radio]'));
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
        var slf = this;
        var { ClubStore } = this.props;
        var createItem = function(val, index) {
            return <Input
                key={val.url}
                type="radio"
                name="defaultClubList"
                label={val.name}
                readOnly
                onClick={slf.handleChange}
                value={val.id}
            />
        };
        return <div ref="defaultClubList" style={styles.widget.clubSelect}>
            <h4>메인 클럽(필수)</h4>
            {
                ClubStore.defaultClubList.map(createItem)
            }
        </div>
    }
});

var Editor = React.createClass({

    componentDidMount() {
        this.editor = new MediumEditor('.editable', {imageDragging: false});
        $('.editable').mediumInsert({
            editor: this.editor,
            addons: {
                images: {
                    deleteScript: '/image/image/files/', // (string) A relative path to a delete script
                    deleteMethod: 'DELETE',
                    preview: true, // (boolean) Show an image before it is uploaded (only in browsers that support this feature)
                    captions: true, // (boolean) Enable captions
                    captionPlaceholder: '이미지 캡션을 입력하세요(옵션)', // (string) Caption placeholder
                    fileUploadOptions: { // (object) File upload configuration. See https://github.com/blueimp/jQuery-File-Upload/wiki/Options
                        url: '/image', // (string) A relative path to an upload script
                        acceptFileTypes: /(\.|\/)(gif|jpe?g|png)$/i // (regexp) Regexp of accepted file types
                    }
                }
            }
        });
    },
    submit() {
        var allContents = this.editor.serialize(),
            el = allContents["element-0"].value;

        PostActions.submitPost({
            title: this.refs.title.value.trim(),
            content: el
        });
    },

    componentWillReceiveProps (nextProps) {
        var PostStore = alt.getStore('PostStore').getState();
        if(PostStore.writingPost.success) {
            this.props.history.pushState(null, '/club/'+PostStore.readingPost.clubs[0]['url']+'/'+PostStore.readingPost._id)
        }
    },

    render() {
        return (
            <div style={styles.widget.container}>
                <HeadLine />
                <div style={styles.widget.listObj1}>
                    <input ref="title" style={styles.widget.textarea1} placeholder="제목입니다" />
                    <div className="editable"></div>
                </div>

                <HeadLine />
                <div style={styles.widget.listObj1}>
                    <MainClubs
                        ClubStore={this.props.ClubStore}
                    />

                    <SubscribeClubs
                        ClubStore={this.props.ClubStore}
                    />
                </div>

                <div>
                    <button onClick={this.submit}>저장하기</button>
                </div>
            </div>

        )
    }
});

SubscribeClubs = Radium(SubscribeClubs);
MainClubs = Radium(MainClubs);
export default Editor = Radium(Editor);
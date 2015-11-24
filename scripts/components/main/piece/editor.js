/**
 * Created by dobyeongsu on 2015. 11. 14..
 */
import React, { Component } from 'react';
import Radium from 'radium';
import { Link } from 'react-router';

import { editor as styles } from './style_editor'
import connectToStores from 'alt/utils/connectToStores';
import PostActions from '../../../Actions/PostActions';
import PostStore from '../../../stores/PostStore';

@connectToStores
@Radium
export default class editor extends Component {
    static getStores() {
        return [PostStore];
    }

    static getPropsFromStores() {
        return {
            PostStore: PostStore.getState()
        }
    }

    constructor(...props) {
        super(...props);

        this.state = {
            content: ''
        };

        this.submit = this.submit.bind(this);
    }

    componentDidMount() {
        var editor = new MediumEditor('.editable');
        $('.editable').mediumInsert({
            editor: editor,
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
    }
    submit() {
        var editor = new MediumEditor('.editable');
        var allContents = editor.serialize();
        var elContent = allContents["element-0"].value;
        PostActions.submitPost({
            title: this.refs.title.value.trim(),
            content: elContent
        });
    }

    componentWillReceiveProps (nextProps) {
        console.log(nextProps);
    }

    render() {
        return (
            <div style={styles.widget.container}>
                <div style={styles.widget.listObj1}>
                    <input ref="title" style={styles.widget.textarea1} placeholder="제목입니다" />
                </div>

                <div style={styles.widget.listObj1}>
                    <div className="editable"></div>
                </div>

                <div>
                    <button onClick={this.submit}>저장하기</button>
                </div>
            </div>

        )
    }
}


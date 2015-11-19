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
            content: null
        };

        this.handleChange = this.handleChange.bind(this);
        this.submit = this.submit.bind(this);
    }

    componentDidMount() {
        var _this, editor;
        _this = this;

        // When the react component is mounted initialize the ContentTools
        // editor.
        ContentTools.IMAGE_UPLOADER = imageUploader;
        editor = new ContentTools.EditorApp.get();

        var tr = {
            "Align center": "가운데 정렬",
            "Align left": "왼쪽 정렬",
            "Align right": "오른쪽 정렬",
            "Apply": "적용",
            "Attributes": "속성",
            "Bold": "진하게",
            "Bullet list": "점 리스트",
            "Cancel": "취소",
            "Clear": "다시 입력",
            "Code": "코드",
            "Crop marks": "크롭",
            "Enter a link": "링크를 입력하세요",
            "Image": "이미지",
            "Heading": "제목",
            "Indent": "탭",
            "Insert": "삽입",
            "Insert image": "이미지를 선택하세요",
            "Insert table": "표를 입력합니다",
            "Insert video": "비디오를 입력하세요",
            "Italic": "이탤릭",
            "Line break": "엔터",
            "Link": "링크",
            "List": "리스트",
            "List item": "리스트 아이템",
            "Name": "이름",
            "No styles available for this tag": "적용 가능한 스타일이 없어요",
            "Numbers list": "순서 리스트",
            "Paste YouTube or Vimeo URL": "Youtube나 Vimeo 주소를 입력하세요",
            "Paragraph": "문단",
            "Preformatted": "자유 포맷",
            "Properties": "속성",
            "Redo": "되돌리기",
            "Remove": "삭제",
            "Rotate": "회전",
            "Styles": "스타일",
            "Subheading": "부제목",
            "Table": "테이블",
            "Table body (columns)": "테이블 바디 (열)",
            "Table foot": "테이블 하단",
            "Table head": "테이블 상단",
            "Table row": "테이블 열",
            "Text": "텍스트",
            "Undo": "취소",
            "Unindent": "탭 삭제",
            "Update table": "테이블 업데이트",
            "Upload": "업로드",
            "Value": "값",
            "Video": "비디오",
            "Your changes have not been saved, do you really want to lose them?": "작업이 완료되지 않았습니다 정말 취소 하시겠어요?"
        };

        // Add the translations for the French language
        ContentEdit.addTranslations('kr', tr);

        // Set French as the editors current language
        ContentEdit.LANGUAGE = 'kr';

        function imageUploader(dialog) {
            var image, xhr, xhrComplete, xhrProgress;
            dialog.bind('imageUploader.carrousel', function(src) {
                dialog.populate(src, [150,150]);
            });

            dialog.bind('imageUploader.save', function() {
                var crop, cropRegion, formData;

                // Define a function to handle the request completion
                xhrComplete = function (ev) {
                    // Check the request is complete
                    if (ev.target.readyState !== 4) {
                        return;
                    }

                    // Clear the request
                    xhr = null
                    xhrComplete = null

                    // Free the dialog from its busy state
                    dialog.busy(false);

                    // Handle the result of the rotation
                    if (parseInt(ev.target.status) === 200) {
                        // Unpack the response (from JSON)
                        var response = JSON.parse(ev.target.responseText);
                        var file = response.files[0];
                        file.size = [200, 200];

                        // Trigger the save event against the dialog with details of the
                        // image to be inserted.
                        dialog.save(
                            file.url,
                            file.size,
                            {
                                'alt': file.alt,
                                'data-ce-max-width': file.size[0]
                            });

                    } else {
                        // The request failed, notify the user
                        new ContentTools.FlashUI('no');
                    }
                }

                // Set the dialog to busy while the rotate is performed
                dialog.busy(true);

                // Build the form data to post to the server
                formData = new FormData();
                formData.append('url', image.url);

                // Set the width of the image when it's inserted, this is a default
                // the user will be able to resize the image afterwards.
                formData.append('width', 600);

                // Check if a crop region has been defined by the user
                if (dialog.cropRegion()) {
                    formData.append('crop', dialog.cropRegion());
                }

                // Make the request
                xhr = new XMLHttpRequest();
                xhr.addEventListener('readystatechange', xhrComplete);
                xhr.open('POST', '/image', true);
                xhr.send(formData);
            });

            dialog.bind('imageUploader.fileReady', function (files) {
                // Upload a file to the server
                var formData;

                // Define functions to handle upload progress and completion
                xhrProgress = function (ev) {
                    // Set the progress for the upload
                    dialog.progress((ev.loaded / ev.total) * 100);
                }

                xhrComplete = function (ev) {
                    var response;
                    var files;

                    // Check the request is complete
                    if (ev.target.readyState != 4) {
                        return;
                    }

                    // Clear the request
                    xhr = null
                    xhrProgress = null
                    xhrComplete = null

                    // Handle the result of the upload
                    if (parseInt(ev.target.status) == 200) {
                        // Unpack the response (from JSON)
                        response = JSON.parse(ev.target.responseText);
                        files = response.files;

                        // Populate the dialog
                        dialog.populate(files[0].url, files[0].size);
                        dialog.carrousel(files);

                    } else {
                        // The request failed, notify the user
                        new ContentTools.FlashUI('no');
                    }
                }

                // Set the dialog state to uploading and reset the progress bar to 0
                dialog.state('uploading');
                dialog.progress(0);

                // Build the form data to post to the server
                formData = new FormData();
                for (var i = 0; i < files.length; i++) {
                    formData.append('image', files[i]);
                }

                // Make the request
                xhr = new XMLHttpRequest();
                xhr.upload.addEventListener('progress', xhrProgress);
                xhr.addEventListener('readystatechange', xhrComplete);
                xhr.open('POST', '/image', true);
                xhr.send(formData);
            });

            dialog.bind('imageUploader.cancelUpload', function () {
                // Cancel the current upload

                // Stop the upload
                if (xhr) {
                    xhr.upload.removeEventListener('progress', xhrProgress);
                    xhr.removeEventListener('readystatechange', xhrComplete);
                    xhr.abort();
                }

                // Set the dialog to empty
                dialog.state('empty');
            });

            dialog.bind('cancel', function () {
                // Clear the current image
                dialog.clear();
                image = null;
            });
        }
        editor.init('*[data-editable]', 'data-name');
        $('.ct-app').appendTo('#bestPosts');

        // Capture save events and update the react component
        editor.bind('save', function (regions) {
            // Update the state of the component
            console.log('regions : ', regions);
            _this.setState({content: regions['main-content']}, function () {
                // HACK: Reselect the region DOM elements for the
                // editor (required because React will re-render the
                // contents of the component).
                editor._domRegions = document.querySelectorAll('[data-editable]');
                console.log(_this.state.content);
            });
        });



    }

    handleChange() {
        this.setState({value: this.refs.textarea.value});
        PostActions.submitPost(this.refs.textarea.value)
    }

    submit() {
         PostActions.submitPost(this.state.value)
    }

    render() {
        var value = this.props.PostStore.post;

        let innerHtml = {
            __html : `<div data-editable data-name="main-content">${ this.state.content ? this.state.content : '' }</div>`
        };

        return (
            <div style={styles.widget.container}>
                <div style={styles.widget.listObj1}>
                    <input style={styles.widget.textarea1} placeholder="제목입니다" />
                </div>

                <div style={styles.widget.listObj1}
                     dangerouslySetInnerHTML={ innerHtml }>
                </div>

                <div>
                    <button onClick={this.submit}>저장하기</button>
                </div>
            </div>

        )
    }
}


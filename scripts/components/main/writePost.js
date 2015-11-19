/**
 * Created by dobyeongsu on 2015. 10. 15..
 */
import React, { Component } from 'react';
import Radium from 'radium';
import md from '../../utils/markdown'

import HeadLine             from './piece/headLine';
import Editor               from './piece/editor';
import { editor as styles } from './piece/style_editor'
import connectToStores from 'alt/utils/connectToStores';

import PostStore from '../../stores/PostStore';

@connectToStores
@Radium
export default class WritePost extends Component {
    static getStores() {
        return [PostStore];
    }

    static getPropsFromStores() {
        return {
            PostStore: PostStore.getState()
        }
    }

    constructor() {
        super();
        this.state = {
            value: '',
            togglePreview: true
        };

        this.togglePreview = this.togglePreview.bind(this);
    }

    componentWillUnmount() {
        window.removeEventListener("unload");
    }

    componentDidMount() {

        window.addEventListener("unload", function (e) {
            alert('종료?');
        });

        var uploadButton = $('<button/>')
            .addClass('btn btn-primary')
            .prop('disabled', true)
            .text('Processing...')
            .on('click', function () {
                var $this = $(this),
                    data = $this.data();
                $this
                    .off('click')
                    .text('Abort')
                    .on('click', function () {
                        $this.remove();
                        data.abort();
                    });
                data.submit().always(function () {
                    $this.remove();
                });
            });

        $(this.refs.fileupload).fileupload({
            url: 'http://localhost:3000/image',
            dataType: 'json',
            autoUpload: false,
            acceptFileTypes: /(\.|\/)(gif|jpe?g|png)$/i,
            maxFileSize: 999000,
            // Enable image resizing, except for Android and Opera,
            // which actually support image resizing, but fail to
            // send Blob objects via XHR requests:
            disableImageResize: /Android(?!.*Chrome)|Opera/
                .test(window.navigator.userAgent),
            previewMaxWidth: 100,
            previewMaxHeight: 100,
            previewCrop: true
        }).on('fileuploadadd', function (e, data) {
            console.log('fileuploadadd')

            data.context = $('<div/>').appendTo('#files');
            $.each(data.files, function (index, file) {
                var node = $('<p/>')
                    .append($('<span/>').text(file.name));
                if (!index) {
                    node
                        .append('<br>')
                        .append(uploadButton.clone(true).data(data));
                }
                node.appendTo(data.context);
            });
        }).on('fileuploadprocessalways', function (e, data) {
            var index = data.index,
                file = data.files[index],
                node = $(data.context.children()[index]);
            if (file.preview) {
                node
                    .prepend('<br>')
                    .prepend(file.preview);
            }
            if (file.error) {
                node
                    .append('<br>')
                    .append($('<span class="text-danger"/>').text(file.error));
            }
            if (index + 1 === data.files.length) {
                data.context.find('button')
                    .text('Upload')
                    .prop('disabled', !!data.files.error);
            }
        }).on('fileuploadprcessstart', function (e) {
            console.log('fileuploadprcessstart')
            $('#progressall .progress-bar').css(
                'width', 0
            );
        }).on('fileuploadprogressall', function (e, data) {
            var progress = parseInt(data.loaded / data.total * 100, 10);
            $('#progressall .progress-bar').css(
                'width',
                progress + '%'
            );
        }).on('fileuploadprogress', function (e, data) {
            var progress = parseInt(data.loaded / data.total * 100, 10);
            $('#progress .progress-bar').css(
                'width',
                progress + '%'
            );
        }).on('fileuploaddone', function (e, data) {
            console.log('fileuploaddone')
            $.each(data.result.files, function (index, file) {
                if (file.url) {
                    var link = $('<a>')
                        .attr('target', '_blank')
                        .prop('href', file.url);
                    $(data.context.children()[index])
                        .wrap(link);
                } else if (file.error) {
                    var error = $('<span class="text-danger"/>').text(file.error);
                    $(data.context.children()[index])
                        .append('<br>')
                        .append(error);
                }
            });
        }).on('fileuploadfail', function (e, data) {
            console.log('fileuploadfail')
            $.each(data.files, function (index) {
                var error = $('<span class="text-danger"/>').text('File upload failed.');
                $(data.context.children()[index])
                    .append('<br>')
                    .append(error);
            });
        }).prop('disabled', !$.support.fileInput)
            .parent().addClass($.support.fileInput ? undefined : 'disabled');


    }

    togglePreview(e) {
        var bool = e.target.getAttribute('value')
        if(bool === '1') {
            this.setState({togglePreview: true})
        } else {
            this.setState({togglePreview: false})
        }

    }

    render() {

        var post = this.props.PostStore.post;
        return (
            <div>

                { this.state.togglePreview && <Editor /> }

                { !this.state.togglePreview &&
                <div style={styles.widget.container4}>
                    <div style={styles.widget.listObj}>
                        <div
                            dangerouslySetInnerHTML={{ __html: md.render(post, {sanitize: true}) }}
                        ></div>
                    </div>
                </div>
                }

                <div>
                    <input type="text" name="title" /><br />
                    <input ref="fileupload" id="fileupload" type="file" name="files[]" multiple />

                    <div id="blueimp-gallery" className="blueimp-gallery">
                        <div className="slides"></div>
                        <h3 className="title"></h3>
                        <a className="prev">‹</a>
                        <a className="next">›</a>
                        <a className="close">×</a>
                        <a className="play-pause"></a>
                        <ol className="indicator"></ol>
                    </div>

                    <div id="progressall" className="progress">
                        <div className="progress-bar progress-bar-success"></div>
                    </div>
                    <div id="progress" className="progress">
                        <div className="progress-bar progress-bar-success"></div>
                    </div>

                    <div id="files" className="files"></div>
                </div>

            </div>

        )
    }

}

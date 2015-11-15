/**
 * Created by dobyeongsu on 2015. 10. 15..
 */
import React, { Component } from 'react';
import path from 'path';

export default class HTML extends Component {
    render() {
        return (
            <html>
                <head>
                    <link rel="stylesheet" href="/statics/font-awesome/css/font-awesome.min.css" />
                    <link rel="stylesheet" href="/statics/bootstrap/dist/css/bootstrap.css" />
                    <link rel="stylesheet" href="/statics/non-responsive.css" />
                    <link rel="stylesheet" href="/statics/codes/github.css" />
                    <link rel="stylesheet" href="/statics/style.css" />
                    <link rel="stylesheet" href="/statics/nanoscroller.css" />
                    <script src='https://www.google.com/recaptcha/api.js' async defer></script>
                </head>

                <body>
                    <div id="app">
                        CONTENT
                    </div>
                    <script src="/statics/jquery/dist/jquery.js"></script>
                    <script src="/statics/jquery.nanoscroller.js"></script>

                    <script src="/statics/blueimp-file-upload/js/vendor/jquery.ui.widget.js"></script>
                    <script src="/statics/blueimp-load-image/js/load-image.all.min.js"></script>
                    <script src="/statics/blueimp-canvas-to-blob/js/canvas-to-blob.min.js"></script>
                    <script src="/statics/blueimp-file-upload/js/jquery.iframe-transport.js"></script>
                    <script src="/statics/blueimp-file-upload/js/jquery.fileupload.js"></script>
                    <script src="/statics/blueimp-file-upload/js/jquery.fileupload-process.js"></script>
                    <script src="/statics/blueimp-file-upload/js/jquery.fileupload-image.js"></script>
                    <script src="/statics/blueimp-file-upload/js/jquery.fileupload-audio.js"></script>
                    <script src="/statics/blueimp-file-upload/js/jquery.fileupload-video.js"></script>
                    <script src="/statics/blueimp-file-upload/js/jquery.fileupload-validate.js"></script>

                    <script src="/statics/bundle.js"></script>
                </body>
            </html>
        )
    }
}
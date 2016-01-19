/**
 * Created by dobyeongsu on 2015. 10. 15..
 */
import React, { Component } from 'react/dist/react.min.js';
import path from 'path';

export default class HTML extends Component {
  render() {
    return (
      <html>
      <head>
        <link rel="stylesheet" href="/statics/font-awesome/css/font-awesome.min.css"/>
        <link rel="stylesheet" href="/statics/bootstrap/dist/css/bootstrap.css"/>
        <link rel="stylesheet" href="/statics/non-responsive.css"/>
        <link rel="stylesheet" href="/statics/nanoscroller.css"/>
        <link rel="stylesheet" href="/statics/blueimp-gallery/css/blueimp-gallery.min.css"/>

        <link rel="stylesheet" href="/statics/medium-editor/dist/css/medium-editor.min.css"/>
        <link rel="stylesheet" href="/statics/medium-editor/dist/css/themes/default.css" id="medium-editor-theme"/>
        <link rel="stylesheet"
              href="/statics/medium-editor-insert-plugin/dist/css/medium-editor-insert-plugin.min.css"/>

        <link rel="stylesheet" href="/statics/style.css"/>
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
      <script src="/statics/blueimp-gallery/js/blueimp-gallery.min.js"></script>

      <script src="/statics/medium-editor/dist/js/medium-editor.js"></script>
      <script src="/statics/handlebars/handlebars.runtime.min.js"></script>
      <script src="/statics/jquery-sortable/source/js/jquery-sortable-min.js"></script>
      <script src="/statics/medium-editor-insert-plugin/dist/js/medium-editor-insert-plugin.js"></script>

      <script src="/statics/bundle.js"></script>
      </body>
      </html>
    )
  }
}
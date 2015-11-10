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
                    { /*<link rel="stylesheet" type="text/stylesheet" href="/bootstrap/dist/css/bootstrap.min.css" />*/ }
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css" />
                    <link rel="stylesheet" href="/statics/bootstrap/dist/css/bootstrap.css" />
                    <link rel="stylesheet" href="/statics/non-responsive.css" />
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
                    <script src="/statics/bundle.js"></script>
                </body>
            </html>
        )
    }
}
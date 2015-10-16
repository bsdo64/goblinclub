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
                    <link rel="stylesheet" href="/bootstrap/dist/css/bootstrap.min.css" />
                    <link rel="stylesheet" href="/nanoscroller.css" />

                </head>

                <body>
                    <div id="app"></div>
                    <script src="bundle.js"></script>
                </body>
            </html>
        )
    }
}
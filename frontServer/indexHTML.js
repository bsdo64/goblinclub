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
                    { /*Latest compiled and minified CSS*/ }
                    <link rel="stylesheet" type="text/stylesheet" href="/bootstrap/dist/css/bootstrap.min.css" />
                </head>

                <body>
                    <div id="app"></div>
                    <script src="bundle.js"></script>
                </body>
            </html>
        )
    }
}
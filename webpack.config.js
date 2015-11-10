/**
 * Created by dobyeongsu on 2015. 10. 15..
 */
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');

module.exports = {
    devtool: 'inline-source-map',
    entry: {
        'main': [
            "./scripts/entry.js"
        ]
    },
    output: {
        path: __dirname + '/_dist',
        filename: "bundle.js",
        publicPath: 'http://localhost:3002/_dist'
    },
    module: {
        loaders: [
            { test: /\.jsx?$/, loader: "babel", query: {stage: 0} },
            { test: /\.scss$/, loaders: ["style", "css", "sass"] },
            { test: /\.css$/, loader: "style-loader!css-loader" }
        ]
    },
    plugins: [
        new ExtractTextPlugin("bundle.css", {
            allChunks: true
        }),
        new webpack.DefinePlugin({
            "process.env": {
                BROWSER: JSON.stringify(true)
            }
        })
    ]
};

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
    resolve: {
        modulesDirectories: ['node_modules', 'bower_components'],
        extensions: ['', '.js', '.css', '.json']
    },
    module: {
        loaders: [
            { test: /\.json$/, loader: "json" },
            {
                test: /\.jsx?$/,
                loader: "babel-loader",
                query: {
                    presets: ['es2015', 'stage-0', 'react']
                },
                exclude: [/node_modules/, /bower_components/]},
            { test: /\.scss$/, loaders: ["style", "css", "sass"] },
            { test: /\.css$/, loader: "style-loader!css-loader" }
        ],
        noParse: [/autoit\.js$/]
    },
    node: {
        fs: "empty"
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

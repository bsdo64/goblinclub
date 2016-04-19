/**
 * Created by dobyeongsu on 2015. 10. 15..
 */
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

// multiple extract instances
var extractCSS = new ExtractTextPlugin('bundle.css');

module.exports = {
  entry: {
    'main': [
      __dirname + "/scripts/entry.js"
    ]
  },
  output: {
    path: __dirname + '/_dist',
    //filename: "[name]-[hash].js",
    //chunkFilename: "[name]-[chunkhash].js",
    filename: "bundle.js",
    publicPath: '/statics/'
  },
  externals: {
    // require("jquery") is external and available
    //  on the global var jQuery
    "jquery": "jQuery"
  },
  resolve: {
    modulesDirectories: ['node_modules', 'bower_components'],
    extensions: ['', '.js', '.css', '.json'],
    root: [path.join(__dirname, "bower_components")]
  },
  module: {
    loaders: [
      {test: /\.json$/, loader: "json"},
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        query: {
          presets: ['es2015', 'react', 'stage-0']
        },
        exclude: [/node_modules/, /bower_components/]
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader")
      },
      // Optionally extract less files
      // or any other compile-to-css language
      {
        test: /\.scss/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
      }
    ],
    noParse: [/autoit\.js$/]
  },
  node: {
    fs: "empty",
    net: "empty"
  },
  plugins: [
    //new ExtractTextPlugin("[name]-[chunkhash].css"),
    new ExtractTextPlugin("bundle.css"),

    new HtmlWebpackPlugin({
      template: __dirname + '/frontServer/index.html'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        // This has effect on the react lib size
        'NODE_ENV': JSON.stringify('development'),

        'BROWSER': JSON.stringify(true)
      }
    })
//new webpack.optimize.UglifyJsPlugin(),
    //new webpack.OldWatchingPlugin(),
    //new webpack.optimize.OccurenceOrderPlugin(),
    //new webpack.optimize.DedupePlugin(),
    //new webpack.optimize.MinChunkSizePlugin({minChunkSize: 10000}),
    //new webpack.optimize.LimitChunkCountPlugin({maxChunks: 15})
  ]
};

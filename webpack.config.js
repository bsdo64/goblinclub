/**
 * Created by dobyeongsu on 2015. 10. 15..
 */
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

module.exports = {
  devtool: 'cheap-source-map',
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
  resolve: {
    modulesDirectories: ['node_modules', 'bower_components'],
    extensions: ['', '.js', '.css', '.json']
  },
  module: {
    loaders: [
      {test: /\.json$/, loader: "json"},
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        query: {
          presets: ['es2015', 'stage-0', 'react']
        },
        exclude: [/node_modules/, /bower_components/]
      },
      {test: /\.scss$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader", "sass-loader")},
      {test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader")}
    ],
    noParse: [/autoit\.js$/]
  },
  node: {
    fs: "empty"
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
        'NODE_ENV': JSON.stringify('production'),

        'BROWSER': JSON.stringify(true)
      }
    }),
    //new webpack.optimize.UglifyJsPlugin(),
    //new webpack.OldWatchingPlugin(),
    //new webpack.optimize.OccurenceOrderPlugin(),
    //new webpack.optimize.DedupePlugin(),
    //new webpack.optimize.MinChunkSizePlugin({minChunkSize: 10000}),
    //new webpack.optimize.LimitChunkCountPlugin({maxChunks: 15})
  ]
};

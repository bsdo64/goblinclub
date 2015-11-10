var Express = require('express');
var webpack = require('webpack');

var webpackConfig = require('./webpack.config');
var compiler = webpack(webpackConfig);

var host = process.env.HOST || 'localhost';
var port = 3002;
var serverOptions = {
    contentBase: 'http://' + host + ':' + port,
    quiet: true,
    noInfo: true,
    hot: true,
    inline: true,
    lazy: false,
    publicPath: webpackConfig.output.publicPath,
    headers: {'Access-Control-Allow-Origin': '*'},
    stats: {colors: true}
};

var app = new Express();

app.use(require('webpack-dev-middleware')(compiler, serverOptions));

app.listen(port, function onAppListening(err) {
    if (err) {
        console.error(err);
    } else {
        console.info('==> 🚧  Webpack development server listening on port %s', port);
    }
});


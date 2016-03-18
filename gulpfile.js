var gulp = require("gulp");
var gutil = require("gulp-util");
var concat = require("gulp-concat");
var filter = require("gulp-filter");
var uglify = require('gulp-uglify');
var mainBowerFiles = require('main-bower-files');

var webpack = require("webpack");
var webpackConfig = require("./webpack.config.js");

// Build and watch cycle (another option for development)
// Advantage: No server required, can run app from filesystem
// Disadvantage: Requests are not blocked until bundle is available,
//               can serve an old app on refresh
gulp.task("default", ["javascript:concat", "webpack:build-dev"], function() {
  gulp.watch(["scripts/**/*", "frontServer/**/*"], ["javascript:concat", "webpack:build-dev"]);
});

// modify some webpack config options
var myDevConfig = Object.create(webpackConfig);
myDevConfig.devtool = 'cheap-source-map';
myDevConfig.debug = true;

// create a single instance of the compiler to allow caching
var devCompiler = webpack(myDevConfig);

gulp.task("webpack:build-dev", function(callback) {
  // run webpack
  devCompiler.run(function(err, stats) {
    if(err) {
      throw new gutil.PluginError("webpack:build-dev", err);
    }
    gutil.log("[webpack:build-dev]", stats.toString({
      colors: true
    }));
    callback();
  });
});

gulp.task("javascript:concat", function(callback) {
  // run webpack
  return gulp.src(mainBowerFiles(/* options */).concat('js/*.js'))
    .pipe(filter('*.js'))
    .pipe(concat('vendor.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('_dist/js'));
});
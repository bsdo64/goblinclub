/**
 * Created by dobyeongsu on 2015. 12. 2..
 */
var babel = require('babel-core');

module.exports = {
  process: function (src, filename) {
    if (filename.indexOf('node_modules') === -1) {
      return babel.transform(src, {
        filename   : filename,
        presets	   : ["es2015", "react", "stage-0"],
        retainLines: true,
        auxiliaryCommentBefore: "istanbul ignore next"
      }).code;
    }
    return src;
  }
};
/**
 * Created by dobyeongsu on 2015. 12. 2..
 */
var babel = require('babel-core');

module.exports = {
  process: function (src, filename) {
    var stage = process.env.BABEL_JEST_STAGE || 2;

    if (filename.indexOf('node_modules') === -1 || babel.canCompile(filename)) {
      return babel.transform(src, {
        filename   : filename,
        stage      : stage,
        retainLines: true,
        auxiliaryCommentBefore: "istanbul ignore next",
        compact    : true

      }).code;
    }
    return src;
  }
};
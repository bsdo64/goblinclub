/**
 * Created by dobyeongsu on 2015. 10. 15..
 */
module.exports = {
    entry: "./scripts/entry.js",
    output: {
        path: __dirname + '/_dist',
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.jsx?$/, loader: "babel", query: {stage: 0} }
        ]
    }
};

const path = require('path');

module.exports = {
  module: {
    loaders: [{
      test: /\.md$/,
      loader: "raw"
    }, {
      test: /\.json$/,
      loader: 'json'
    }, {
      test: /\.css$/,
      exclude: 'storybook-readme',
      loader: 'style!css'
    }, {
      test: /\.woff(2)?/,
      loader: "url-loader?limit=10000&mimetype=application/font-woff"
    }, {
      test: /\.(ttf|eot|svg)/,
      loader: "file-loader"
    }]
  }
};
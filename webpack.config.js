const path = require('path');

module.exports = {
  entry: './public/javascripts/index.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/public')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env']
          }
        },
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '*']
  }
};
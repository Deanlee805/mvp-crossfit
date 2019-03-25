const path = require('path');

module.exports = {
  entry: './client/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'public')
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader"
      }
    }, {
      test: /\.(png|jpg)$/,
      exclude: /(node_modules)/,
      loader: 'file-loader'
    }]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
};
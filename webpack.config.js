var path = require('path');

module.exports = {  
  entry: path.resolve(__dirname, './src/client/entry.js'),
  output: {
    path: path.resolve(__dirname, './dist/public'),
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
};
var path = require('path');

module.exports = {  
  entry: { 
    home: './src/client/js/home.js',
    maps: './src/client/js/maps.js'
  },
  output: {
    path: path.resolve(__dirname, './dist/public/js'),
    filename: '[name].bundle.js'
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
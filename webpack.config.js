var path = require('path');

module.exports = {  
  entry: { 
    home: './src/client/home.js',
    maps: './src/client/maps.js'
  },
  output: {
    path: path.resolve(__dirname, './dist/public'),
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
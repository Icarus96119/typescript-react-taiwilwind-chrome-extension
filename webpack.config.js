const path = require('path');
const Webpack = require('webpack');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',

  entry: {
    popup: './src/popup.tsx',
  },

  plugins: [
    new Webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ],

  output: {
    path: path.resolve(__dirname, 'dist/js'),
    filename: '[name].js'
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },

  module: {
    rules: [
      {test: /\.tsx?$/, loader: 'ts-loader'},
      {test: /\.css$/, use: ['style-loader', 'css-loader']}
    ]
  },
};

const { resolve } = require('path');
const webpack = require('webpack');


module.exports = {
  entry: [
    'react-hot-loader/patch',
    // activate HMR for React

    'webpack-dev-server/client?http://localhost:8080',
    // bundle the client for webpack-dev-server
    // and connect to the provided endpoint

    'webpack/hot/only-dev-server',
    // bundle the client for hot reloading
    // only- means to only hot reload for successful updates

    './src/index.js',
    // the entry point of our app
  ],
  output: {
    filename: 'bundle.js',
    // the output bundle

    path: resolve(__dirname, 'public'),

    publicPath: '/'
    // necessary for HMR to know where to load the hot update chunks
  },

  devtool: 'eval',

  resolve: {
    extensions: ['.js']
  },

  devServer: {
    hot: true,
    // enable HMR on the server

    contentBase: resolve(__dirname, 'public'),
    // match the output path

    publicPath: '/',
    // match the output `publicPath`
  },

  stats: {
    colors: true,
    reasons: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          "babel-loader",
        ],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader?modules',
          {
            loader: 'postcss-loader',
            options: {
              plugins: function () {
                return [
                  require('autoprefixer')
                ];
              }
            }
          }
        ],
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ],
};

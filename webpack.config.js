const webpack = require('webpack');
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const resolve = dir => path.join(__dirname, '..', dir);

module.exports = {
  entry: {
    app: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'build/'),
    publicPath: 'build/',
    filename: '[name].min.js',
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src')]
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', {
          loader: 'sass-loader',
          options: {
            outputStyle: 'compressed'
          }
        }]
      },
      {
        test: /\.(jpg|png|gif)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'img/'
        }
      }
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'initial'
        }
      }
    }
  },
  plugins: [
    new VueLoaderPlugin()
  ],
  devServer: {
    contentBase: './',
    compress: true,
    port: 9000,
    stats: {
      assets: false,
      builtAt: false,
      entrypoints: false,
      hash: false,
      modules: false,
      timings: false,
      version: false
    }
  },
  devtool: 'source-map'
};
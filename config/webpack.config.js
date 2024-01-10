'use strict';

const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const PATHS = require('./paths');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');

// Merge webpack configuration files
const config = (env, argv) =>
  merge(common, {
    entry: {
      popup: PATHS.src + '/popup.js',
      content_AccessToken: PATHS.src + '/content_AccessToken.js',
      background: PATHS.src + '/background.js',
      options: PATHS.src + '/options.js',
      get_facebook_info: PATHS.src + '/modules/get_facebook_info.js',
      facebook_login: PATHS.src + '/facebook_login.js',
      autoDownload_Pixabay: PATHS.src + '/autoDownload_Pixabay.js',
      api: PATHS.src + '/api.js',
      Registration: PATHS.public + '/components/Registration.jsx',
      LogIn: PATHS.public + '/components/LogIn.jsx',
      userDashboard: PATHS.public + '/components/userDashboard.jsx',
      indexPopup: PATHS.public + '/indexPopup.js',
      Theme: PATHS.public + '/components/Theme.jsx',
      goPremiumFooter: PATHS.public + '/components/modules/goPremiumFooter.jsx',
    },

    module: {
      rules: [
        {
          test: /\.jsx$||\.ts$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react', "@babel/preset-typescript"]
            }
          }
        },
          {
          test: /\.css$/,
          use: [
            MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"
          ],
          }
      ]
    },
    devtool: argv.mode === 'production' ? false : 'source-map',
    //devtool: argv.mode === 'production' ? false : 'source-map',
  });

module.exports = config;

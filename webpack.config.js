const { extension } = require('mime');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
// numatytisis konfiguracijos objektas
module.exports = {
  mode: 'development',
  devtool: 'source-map',

  output: {
    assetModuleFilename: 'images/[hash][ext][query]',
  },

  module: {
    rules: [
      {
        test: /\.(jpe?g|png|svg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        // weback skaito masyva nuo galo
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        // taikomes i failus su .js ir .jsx prievardziu
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },

  plugins: [new MiniCssExtractPlugin()],

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  devServer: {
    hot: true,
    static: {
      directory: path.join(__dirname, 'dist'),
    },
  },
};

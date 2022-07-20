MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        // webpack skaito masyva nuo galo
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin()],

  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
  },
};

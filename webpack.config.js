//webpack 基础配置示例
const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const { WebPlugin } = require("web-webpack-plugin");
module.exports = {
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].[hash:6].js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: ["css-loader"],
        }),
      },
      {
        test: /\.png$/,
        use: ["file-loader"],
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin({
      filename: `[name].[hash:6].css`,
    }),
    new WebPlugin({
      template: "template.html",
      filename: "index.html",
      requires: ["main"],
    }),
  ],
  devtool: 'source-map'
};

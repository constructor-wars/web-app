const path = require("path");
const webpack = require("webpack");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MonacoWebpackPlugin = require("monaco-editor-webpack-plugin");

module.exports = {
  entry: {
    app: "./src/index.js",
    monaco: "./src/Containers/MonacoContainer.js"
  },
  devtool: "source-map",
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist")
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.IgnorePlugin(
      /^((fs)|(path)|(os)|(crypto)|(source-map-support))$/,
      /vs(\/|\\)language(\/|\\)typescript(\/|\\)lib/
    ),
    new CleanWebpackPlugin(["dist"]),
    new HtmlWebpackPlugin({ template: "./index.html" }),
    new MonacoWebpackPlugin({
      languages: ["javascript, json, markdown"],
      features: [
        "clipboard",
        "comment",
        "contextmenu",
        "coreCommands",
        "cursorUndo",
        "dnd",
        "find",
        "format",
        "hover",
        "inPlaceReplace",
        "iPadShowKeyboard",
        "linesOperations",
        "links",
        "parameterHints",
        "quickCommand",
        "quickFixCommands",
        "smartSelect",
        "suggest",
        "wordHighlighter",
        "wordOperations"
      ]
    })
  ]
};

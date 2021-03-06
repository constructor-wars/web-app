const path = require("path");
const webpack = require("webpack");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MonacoWebpackPlugin = require("monaco-editor-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  devtool: "source-map",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.md$/,
        use: [
          {
            loader: "html-loader"
          },
          {
            loader: "markdown-loader"
          }
        ]
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              publicPath: "/dist/"
            }
          }
        ]
      },
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
    new CopyWebpackPlugin(["./static"]),
    new CleanWebpackPlugin(["dist"]),
    new webpack.ContextReplacementPlugin(
      /monaco-editor(\\|\/)esm(\\|\/)vs(\\|\/)editor(\\|\/)common(\\|\/)services/,
      __dirname
    ),
    new MonacoWebpackPlugin({
      languages: ["javascript, json, markdown, html, css"],
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

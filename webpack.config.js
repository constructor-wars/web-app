const path = require("path");
const MonacoWebpackPlugin = require("monaco-editor-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  devtool: "source-map",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "static")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: require.resolve("babel-loader")
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
    new MonacoWebpackPlugin({
      languages: ["javascript"]
    })
  ]
};

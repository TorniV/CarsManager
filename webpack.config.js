const path = require("path");
const APP_DIR = path.resolve(__dirname, "sec");
const OUTPUT_DIR = path.resolve(__dirname, "dist");

const config = {
  entry: APP_DIR + "App.js",
  devServer: {
    contentBase: OUTPUT_DIR,
    port: 9000,
    open: true,
    historyApiFallback: true
  },
  output: {
    path: OUTPUT_DIR,
    filename: "main.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};

module.exports = config;

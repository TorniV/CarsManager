const path = require("path");
// const APP_DIR = path.resolve(__dirname, "src");
const OUTPUT_DIR = path.resolve(__dirname, "dist");

const config = {
  entry: "./index.js",
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

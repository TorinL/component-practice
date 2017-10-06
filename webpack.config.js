var path = require("path");

var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "src");

var config = {
  entry: SRC_DIR + "/app/index.js",
  output: {
    path: DIST_DIR + "/app",
    filename: "bundle.js",
    publicPath: "/app/"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: SRC_DIR,
        loader: "babel-loader",
        query: {
          presets: ["react", "env"]
        }
      },
      {
				test: /\.css$/,
				loaders: [
					'style-loader',
					'css-loader?modules=true,localIdentName=[name]__[local]__[hash:base64:5],camelCase=true'
				]
			},
    ]
  }
}

module.exports = config;

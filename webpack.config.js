const path = require("path");
const assets = require("./build/asset-manifest.json");

const basePath = path.join(__dirname, "build");
const lModules = assets.entrypoints.map((f) => path.resolve(basePath, f));

module.exports = {
  mode: "production",
  entry: {
    main: lModules,
  },
  output: {
    filename: "bundle_auth0dev_1_1.min.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: true,
            },
          },
        ],
        include: /\.module\.css$/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
        exclude: /\.module\.css$/,
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["script-loader"],
      },
      {
        test: /\.ttf$/,
        use: [
          {
            loader: "ttf-loader",
            options: {
              name: "./font/[hash].[ext]",
            },
          },
        ],
      },
    ],
  },
  // We need this or else, because we don't have sourcemaps
  // we mess up debugging
  devtool: "eval",
  // plugins: [
  //   new UglifyJsPlugin(),
  // ]
};

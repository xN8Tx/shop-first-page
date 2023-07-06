const path = require("path");

const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

const isDev = process.env.NODE_ENV === "development";
const src = path.resolve(__dirname, "src");
const dist = path.resolve(__dirname, "dist");

const optimization = () => {
  const config = {
    runtimeChunk: "single",
    splitChunks: {
      chunks: "all",
    },
  };

  if (isDev) return config;

  config.minimizer = [new CssMinimizerPlugin(), new TerserPlugin()];
  return config;
};

module.exports = {
  mode: isDev ? "development" : "production",
  entry: src,
  output: {
    path: dist,
    filename: "[name].min.js",
    clean: true,
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: src + "/index.html",
      minify: {
        collapseWhitespace: !isDev,
      },
    }),
    new MiniCssExtractPlugin({
      filename: "[name].min.css",
    }),
  ],
  devtool: isDev ? "source-map" : false,
  module: {
    rules: [
      {
        test: /\.(png|jpg|webp|svg)$/,
        type: "asset/resource",
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.js$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
            },
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".js"],
    alias: {
      "@": src,
      "@s": src + "/styles",
    },
  },
  optimization: optimization(),
  devServer: {
    port: 3000,
    liveReload: isDev,
    open: {
      app: {
        name: "google chrome",
        arguments: ["--new-window"],
      },
    },
    static: {
      directory: src + "/index.html",
      watch: true,
    },
  },
};

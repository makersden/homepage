import path from "path";

import webpack from "webpack";
import ExtractTextPlugin from "extract-text-webpack-plugin";
import DashboardPlugin from "webpack-dashboard/plugin";
import { phenomicLoader } from "phenomic";
import PhenomicLoaderFeedWebpackPlugin from "phenomic/lib/loader-feed-webpack-plugin";

import pkg from "./package.json";

export default (config = {}) => {
  const dev = config.dev;
  console.log(dev);
  return {
    ...(config.dev && {
      devtool: "#source-map"
    }),
    module: {
      noParse: /\.min\.js/,
      rules: [
        // *.md => consumed via phenomic special webpack loader
        // allow to generate collection and rss feed.
        {
          // phenomic requirement
          test: /\.(md|markdown)$/,
          loader: phenomicLoader,
          query: {
            context: path.join(__dirname, config.source)
            // plugins: [
            //   ...require("phenomic/lib/loader-preset-markdown").default
            // ]
            // see https://phenomic.io/docs/usage/plugins/
          }
        },

        // *.json => like in node, return json
        // (not handled by webpack by default)
        {
          test: /\.json$/,
          loader: "json-loader"
        },

        // *.js => babel + eslint
        {
          test: /\.jsx?$/,
          include: [
            path.resolve(__dirname, "scripts"),
            path.resolve(__dirname, "src")
          ],
          loaders: config.dev
            ? [
                "babel-loader?cacheDirectory",
                `eslint-loader${config.dev ? "?emitWarning" : ""}`
              ]
            : ["babel-loader?cacheDirectory"]
        },

        // ! \\
        // by default *.css files are considered as CSS Modules
        // And *.global.css are considered as global (normal) CSS

        // *.css => CSS Modules
        {
          test: /\.(scss|sass|css)$/,
          exclude: /\.global\.(scss|sass|css)$/,
          include: path.resolve(__dirname, "src"),
          loader: ExtractTextPlugin.extract({
            fallbackLoader: "style-loader",
            loader: [
              {
                loader: "css-loader",
                query: {
                  modules: true,
                  localIdentName: config.production
                    ? "[hash:base64:5]"
                    : "[path][name]--[local]--[hash:base64:5]"
                }
              },
              {
                loader: "sass-loader"
              }
            ]
          })
        },
        {
          test: /\.css$/,
          loader: "style-loader!css-loader?modules",
          include: /flexboxgrid/
        },
        {
          test: /\.css$/,
          // depending on your need, you might need to scope node_modules
          // for global CSS if you want to keep CSS Modules by default
          // for your own CSS. If so, uncomment the line below
          include: path.resolve(__dirname, "node_modules"),
          loader: ExtractTextPlugin.extract({
            fallbackLoader: "style-loader",
            loader: [
              "css-loader",
              {
                loader: "sass-loader"
              }
            ]
          })
        },
        // copy assets and return generated path in js
        {
          test: /\.(html|ico|jpe?g|png|gif)$/,
          loader: "file-loader",
          query: {
            name: "[path][name].[hash].[ext]",
            context: path.join(__dirname, config.source)
          },
          include: [
            path.resolve("assets", "images"),
            path.resolve("node_modules", "slick-carousel")
          ]
        },
        // svg as raw string to be inlined
        // {
        //   test: /\.svg$/,
        //   loader: 'raw-loader',
        //   exclude: path.resolve('assets', 'fonts'),
        // },
        {
          test: /\.svg$/,
          loader: "url-loader?limit=10000",
          include: [
            path.resolve("assets"),
            path.resolve("node_modules", "devicon", "fonts"),
            path.resolve("node_modules", "slick-carousel", "slick", "fonts")
          ]
        },
        {
          test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
          loader: "url?limit=10000&mimetype=application/font-woff",
          include: [
            path.resolve("assets", "fonts"),
            path.resolve("node_modules", "devicon", "fonts"),
            path.resolve("node_modules", "slick-carousel", "slick", "fonts")
          ]
        },
        {
          test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
          loader: "url?limit=10000&mimetype=application/font-woff",
          include: [
            path.resolve("assets", "fonts"),
            path.resolve("node_modules", "devicon", "fonts"),
            path.resolve("node_modules", "slick-carousel", "slick", "fonts")
          ]
        },
        {
          test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
          loader: "url?limit=10000&mimetype=application/octet-stream",
          include: [
            path.resolve("assets", "fonts"),
            path.resolve("node_modules", "devicon", "fonts"),
            path.resolve("node_modules", "slick-carousel", "slick", "fonts")
          ]
        },
        {
          test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
          loader: "file",
          include: [
            path.resolve("assets", "fonts"),
            path.resolve("node_modules", "devicon", "fonts"),
            path.resolve("node_modules", "slick-carousel")
          ]
        }
      ]
    },

    plugins: [
      new PhenomicLoaderFeedWebpackPlugin({
        // here you define generic metadata for your feed
        feedsOptions: {
          title: pkg.name,
          site_url: pkg.homepage
        },
        feeds: {
          // here we define one feed, but you can generate multiple, based
          // on different filters
          "feed.xml": {
            collectionOptions: {
              filter: { layout: "Post" },
              sort: "date",
              reverse: true,
              limit: 20
            }
          }
        }
      }),

      // webpack 2
      new ExtractTextPlugin({
        filename: "[name].[hash].css",
        disable: config.dev
      }),

      new webpack.DefinePlugin({
        __PRODUCTION__: config.production
      }),

      ...(config.production && [
        // webpack 2
        // DedupePlugin does not work correctly with Webpack 2, yet ;)
        // https://github.com/webpack/webpack/issues/2644
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } })
      ]),

      ...(config.dev && [
        new DashboardPlugin({ port: 3333 }),
        new webpack.NoErrorsPlugin()
      ])
    ],

    output: {
      path: path.join(__dirname, config.destination),
      publicPath: config.baseUrl.pathname,
      filename: "[name].[hash].js"
    },

    resolve: { extensions: [".js", ".json"] },
    resolveLoader: { modules: [path.join(__dirname, "node_modules")] }
  };
};

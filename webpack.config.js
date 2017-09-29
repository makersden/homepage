import path from "path";

import webpack from "webpack";
import DashboardPlugin from "webpack-dashboard/plugin";

import pkg from "./package.json";

// note that this webpack file is exporting a "makeConfig" function
// which is used for phenomic to build dynamic configuration based on your needs
// see the end of the file if you want to export a default config
// (eg: if you share your config for phenomic and other stuff)
module.exports = (config = {}) => {
  const isDev = process.env.PHENOMIC_ENV === "development";
  const isProduction = process.env.PHENOMIC_ENV === "productionelopment";
  const isStatic = process.env.PHENOMIC_ENV === "static";
  return {
    ...(isDev && {
      devtool: "#cheap-module-eval-source-map"
    }),
    entry: {
      [config.bundleName]: [
        !isStatic && require.resolve("webpack-hot-middleware/client"),
        !isStatic && require.resolve("react-hot-loader/patch"),
        "./App.js"
      ].filter(item => item)
    },
    output: {
      publicPath: "/",
      path: path.join(process.cwd(), "docs"),
      ...(isStatic
        ? {
            filename: "phenomic/[name].[chunkhash:8].js",
            chunkFilename: "phenomic/[name].[chunkhash:8].chunk.js"
          }
        : {
            filename: "phenomic/[name].js",
            chunkFilename: "phenomic/[name].chunk.js"
          })
    },
    module: {
      noParse: /\.min\.js/,
      rules: [
        // "file" loader makes sure those assets get served by WebpackDevServer.
        // When you `import` an asset, you get its (virtual) filename.
        // In production, they would get copied to the `build` folder.
        // This loader don't uses a "test" so it will catch all modules
        // that fall through the other loaders.
        {
          // Exclude `js` files to keep "css" loader working as it injects
          // it's runtime that would otherwise processed through "file" loader.
          // Also exclude `html` and `json` extensions so they get processed
          // by webpacks internal loaders.
          exclude: [/\.js$/, /\.html$/, /\.json$/, /.svg$/],
          loader: require.resolve("file-loader"),
          options: {
            name: "static/media/[name].[hash:8].[ext]"
          }
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: require.resolve("babel-loader"),
          options: {
            babelrc: false,
            cacheDirectory: true,
            presets: [require.resolve("@phenomic/babel-preset")],
            plugins: [require.resolve("react-hot-loader/babel")]
          }
        },
        {
          test: /\.svg$/,
          include: /assets/,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "static/media/[name].[hash:8].[ext]"
              }
            },
            {
              loader: require.resolve("svgo-loader"),
              options: {
                plugins: [
                  {
                    removeAttrs: { attrs: "(stroke|fill|fill-rule|font-size)" }
                  },
                  { convertColors: true },
                  { convertPathData: true },
                  { removeViewBox: true },
                  { removeTitle: true },
                  { removeEmptyAttrs: true }
                ]
              }
            }
          ]
        }
      ]
    },

    plugins: [
      ...(isProduction && [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } })
      ]),
      isDev && new webpack.NoEmitOnErrorsPlugin(),
      !isStatic && new webpack.HotModuleReplacementPlugin()
    ].filter(item => item),

    resolve: {
      // react-native(-web) | react-primitives
      extensions: [".web.js", ".js", ".json"],
      alias: {
        "react-native": "react-native-web",

        // to ensure a single module is used
        react: path.resolve(path.join(process.cwd(), "node_modules", "react")),
        "react-dom": path.resolve(
          path.join(process.cwd(), "node_modules", "react-dom")
        ),
        "react-router": path.resolve(
          path.join(process.cwd(), "node_modules", "react-router")
        )
      }
    },

    // eslint-disable-next-line max-len
    // https://github.com/facebookincubator/create-react-app/blob/fbdff9d722d6ce669a090138022c4d3536ae95bb/packages/react-scripts/config/webpack.config.prod.js#L279-L285
    node: {
      fs: "empty",
      net: "empty",
      tls: "empty"
    }
  };
};

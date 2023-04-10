const {
  mergeWithCustomize,
  unique,
  merge,
  mergeWithRules,
} = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

const mergePlugins = mergeWithCustomize({
  customizeArray: unique(
    "plugins",
    ["ForkTsCheckerWebpackPlugin", "ReactRefreshWebpackPlugin"],
    (plugin) => plugin.constructor && plugin.constructor.name
  ),
});

const mergeRules = mergeWithRules({
  module: {
    rules: {
      test: "match",
      use: "merge",
    },
  },
});

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "mma",
    projectName: "app1",
    webpackConfigEnv,
    argv,
  });
  let config = defaultConfig;
  config = mergePlugins(config, {
    plugins: [
      new ForkTsCheckerWebpackPlugin({
        typescript: {
          mode: "readonly", // Assuming that your production build use tsc
          build: true, // This enables your app to build also dependencies (references), otherwise you will have typescript errors because your project won't be aware of your reference project
        },
      }),
      new ReactRefreshWebpackPlugin(),
    ],
  });

  config = mergeRules(config, {
    module: {
      rules: [
        {
          test: /\.(js|ts)x?$/,
          use: {
            options: {
              plugins: [require.resolve("react-refresh/babel")],
            },
          },
        },
      ],
    },
  });

  return config;
};

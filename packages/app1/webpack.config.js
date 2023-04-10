const { mergeWithRules, mergeWithCustomize } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");

const mergeRules = mergeWithRules({
  module: {
    rules: {
      test: "match",
      use: "replace",
    },
  },
});

// Overkilled usage of mergeWithCustomize
const removeForkTsCheckerWebpackPlugin = mergeWithCustomize({
  customizeArray(a, b, key) {
    if (key === "plugins") {
      return a.filter((plugin) => {
        return plugin.constructor?.name !== "ForkTsCheckerWebpackPlugin";
      });
    }
  },
});

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "mma",
    projectName: "app1",
    webpackConfigEnv,
    argv,
  });

  let config = mergeRules(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object
    module: {
      rules: [
        {
          test: /\.(js|ts)x?$/,
          exclude: /node_modules/,
          use: [
            {
              loader: "babel-loader",
            },
            {
              loader: "ts-loader",
              options: {
                projectReferences: true,
                transpileOnly: true,
              },
            },
          ],
        },
      ],
    },
  });

  config = removeForkTsCheckerWebpackPlugin(config, { plugins: [] });

  return config;
};

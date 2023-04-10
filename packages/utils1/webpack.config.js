const { mergeWithCustomize, unique } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-ts");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

const mergePlugins = mergeWithCustomize({
  customizeArray: unique(
    "plugins",
    ["ForkTsCheckerWebpackPlugin"],
    (plugin) => plugin.constructor && plugin.constructor.name
  ),
});

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "mma",
    projectName: "utils1",
    webpackConfigEnv,
    argv,
  });

  const config = mergePlugins(defaultConfig, {
    plugins: [
      new ForkTsCheckerWebpackPlugin({}), // Overrides the conf mode: "write-references" from singleSpaDefaults. We use in-memory readonly definition, assuming you run your production build with tsc.
    ],
  });

  return config;
};

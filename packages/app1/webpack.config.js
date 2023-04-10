const { mergeWithCustomize, unique } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");
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
    projectName: "app1",
    webpackConfigEnv,
    argv,
  });

  const config = mergePlugins(defaultConfig, {
    plugins: [
      new ForkTsCheckerWebpackPlugin({
        typescript: {
          mode: "readonly", // Assuming that your production build use tsc
          build: true, // This enables your app to build also dependencies (references), otherwise you will have typescript errors because your project won't be aware of your reference project
        },
      }),
    ],
  });

  return config;
};

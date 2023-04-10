const singleSpaDefaults = require("webpack-config-single-spa-react-ts");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "mma",
    projectName: "utils2",
    webpackConfigEnv,
    argv,
  });

  return defaultConfig;
};

const singleSpaDefaults = require("webpack-config-single-spa-ts");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "mma",
    projectName: "utils1",
    webpackConfigEnv,
    argv,
  });

  return defaultConfig;
};

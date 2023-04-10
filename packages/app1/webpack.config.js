const singleSpaDefaults = require("webpack-config-single-spa-react-ts");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "mma",
    projectName: "app1",
    webpackConfigEnv,
    argv,
  });

  return defaultConfig;
};

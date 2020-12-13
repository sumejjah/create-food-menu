const rewireStyledComponents = require("react-app-rewire-styled-components");

module.exports = function overrideConfig(config, env) {
  config = rewireStyledComponents(config, env);

  return config;
};
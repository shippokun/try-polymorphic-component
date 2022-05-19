const { mergeConfig } = require("vite");

module.exports = {
  stories: ["../src/**/stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  framework: "@storybook/react",
  core: { builder: "@storybook/builder-vite" },
  async viteFinal(config, { _configType }) {
    return mergeConfig(config, {});
  },
};

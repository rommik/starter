module.exports = {
  stories: [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-knobs",
    '@storybook/addon-actions',
    '@storybook/addon-storysource',
    "@storybook/addon-essentials",
    {
      name: "@storybook/preset-create-react-app",
      options: {
        configureJSX: true,
      },
    },
  ],
};

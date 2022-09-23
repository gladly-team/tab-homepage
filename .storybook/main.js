
// https://mui.com/guides/migration-v4/#storybook-emotion-with-v5
const path = require('path');
const toPath = (filePath) => path.join(process.cwd(), filePath);

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  // include images in deployment and mimick s3 filepath
  staticDirs: [{ from: '../src/img', to: '/static/media/src/img/' }],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    'storybook-addon-gatsby',
    '@storybook/html',
  ],
  core: {
    builder: 'webpack5',
  },
  webpackFinal: async (config) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          
          // // https://mui.com/guides/migration-v4/#storybook-emotion-with-v5
          '@emotion/core': toPath('node_modules/@emotion/react'),
          'emotion-theming': toPath('node_modules/@emotion/react'),
        },
      },
    };
  },
}

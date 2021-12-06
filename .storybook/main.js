module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  // include images in deployment and mimick s3 filepath
  staticDirs: [{ from: '../src/img', to: '/static/media/src/' }],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    'storybook-addon-gatsby',
    '@luigiminardim/storybook-addon-globals-controls',
  ],
  core: {
    builder: 'webpack5',
  },
}

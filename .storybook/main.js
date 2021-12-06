module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  staticDirs: [{ from: '../src/data/img', to: '/static/media/src/' }],
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

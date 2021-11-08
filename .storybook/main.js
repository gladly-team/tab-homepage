module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
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

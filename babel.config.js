var isRunningStorybook = process.env.RUNNING_STORYBOOK === 'true'
var useLooseMode = isRunningStorybook
module.exports = {
  presets: [
    // Storybook requires loose mode enabled.
    // https://github.com/babel/babel/issues/11622#issuecomment-644141879
    // Selenium (E2E testing) requires loose mode disabled or will
    // error with:
    // "TypeError: Cannot assign to read only property 'name' of function "
    ['@babel/preset-env', { loose: useLooseMode }],
    [
      'babel-preset-gatsby',
      {
        targets: {
          browsers: ['>0.5%, last 3 versions'],
        },
      },
    ],
  ],
  plugins: [
    // https://github.com/babel/babel/issues/11622#issuecomment-644141879
    ['@babel/plugin-proposal-class-properties', { loose: useLooseMode }],
    ['@babel/plugin-proposal-private-methods', { loose: useLooseMode }],
    [
      '@babel/plugin-proposal-private-property-in-object',
      { loose: useLooseMode },
    ],
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          src: './src/',
        },
      },
    ],
  ],
}

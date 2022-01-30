module.exports = {
  presets: [
    // https://github.com/babel/babel/issues/11622#issuecomment-644141879
    ['@babel/preset-env', { loose: true }],

    [
      'babel-preset-gatsby',
      {
        targets: {
          browsers: [
            '> 0.5%, last 2 versions, Firefox ESR, not dead, not IE 11, maintained node versions',
          ],
        },
      },
    ],
  ],
  plugins: [
    // Fix compatibility with Storybook:
    // https://github.com/babel/babel/issues/11622#issuecomment-644141879
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    ['@babel/plugin-proposal-private-methods', { loose: true }],
    ['@babel/plugin-proposal-private-property-in-object', { loose: true }],
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

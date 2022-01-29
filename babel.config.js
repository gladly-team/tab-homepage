module.exports = {
  presets: [
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
    ['@babel/plugin-proposal-private-methods', { loose: true }],
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

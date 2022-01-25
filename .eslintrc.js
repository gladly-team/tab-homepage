module.exports = {
  extends: ['airbnb', 'prettier'],
  plugins: ['prettier', 'react-hooks'],
  rules: {
    'prettier/prettier': 'error',
    'react/no-unescaped-entities': 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-one-expression-per-line': 0,

    // The jsx-wrap-multilines rule conflicts with Prettier.
    // https://github.com/prettier/prettier/issues/1009#issuecomment-286993938
    'react/jsx-wrap-multilines': [
      'error',
      {
        declaration: false,
        assignment: false,
      },
    ],
    'react-hooks/rules-of-hooks': 'error',
    'lines-around-comment': [
      'error',
      {
        beforeLineComment: true,
        allowBlockStart: true,
        allowBlockEnd: true,
        allowObjectStart: true,
        allowObjectEnd: true,
        allowArrayStart: true,
        allowArrayEnd: true,
        allowClassStart: true,
        allowClassEnd: true,
        applyDefaultIgnorePatterns: true,
      },
    ],
    'react-hooks/exhaustive-deps': 'error',
    'no-console': 'error',
  },
  overrides: [
    // Set Jest rules only for test files.
    // https://stackoverflow.com/a/49211283
    {
      files: ['**/*.test.js', '**/__mocks__/**/*.js'],
      extends: ['plugin:jest/recommended'],
      env: {
        jest: true,
      },
      plugins: ['jest'],
      rules: {
        'global-require': 0,
        'react/jsx-props-no-spreading': 0,
      },
    },
    {
      files: ['**/*.stories.{js,jsx}'],
      extends: ['airbnb', 'prettier'],
      plugins: ['prettier', 'react-hooks'],
      rules: {
        'global-require': 0,
        'react/jsx-props-no-spreading': 0,
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    allowImportExportEverywhere: true,
  },
  env: {
    es6: true,
  },
  globals: {
    // Polyfilled in Next.js 9.4.
    fetch: 'writable',
  },
  settings: {
    // Handle linting for absolute imports.
    'import/resolver': {
      alias: [['src', './src']],
    },
  },
}

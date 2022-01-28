module.exports = {
  extends: ['airbnb', 'prettier'],
  plugins: ['prettier', 'react-hooks'],
  rules: {
    /**
     *  START FIXME: rules disabled for incremental fixes
     * */
    'react/forbid-prop-types': 0,
    'import/no-extraneous-dependencies': 0,
    'react/require-default-props': 0,
    'react/default-props-match-prop-types': 0,
    'react/jsx-props-no-spreading': 0,
    'react/jsx-no-useless-fragment': 0,
    'jsx-a11y/alt-text': 0,
    'react/destructuring-assignment': 0,
    'react/prefer-stateless-function': 0,
    'no-plusplus': 0,
    'no-restricted-globals': 0,
    radix: 0,
    'new-cap': 0,
    'block-scoped-var': 0,
    'import/prefer-default-export': 0,
    'no-return-assign': 0,
    'no-underscore-dangle': 0,
    'no-redeclare': 0,
    'import/no-named-as-default': 0,
    'no-console': 0,
    'react/jsx-no-bind': 0,
    'import/no-named-as-default-member': 0,
    'no-param-reassign': 0,
    'class-methods-use-this': 0,
    'react/no-access-state-in-setstate': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'react/no-unused-prop-types': 0,
    'react/no-unused-state': 0,
    'import/extensions': 0,
    'no-nested-ternary': 0,
    'vars-on-top': 0,
    'prefer-destructuring': 0,
    'no-var': 0,
    'react/sort-comp': 0,
    'jsx-a11y/no-static-element-interactions': 0,

    /**
     *  END FIXME: rules disabled for incremental fixes
     * */

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
    'react-hooks/exhaustive-deps': 'error',
  },
  overrides: [
    // Set Jest rules only for test files.
    // https://stackoverflow.com/a/49211283
    {
      files: ['**/*.test.js', '**/__mocks__/**/*.js', '**/__tests__/**/*.js'],
      extends: ['plugin:jest/recommended'],
      env: {
        jest: true,
      },
      plugins: ['jest'],
      rules: {
        'global-require': 0,
        'react/jsx-props-no-spreading': 0,

        /**
         *  START FIXME: rules disabled for incremental fixes
         * */
        'jest/expect-expect': 0,
        'import/no-import-module-exports': 0,

        /**
         *  END FIXME: rules disabled for incremental fixes
         * */
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

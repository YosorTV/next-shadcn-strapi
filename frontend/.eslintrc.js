module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'airbnb',
    'plugin:prettier/recommended',
    'plugin:testing-library/react',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'next/core-web-vitals',
  ],
  plugins: ['react-hooks', 'jest', 'jest-formatting', 'import', 'prettier', '@typescript-eslint'],
  globals: {
    jest: true,
    describe: true,
    fdescribe: true,
    xdescribe: true,
    it: true,
    xit: true,
    beforeAll: true,
    beforeEach: true,
    afterAll: true,
    afterEach: true,
    expect: true,
    localStorage: true,
    Event: true,
    Headers: true,
    Request: true,
    jasmine: true,
    window: true,
    document: true,
    fetch: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    '@typescript-eslint/no-var-requires': 0,
    'react-hooks/exhaustive-deps': 0,
    'jsx-a11y/label-has-associated-control': [
      1,
      {
        depth: 3,
      },
    ],
    'no-console': [
      process.env.NODE_ENV === 'production' ? 2 : 0,
      {
        allow: ['info', 'error', 'log'],
      },
    ],
    'max-classes-per-file': [
      'error',
      {
        ignoreExpressions: true,
        max: 3,
      },
    ],
    'no-param-reassign': [
      2,
      {
        props: false,
      },
    ],
    'no-underscore-dangle': [
      'error',
      {
        allow: ['__SERVER__', '__PRELOADED__STATE__', '__component', '__contentType', '_button', '_input', '_select'],
      },
    ],
    'no-unsafe-optional-chaining': 0,
    'object-curly-spacing': [2, 'always'],
    'react-hooks/rules-of-hooks': 'error',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/function-component-definition': [
      0,
      {
        namedComponents: 'arrow-function',
      },
    ],
    'react/jsx-props-no-spreading': 0,
    'prefer-promise-reject-errors': 0,
    'no-lonely-if': 'error',
    'no-nested-ternary': 'error',
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'prefer-const': 'error',
    'no-var': 'error',
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: ['const', 'let', 'if'],
        next: '*',
      },
      {
        blankLine: 'any',
        prev: ['const', 'let'],
        next: ['const', 'let'],
      },
    ],
    'import/prefer-default-export': [
      'error',
      {
        target: 'single',
      },
    ],
    'no-restricted-exports': [
      'error',
      {
        restrictedNamedExports: [],
      },
    ],
    'jest/consistent-test-it': [
      'error',
      {
        fn: 'it',
      },
    ],
    'jest/no-test-return-statement': 'error',
    'jest/no-done-callback': 'error',
    'jest/prefer-to-have-length': 'error',
    'jest/prefer-to-contain': 'error',
    'jest-formatting/padding-around-test-blocks': 2,
    'jest-formatting/padding-around-describe-blocks': 2,
    'jest/no-disabled-tests': 'off',
    'jest/no-mocks-import': 0,
    'jest/expect-expect': 0,
    'jest/no-conditional-expect': 0,
    'jest/no-commented-out-tests': 0,
    'jest/valid-title': 0,
    'jest/no-export': 0,
    'jest/no-standalone-expect': 0,
    'jest/no-try-expect': 0,
    'testing-library/no-dom-import': 'error',
    'react/no-unused-prop-types': 'off',
    'react/jsx-indent': 0,
    'import/no-unresolved': 'error',
    'sort-imports': [
      'warn',
      {
        ignoreCase: true,
        ignoreDeclarationSort: true,
      },
    ],
    'import/order': [
      2,
      {
        groups: ['builtin', 'external', 'internal', ['parent', 'sibling', 'index'], 'object', 'type', 'unknown'],
        pathGroups: [
          {
            pattern: 'react*',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '@*',
            group: 'external',
          },
          {
            pattern: 'prop-types',
            group: 'external',
          },
          {
            pattern: '{hooks,hooks/**}',
            group: 'internal',
          },
          {
            pattern: 'hocs/**',
            group: 'internal',
          },
          {
            pattern: 'helpers/**',
            group: 'internal',
          },
          {
            pattern: 'resources/**',
            group: 'internal',
          },
          {
            pattern: 'services/**',
            group: 'internal',
          },
          {
            pattern: 'store/**',
            group: 'internal',
          },
          {
            pattern: 'components/**',
            group: 'parent',
          },
          {
            pattern: '{types/**,**/types,types}',
            group: 'type',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'react/jsx-filename-extension': [
      2,
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    ],
    'no-use-before-define': 'off',
    'prettier/prettier': 0,
    'import/extensions': [
      'off',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'react/require-default-props': 'off',
    'react/prop-types': [0, { ignore: ['children'] }],
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    'import/no-cycle': 0,
  },
  parser: '@typescript-eslint/parser',
  overrides: [
    {
      files: ['src/**/*.tsx'],
      rules: {
        'react/prop-types': 0,
      },
    },
    {
      files: ['repositories/**/*.ts'],
      rules: {
        'class-methods-use-this': 0,
      },
    },
  ],
};

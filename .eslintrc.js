module.exports = {
  root: true,
  env: {
    es2021: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
  },
  plugins: [
    '@typescript-eslint',
    'import',
  ],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: __dirname,
      }
    }
  },
  extends: [
    'airbnb-base',
    'airbnb-typescript/base',
  ],

  rules: {
    // allow console logging for nodejs
    'no-console': 'off',

    'import/prefer-default-export': 'off',

    'padded-blocks': [
      'error',
      { classes: 'always' },
    ],

    // except empty line after attribute scope variable declarations
    '@typescript-eslint/lines-between-class-members': [
      'error',
      'always',
      { exceptAfterSingleLine: true },
    ],
  },
};

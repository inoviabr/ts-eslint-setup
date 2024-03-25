module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
    ecmaVersion: 'latest',
  },
  ignorePatterns: ['.eslintrc.js'],
  plugins: ['@typescript-eslint/eslint-plugin', '@darraghor/nestjs-typed'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:@darraghor/nestjs-typed/recommended',
    'plugin:prettier/recommended',
  ],
  env: {
    node: true,
    jest: true,
    es6: true,
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.js', '*.jsx'],
      rules: {
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-unused-vars': [
          'error',
          {
            argsIgnorePattern: '^_',
          },
        ],
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/no-empty-interface': 'off',
        '@darraghor/nestjs-typed/injectable-should-be-provided': [
          'error',
          {
            src: ['**/*.ts'],
            filterFromPaths: ['node_modules', '.test.', '.spec.'],
          },
        ],
        'eol-last': ['error', 'always'],
        semi: ['error', 'always'],
        quotes: [
          'error',
          'single',
          {
            allowTemplateLiterals: true,
          },
        ],
        curly: ['error', 'all'],
        eqeqeq: ['error', 'always'],
        'prefer-const': 'error',
      },
    },
    {
      files: ['*.spec.ts', '*.spec.tsx', '*.spec.js', '*.spec.jsx'],
      env: {
        jest: true,
      },
      rules: {},
    },
  ],
};

module.exports = {
  env: { browser: true, es2020: true, node: true },
  ignorePatterns: ['*.json', '*.svg'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  plugins: ['react-refresh', 'import'],
  rules: {
    'react-refresh/only-export-components': 'warn',
    'prettier/prettier': ['error', { singleQuote: true }],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single', { avoidEscape: true }],
    semi: ['error', 'always'],
    'no-console': ["error", {allow: ["error"]}],
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    "import/no-unresolved": "error"
  },
  settings: {
    'import/resolver': {
      typescript: {},
      alias: {
        map: [
          ['@', './src'],
          ['#root', './']
        ],
        extensions: ['.ts', '.js', '.jsx', '.json', '.svg']
      }
    }
  }
}

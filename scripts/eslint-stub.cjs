module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 2022, sourceType: 'module' },
  env: { es2022: true, node: true, browser: true },
  plugins: ['@typescript-eslint', 'react-hooks', 'unused-imports', 'turbo'],
  ignorePatterns: ['node_modules', 'build', 'dist'],
  rules: {
    '@typescript-eslint/consistent-type-assertions': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'react-hooks/rules-of-hooks': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'unused-imports/no-unused-vars': 'off',
    'turbo/no-undeclared-env-vars': 'off',
  },
};

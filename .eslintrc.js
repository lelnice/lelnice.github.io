module.exports = {
  root: true,
  extends: ['@lelnice/eslint-config'],
  rules: {
    'prettier/prettier': [
      'warn',
      {
        singleQuote: true,
        trailingComma: 'all',
        endOfLine: 'auto',
        semi: false,
      },
    ],
  },
}

module.exports = {
  singleQuote: true,
  trailingComma: 'all',
  parser: 'typescript',
  tabWidth: 4,
  semi: true,
  overrides: [{ files: '*.json', options: { parser: 'json' } }],
};
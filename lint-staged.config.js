module.exports = {
  '/**/*.{js,jsx,ts,tsx}': [
    'npm run lint',
    () => 'yaspeller --only-errors'
  ],
  '/**/styles.ts': [
    'npm run lint:styles',
  ],
  '/**/*.{ts,tsx}': [
    () => 'npm run lint:types',
  ],
};

module.exports = {
  '**/*.{js,jsx,ts,tsx}': [
    'npm run lint',
    () => 'yaspeller --only-errors',
    () => 'npm run lint:types',
  ],
  '**/styles.ts': ['npm run lint:styles'],
};

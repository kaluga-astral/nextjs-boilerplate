const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '^lodash-es$': 'lodash',
  },
};

module.exports = createJestConfig(customJestConfig);

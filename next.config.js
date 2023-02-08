const withTM = require('next-transpile-modules')([
  '@astral/ui/fonts',
  '@astral/ui/illustrations',
]);
const { withSentryConfig } = require('@sentry/nextjs');

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {};

module.exports = withSentryConfig(
  {
    ...withTM(nextConfig),
    sentry: {
      hideSourceMaps: true,
      autoInstrumentServerFunctions: true,
    },
  },
  {
    silent: true,
  },
);

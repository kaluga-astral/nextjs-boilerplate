const withTM = require('next-transpile-modules')([
  '@astral/ui/fonts',
  '@astral/ui/illustrations',
]);
const { withSentryConfig } = require('@sentry/nextjs');

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.(woff|woff2)$/i,
      issuer: { and: [/\.(js|ts)x?$/] },
      type: 'asset/resource',
    });

    return config;
  },
};

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

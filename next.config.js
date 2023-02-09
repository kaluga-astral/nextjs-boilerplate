const { withSentryConfig } = require('@sentry/nextjs');
const withSvgr = require('@newhighsco/next-plugin-svgr');

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  transpilePackages: [
    '@astral/ui',
    '@astral/icons',
    '@astral/components',
    '@astral/form',
    '@astral/validations',
    'lodash-es',
  ],
  images: {
    unoptimized: true,
  },
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
  withSvgr({
    ...nextConfig,
    sentry: {
      hideSourceMaps: true,
      autoInstrumentServerFunctions: true,
    },
  }),
);

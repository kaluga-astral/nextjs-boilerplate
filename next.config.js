import { withSentryConfig } from '@sentry/nextjs';
import withSvgr from '@newhighsco/next-plugin-svgr';

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
  webpack(config) {
    config.module.rules.push({
      test: /\.(woff|woff2)$/i,
      issuer: { and: [/\.(js|ts)x?$/] },
      type: 'asset/resource',
    });

    return config;
  },
};

export default withSvgr(
  withSentryConfig(
    {
      ...nextConfig,
      sentry: {
        hideSourceMaps: true,
        autoInstrumentServerFunctions: true,
      },
    },
    {
      silent: true,
    },
  ),
);

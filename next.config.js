/* eslint-disable import/no-extraneous-dependencies */
const withTM = require('next-transpile-modules')(['@astral/ui']);
const { parsed } = require('dotenv').config({
  path: './env/.env',
});

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  // distDir: 'dist',
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone',
  experimental: {
    esmExternals: true,
  },
  env: {
    BRAND: parsed.BRAND,
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

module.exports = withTM(nextConfig);

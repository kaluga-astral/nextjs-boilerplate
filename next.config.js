const withTM = require('next-transpile-modules')(['@astral/ui']);

const { parsed } = require('dotenv').config({
  path: './env/.env'
})

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
  headers() {
    return [
      {
        source: '/_assets/fonts/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, stale-while-revalidate',
          },
        ],
      },
    ];
  }
};

module.exports = withTM(nextConfig);

import * as env from './env.mjs'
import withTmInitializer from 'next-transpile-modules';

const withTM = withTmInitializer([
  '@astral/ui',
]);

/**
 * @type {import('next').NextConfig}
 */
const nextjsConfig = {
  // distDir: 'dist',
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone',
  experimental: {
    esmExternals: true,
  },
  env,
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

export default withTM(nextjsConfig);

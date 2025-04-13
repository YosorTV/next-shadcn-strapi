import createNextIntlPlugin from 'next-intl/plugin';

import type { NextConfig } from 'next';

const withNextIntl = createNextIntlPlugin('./lib/packages/i18n.ts');

const headers = [
  {
    source: '/_next/image',
    headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
  },
  {
    source: '/(.*)',
    headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
  },
  {
    source: '/_next/static/videos/(.*)',
    headers: [
      { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
      { key: 'Content-Type', value: 'video/mp4' },
    ],
  },
];

const nextConfig: NextConfig = {
  images: {
    domains: ['localhost'],
    formats: ['image/avif', 'image/webp'],
  },
  reactStrictMode: false,
  devIndicators: false,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    optimizePackageImports: ['framer-motion'],
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
        '*.mp4': {
          loaders: ['file-loader'],
          as: '*.js',
        },
        '*.webm': {
          loaders: ['file-loader'],
          as: '*.js',
        },
        '*.mov': {
          loaders: ['file-loader'],
          as: '*.js',
        },
      },
      resolveExtensions: ['.mdx', '.tsx', '.ts', '.jsx', '.js', '.json', '.mp4', '.webm', '.mov'],
    },
  },
};

module.exports = withNextIntl(nextConfig);

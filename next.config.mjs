import withBundleAnalyzer from '@next/bundle-analyzer';

// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//   enabled: process.env.ANALYZE === 'true',
// });


/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "standalone", // use with Docker
  // distDir: 'build',
  modularizeImports: {
    '@mui/icons-material': {
      transform: '@mui/icons-material/{{member}}',
    },
    '@mui/material': {
      transform: '@mui/material/{{member}}',
    },
    '@mui/lab': {
      transform: '@mui/lab/{{member}}',
    },
  },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        port: '',
        pathname: '/PokeAPI/sprites/master/sprites/**',
      },
    ],
  },

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },

  experimental: {
    typedRoutes: true,
  },

  redirects: async () => {
    return [
      {
        source: '/',
        destination: '/pokemons',
        permanent: true,
      },
    ];
  }
};

const configWithAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
  openAnalyzer: process.env.ANALYZEOPEN === 'true',
})(nextConfig);

const toExport = process.env.ANALYZE === 'true' ? configWithAnalyzer : nextConfig;

export default toExport;

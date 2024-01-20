/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  webpack(config) {
    config.module.rules.push({
      test: /\.(glb|gltf)$/,
      type: 'asset/resource',
    });

    return config;
  },
};

module.exports = nextConfig;

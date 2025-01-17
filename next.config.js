/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {unoptimized: true},
  webpack(config) {
    config.module.rules.push({
      test: /\.(glb|gltf)$/,
      type: 'asset/resource',
    });

    return config;
  },
};

module.exports = nextConfig;

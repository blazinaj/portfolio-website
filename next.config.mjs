/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable caching more comprehensively
  webpack: (config, { isServer }) => {
    config.cache = false;
    
    // Ensure modules aren't cached
    config.optimization = {
      ...config.optimization,
      moduleIds: 'deterministic',
      chunkIds: 'deterministic',
      realContentHash: true,
    };
    
    return config;
  },
  // Disable page caching
  generateEtags: false,
  // Force strict mode to help catch issues
  reactStrictMode: true,
};

export default nextConfig;
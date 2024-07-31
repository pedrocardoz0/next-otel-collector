/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        instrumentationHook: true,
    },
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: '*.thecatapi.com',
          },
        ],
      }
};

export default nextConfig;

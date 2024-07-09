/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        instrumentationHook: true,
    },
    async redirects() {
        return [
            {
                source: '/profile',
                destination: '/home',
                permanent: false
            }
        ]
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

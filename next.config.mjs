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
    }
};

export default nextConfig;

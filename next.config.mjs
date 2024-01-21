/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ["stripe.com"],
    },
    webpack: (config, { isServer }) => {
        if (!isServer) {
        config.resolve.fallback.fs = false;
        }
        return config;
    },
};

export default nextConfig;

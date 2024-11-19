import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['localhost'], // Allow images from localhost
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '5000', // The port you are using
        pathname: '/uploads/**', // Adjust the path if needed
      },
    ],
  },
};

export default nextConfig;

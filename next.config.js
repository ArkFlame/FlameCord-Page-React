/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
      domains: ["localhost", "127.0.0.1"],
      remotePatterns: [
        {
          protocol: "https",
          hostname: "cdn.builtbybit.com",
        }
      ]
    },
};
  
module.exports = nextConfig;
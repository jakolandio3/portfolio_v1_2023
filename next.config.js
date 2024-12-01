/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    typedRoutes: true,
  },
  pageExtensions: ["ts", "tsx"],
};

module.exports = nextConfig;

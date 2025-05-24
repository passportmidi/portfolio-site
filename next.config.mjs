/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/api/blog",
        destination: "https://blog.putnam.computer/index.xml",
      },
      {
        source: "/api/email",
        destination: "https://blog.putnam.computer/api/email",
      },
    ];
  },
  experimental: {
    optimizePackageImports: ["@mantine/core", "@mantine/hooks"],
  },
};

export default nextConfig;

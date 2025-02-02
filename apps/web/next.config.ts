import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  /** Enables hot reloading for local packages without a build step */
  transpilePackages: ["@package/ui"],
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;

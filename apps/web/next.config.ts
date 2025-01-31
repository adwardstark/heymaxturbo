import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  /** Enables hot reloading for local packages without a build step */
  transpilePackages: [
    "@package/ui",
  ],
};

export default nextConfig;

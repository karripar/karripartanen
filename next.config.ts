import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  basePath: "/~karripar/js-exercises/mysite",
  assetPrefix: "/~karripar/js-exercises/mysite",
  images: {
    unoptimized: true,
  }
};

export default nextConfig;

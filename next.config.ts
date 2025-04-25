import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  base: process.env.NEXT_PUBLIC_BASE_PATH || "/fanaka-web-app",
};

export default nextConfig;

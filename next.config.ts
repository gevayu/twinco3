import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Hide the dev-only overlay badge so local screenshots match production.
  devIndicators: false,
};

export default nextConfig;

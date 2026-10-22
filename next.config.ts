
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  // GitHub Pages needs the repository path, while local development is served
  // from the root.
  basePath: process.env.NODE_ENV === "production" ? "/UtkarshShirbhate1311" : undefined,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

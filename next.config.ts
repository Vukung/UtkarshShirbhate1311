
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: "/utkarsh-portfolio-website",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

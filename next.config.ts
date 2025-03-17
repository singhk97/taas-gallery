import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",

  publicRuntimeConfig: {
    basePath: process.env.BASE_PATH || "",
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};
module.exports = {
  env: {
    APP_NAME: process.env.APP_NAME,
  },
};
export default nextConfig;

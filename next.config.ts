import path from "node:path";
import type { NextConfig } from "next";

const projectRoot = process.cwd();

const nextConfig: NextConfig = {
  outputFileTracingRoot: path.resolve(projectRoot),
  // Allow loading dev assets when previewing from LAN IP.
  allowedDevOrigins: ["localhost", "127.0.0.1", "192.168.1.13"],
};

export default nextConfig;

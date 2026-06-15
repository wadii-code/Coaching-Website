import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  // Pin the workspace root to this project so Next doesn't infer it from a
  // stray lockfile higher up the directory tree.
  turbopack: {
    root: path.resolve(import.meta.dirname),
  },
  images: {
    // Supabase Storage public/object URLs (host filled in once project exists).
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.supabase.co",
        pathname: "/storage/v1/object/public/**",
      },
    ],
  },
};

export default nextConfig;

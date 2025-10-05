import type { NextConfig } from "next";
import { webpack } from "next/dist/compiled/webpack/webpack";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    // Allow Unsplash image hosts used in product/placeholder random images
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
      },
    ],
  },
  webpack: (config) => {
    config.plugins.push(
      new webpack.IgnorePlugin({
        resourceRegExp:
          /^pg-native$|^sqlite3$|^mysql$|^mysql2$|^oracledb$|^mongodb$|^react-native-sqlite-storage$|^@sap\/hana-client$|^@sap\/hana-client\/extension\/Stream$|^sql.js$/,
      })
    );

    config.module.exprContextCritical = false; // Suppresses critical dependency warnings

    return config;
  },

  experimental: {
    serverActions: {
      bodySizeLimit: "20mb",
    },
  },
};

export default nextConfig;

import type { NextConfig } from "next";
import withPWAInit from "@ducanh2912/next-pwa";

const withPWA = withPWAInit({
  dest: "public", // where service worker and other PWA assets will be generated
});

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["m.media-amazon.com"], // allow movie images from IMDb
  },
};

export default withPWA({
  ...nextConfig,
});

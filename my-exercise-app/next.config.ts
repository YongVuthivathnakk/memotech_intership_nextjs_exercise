import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
// import { describe } from "node:test";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.shutterstock.com",
        pathname: "/image-photo/**",
      },
    ],
  },

  // async redirects() {
  //   return [
  //     {
  //       source: "/",
  //       destination: "/blog",
  //       permanent: false,
  //     }
  //   ]
  // },

  // async rewrites() {
  //   return [
  //     {
  //       source: "/secret",
  //       destination: "/about",
  //     },
  //   ];
  // },
};

const withNextIntl = createNextIntlPlugin();


export default withNextIntl(nextConfig);

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // IA restructure: programs/our-work consolidated under What We Do.
      { source: "/programs", destination: "/what-we-do", permanent: true },
      { source: "/our-work", destination: "/what-we-do", permanent: true },
      // Money/accountability content now lives on the transparency page.
      { source: "/impact", destination: "/about/transparency", permanent: true },
    ];
  },
};

export default nextConfig;

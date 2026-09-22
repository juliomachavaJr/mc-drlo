import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.supabase.co",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
  turbopack: {
    root: __dirname,
  },
  async redirects() {
    return [
      {
        source: "/agendas",
        destination: "/#agendas",
        permanent: true,
      },
      {
        source: "/evento",
        destination: "/#briefing",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

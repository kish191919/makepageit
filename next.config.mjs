/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  compress: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "picsum.photos" },
      { protocol: "https", hostname: "i.pravatar.cc" },
      { protocol: "https", hostname: "www.sbmnationwide.com" },
      { protocol: "https", hostname: "www.yttmission.org" },
    ],
  },
  async redirects() {
    return [
      { source: "/about", destination: "/", permanent: true },
      { source: "/services", destination: "/pricing", permanent: true },
      { source: "/reviews", destination: "/", permanent: true },
      { source: "/blog", destination: "/", permanent: true },
      { source: "/blog/:slug*", destination: "/", permanent: true },

      { source: "/ko/about", destination: "/ko", permanent: true },
      { source: "/ko/services", destination: "/ko/pricing", permanent: true },
      { source: "/ko/reviews", destination: "/ko", permanent: true },
      { source: "/ko/blog", destination: "/ko", permanent: true },
      { source: "/ko/blog/:slug*", destination: "/ko", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
      {
        source: "/_next/static/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },
};

export default nextConfig;

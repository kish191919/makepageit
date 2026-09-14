/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  compress: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "picsum.photos" },
      { protocol: "https", hostname: "randomuser.me" },
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

      { source: "/portfolio/kitt-works/:path*", destination: "/portfolio", permanent: true },
      { source: "/portfolio/bloom-cosmetics/:path*", destination: "/portfolio", permanent: true },
      { source: "/portfolio/dr-slim-clinic/:path*", destination: "/portfolio", permanent: true },
      { source: "/portfolio/halo-fitness/:path*", destination: "/portfolio", permanent: true },
      { source: "/portfolio/ironclad-industrial/:path*", destination: "/portfolio", permanent: true },
      { source: "/portfolio/muni-hair/:path*", destination: "/portfolio", permanent: true },

      { source: "/ko/portfolio/kitt-works/:path*", destination: "/ko/portfolio", permanent: true },
      { source: "/ko/portfolio/bloom-cosmetics/:path*", destination: "/ko/portfolio", permanent: true },
      { source: "/ko/portfolio/dr-slim-clinic/:path*", destination: "/ko/portfolio", permanent: true },
      { source: "/ko/portfolio/halo-fitness/:path*", destination: "/ko/portfolio", permanent: true },
      { source: "/ko/portfolio/ironclad-industrial/:path*", destination: "/ko/portfolio", permanent: true },
      { source: "/ko/portfolio/muni-hair/:path*", destination: "/ko/portfolio", permanent: true },
    ];
  },
  async headers() {
    const rules = [
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
    ];

    if (process.env.NODE_ENV === "production") {
      rules.push({
        source: "/_next/static/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      });
    }

    return rules;
  },
};

export default nextConfig;

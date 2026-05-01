import type { MetadataRoute } from "next";
import { posts } from "@/lib/posts";
import { getPortfolios } from "@/lib/data";

const BASE_URL = "https://makepageit.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const localizedRoutes: { path: string; changeFrequency: "weekly" | "monthly" | "yearly"; priority: number }[] = [
    { path: "/", changeFrequency: "weekly", priority: 1.0 },
    { path: "/services", changeFrequency: "monthly", priority: 0.9 },
    { path: "/portfolio", changeFrequency: "weekly", priority: 0.9 },
    { path: "/pricing", changeFrequency: "monthly", priority: 0.8 },
    { path: "/reviews", changeFrequency: "monthly", priority: 0.7 },
    { path: "/about", changeFrequency: "monthly", priority: 0.7 },
    { path: "/contact", changeFrequency: "monthly", priority: 0.7 },
    { path: "/privacy", changeFrequency: "yearly", priority: 0.3 },
    { path: "/terms", changeFrequency: "yearly", priority: 0.3 },
  ];

  const staticRoutes: MetadataRoute.Sitemap = localizedRoutes.flatMap((r) => {
    const enUrl = `${BASE_URL}${r.path}`;
    const koUrl = `${BASE_URL}/ko${r.path === "/" ? "" : r.path}`;
    const alternates = {
      languages: {
        en: enUrl,
        ko: koUrl,
        "x-default": enUrl,
      },
    };
    return [
      {
        url: enUrl,
        lastModified: now,
        changeFrequency: r.changeFrequency,
        priority: r.priority,
        alternates,
      },
      {
        url: koUrl,
        lastModified: now,
        changeFrequency: r.changeFrequency,
        priority: r.priority,
        alternates,
      },
    ];
  });

  // Blog is Korean-only at /ko/blog
  const blogIndex: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/ko/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  const blogPosts: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${BASE_URL}/ko/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  // Portfolio detail pages — both locales
  const portfolioRoutes: MetadataRoute.Sitemap = getPortfolios("en").flatMap((item) => {
    const enUrl = `${BASE_URL}/portfolio/${item.id}`;
    const koUrl = `${BASE_URL}/ko/portfolio/${item.id}`;
    const alternates = {
      languages: {
        en: enUrl,
        ko: koUrl,
        "x-default": enUrl,
      },
    };
    return [
      {
        url: enUrl,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.7,
        alternates,
      },
      {
        url: koUrl,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.7,
        alternates,
      },
    ];
  });

  return [...staticRoutes, ...blogIndex, ...blogPosts, ...portfolioRoutes];
}

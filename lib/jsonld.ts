import { site } from "@/lib/site";

const BASE_URL = "https://makepageit.com";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    alternateName: site.nameKo,
    url: BASE_URL,
    logo: `${BASE_URL}/og-default.png`,
    email: site.email,
    telephone: site.phoneIntl,
    sameAs: [site.social.instagram, site.social.youtube, site.social.blog].filter(Boolean),
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: BASE_URL,
    inLanguage: ["en", "ko"],
  };
}

type BlogArticleInput = {
  slug: string;
  title: string;
  excerpt: string;
  cover: string;
  date: string;
  category: string;
};

export function blogArticleSchema(post: BlogArticleInput) {
  const url = `${BASE_URL}/ko/blog/${post.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: [post.cover],
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: "ko",
    articleSection: post.category,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    url,
    author: { "@type": "Organization", name: site.name, url: BASE_URL },
    publisher: {
      "@type": "Organization",
      name: site.name,
      logo: { "@type": "ImageObject", url: `${BASE_URL}/og-default.png` },
    },
  };
}

type PortfolioCaseInput = {
  id: string;
  client: string;
  category: string;
  description: string;
  image: string;
  year: string;
};

export function portfolioCaseSchema(item: PortfolioCaseInput, lang: "en" | "ko") {
  const path = lang === "ko" ? `/ko/portfolio/${item.id}` : `/portfolio/${item.id}`;
  const url = `${BASE_URL}${path}`;
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: `${item.client} — ${item.category}`,
    description: item.description,
    image: [item.image],
    url,
    inLanguage: lang === "ko" ? "ko" : "en",
    dateCreated: item.year,
    creator: { "@type": "Organization", name: site.name, url: BASE_URL },
  };
}

type Crumb = { name: string; path: string };

export function breadcrumbSchema(crumbs: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: `${BASE_URL}${c.path}`,
    })),
  };
}

export function jsonLdScriptProps(data: object | object[]) {
  return {
    type: "application/ld+json",
    dangerouslySetInnerHTML: { __html: JSON.stringify(data) },
  } as const;
}

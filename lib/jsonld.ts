import { site } from "@/lib/site";
import type { Plan, FAQ } from "@/lib/data";
import type { Lang } from "@/lib/i18n";

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

export function professionalServiceSchema(lang: Lang) {
  const url = lang === "ko" ? `${BASE_URL}/ko` : BASE_URL;
  const description =
    lang === "ko"
      ? "MAKEPAGE는 소상공인과 프리랜서를 위한 홈페이지 제작 스튜디오입니다. 브랜딩, 쇼핑몰, 랜딩페이지, 예약 시스템까지 한 팀이 만듭니다."
      : "MAKEPAGE is a web design studio for small businesses and creators. Brand sites, e-commerce, landing pages, and booking systems built by one team.";
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService"],
    "@id": `${BASE_URL}#organization`,
    name: site.name,
    alternateName: site.nameKo,
    url,
    logo: `${BASE_URL}/og-default.png`,
    image: `${BASE_URL}/og-default.png`,
    email: site.email,
    telephone: site.phoneIntl,
    description,
    priceRange: "$$",
    areaServed: ["United States", "South Korea", "Worldwide"],
    serviceType: "Web Design & Development",
    sameAs: [site.social.instagram, site.social.youtube, site.social.blog].filter(Boolean),
  };
}

export function serviceOfferCatalogSchema(plans: Plan[], lang: Lang) {
  const catalogName = lang === "ko" ? "홈페이지 제작 패키지" : "Website Build Packages";
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: lang === "ko" ? "홈페이지 제작" : "Web Design & Development",
    provider: { "@id": `${BASE_URL}#organization` },
    areaServed: ["United States", "South Korea"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: catalogName,
      itemListElement: plans.map((p) => ({
        "@type": "Offer",
        name: p.name,
        description: p.description,
        price: p.pricing.oneTime.replace(/[^\d.]/g, ""),
        priceCurrency: "USD",
        category: p.audience,
        availability: "https://schema.org/InStock",
        url: lang === "ko" ? `${BASE_URL}/ko/pricing` : `${BASE_URL}/pricing`,
      })),
    },
  };
}

export function faqPageSchema(faqs: FAQ[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
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

export function portfolioCaseSchema(item: PortfolioCaseInput, lang: Lang) {
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

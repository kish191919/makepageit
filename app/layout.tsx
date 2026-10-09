import type { Metadata } from "next";
import { headers } from "next/headers";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";
import { detectLangFromPath, getDict, localePath, pageAlternates, stripLocale } from "@/lib/i18n";
import { jsonLdScriptProps, professionalServiceSchema, websiteSchema } from "@/lib/jsonld";

// Inner pages of portfolio template demos (e.g. /portfolio/noble-coffee/menu) are
// sample content for fictional businesses — keep them out of the search index.
const TEMPLATE_SUBPAGE = /^\/(?:ko\/)?portfolio\/[^/]+\/.+/;

export async function generateMetadata(): Promise<Metadata> {
  const pathname = headers().get("x-pathname");
  const lang = detectLangFromPath(pathname);
  const dict = getDict(lang);
  const path = pathname ? stripLocale(pathname) : "/";
  const isTemplateSubpage = TEMPLATE_SUBPAGE.test(pathname ?? "");

  return {
    metadataBase: new URL("https://makepageit.com"),
    title: {
      default: dict.rootMetadata.siteTitle,
      template: `%s | ${dict.rootMetadata.titleSuffix}`,
    },
    description: dict.rootMetadata.description,
    keywords: dict.rootMetadata.keywords,
    alternates: pathname && !pathname.startsWith("/admin") ? pageAlternates(lang, path) : undefined,
    openGraph: {
      title: dict.rootMetadata.siteTitle,
      description: dict.rootMetadata.description,
      url: localePath(lang, path),
      type: "website",
      locale: dict.rootMetadata.locale,
      siteName: site.name,
    },
    twitter: {
      card: "summary_large_image",
      title: dict.rootMetadata.siteTitle,
      description: dict.rootMetadata.description,
    },
    robots: { index: !isTemplateSubpage, follow: true },
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ?? "",
      other: {
        "naver-site-verification": process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION ?? "",
        "msvalidate.01": process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION ?? "",
      },
    },
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = headers().get("x-pathname");
  const lang = detectLangFromPath(pathname);
  const isAdmin = pathname?.startsWith("/admin") ?? false;

  if (isAdmin) {
    return (
      <html lang="en">
        <body className="bg-slate-50 text-ink-900 antialiased">{children}</body>
      </html>
    );
  }

  return (
    <html lang={lang}>
      <body className="bg-white text-ink-900 antialiased" suppressHydrationWarning>
        <script {...jsonLdScriptProps(professionalServiceSchema(lang))} />
        <script {...jsonLdScriptProps(websiteSchema())} />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
      <GoogleAnalytics gaId="G-E8L824V9KE" />
    </html>
  );
}

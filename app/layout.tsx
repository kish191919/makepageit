import type { Metadata } from "next";
import { headers } from "next/headers";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";
import { detectLangFromPath, getDict } from "@/lib/i18n";

export async function generateMetadata(): Promise<Metadata> {
  const lang = detectLangFromPath(headers().get("x-pathname"));
  const dict = getDict(lang);

  return {
    metadataBase: new URL("https://makepageit.com"),
    title: {
      default: `${site.name} — ${dict.rootMetadata.siteTitle}`,
      template: `%s | ${site.name}`,
    },
    description: dict.rootMetadata.description,
    keywords: dict.rootMetadata.keywords,
    alternates: {
      languages: {
        en: "/",
        ko: "/ko",
        "x-default": "/",
      },
    },
    openGraph: {
      title: `${site.name} — ${dict.rootMetadata.siteTitle}`,
      description: dict.rootMetadata.description,
      url: lang === "ko" ? "https://makepageit.com/ko" : "https://makepageit.com",
      type: "website",
      locale: dict.rootMetadata.locale,
      siteName: site.name,
    },
    robots: { index: true, follow: true },
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ?? "",
    },
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const lang = detectLangFromPath(headers().get("x-pathname"));
  return (
    <html lang={lang}>
      <body className="bg-white text-ink-900 antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
      <GoogleAnalytics gaId="G-E8L824V9KE" />
    </html>
  );
}

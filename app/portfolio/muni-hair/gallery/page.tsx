import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import MuniHairGallery from "@/lib/templates/MuniHairGallery";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Gallery | Muse Hair",
  description:
    "Recent color and cuts from Ava, Crystal, and Rio — a hair salon homepage template gallery page by MAKEPAGE.",
  alternates: {
    languages: {
      en: "/portfolio/muni-hair/gallery",
      ko: "/ko/portfolio/muni-hair/gallery",
      "x-default": "/portfolio/muni-hair/gallery",
    },
  },
};

export default function MuniHairGalleryPage() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Work", path: "/portfolio" },
            { name: "Muse Hair", path: "/portfolio/muni-hair" },
            { name: "Gallery", path: "/portfolio/muni-hair/gallery" },
          ])
        )}
      />
      <BackToPortfolio />
      <MuniHairGallery lang="en" />
    </>
  );
}

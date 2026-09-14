import { buildOgImage, OG_IMAGE_SIZE } from "@/lib/og-image";

export const runtime = "nodejs";
export const alt = "MAKEPAGE — You run the business. We build the website—live in 2 weeks.";
export const size = OG_IMAGE_SIZE;
export const contentType = "image/png";

export default function OpengraphImage() {
  return buildOgImage({
    title: [
      [{ text: "You run the business." }],
      [{ text: "We build", color: "#818cf8" }],
      [{ text: "the website—" }],
      [{ text: "live in 2 weeks.", underline: true }],
    ],
    body: "Strategy, design, development, and ongoing care from one team. Free 30-minute consult, no pressure.",
    ctaPrimary: "Get a free quote",
    ctaSecondary: "See our work",
    footerRight: "4.9 / 5 rating · 98% repeat clients",
  });
}

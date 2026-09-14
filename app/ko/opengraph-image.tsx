import { buildOgImage, OG_IMAGE_SIZE } from "@/lib/og-image";

export const runtime = "nodejs";
export const alt = "메이크페이지 — 미주 한인 사장님을 위한 홈페이지 제작, 2주 안에 완성해드립니다.";
export const size = OG_IMAGE_SIZE;
export const contentType = "image/png";

export default function OpengraphImage() {
  return buildOgImage({
    title: [
      [{ text: "미주 한인 사장님을 위한" }],
      [{ text: "홈페이지 제작," , color: "#818cf8" }],
      [{ text: "2주", underline: true }],
      [{ text: "안에 완성해드립니다." }],
    ],
    body: "사장님은 사업에만 집중하세요. 기획·디자인·개발·운영을 한 팀에서 책임집니다. 무료 상담은 언제나 환영입니다.",
    ctaPrimary: "무료 견적받기",
    ctaSecondary: "포트폴리오 보기",
    footerRight: "고객 만족도 4.9 / 5 · 재의뢰율 98%",
  });
}

import type { ReactNode } from "react";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  theme?: "light" | "dark";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  theme = "light",
}: Props) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";
  const eyebrowClass =
    theme === "dark"
      ? "text-sm font-semibold uppercase tracking-[0.2em] text-brand-400"
      : "eyebrow";
  const titleClass =
    theme === "dark"
      ? "mt-3 text-3xl font-bold leading-tight tracking-tight text-white break-keep whitespace-pre-line sm:text-4xl lg:text-5xl"
      : "mt-3 h-section break-keep whitespace-pre-line";
  const descriptionClass =
    theme === "dark"
      ? "mt-5 text-base leading-relaxed text-white/70 break-keep whitespace-pre-line sm:text-lg"
      : "mt-5 lead break-keep whitespace-pre-line";
  return (
    <div className={`max-w-3xl ${alignment}`}>
      {eyebrow && <p className={eyebrowClass}>{eyebrow}</p>}
      <h2 className={titleClass}>{title}</h2>
      {description && <p className={descriptionClass}>{description}</p>}
    </div>
  );
}

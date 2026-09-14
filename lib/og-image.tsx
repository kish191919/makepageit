import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const OG_IMAGE_SIZE = { width: 1200, height: 630 };

const SHOT_FILES = [
  "hero-cloudmaster.jpg",
  "hero-daniel.jpg",
  "hero-sbm.jpg",
] as const;

async function loadShots() {
  const shots = await Promise.all(
    SHOT_FILES.map(async (file) => {
      const data = await readFile(join(process.cwd(), "public/images/og", file));
      return `data:image/jpeg;base64,${data.toString("base64")}`;
    })
  );
  return shots as [string, string, string];
}

const STACK_STYLE = [
  { transform: "rotate(-6deg) translate(-18px, 26px)", opacity: 0.75, zIndex: 1 },
  { transform: "rotate(4deg) translate(24px, 14px)", opacity: 0.88, zIndex: 2 },
  { transform: "rotate(0deg) translate(0px, 0px)", opacity: 1, zIndex: 3 },
] as const;

function BrowserCard({ src, style }: { src: string; style: (typeof STACK_STYLE)[number] }) {
  return (
    <div
      style={{
        position: "absolute",
        left: 0,
        top: 0,
        display: "flex",
        flexDirection: "column",
        width: 480,
        borderRadius: 16,
        overflow: "hidden",
        border: "1px solid rgba(255,255,255,0.14)",
        boxShadow: "0 30px 60px rgba(0,0,0,0.55)",
        ...style,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 6,
          height: 26,
          padding: "0 12px",
          background: "#1a1a1a",
        }}
      >
        <div style={{ width: 8, height: 8, borderRadius: 999, background: "#f87171", display: "flex" }} />
        <div style={{ width: 8, height: 8, borderRadius: 999, background: "#fbbf24", display: "flex" }} />
        <div style={{ width: 8, height: 8, borderRadius: 999, background: "#34d399", display: "flex" }} />
      </div>
      <img src={src} width={480} height={242} style={{ display: "flex", objectFit: "cover" }} />
    </div>
  );
}

export type OgTitleSegment = { text: string; color?: string; underline?: boolean };
export type OgTitleLine = OgTitleSegment[];

export async function buildOgImage(opts: {
  title: OgTitleLine[];
  body: string;
  ctaPrimary: string;
  ctaSecondary: string;
  footerRight: string;
}) {
  const shots = await loadShots();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "48px 72px",
          background: "#0a0a0a",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 26, fontWeight: 800, letterSpacing: "-0.02em" }}>
            <div
              style={{
                width: 40,
                height: 40,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#ffffff",
                color: "#0a0a0a",
                borderRadius: 10,
                fontSize: 22,
                fontWeight: 900,
              }}
            >
              M
            </div>
            MAKEPAGE
          </div>
          <div
            style={{
              display: "flex",
              padding: "7px 18px",
              borderRadius: 999,
              border: "1px solid rgba(255,255,255,0.18)",
              background: "rgba(255,255,255,0.06)",
              fontSize: 15,
              fontWeight: 600,
              color: "#e5e5e5",
            }}
          >
            makepageit.com
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 56, flex: 1 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 14, flex: "0 0 460px" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                fontSize: 40,
                fontWeight: 800,
                letterSpacing: "-0.02em",
                lineHeight: 1.15,
              }}
            >
              {opts.title.map((line, i) => (
                <div key={i} style={{ display: "flex", alignItems: "baseline" }}>
                  {line.map((seg, j) => (
                    <span
                      key={j}
                      style={{
                        display: "flex",
                        color: seg.color ?? "#ffffff",
                        textDecoration: seg.underline ? "underline" : "none",
                        textDecorationColor: "#818cf8",
                        textDecorationThickness: 5,
                      }}
                    >
                      {seg.text}
                    </span>
                  ))}
                </div>
              ))}
            </div>
            <div style={{ display: "flex", fontSize: 19, fontWeight: 500, opacity: 0.75, lineHeight: 1.4 }}>
              {opts.body}
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div
                style={{
                  display: "flex",
                  padding: "10px 24px",
                  borderRadius: 999,
                  background: "#ffffff",
                  color: "#0a0a0a",
                  fontSize: 17,
                  fontWeight: 700,
                }}
              >
                {opts.ctaPrimary}
              </div>
              <div
                style={{
                  display: "flex",
                  padding: "10px 24px",
                  borderRadius: 999,
                  border: "1px solid rgba(255,255,255,0.3)",
                  color: "#ffffff",
                  fontSize: 17,
                  fontWeight: 700,
                }}
              >
                {opts.ctaSecondary}
              </div>
            </div>
          </div>

          <div style={{ position: "relative", display: "flex", width: 520, height: 340 }}>
            <BrowserCard src={shots[0]} style={STACK_STYLE[0]} />
            <BrowserCard src={shots[1]} style={STACK_STYLE[1]} />
            <BrowserCard src={shots[2]} style={STACK_STYLE[2]} />
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 18,
            fontWeight: 600,
            opacity: 0.7,
          }}
        >
          <span>makepageit.com</span>
          <span>{opts.footerRight}</span>
        </div>
      </div>
    ),
    { ...OG_IMAGE_SIZE }
  );
}

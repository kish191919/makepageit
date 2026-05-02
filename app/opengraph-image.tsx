import { ImageResponse } from "next/og";

export const alt = "MAKEPAGE — Websites that win customers";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background:
            "linear-gradient(135deg, #4f46e5 0%, #6366f1 50%, #312e81 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            fontSize: 32,
            fontWeight: 800,
            letterSpacing: "-0.02em",
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#ffffff",
              color: "#4f46e5",
              borderRadius: 14,
              fontSize: 36,
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
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 76,
              fontWeight: 800,
              letterSpacing: "-0.04em",
              lineHeight: 1.05,
            }}
          >
            <span>Websites that win</span>
            <span>customers.</span>
          </div>
          <div
            style={{
              fontSize: 30,
              fontWeight: 500,
              opacity: 0.85,
              letterSpacing: "-0.01em",
            }}
          >
            Strategy, design, and development from one team. Live in 2 weeks.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 22,
            fontWeight: 600,
            opacity: 0.8,
          }}
        >
          <span>makepageit.com</span>
          <span>320+ sites · 4.9 / 5 rating</span>
        </div>
      </div>
    ),
    { ...size }
  );
}

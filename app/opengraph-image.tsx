import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const runtime = "nodejs";
export const alt = "MAKEPAGE — Websites that win customers";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const mockupData = await readFile(
    join(process.cwd(), "public/images/og/homepage-mockup.jpg")
  );
  const mockupSrc = `data:image/jpeg;base64,${mockupData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "56px 72px",
          background:
            "linear-gradient(135deg, #211c4f 0%, #362f8f 45%, #4f46e5 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            fontSize: 28,
            fontWeight: 800,
            letterSpacing: "-0.02em",
          }}
        >
          <div
            style={{
              width: 44,
              height: 44,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#ffffff",
              color: "#4f46e5",
              borderRadius: 12,
              fontSize: 26,
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
            alignItems: "center",
            gap: 56,
            flex: 1,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 22,
              flex: "0 0 460px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                fontSize: 60,
                fontWeight: 800,
                letterSpacing: "-0.03em",
                lineHeight: 1.08,
              }}
            >
              <span>Websites that</span>
              <span>win customers.</span>
            </div>
            <div
              style={{
                fontSize: 24,
                fontWeight: 500,
                opacity: 0.85,
                letterSpacing: "-0.01em",
                lineHeight: 1.4,
              }}
            >
              Strategy, design, and development from one team. Live in 2
              weeks.
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: 560,
              borderRadius: 18,
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.18)",
              boxShadow: "0 40px 70px rgba(10, 8, 40, 0.55)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                height: 34,
                padding: "0 14px",
                background: "#e6e7eb",
              }}
            >
              <div
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: 999,
                  background: "#ff5f57",
                  display: "flex",
                }}
              />
              <div
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: 999,
                  background: "#febc2e",
                  display: "flex",
                }}
              />
              <div
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: 999,
                  background: "#28c840",
                  display: "flex",
                }}
              />
              <div
                style={{
                  display: "flex",
                  flex: 1,
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    padding: "3px 18px",
                    borderRadius: 999,
                    background: "#ffffff",
                    color: "#6b7280",
                    fontSize: 12,
                    fontWeight: 600,
                  }}
                >
                  makepageit.com
                </div>
              </div>
            </div>
            <img
              src={mockupSrc}
              width={560}
              height={257}
              style={{ display: "flex", objectFit: "cover" }}
            />
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 20,
            fontWeight: 600,
            opacity: 0.8,
          }}
        >
          <span>makepageit.com</span>
          <span>4.9 / 5 rating · 98% repeat clients</span>
        </div>
      </div>
    ),
    { ...size }
  );
}

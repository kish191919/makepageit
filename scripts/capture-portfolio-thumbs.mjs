import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

// Ids of portfolio entries backed by a live-rendered demo template (lib/templates/index.ts),
// as opposed to entries with a real client `url`. Keep this list in sync with that file.
const TEMPLATE_IDS = [
  "noble-coffee",
  "lumiere-clinic",
  "atelier-shop",
  "haru-academy",
  "moa-pilates",
  "green-law",
  "seoul-bakery",
  "nova-studio",
  "nexus-lab",
  "arco-atelier",
  "moai-hotel",
  "bloom-cosmetics",
  "wood-and-stone",
  "vin-secret",
  "halo-fitness",
  "dr-slim-clinic",
  "villa-toscana",
  "muni-hair",
  "kitt-works",
  "jini-illustration",
  "harbor-realty",
  "meridian-wealth",
  "solstice-interiors",
  "ironclad-industrial",
];

const BASE_URL = process.env.BASE_URL || "http://localhost:3000";
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.join(__dirname, "..", "public", "images", "portfolio");

async function main() {
  await mkdir(OUT_DIR, { recursive: true });

  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1200, height: 900 } });

  for (const id of TEMPLATE_IDS) {
    const url = `${BASE_URL}/portfolio/${id}`;
    console.log(`Capturing ${id} -> ${url}`);
    await page.goto(url, { waitUntil: "networkidle" });
    await page.screenshot({ path: path.join(OUT_DIR, `${id}.png`) });
  }

  await browser.close();
  console.log(`Done. Wrote ${TEMPLATE_IDS.length} screenshots to ${OUT_DIR}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

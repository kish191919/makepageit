// Step 3: render the ambiguous sites from step 2 in a mobile-emulated browser
// (JS redirects, GoDaddy /lander parking, real viewport width, builder markers).
// usage: node scripts/promo-email/pipeline/3_render.mjs <workdir> [shotDir]
//   reads render_in.json, writes render_out.json (≈6 min for 600 sites)
import { chromium } from "playwright";
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import path from "node:path";

const work = path.resolve(process.argv[2] ?? ".");
const shotDir = process.argv[3];
const inPath = path.join(work, "render_in.json");
const outPath = path.join(work, "render_out.json");
const items = JSON.parse(readFileSync(inPath, "utf8"));
const browser = await chromium.launch();
const ctxOpts = {
  viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true,
  userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.0 Mobile/15E148 Safari/604.1",
  ignoreHTTPSErrors: false, locale: "en-US",
};
const results = [];
let idx = 0;

async function one(it) {
  const ctx = await browser.newContext(ctxOpts);
  const page = await ctx.newPage();
  const out = { row: it.row, url: it.url };
  try {
    let resp;
    try {
      resp = await page.goto(it.url, { waitUntil: "load", timeout: 25000 });
    } catch (e) {
      out.gotoError = String(e.message).split("\n")[0].slice(0, 160);
      if (/ERR_CERT|SSL/i.test(out.gotoError)) {
        out.certError = true;
        await ctx.close();
        return out;
      }
      if (!/Timeout/i.test(out.gotoError)) { await ctx.close(); return out; }
    }
    await page.waitForTimeout(3000);
    try { await page.waitForLoadState("load", { timeout: 8000 }); } catch {}
    out.status = resp?.status() ?? null;
    out.final = page.url();
    const info = await page.evaluate(() => {
      const t = (document.body?.innerText || "").replace(/\s+/g, " ").trim();
      const vp = document.querySelector('meta[name="viewport" i]');
      const html = document.documentElement.outerHTML;
      return {
        title: document.title.slice(0, 140), textLen: t.length, text: t.slice(0, 260),
        innerWidth: window.innerWidth, scrollWidth: document.documentElement.scrollWidth,
        viewportMeta: vp ? vp.getAttribute("content") : null,
        frames: document.querySelectorAll("frame,iframe").length,
        wix: /wixstatic|wix-thunderbolt|Wix\.com Website Builder/.test(html),
        squarespace: /static1\.squarespace\.com|squarespace-cdn/i.test(html),
        godaddy: /img1\.wsimg\.com|Go Daddy Website Builder|Starfield Technologies/i.test(html),
        weebly: /editmysite\.com|weebly\.com/i.test(html),
      };
    });
    Object.assign(out, info);
    if (shotDir && it.shot) await page.screenshot({ path: `${shotDir}/${it.row}.png` });
  } catch (e) {
    out.error = String(e.message).split("\n")[0].slice(0, 160);
  }
  await ctx.close();
  return out;
}

async function worker() {
  while (idx < items.length) {
    const it = items[idx++];
    results.push(await one(it));
    if (results.length % 50 === 0) console.log(results.length, "/", items.length);
  }
}
await Promise.all(Array.from({ length: 10 }, worker));
await browser.close();
// merge: keep earlier results for rows not re-rendered this time
const prev = existsSync(outPath) ? JSON.parse(readFileSync(outPath, "utf8")) : [];
const fresh = new Set(results.map((r) => r.row));
writeFileSync(outPath, JSON.stringify([...prev.filter((r) => !fresh.has(r.row)), ...results], null, 1));
console.log("done", results.length);

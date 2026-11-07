// Submit site URLs to IndexNow (Bing, Yandex, Naver, Seznam, ...).
//
// Usage:
//   npm run indexnow                       # submit every URL in the live sitemap.xml
//   npm run indexnow -- /pricing /ko/pricing   # submit only specific paths/URLs
//
// The key file must be live at https://makepageit.com/<KEY>.txt (served from /public).
// IndexNow keys are public by design, so it is fine to keep it in source.

const HOST = "makepageit.com";
const BASE_URL = `https://${HOST}`;
const KEY = "f9b022fb6a334bc4ad016371f220f525";
const KEY_LOCATION = `${BASE_URL}/${KEY}.txt`;
const ENDPOINT = "https://api.indexnow.org/indexnow";

async function verifyKeyFile() {
  const res = await fetch(KEY_LOCATION, { cache: "no-store" });
  const body = (await res.text()).trim();
  if (!res.ok || body !== KEY) {
    throw new Error(
      `Key file not served correctly at ${KEY_LOCATION} (status ${res.status}). Deploy first.`,
    );
  }
}

async function getSitemapUrls() {
  const res = await fetch(`${BASE_URL}/sitemap.xml`, { cache: "no-store" });
  if (!res.ok) throw new Error(`Failed to fetch sitemap.xml (status ${res.status})`);
  const xml = await res.text();
  const urls = [...xml.matchAll(/<loc>\s*([^<\s]+)\s*<\/loc>/g)].map((m) => m[1]);
  return [...new Set(urls)];
}

function normalize(arg) {
  if (/^https?:\/\//.test(arg)) return arg;
  return `${BASE_URL}${arg.startsWith("/") ? "" : "/"}${arg}`;
}

async function main() {
  await verifyKeyFile();

  const args = process.argv.slice(2);
  const urlList = args.length > 0 ? args.map(normalize) : await getSitemapUrls();

  const foreign = urlList.filter((u) => new URL(u).host !== HOST);
  if (foreign.length) throw new Error(`URLs must be on ${HOST}: ${foreign.join(", ")}`);
  if (urlList.length === 0) throw new Error("No URLs to submit.");

  // IndexNow accepts up to 10,000 URLs per request.
  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({ host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList }),
  });

  const text = await res.text();
  console.log(`Submitted ${urlList.length} URL(s) → ${res.status} ${res.statusText}`);
  if (text) console.log(text);

  // 200 OK / 202 Accepted (key validation pending) are both success.
  if (res.status !== 200 && res.status !== 202) process.exit(1);
}

main().catch((err) => {
  console.error(err.message);
  process.exit(1);
});

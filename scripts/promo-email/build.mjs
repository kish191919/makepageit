// Renders the promo emails from a targets file and writes a preview page.
//
// Run:  node --env-file=.env.local scripts/promo-email/build.mjs [targets.json]
//   default targets: scripts/output/promo-2026-11/targets.json
//
// Output (next to the targets file, gitignored):
//   emails.json   — what zoho-schedule.mjs sends
//   preview.html  — open in a browser to review every email
//
// Optional PROMO_POSTAL_ADDRESS (in .env.local) is appended to the footer line.

import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { compose, renderHtml, renderText } from "./template.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const targetsPath = path.resolve(process.argv[2] ?? path.join(__dirname, "../output/promo-2026-11/targets.json"));
const outDir = path.dirname(targetsPath);
const postalAddress = process.env.PROMO_POSTAL_ADDRESS ?? "";

const data = JSON.parse(await readFile(targetsPath, "utf8"));

const seen = new Set();
const emails = data.targets.map((t) => {
  const key = t.email.trim().toLowerCase();
  if (seen.has(key)) throw new Error(`Duplicate recipient ${t.email} (${t.id}) — keep one target per address.`);
  seen.add(key);
  const c = compose({ subjectStyle: data.subjectStyle, ...t });
  return {
    id: t.id,
    to: t.email.trim(),
    name: t.name,
    region: t.region,
    variant: t.variant,
    industry: t.industry,
    evidence: t.evidence ?? "",
    subject: c.subject,
    html: renderHtml(c, { postalAddress }),
    text: renderText(c, { postalAddress }),
  };
});

await writeFile(path.join(outDir, "emails.json"), JSON.stringify({ campaign: data.campaign, builtAt: new Date().toISOString(), emails }, null, 2));

// ---------- preview ----------
const VARIANT_LABEL = {
  "no-site": "홈페이지 없음",
  sns: "SNS만 있음",
  broken: "홈페이지 고장",
  mobile: "모바일 미대응",
  "has-site": "홈페이지 있음",
};
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const counts = Object.fromEntries(Object.keys(VARIANT_LABEL).map((v) => [v, emails.filter((e) => e.variant === v).length]));
const excludedCount = (data.excluded ?? []).reduce((n, g) => n + g.ids.length, 0);

const cards = emails.map((e, i) => `
<article class="card" data-variant="${e.variant}">
  <header>
    <div class="row1"><span class="num">#${i + 1}</span><span class="badge v-${e.variant}">${VARIANT_LABEL[e.variant]}</span><span class="ind">${esc(e.industry)}</span><span class="id">${esc(e.id)}</span></div>
    <div class="to">To: ${esc(e.to)}</div>
    <div class="subj">${esc(e.subject)}</div>
    ${e.evidence ? `<div class="ev">근거: ${esc(e.evidence)}</div>` : ""}
  </header>
  <iframe loading="lazy" srcdoc="${esc(`<!doctype html><meta charset="utf-8"><body style="margin:16px;background:#fff">${e.html}</body>`)}"></iframe>
</article>`).join("");

const excludedRows = (data.excluded ?? []).map((g) => `<tr><td>${esc(g.reason)}</td><td>${g.ids.length}</td><td>${g.ids.map(esc).join(", ")}</td></tr>`).join("");
const callRows = (data.callList ?? []).map((c) => `<tr><td>${esc(c.name)}</td><td class="nowrap">${esc(c.phone)}</td><td>${esc(c.hook)}</td></tr>`).join("");

const page = `<!doctype html>
<html lang="ko"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Promo Email Preview</title>
<style>
:root{--bg:#f4f5f7;--card:#fff;--ink:#111827;--muted:#6b7280;--line:#e5e7eb;--brand:#4f46e5}
*{box-sizing:border-box}body{margin:0;background:var(--bg);color:var(--ink);font:14px/1.55 -apple-system,BlinkMacSystemFont,'Apple SD Gothic Neo','Segoe UI',sans-serif}
main{max-width:1100px;margin:0 auto;padding:24px 16px 80px}
h1{font-size:22px;margin:0 0 4px}h2{font-size:17px;margin:36px 0 10px}
.sub{color:var(--muted);margin:0 0 18px}
.warn{background:#fef3c7;border:1px solid #f59e0b;border-radius:8px;padding:10px 14px;margin:0 0 16px}
.stats{display:flex;flex-wrap:wrap;gap:8px;margin:0 0 14px}
.stats button{border:1px solid var(--line);background:var(--card);border-radius:999px;padding:6px 14px;cursor:pointer;font:inherit}
.stats button.on{background:var(--ink);color:#fff;border-color:var(--ink)}
.grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(480px,1fr));gap:16px}
@media (max-width:540px){.grid{grid-template-columns:1fr}}
.card{background:var(--card);border:1px solid var(--line);border-radius:12px;overflow:hidden;display:flex;flex-direction:column}
.card header{padding:12px 14px;border-bottom:1px solid var(--line)}
.row1{display:flex;gap:8px;align-items:center;font-size:12px;color:var(--muted)}
.num{font-weight:700;color:var(--ink)}.id{margin-left:auto}
.badge{padding:2px 8px;border-radius:999px;font-weight:600;font-size:11px}
.v-no-site{background:#dbeafe;color:#1e40af}.v-sns{background:#dcfce7;color:#166534}.v-broken{background:#fee2e2;color:#991b1b}.v-mobile{background:#ffedd5;color:#9a3412}.v-has-site{background:#e0e7ff;color:#3730a3}
.to{margin-top:6px;font-size:12px;color:var(--muted)}.subj{font-weight:700;margin-top:2px}
.ev{margin-top:6px;font-size:12px;color:#92400e;background:#fffbeb;border-radius:6px;padding:4px 8px}
iframe{border:0;width:100%;height:560px;background:#fff}
table{width:100%;border-collapse:collapse;background:var(--card);border:1px solid var(--line);border-radius:8px;overflow:hidden;font-size:13px}
th,td{padding:8px 10px;border-bottom:1px solid var(--line);text-align:left;vertical-align:top}th{background:#f9fafb}.nowrap{white-space:nowrap}
</style></head><body><main>
<h1>프로모션 이메일 미리보기 · ${esc(data.campaign)}</h1>
<p class="sub">발송 대상 ${emails.length}통 · 제외 ${excludedCount}건 · 빌드 ${new Date().toLocaleString("ko-KR", { timeZone: "America/New_York" })} (뉴욕 시간)</p>
<div class="stats">
  <button class="on" data-f="all">전체 ${emails.length}</button>
  ${Object.entries(VARIANT_LABEL).map(([v, l]) => `<button data-f="${v}">${l} ${counts[v]}</button>`).join("")}
</div>
<div class="grid">${cards}</div>
<h2>전화로 연락할 곳 (이메일 제외)</h2>
<table><tr><th>업체</th><th>전화</th><th>이유 / 대화 포인트</th></tr>${callRows}</table>
<h2>제외 목록</h2>
<table><tr><th>사유</th><th>건수</th><th>업체</th></tr>${excludedRows}</table>
</main>
<script>
document.querySelectorAll('.stats button').forEach(b=>b.onclick=()=>{
  document.querySelectorAll('.stats button').forEach(x=>x.classList.toggle('on',x===b));
  const f=b.dataset.f;document.querySelectorAll('.card').forEach(c=>c.style.display=(f==='all'||c.dataset.variant===f)?'':'none');
});
</script></body></html>`;

await writeFile(path.join(outDir, "preview.html"), page);

console.log(`Built ${emails.length} emails →`, path.join(outDir, "emails.json"));
console.log(`Preview →`, path.join(outDir, "preview.html"));
console.log("By variant:", counts);

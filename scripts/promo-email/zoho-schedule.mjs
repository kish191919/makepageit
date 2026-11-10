// Schedules the built promo emails through the Zoho Mail API, one per interval.
// Scheduled mail sits in Zoho's Outbox until its time, then lands in Sent.
//
// Setup (once):
//   1. https://api-console.zoho.com → Self Client → copy Client ID / Secret
//      into .env.local as ZOHO_CLIENT_ID / ZOHO_CLIENT_SECRET.
//   2. Self Client → Generate Code, scopes:
//        ZohoMail.messages.CREATE,ZohoMail.messages.READ,ZohoMail.accounts.READ
//   3. node --env-file=.env.local scripts/promo-email/zoho-schedule.mjs auth <code>
//      (saves ZOHO_REFRESH_TOKEN into .env.local; the code expires in minutes)
//
// Commands (all read scripts/output/promo-2026-11/emails.json unless --emails=):
//   plan  --start="2026-11-10 10:00" [--interval=60] [--limit=N]   timetable only, no API
//   check [--folder=<id,id>]      who in the list was already emailed (reads Sent + Outbox in full)
//   test  --to=you@x.com [--id=r9] [--now]            schedules ONE copy ~3 min out (--now: send immediately)
//   send  --start="2026-11-10 10:00" [--interval=60] [--limit=N] [--region=a,b] [--include-contacted]
//
// Times are wall-clock in PROMO_TIMEZONE (default America/New_York).
// Progress is logged to schedule-log.json next to emails.json, so re-running
// `send` skips anything already scheduled. Addresses listed (one per line) in
// scripts/output/promo-suppress.txt are never sent to.

import { readFile, writeFile, appendFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "../..");
const ACCOUNTS = process.env.ZOHO_ACCOUNTS_URL ?? "https://accounts.zoho.com";
const MAIL_API = process.env.ZOHO_MAIL_API ?? "https://mail.zoho.com";
const TZ = process.env.PROMO_TIMEZONE ?? "America/New_York";

const [cmd, ...rest] = process.argv.slice(2);
const args = Object.fromEntries(
  rest.filter((a) => a.startsWith("--")).map((a) => {
    const [k, ...v] = a.slice(2).split("=");
    return [k, v.length ? v.join("=") : true];
  }),
);
const positional = rest.filter((a) => !a.startsWith("--"));

const emailsPath = path.resolve(args.emails ?? path.join(ROOT, "scripts/output/promo-2026-11/emails.json"));
const outDir = path.dirname(emailsPath);
const logPath = path.join(outDir, "schedule-log.json");
const contactedPath = path.join(outDir, "already-contacted.json");
const suppressPath = path.join(ROOT, "scripts/output/promo-suppress.txt");

const die = (msg) => { console.error(`✗ ${msg}`); process.exit(1); };
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const readJson = async (p, fallback) => (existsSync(p) ? JSON.parse(await readFile(p, "utf8")) : fallback);

// ---------- time (naive wall-clock in TZ, stored as UTC-epoch numbers) ----------
function parseStart(s) {
  const m = /^(\d{4})-(\d{2})-(\d{2})[ T](\d{2}):(\d{2})$/.exec(String(s ?? ""));
  if (!m) die(`--start must look like "2026-11-10 10:00" (wall-clock ${TZ})`);
  return Date.UTC(+m[1], +m[2] - 1, +m[3], +m[4], +m[5], 0);
}
function nowInTz() {
  const p = Object.fromEntries(
    new Intl.DateTimeFormat("en-US", { timeZone: TZ, hourCycle: "h23", year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit" })
      .formatToParts(new Date()).map((x) => [x.type, x.value]),
  );
  return Date.UTC(+p.year, +p.month - 1, +p.day, +p.hour, +p.minute, +p.second);
}
const pad = (n) => String(n).padStart(2, "0");
const zohoTime = (t) => { const d = new Date(t); return `${pad(d.getUTCMonth() + 1)}/${pad(d.getUTCDate())}/${d.getUTCFullYear()} ${pad(d.getUTCHours())}:${pad(d.getUTCMinutes())}:${pad(d.getUTCSeconds())}`; };
const humanTime = (t) => { const d = new Date(t); return `${d.getUTCFullYear()}-${pad(d.getUTCMonth() + 1)}-${pad(d.getUTCDate())} ${pad(d.getUTCHours())}:${pad(d.getUTCMinutes())}:${pad(d.getUTCSeconds())}`; };

// ---------- Zoho ----------
function requireEnv(...names) {
  const missing = names.filter((n) => !process.env[n]);
  if (missing.length) die(`Missing ${missing.join(", ")} in .env.local (run with: node --env-file=.env.local ...)`);
}

async function tokenRequest(params) {
  const res = await fetch(`${ACCOUNTS}/oauth/v2/token?${new URLSearchParams(params)}`, { method: "POST" });
  const body = await res.json().catch(() => ({}));
  if (!res.ok || body.error) die(`Zoho token request failed: ${res.status} ${body.error ?? JSON.stringify(body)}`);
  return body;
}

let cachedToken;
async function accessToken() {
  if (cachedToken && cachedToken.exp > Date.now() + 60_000) return cachedToken.value;
  requireEnv("ZOHO_CLIENT_ID", "ZOHO_CLIENT_SECRET", "ZOHO_REFRESH_TOKEN");
  const body = await tokenRequest({
    refresh_token: process.env.ZOHO_REFRESH_TOKEN,
    grant_type: "refresh_token",
    client_id: process.env.ZOHO_CLIENT_ID,
    client_secret: process.env.ZOHO_CLIENT_SECRET,
  });
  cachedToken = { value: body.access_token, exp: Date.now() + (body.expires_in ?? 3600) * 1000 };
  return cachedToken.value;
}

async function zoho(method, pathname, body) {
  const res = await fetch(`${MAIL_API}${pathname}`, {
    method,
    headers: {
      Authorization: `Zoho-oauthtoken ${await accessToken()}`,
      Accept: "application/json",
      ...(body ? { "Content-Type": "application/json" } : {}),
    },
    body: body ? JSON.stringify(body) : undefined,
  });
  const text = await res.text();
  let json; try { json = JSON.parse(text); } catch { json = { raw: text }; }
  return { ok: res.ok && (json?.status?.code ?? 200) < 300, status: res.status, json };
}

async function getAccount() {
  const r = await zoho("GET", "/api/accounts");
  if (!r.ok) die(`GET /api/accounts failed (${r.status}): ${JSON.stringify(r.json)}`);
  const acct = (r.json.data ?? []).find((a) => a.primaryEmailAddress) ?? r.json.data?.[0];
  if (!acct?.accountId) die(`No mail account in response: ${JSON.stringify(r.json).slice(0, 400)}`);
  const addr = process.env.ZOHO_FROM ?? acct.primaryEmailAddress;
  // Without a display name Gmail shows just "admin". PROMO_FROM_NAME="" sends the bare address.
  const name = process.env.PROMO_FROM_NAME ?? "Danny Ki | 메이크페이지잇";
  return { accountId: String(acct.accountId), from: name ? `"${name}" <${addr}>` : addr };
}

async function scheduleOne(account, { to, subject, html }, when) {
  return zoho("POST", `/api/accounts/${account.accountId}/messages`, {
    fromAddress: account.from,
    toAddress: to,
    subject,
    content: html,
    mailFormat: "html",
    encoding: "UTF-8",
    askReceipt: "no",
    // when === null → send immediately (test --now)
    ...(when === null ? {} : { isSchedule: true, scheduleType: 6, timeZone: TZ, scheduleTime: zohoTime(when) }),
  });
}

// ---------- data ----------
async function loadEmails() {
  if (!existsSync(emailsPath)) die(`${emailsPath} not found — run build.mjs first.`);
  return JSON.parse(await readFile(emailsPath, "utf8")).emails;
}
async function suppressed() {
  if (!existsSync(suppressPath)) return new Set();
  return new Set((await readFile(suppressPath, "utf8")).split(/\r?\n/).map((s) => s.trim().toLowerCase()).filter(Boolean));
}

async function queue({ includeContacted }) {
  const emails = await loadEmails();
  const log = await readJson(logPath, []);
  const done = new Set(log.filter((l) => l.ok).map((l) => l.to.toLowerCase()));
  const sup = await suppressed();
  const contacted = new Set((await readJson(contactedPath, [])).map((c) => c.to.toLowerCase()));
  const skipped = [];
  // --region=남가주,북가주 limits a run to those regions, so each time zone can
  // be scheduled in its own run with its own PROMO_TIMEZONE.
  const regions = args.region && args.region !== true ? new Set(String(args.region).split(",")) : null;
  const list = emails.filter((e) => {
    if (regions && !regions.has(e.region)) return false;
    const k = e.to.toLowerCase();
    if (done.has(k)) return skipped.push([e, "이미 예약됨"]), false;
    if (sup.has(k)) return skipped.push([e, "수신거부"]), false;
    if (contacted.has(k) && !includeContacted) return skipped.push([e, "이전에 보낸 적 있음"]), false;
    return true;
  });
  return { list: args.limit ? list.slice(0, Number(args.limit)) : list, skipped, log };
}

function timetable(list, start, interval) {
  return list.map((e, i) => ({ e, when: start + i * interval * 1000 }));
}

// ---------- commands ----------
async function cmdAuth() {
  const code = positional[0];
  if (!code) die("Usage: auth <grant-code from the Self Client 'Generate Code' tab>");
  requireEnv("ZOHO_CLIENT_ID", "ZOHO_CLIENT_SECRET");
  const body = await tokenRequest({ grant_type: "authorization_code", client_id: process.env.ZOHO_CLIENT_ID, client_secret: process.env.ZOHO_CLIENT_SECRET, code });
  if (!body.refresh_token) die(`No refresh_token returned: ${JSON.stringify({ ...body, access_token: body.access_token ? "(hidden)" : undefined })}`);
  const envPath = path.join(ROOT, ".env.local");
  const cur = existsSync(envPath) ? await readFile(envPath, "utf8") : "";
  if (/^ZOHO_REFRESH_TOKEN=/m.test(cur)) {
    await writeFile(envPath, cur.replace(/^ZOHO_REFRESH_TOKEN=.*$/m, `ZOHO_REFRESH_TOKEN=${body.refresh_token}`));
  } else {
    await appendFile(envPath, `${cur.endsWith("\n") || !cur ? "" : "\n"}ZOHO_REFRESH_TOKEN=${body.refresh_token}\n`);
  }
  console.log("✓ Saved ZOHO_REFRESH_TOKEN to .env.local (scopes:", body.scope ?? "n/a", ")");
}

async function cmdPlan() {
  const start = parseStart(args.start);
  const interval = Number(args.interval ?? 60);
  const { list, skipped } = await queue({ includeContacted: !!args["include-contacted"] });
  const rows = timetable(list, start, interval);
  for (const { e, when } of rows) console.log(`${humanTime(when)}  ${e.to.padEnd(34)}  ${e.subject}`);
  for (const [e, why] of skipped) console.log(`skip (${why})  ${e.to}`);
  if (rows.length) console.log(`\n${rows.length} emails, ${humanTime(rows[0].when)} → ${humanTime(rows.at(-1).when)} (${TZ}), every ${interval}s`);
  const perHour = Math.min(rows.length, Math.floor(3600 / interval));
  if (perHour > 50) console.log(`⚠ ${perHour} emails fall in the first hour. Zoho's outbound limit is 50–500/hour depending on reputation; consider --limit and a second batch.`);
}

// Reads the whole Sent folder (200 per page) and matches recipients locally.
// Per-address search hits Zoho's URL_ROLLING_THROTTLES_LIMIT_EXCEEDED after a
// few dozen calls, so it doesn't scale to hundreds of addresses.
// Folder ids come from --folder=a,b / ZOHO_SENT_FOLDER_ID, or are found by
// searching for mail we sent (listing folders needs another scope). That
// search returns both Sent and Outbox (scheduled) messages, so read every
// folder it mentions.
async function sentFolderIds(account) {
  const fixed = args.folder ?? process.env.ZOHO_SENT_FOLDER_ID;
  if (fixed && fixed !== true) return String(fixed).split(",");
  const addr = account.from.match(/<([^>]+)>/)?.[1] ?? account.from;
  const ids = new Set();
  for (let start = 1; start <= 1000; start += 200) {
    const q = new URLSearchParams({ searchKey: `from:${addr}`, start: String(start), limit: "200" });
    const r = await zoho("GET", `/api/accounts/${account.accountId}/messages/search?${q}`);
    if (!r.ok) die(`Couldn't find the Sent folder (${r.status}). Pass --folder=<id>. ${JSON.stringify(r.json).slice(0, 300)}`);
    const page = r.json.data ?? [];
    page.forEach((m) => m.folderId && ids.add(String(m.folderId)));
    if (page.length < 200) break;
    await sleep(1500);
  }
  if (!ids.size) die("No sent mail found. Pass --folder=<id>.");
  return [...ids];
}

const unescape = (s) => String(s ?? "").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&amp;/g, "&");
const addressesIn = (s) => (unescape(s).match(/[A-Za-z0-9._%+'-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/g) ?? []).map((a) => a.toLowerCase());

async function cmdCheck() {
  const emails = await loadEmails();
  const account = await getAccount();
  const folderIds = await sentFolderIds(account);
  const sent = new Map(); // address → [{subject, sentDateInGMT}]
  let total = 0;
  for (const folderId of folderIds) for (let start = 1; ; start += 200) {
    let r;
    for (let attempt = 0; attempt < 5; attempt++) {
      r = await zoho("GET", `/api/accounts/${account.accountId}/messages/view?${new URLSearchParams({ folderId, start: String(start), limit: "200" })}`);
      if (r.ok || !/THROTTLE/i.test(JSON.stringify(r.json))) break;
      console.log("  throttled — waiting 60s");
      await sleep(60_000);
    }
    if (!r.ok) die(`Listing Sent folder failed at ${start} (${r.status}): ${JSON.stringify(r.json).slice(0, 400)}`);
    const page = r.json.data ?? [];
    for (const m of page) {
      for (const a of [...addressesIn(m.toAddress), ...addressesIn(m.ccAddress), ...addressesIn(m.bccAddress)]) {
        if (!sent.has(a)) sent.set(a, []);
        sent.get(a).push({ subject: m.subject, sentDateInGMT: m.sentDateInGMT ?? m.receivedTime });
      }
    }
    total += page.length;
    if (page.length < 200) break;
    await sleep(1500);
  }
  console.log(`Account ${account.from} — read ${total} sent/scheduled messages (${sent.size} recipients) from folders ${folderIds.join(", ")}`);
  const hits = emails.filter((e) => sent.has(e.to.toLowerCase())).map((e) => ({ to: e.to, id: e.id, previous: sent.get(e.to.toLowerCase()).slice(0, 5) }));
  for (const h of hits) console.log(`• ${h.to}: ${h.previous.length} earlier message(s) — "${h.previous[0].subject}"`);
  await writeFile(contactedPath, JSON.stringify(hits, null, 2));
  console.log(`\n${hits.length} of ${emails.length} were emailed before → ${contactedPath}`);
  console.log("`send` skips these unless you pass --include-contacted.");
}

async function cmdTest() {
  if (!args.to || args.to === true) die("Usage: test --to=you@example.com [--id=r9]");
  const emails = await loadEmails();
  const pick = args.id ? emails.find((e) => e.id === args.id) : emails[0];
  if (!pick) die(`No email with id ${args.id}`);
  const account = await getAccount();
  const when = args.now ? null : nowInTz() + 3 * 60 * 1000;
  const r = await scheduleOne(account, { to: args.to, subject: `[TEST] ${pick.subject}`, html: pick.html }, when);
  console.log(`${r.ok ? "✓" : "✗"} ${r.status} — ${when === null ? "sent" : "scheduled"} copy of ${pick.id} to ${args.to} ${when === null ? "(sent now)" : `for ${humanTime(when)} ${TZ}`}`);
  const { content, ...meta } = r.json?.data ?? {};
  console.log(JSON.stringify(r.json?.data ? { status: r.json.status, data: meta } : r.json, null, 2));
  if (!r.ok) process.exit(1);
  console.log(when === null ? "Check your inbox now." : "Check Zoho Outbox now, then your inbox in ~3 minutes.");
}

async function cmdSend() {
  const start = parseStart(args.start);
  const interval = Number(args.interval ?? 60);
  if (start < nowInTz() + 5 * 60 * 1000) die(`--start must be at least 5 minutes from now (${TZ}).`);
  const { list, skipped, log } = await queue({ includeContacted: !!args["include-contacted"] });
  for (const [e, why] of skipped) console.log(`skip (${why})  ${e.to}`);
  if (!list.length) return console.log("Nothing to schedule.");
  const account = await getAccount();
  console.log(`From ${account.from} — scheduling ${list.length} emails every ${interval}s from ${humanTime(start)} ${TZ}`);
  for (const { e, when } of timetable(list, start, interval)) {
    // A throttled POST creates nothing, so retrying it can't double-send.
    let r;
    for (let attempt = 0; attempt < 5; attempt++) {
      r = await scheduleOne(account, e, when);
      if (r.ok || !/THROTTLE/i.test(JSON.stringify(r.json))) break;
      console.log(`  throttled — waiting 60s (attempt ${attempt + 1})`);
      await sleep(60_000);
    }
    const { content, ...data } = r.json?.data ?? {};
    const response = r.json?.data ? { status: r.json.status, data } : r.json;
    log.push({ id: e.id, to: e.to, subject: e.subject, scheduleTime: humanTime(when), tz: TZ, ok: r.ok, status: r.status, response, at: new Date().toISOString() });
    await writeFile(logPath, JSON.stringify(log, null, 2));
    if (!r.ok) die(`Stopped at ${e.to} (${r.status}): ${JSON.stringify(r.json).slice(0, 500)}\nEarlier ones stay scheduled; fix and re-run to continue.`);
    console.log(`✓ ${humanTime(when)}  ${e.to}`);
    await sleep(1200);
  }
  console.log(`\nDone. Log → ${logPath}`);
}

const commands = { auth: cmdAuth, plan: cmdPlan, check: cmdCheck, test: cmdTest, send: cmdSend };
if (!commands[cmd]) die(`Usage: zoho-schedule.mjs <${Object.keys(commands).join("|")}> [options] — see the header of this file.`);
await commands[cmd]();

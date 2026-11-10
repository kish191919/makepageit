# Step 4: merge HTTP + browser results into a variant (broken/mobile/sns/has-site/no-site) with evidence.
# usage: python3 scripts/promo-email/pipeline/4_classify.py <workdir>
#   reads pool.json, sites.json, render_out.json; writes classified.json
import json, os, re, subprocess, sys
from collections import Counter
from urllib.parse import urlparse
from concurrent.futures import ThreadPoolExecutor

os.chdir(os.path.abspath(sys.argv[1]))
pool = [p for p in json.load(open("pool.json"))["pool"] if p["mx"] in ("freemail", "mx")]
S = {r["row"]: r for r in json.load(open("sites.json"))}
R = {r["row"]: r for r in json.load(open("render_out.json"))}

HIJACK = re.compile(r"(slot|gacor|togel|judi|casino|bandar|toto|sbobet|mahjong|situs|live draw|fakultas|universitas|"
                    r"카지노|토토|바카라|dating|escort|viagra|pharmacy online)", re.I)
PARK = [
    (re.compile(r"/lander\b|parkingcrew|sedo\.com|expireddomains\.com|hugedomains|afternic|dan\.com|bodis|domain (is )?for sale|"
                r"buy this domain|this domain (name )?(has expired|is parked|may be for sale)|namebright - coming soon|"
                r"whois-suspension|domain details page|is for sale", re.I), "parked"),
    (re.compile(r"account suspended|suspendedpage\.cgi|this account has been suspended|site offline", re.I), "suspended"),
    (re.compile(r"index of /|welcome to nginx|apache2 .*default page|it works!|under construction|coming soon|launching soon|"
                r"web hosting, domain name registration and web services by 1&amp;1|default web site page", re.I), "empty"),
]

def reg(host):
    host = (host or "").lower().split(":")[0]
    if host.startswith("www."): host = host[4:]
    p = host.split(".")
    return ".".join(p[-2:]) if len(p) >= 2 else host

def short(u):
    u = re.sub(r"^https?://", "", u.strip(), flags=re.I).rstrip("/")
    return re.sub(r"^www\.", "", u, flags=re.I) if u.count("/") == 0 else u

def dns(host):
    host = host.lower().split(":")[0]
    a = subprocess.run(["dig", "+short", "+time=3", "+tries=2", "A", host], capture_output=True, text=True).stdout.strip()
    ns = subprocess.run(["dig", "+short", "+time=3", "+tries=2", "NS", reg(host)], capture_output=True, text=True).stdout.strip()
    return host, {"a": bool(a), "ns": bool(ns)}

out = []
dead_hosts = set()
for p in pool:
    s, r = S.get(p["row"]), R.get(p["row"])
    if s and s.get("kind") == "dead" or (r and r.get("gotoError") and not r.get("final")):
        u = (p["url"] or p["domain"])
        if not u.startswith("http"): u = "http://" + u
        dead_hosts.add(urlparse(u).netloc)
with ThreadPoolExecutor(32) as ex:
    DNS = dict(ex.map(dns, sorted(dead_hosts)))

for p in pool:
    s, r = S.get(p["row"]), R.get(p["row"])
    listed = bool(p["url"])
    c = dict(p)
    c["site"] = short(p["url"]) if listed else None
    blob = ""
    if r: blob = " ".join(str(r.get(k) or "") for k in ("final", "title", "text"))
    if s and not s.get("kind"): blob += " " + (s.get("final") or "") + " " + (s.get("title") or "")

    if not s:
        c["variant"], c["why"] = "no-site", "업소록에 홈페이지 없음 + 무료 메일"
    elif s.get("kind") == "sns":
        c["variant"], c["why"], c["sns"] = "sns", f"업소록 홈페이지 칸이 SNS ({s['sns']})", s["sns"]
    else:
        status_r = r.get("status") if r else None
        status_s = s.get("status")
        final = (r.get("final") if r and r.get("final") else s.get("final")) or ""
        host_in = urlparse(s.get("tried") or ("http://" + (p["url"] or p["domain"]).split("://")[-1])).netloc
        same = reg(urlparse(final).netloc) == reg(host_in) if final else True
        kind = None
        hij = HIJACK.search((r or {}).get("title", "") + " " + (r or {}).get("text", "")[:200] + " " + (s.get("title") or "")) if (r or s.get("spam", 0) >= 3) else None
        if hij and (not same or s.get("spam", 0) >= 3):
            kind = "hijacked"
        if not kind:
            for rx, k in PARK:
                if rx.search(blob):
                    kind = k; break
            # tiny GoDaddy lander stub caught by requests even if the browser never got there
            if not kind and s.get("len", 0) and s.get("len") < 200 and r and "/lander" in (r.get("final") or ""):
                kind = "parked"
        if not kind and s.get("kind") == "dead" and (not r or not r.get("final")):
            d = DNS.get(urlparse("http://" + (p["url"] or p["domain"]).split("://")[-1]).netloc, {})
            kind = "dead-dns" if not d.get("a") else "dead-conn"
            c["dns"] = d
        if not kind and r and r.get("certError") and (s.get("kind") == "dead" or s.get("ssl")):
            kind = "cert"
        if not kind and status_s and status_s >= 400:
            if status_s in (404, 410) and (status_r in (404, 410, None)):
                kind = "http404"
            elif status_s >= 500 and (status_r is None or status_r >= 500):
                kind = "http5xx"
            else:
                kind = "blocked"   # 401/403/429 etc — bot protection, no claim
        if not kind and r and r.get("status") in (404, 410) and (r.get("textLen") or 0) < 400:
            kind = "http404"
        if not kind and not same:
            kind = "redirect-other"
        if not kind:
            if r and r.get("innerWidth") and r["innerWidth"] >= 800 and ((r.get("textLen") or 0) >= 300 or (r.get("frames") or 0) > 0):
                kind = "mobile"
            elif r and r.get("innerWidth") and r["innerWidth"] >= 800:
                kind = "mobile-thin"
            else:
                kind = "ok"
        plat = s.get("platform")
        if not plat and r:
            plat = "Wix" if r.get("wix") else "Squarespace" if r.get("squarespace") else "GoDaddy 웹사이트 빌더" if r.get("godaddy") else "Weebly" if r.get("weebly") else None
        c["platform"], c["check"], c["final"] = plat, kind, final
        c["title_seen"] = (r or {}).get("title") or s.get("title") or ""
        c["status"] = status_r or status_s
        if not listed:
            # custom mail domain, nothing listed in the directory
            if kind in ("ok", "mobile", "mobile-thin"):
                c["site"] = short(final or p["domain"]) if same else short(p["domain"])
                c["variant"] = "has-site" if kind == "ok" else ("mobile" if kind == "mobile" else "has-site")
                c["why"] = f"메일 도메인({p['domain']})에 운영 중인 사이트"
            else:
                c["variant"], c["why"] = "no-site", f"업소록에 홈페이지 없음, 메일 도메인 사이트도 {kind}"
        elif kind in ("dead-dns", "dead-conn", "http404", "http5xx", "parked", "suspended", "empty", "hijacked"):
            c["variant"], c["why"] = "broken", kind
        elif kind == "mobile":
            c["variant"], c["why"] = "mobile", f"모바일 뷰포트 없음 (innerWidth {r['innerWidth']})"
        elif kind == "ok":
            c["variant"], c["why"] = "has-site", "정상"
        else:
            c["variant"], c["why"] = "skip", kind
    out.append(c)

json.dump(out, open("classified.json", "w"), ensure_ascii=False, indent=1)
print(Counter(c["variant"] for c in out).most_common())
print(Counter(c.get("check") for c in out if c["variant"] in ("broken", "skip")).most_common())
print("has-site platforms", Counter(c.get("platform") for c in out if c["variant"] == "has-site").most_common())

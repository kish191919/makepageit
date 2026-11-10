# Step 2: check every listed homepage (and custom mail domains with no listed homepage).
# usage: python3 scripts/promo-email/pipeline/2_sites.py <workdir>
#   reads pool.json, writes sites.json and render_in.json (the ambiguous ones for step 3)
#   ONLY=rows.json re-checks just those rows and merges into sites.json
import json, os, re, sys, warnings
from concurrent.futures import ThreadPoolExecutor
from urllib.parse import urlparse
import requests

warnings.filterwarnings("ignore")
WORK = os.path.abspath(sys.argv[1])
POOL, OUT = os.path.join(WORK, "pool.json"), os.path.join(WORK, "sites.json")
data = json.load(open(POOL))
pool = [p for p in data["pool"] if p["mx"] in ("freemail", "mx")]

UA = {"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0 Safari/537.36",
      "Accept-Language": "en-US,en;q=0.9,ko;q=0.8"}
SNS = re.compile(r"(?:^|[/.@])(facebook\.com|fb\.com|instagram\.com|youtube\.com|youtu\.be|blog\.naver\.com|cafe\.naver\.com|kakao|yelp\.com|"
                 r"linktr\.ee|twitter\.com|x\.com|tiktok\.com|band\.us|tistory\.com|blogspot\.com|google\.com/maps|goo\.gl|"
                 r"business\.site|sites\.google\.com)", re.I)
PARKED = re.compile(r"(domain (is|may be) for sale|buy this domain|this domain is parked|parked free|hugedomains|afternic|sedoparking|"
                    r"sedo\.com|dan\.com|domain has expired|this domain name has expired|is for sale!|godaddy\.com/domainsearch|"
                    r"parkingcrew|bodis\.com|above\.com|domainmarket|undeveloped\.com|future home of something quite cool|"
                    r"this site can.t be reached|website coming soon|launching soon|under construction|account suspended|"
                    r"this account has been suspended|default web site page|welcome to nginx|apache2 ubuntu default|"
                    r"it works!|index of /)", re.I)
SPAM = re.compile(r"(casino|slot ?gacor|judi|togel|bandar|poker online|sbobet|토토|카지노|바카라|viagra|cialis|escort|"
                  r"pragmatic play|sv388|situs|mahjong ways|가입머니)", re.I)

def platform(html):
    h = html[:400000]
    if re.search(r"static\.wixstatic\.com|wix-bolt|_wixCIDX|Wix\.com Website Builder|wix-thunderbolt", h): return "Wix"
    if re.search(r"static1\.squarespace\.com|squarespace-cdn|<!-- This is Squarespace\.", h, re.I): return "Squarespace"
    if re.search(r"img1\.wsimg\.com|Go Daddy Website Builder|Starfield Technologies|websites\.godaddy\.com|GoDaddy Website Builder", h, re.I): return "GoDaddy 웹사이트 빌더"
    if re.search(r"editmysite\.com|weebly\.com|Weebly", h): return "Weebly"
    return None

def registrable(host):
    host = (host or "").lower().split(":")[0]
    if host.startswith("www."): host = host[4:]
    parts = host.split(".")
    return ".".join(parts[-2:]) if len(parts) >= 2 else host

def fetch(url):
    try:
        r = requests.get(url, headers=UA, timeout=(8, 15), allow_redirects=True)
        return r, None, False
    except requests.exceptions.SSLError:
        try:
            r = requests.get(url, headers=UA, timeout=(8, 15), allow_redirects=True, verify=False)
            return r, None, True
        except Exception as ex:
            return None, type(ex).__name__, True
    except Exception as ex:
        return None, type(ex).__name__, False

def check(p):
    raw = p["url"]
    from_domain = False
    if not raw:
        raw = p["domain"]
        from_domain = True
    if SNS.search(raw):
        return {"row": p["row"], "kind": "sns", "input": raw, "sns": SNS.search(raw).group(1)}
    if not re.match(r"^https?://", raw, re.I): raw = "http://" + raw
    u = urlparse(raw)
    host = u.netloc
    tries = [raw]
    alt_host = host[4:] if host.lower().startswith("www.") else "www." + host
    for scheme in ("https", "http"):
        for h in (host, alt_host):
            cand = f"{scheme}://{h}{u.path or '/'}"
            if cand not in tries: tries.append(cand)
    attempts = []
    for t in tries:
        r, err, ssl_bad = fetch(t)
        if r is None:
            attempts.append({"url": t, "err": err, "ssl": ssl_bad})
            continue
        html = r.text[:600000] if "html" in r.headers.get("content-type", "html") else ""
        res = {
            "row": p["row"], "input": p["url"] or p["domain"], "fromDomain": from_domain, "tried": t, "final": r.url,
            "status": r.status_code, "ssl": ssl_bad, "len": len(html), "attempts": attempts,
            "viewport": bool(re.search(r"<meta[^>]+name=[\"']?viewport", html, re.I)),
            "platform": platform(html),
            "parked": bool(PARKED.search(html[:200000])) and len(re.sub(r"<[^>]+>", " ", html)) < 60000,
            "spam": len(SPAM.findall(html[:300000])),
            "frameset": bool(re.search(r"<frameset|<frame\s", html, re.I)),
            "title": (re.search(r"<title[^>]*>(.*?)</title>", html, re.I | re.S).group(1).strip()[:120] if re.search(r"<title[^>]*>(.*?)</title>", html, re.I | re.S) else ""),
            "sameDomain": registrable(urlparse(r.url).netloc) == registrable(host),
            "finalHost": urlparse(r.url).netloc,
            "years": sorted(set(re.findall(r"(?:©|&copy;|copyright)\s*(?:\d{4}\s*[-–]\s*)?(20\d\d|19\d\d)", html, re.I)))[-3:],
        }
        if r.status_code < 400 or t == tries[-1]:
            return res
        attempts.append({"url": t, "status": r.status_code})
        last = res
    if attempts and "status" in attempts[-1]:
        return last
    return {"row": p["row"], "input": p["url"] or p["domain"], "fromDomain": from_domain, "kind": "dead", "attempts": attempts}

todo = [p for p in pool if p["url"] or not p["freemail"]]
ONLY = set(json.load(open(os.environ["ONLY"]))) if os.environ.get("ONLY") else None
if ONLY: todo = [p for p in todo if p["row"] in ONLY]
print("checking", len(todo), "sites", flush=True)
with ThreadPoolExecutor(40) as ex:
    results = list(ex.map(check, todo))
if ONLY:
    old = [r for r in json.load(open(OUT)) if r["row"] not in ONLY]
    results_all = old + results
else:
    results_all = results
json.dump(results_all, open(OUT, "w"), ensure_ascii=False, indent=1)
from collections import Counter
def kind(r):
    if r.get("kind"): return r["kind"]
    if r["status"] >= 400: return f"http{r['status']//100}xx"
    if r["spam"] >= 3: return "spam"
    if r["parked"]: return "parked"
    if not r["sameDomain"]: return "redirect-other"
    if not r["viewport"]: return "no-viewport"
    return "ok:" + (r["platform"] or "custom")
print(Counter(kind(r) for r in results).most_common())

# sites the browser should look at: dead, errors, spam, parked, cross-domain redirects, no viewport
items = []
for r in results_all:
    if r.get("kind") == "sns": continue
    if r.get("kind") == "dead" or r["status"] >= 400 or r["spam"] >= 3 or r["parked"] or not r["sameDomain"] or not r["viewport"]:
        u = r["input"] if r.get("kind") == "dead" else (r.get("tried") or r["input"])
        items.append({"row": r["row"], "url": u if u.startswith("http") else "http://" + u})
json.dump(items, open(os.path.join(WORK, "render_in.json"), "w"))
print("for browser check (step 3):", len(items))

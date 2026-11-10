# Step 5: pick targets from classified.json and write targets.json for build.mjs.
# usage: python3 scripts/promo-email/pipeline/5_select.py <workdir> <out targets.json> --count N
#          [--campaign promo_2026_12] [--quota 4=150,5=45,7=0] [--prefer-region 워싱턴DC]
#          [--contacted a.json,b.json]
# Buckets, in priority order: 1 broken (non-DNS) · 2 mobile · 3 SNS-only ·
# 4 lapsed domain · 5 builder site · 6 no site · 7 other site. --quota caps a
# bucket; buckets not named are unlimited. Industry caps scale with --count.
# Always skips addresses scheduled in any earlier campaign
# (scripts/output/promo-*/schedule-log.json) and promo-suppress.txt.
import argparse, glob, json, math, re, sys, os
from collections import Counter, defaultdict

ap = argparse.ArgumentParser()
ap.add_argument("work"); ap.add_argument("out")
ap.add_argument("--count", type=int, required=True)
ap.add_argument("--campaign", default="promo_next")
ap.add_argument("--quota", default="")
ap.add_argument("--prefer-region", default="")
ap.add_argument("--contacted", default="")
ap.add_argument("--subject-style", default="promo")
A = ap.parse_args()
OUT, COUNT = os.path.abspath(A.out), A.count
ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), "../../.."))

contacted = set()
for p in [x for x in A.contacted.split(",") if x]:
    if os.path.exists(p): contacted |= {c["to"].lower() for c in json.load(open(p))}
for p in glob.glob(f"{ROOT}/scripts/output/promo-*/schedule-log.json"):
    contacted |= {l["to"].lower() for l in json.load(open(p)) if l.get("ok")}
if os.path.exists(f"{ROOT}/scripts/output/promo-suppress.txt"):
    contacted |= {l.strip().lower() for l in open(f"{ROOT}/scripts/output/promo-suppress.txt") if l.strip()}

os.chdir(os.path.abspath(A.work))
C = json.load(open("classified.json"))
R = {r["row"]: r for r in json.load(open("render_out.json"))}
by_row = {c["row"]: c for c in C}

excluded = defaultdict(list)
def drop(c, why): excluded[why].append(f"{c['name']} ({c['email']})")

# ---- manual review, 2026-11-09 — row numbers of korean-biz-us-with-email-2026-11-09.csv ----
# (re-review the broken/mobile lists by eye whenever the checks are re-run)
FALSE_BROKEN = {821, 1071, 2489, 2972, 3944, 4303}          # flagged but the site works
PATH_404 = {408, 1590, 2933, 3436, 3696, 4503}             # listed sub-page 404s, homepage fine
HIJACK_EMAIL = {885, 2946}                                  # email came from the hijacked page itself
LARGE_OR_OFFTOPIC = {1066, 3318, 2833, 2971, 2982, 3912, 686, 1132, 2156, 2180, 2303, 2840, 4528, 1408, 1331, 4087, 4566, 4881, 4882, 4895, 4903}
RECLASS = {2081: "empty", 2907: "whois", 311: "error", 3175: "error", 2487: "error", 3016: "error", 1689: "http404",
           4384: "unrelated", 3767: "unrelated", 953: "unrelated"}
NAME_EXCL = re.compile(r"(애터미|ATOMY|샤크리|샤클리|SHAKLEE|허벌라이프|HERBALIFE|암웨이|AMWAY|뉴스킨|NU ?SKIN|정관장|이니스프리|"
                       r"더페이스샵|미샤|아모레|설화수|리딩타운|READING ?TOWN|양로|요양|대학교|대학|연구회|협회|총회|노회|연합회|한인회|"
                       r"재단|코코호도|COCOHODO|영사|BUDGET BLINDS|UNITI)", re.I)
REST_EXCL = re.compile(r"(식당장비|식당용품|식당가구|메뉴판|장비|가구|도매|서플라이|SUPPLY)", re.I)
CALL = []

QUAL = {"gmail.com": 0, "naver.com": 1, "hanmail.net": 1, "daum.net": 1, "icloud.com": 1, "me.com": 1, "outlook.com": 1,
        "live.com": 1, "yahoo.co.kr": 1, "yahoo.com": 2, "hotmail.com": 2, "ymail.com": 2, "msn.com": 2}
def qual(c):
    if not c["freemail"]: return 0
    if c["oldIsp"]: return 3
    return QUAL.get(c["domain"], 2)

NOUN = {"church": "교회", "catholic": "성당"}
SNS_LABEL = {"facebook.com": ("페이스북 페이지", "로"), "instagram.com": ("인스타그램 계정", "으로"), "youtube.com": ("유튜브 채널", "로"),
             "yelp.com": ("옐프(Yelp) 페이지", "로"), "blog.naver.com": ("네이버 블로그", "로"), "cafe.naver.com": ("네이버 카페", "로"),
             "blogspot.com": ("블로그(blogspot) 주소", "로"), "tistory.com": ("티스토리 블로그", "로"), "twitter.com": ("트위터(X) 계정", "으로")}

LOC = re.compile(r"(점|본사|지점|센터|엘에이|얼바인|플러튼|부에나|가든|토랜스|토렌스|세리토스|라카나다|샌디에고|다이아몬드바|라구나|터스틴|"
                 r"노스릿지|레스톤|버뱅크|파사데나|글렌데일|로렌하이츠|애너하임|한남|LA|맨하탄|타운|본부|체인|이사|상업용|이민법|파산|"
                 r"직장상해|음주|형법|이사|CPA|목)$")
def split_name(c):
    name = c["name"]
    m = re.match(r"^(.*?)\s*\(([^)]*)\)\s*$", name)
    if not m: return name, None
    core, inner = m.group(1).strip(), m.group(2).strip()
    person = None
    if c["industry"] in ("church", "catholic", "realestate", "insurance", "mortgage"):
        cand = re.sub(r"^(담임)?목사(님)?\s*", "", inner)
        if re.fullmatch(r"[가-힣]{2,6}", cand) and not LOC.search(cand) and not re.search(r"(대출|융자|보험|부동산|모기지|전문|상업|주택|자동차|그룹|센터|교회)", cand):
            person = cand
    return core or name, person

def short(u): return u

def situation(c, kind):
    noun = NOUN.get(c["industry"], "업체")
    site = c.get("site")
    title = (c.get("title_seen") or "")
    pre = f"{noun} 정보를 확인하던 중 업소록에 등록되어 있는 웹사이트 주소({site})로 접속해보았는데, "
    if kind == "gbp":
        return pre + "현재 '페이지를 찾을 수 없음(404)' 오류가 표시되었습니다. 이 주소는 구글 비즈니스 프로필에서 제공하던 무료 웹사이트 주소인데, 구글이 2024년에 이 서비스를 종료하면서 지금은 열리지 않는 것으로 보입니다."
    if kind in ("dead-dns", "dead-conn"):
        ns = (c.get("dns") or {}).get("ns")
        tail = "도메인 기간이 만료되었을 가능성도 있어 한번 확인해 보시면 좋겠습니다." if ns is False else "도메인이나 호스팅 설정에 문제가 있을 가능성도 있어 한번 확인해 보시면 좋겠습니다."
        return pre + "현재 사이트가 열리지 않는 상태였습니다. " + tail
    if kind == "http404":
        if "Reconnect Your Domain" in title:
            return pre + "현재 홈페이지 대신 Wix의 'Reconnect Your Domain'(도메인 연결 끊김) 안내 페이지가 표시되고 있었습니다. Wix 구독이나 도메인 연결이 끊어진 것으로 보여 한번 확인해 보시면 좋겠습니다."
        if "Squarespace" in title:
            return pre + "현재 홈페이지 대신 Squarespace의 사이트 만료 안내 페이지가 표시되고 있었습니다. 구독이나 도메인 연결이 끊어진 것으로 보여 한번 확인해 보시면 좋겠습니다."
        if "Store unavailable" in title:
            return pre + "현재 온라인 스토어 대신 'Store unavailable'(이용 불가) 안내 페이지가 표시되고 있었습니다."
        return pre + "현재 '페이지를 찾을 수 없음(404)' 오류가 표시되며 사이트가 정상적으로 열리지 않았습니다."
    if kind in ("http5xx", "error"):
        return pre + "현재 오류 메시지가 표시되며 사이트가 정상적으로 열리지 않았습니다."
    if kind == "parked":
        return pre + "현재 홈페이지 대신 도메인 판매·주차 안내 페이지가 표시되고 있었습니다. 도메인 기간이 만료되었을 가능성도 있어 한번 확인해 보시면 좋겠습니다."
    if kind == "suspended":
        return pre + "현재 홈페이지 대신 호스팅 계정이 정지되었다는 안내(Account Suspended)가 표시되고 있었습니다. 호스팅 결제나 계정 상태를 한번 확인해 보시면 좋겠습니다."
    if kind == "empty":
        tl = title.lower()
        if "coming soon" in tl: what = "'Coming Soon'(준비 중) 페이지만"
        elif "under construction" in tl: what = "'Under construction'(공사 중) 페이지만"
        else: what = "서버 기본 안내 페이지만"
        return pre + f"현재 홈페이지 내용 대신 {what} 표시되고 있었습니다."
    if kind in ("unrelated", "hijacked"):
        return pre + f"현재 {noun}와 관계없는 다른 사이트로 연결되고 있었습니다. 혹시 의도하신 것이 아니라면 도메인 만료 등으로 주소가 다른 곳에 넘어갔을 가능성도 있어 한번 확인해 보시면 좋겠습니다."
    if kind == "whois":
        return pre + "현재 홈페이지 대신 도메인 등록 정보 확인을 요청하는 안내 페이지가 표시되고 있었습니다. 도메인 소유자 정보 인증이 끝나지 않아 사이트가 정지된 것으로 보여 한번 확인해 보시면 좋겠습니다."
    raise ValueError(kind)

cands = []
for c in C:
    row = c["row"]
    if c["email"].lower() in contacted: continue                      # earlier campaign / opt-out
    if row in FALSE_BROKEN | PATH_404: continue                     # not a fit for a specific claim; skip quietly
    if row in HIJACK_EMAIL:
        CALL.append({"name": c["name"], "phone": c["phone"], "hook": f"홈페이지({c['site']})가 해외 도박 사이트로 넘어감. 업소록 이메일도 그 페이지에서 수집된 것이라 메일 대신 전화"})
        continue
    if row in LARGE_OR_OFFTOPIC or NAME_EXCL.search(c["name"]) or NAME_EXCL.search(c.get("eng") or ""):
        drop(c, "대형 기관·프랜차이즈·MLM·비영업 단체"); continue
    if c["industry"] == "restaurant" and (REST_EXCL.search(c["cat"]) or REST_EXCL.search(c["name"]) or REST_EXCL.search(c.get("eng") or "")):
        drop(c, "식당 관련 도매·장비 업체 (업종 불일치)"); continue
    if re.search(r"no-?reply|donotreply", c["email"], re.I): continue

    v, kind = c["variant"], c.get("check")
    if row in RECLASS: v, kind = "broken", RECLASS[row]
    if v == "sns" and c.get("sns") == "business.site": v, kind = "broken", "gbp"
    if v == "sns" and c.get("sns") not in SNS_LABEL: continue        # google sites etc.
    if v == "skip": continue

    t = {"row": row, "c": c, "variant": v, "kind": kind}
    if v == "broken":
        t["bucket"] = 4 if kind in ("dead-dns", "dead-conn") else 1
    elif v == "mobile": t["bucket"] = 2
    elif v == "sns": t["bucket"] = 3
    elif v == "has-site": t["bucket"] = 5 if c.get("platform") else 7
    elif v == "no-site":
        if c["oldIsp"]: continue
        t["bucket"] = 6
    cands.append(t)

QUOTA = defaultdict(lambda: 10**9, {int(k): int(v) for k, v in (x.split("=") for x in A.quota.split(",") if x)})
# industry caps were tuned for 350 emails; scale them with --count
_BASE = {"restaurant": 34, "contractor": 30, "church": 30, "realestate": 24, "tax": 28, "law": 26, "oriental": 28, "dental": 22, "insurance": 18}
_scale = max(1.0, COUNT / 350)
CAP = defaultdict(lambda: math.ceil(26 * _scale), {k: math.ceil(v * _scale) for k, v in _BASE.items()})
used_ind, used_bucket = Counter(), Counter()
used_phone, used_site, used_core = set(), set(), set()
picked = []
def sort_key(t):
    c = t["c"]
    custom_nosite = 0 if (t["bucket"] == 6 and not c["freemail"]) else 1
    preferred = 0 if (A.prefer_region and c["region"] in A.prefer_region.split(",")) else 1
    return (preferred if t["bucket"] >= 5 else 1, t["bucket"], custom_nosite, qual(c), c["row"])
for t in sorted(cands, key=sort_key):
    if len(picked) >= COUNT: break
    c = t["c"]
    if used_bucket[t["bucket"]] >= QUOTA[t["bucket"]]: continue
    if used_ind[c["industry"]] >= CAP[c["industry"]]: continue
    phone = re.sub(r"\D", "", c.get("phone") or "")
    sitekey = (c.get("site") or "").lower().rstrip("/")
    if (phone and phone in used_phone) or (sitekey and sitekey in used_site): continue
    core_key = split_name(c)[0]
    if core_key in used_core: continue
    used_core.add(core_key)
    if phone: used_phone.add(phone)
    if sitekey: used_site.add(sitekey)
    picked.append(t); used_ind[c["industry"]] += 1; used_bucket[t["bucket"]] += 1

targets = []
for t in picked:
    c, v, kind = t["c"], t["variant"], t["kind"]
    core, person = split_name(c)
    tg = {"id": f"u{c['row']}", "email": c["email"], "name": core, "title": c["title"], "region": c["region"],
          "industry": c["industry"], "variant": v, "phone": c["phone"], "city": c["city"]}
    if person: tg["greet"] = f"{core} {person} {c['title']}"
    elif re.search(r"(회계사|세무사|변호사|법무사)$", core): tg["greet"] = f"{core}님"   # "OO공인회계사 회계사님" → "OO공인회계사님"
    noun = NOUN.get(c["industry"], "업체")
    if v == "broken":
        tg["site"] = c["site"]
        tg["situation"] = situation(c, kind)
        tg["evidence"] = f"{kind} · {c['site']} → {c.get('final') or '접속 불가'} · {c.get('title_seen','')[:60]}" + (f" · DNS {c.get('dns')}" if c.get("dns") else "")
    elif v == "mobile":
        tg["site"] = c["site"]
        r = R.get(c["row"], {})
        tg["situation"] = f"{noun} 정보를 확인하던 중 운영 중이신 홈페이지({c['site']})를 살펴보았는데, 휴대폰 화면에 맞춰지는 반응형 구조가 아니어서 모바일로 볼 때 글씨와 메뉴가 작게 표시되는 것으로 보였습니다."
        tg["evidence"] = f"모바일 브라우저(390px)에서 페이지 폭 {r.get('innerWidth')}px로 축소 표시 · viewport 메타 없음"
    elif v == "sns":
        label, j = SNS_LABEL[c["sns"]]
        tg["site"] = c["site"]
        tg["situation"] = f"{noun} 정보를 확인하던 중 업소록에 등록된 홈페이지 주소가 {label}{j} 되어 있는 것을 보았습니다."
        tg["evidence"] = f"업소록 홈페이지 칸: {c['site']}"
    elif v == "has-site":
        tg["site"] = c["site"]
        if c.get("platform"): tg["platform"] = c["platform"]
        if noun != "업체": tg["situation"] = f"{noun} 정보를 확인하던 중 운영 중이신 홈페이지({c['site']})도 살펴보았습니다."
        tg["evidence"] = f"{c.get('platform') or '자체 사이트'} 감지 · {c.get('final','')}"
    elif v == "no-site":
        if not c["freemail"] and c.get("check"):
            tg["situation"] = f"{noun} 정보를 확인하던 중 이메일 주소의 도메인({c['domain']})으로 접속해 보았는데, 현재 웹사이트는 연결되어 있지 않은 것으로 보였습니다."
            tg["evidence"] = f"업소록 홈페이지 없음 · 메일 도메인 {c['domain']}: {c['check']} (MX 정상)"
        else:
            tg["situation"] = f"{noun} 정보를 확인해 보니 업소록에 홈페이지 주소가 따로 나와 있지 않아, 혹시 웹사이트가 필요하실까 하여 안내드립니다."
            tg["evidence"] = "업소록 홈페이지 칸 비어 있음"
    targets.append(tg)

# interleave so any daily slice (send --limit) carries every variant in proportion
pos, sizes = {}, Counter(t["variant"] for t in targets)
seen_v = Counter()
for t in targets:
    pos[t["id"]] = (seen_v[t["variant"]] + 0.5) / sizes[t["variant"]]
    seen_v[t["variant"]] += 1
targets.sort(key=lambda t: pos[t["id"]])
summary_ex = [{"reason": k, "ids": v} for k, v in excluded.items()]
import datetime
json.dump({"campaign": A.campaign, "subjectStyle": A.subject_style, "source": "classified.json in " + os.getcwd(),
           "checkedAt": datetime.date.today().isoformat(), "targets": targets, "excluded": summary_ex, "callList": CALL},
          open(OUT, "w"), ensure_ascii=False, indent=1)
print("picked", len(targets), "of", len(cands), "candidates")
print("bucket", sorted(used_bucket.items()))
print("variant", Counter(t["variant"] for t in targets).most_common())
print("industry", used_ind.most_common())
print("email quality", Counter(qual(t["c"]) for t in picked))
print("region", Counter(t["region"] for t in targets))

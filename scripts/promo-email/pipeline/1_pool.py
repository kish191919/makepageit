# Step 1: candidate pool from a 한인 업소록 CSV.
# usage: python3 scripts/promo-email/pipeline/1_pool.py <workdir> [csv]
#   default csv: scripts/output/korean-biz-us-with-email-2026-11-09.csv
#   writes <workdir>/pool.json
# Skips every address already in a campaign (scripts/output/promo-*/emails.json),
# the Atlanta/NY/NJ file handled in campaign 1, and scripts/output/promo-suppress.txt.
# - directory rows only (OSM rows aren't a 한인 업소록, and the intro says we found them in one)
# - skip addresses already in the Atlanta/NY/NJ campaign
# - skip shared/corporate/typo addresses, unmapped or excluded industries, non-Hangul names
# - MX check on every non-freemail domain
import csv, glob, json, os, re, subprocess, sys
from collections import Counter, defaultdict
from concurrent.futures import ThreadPoolExecutor

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), "../../.."))
WORK = os.path.abspath(sys.argv[1])
CSV = sys.argv[2] if len(sys.argv) > 2 else f"{ROOT}/scripts/output/korean-biz-us-with-email-2026-11-09.csv"
os.makedirs(WORK, exist_ok=True)
OUT = os.path.join(WORK, "pool.json")

rows = list(csv.DictReader(open(CSV, encoding="utf-8-sig")))
atl = list(csv.DictReader(open(f"{ROOT}/scripts/output/korean-biz-atlanta-ny-nj-2026-11-09.csv", encoding="utf-8-sig")))
atl_emails = {x["이메일"].strip().lower() for x in atl if x.get("이메일")}
# every address already put into a campaign (scheduled or not), plus opt-outs
for f in glob.glob(f"{ROOT}/scripts/output/promo-*/emails.json"):
    atl_emails |= {e["to"].strip().lower() for e in json.load(open(f))["emails"]}
sup = f"{ROOT}/scripts/output/promo-suppress.txt"
if os.path.exists(sup):
    atl_emails |= {l.strip().lower() for l in open(sup) if l.strip()}

FREEMAIL = set("""gmail.com yahoo.com hotmail.com hanmail.net naver.com sbcglobal.net yahoo.co.kr aol.com msn.com outlook.com
live.com att.net daum.net ymail.com verizon.net pacbell.net icloud.com me.com mac.com comcast.net earthlink.net charter.net
cox.net juno.com nate.com korea.com rocketmail.com netzero.net roadrunner.com hotmail.co.kr dreamwiz.com empas.com
lycos.co.kr paran.com chol.com hitel.net kornet.net freechal.com netscape.net mail.com gmx.com protonmail.com""".split())
OLD_ISP = {"sbcglobal.net", "att.net", "pacbell.net", "aol.com", "verizon.net", "earthlink.net", "juno.com", "netzero.net",
           "roadrunner.com", "charter.net", "cox.net", "comcast.net", "msn.com", "dreamwiz.com", "empas.com", "lycos.co.kr",
           "paran.com", "chol.com", "hitel.net", "kornet.net", "freechal.com", "netscape.net", "korea.com"}
TYPO = {"gamil.com", "gmial.com", "gmai.com", "gmail.co", "gmail.con", "gmali.com", "gnail.com", "yaho.com", "yahoo.con",
        "yahooo.com", "hotmial.com", "hotmai.com", "hotmail.con", "hanmial.net", "navar.com", "aol.con"}
CORPORATE = re.compile(r"(newyorklife|farmersagent|financialguide|autonation|chipotle|coldwellbanker|myeyelevel|allstate|statefarm|"
                       r"kw\.com|kellerwilliams|remax|century21|compass\.com|sothebys|redfin|primerica|transamerica|edwardjones|"
                       r"\bml\.com|morganstanley|wellsfargo|chase\.com|bankofamerica|hanmi|bankofhope|cathaybank|kaiser|cedars|"
                       r"ucla\.edu|usc\.edu|\.edu$|\.gov$|\.mil$|newstarrealty|pruca|bhhs|exprealty|nylim|massmutual|nm\.com|"
                       r"americanfamily|libertymutual|aflac|metlife|hrblock|theupsstore|fedex|ups\.com|kumon|mathnasium|"
                       r"c2education|sylvan|huntington|jei|elitepre|bbq-?chicken|bonchon|kyochon|parisbaguette|touslesjours)", re.I)
CHAIN_NAME = re.compile(r"(비비큐|BBQ CHICKEN|본촌|BONCHON|교촌|KYOCHON|파리바게|PARIS BAGUETTE|뚜레쥬르|TOUS LES JOURS|맘스터치|"
                        r"MOM'S TOUCH|북창동순두부|BCD TOFU|젠코리안|GEN KOREAN|강호동|명랑핫도그|공차|GONG CHA|아이레벨|EYE LEVEL|"
                        r"구몬|KUMON|재능|JEI|엘리트|ELITE|C2 ?EDUCATION|뉴욕라이프|NEW YORK LIFE|파머스|FARMERS|스테이트팜|STATE FARM|"
                        r"올스테이트|ALLSTATE|뉴스타|NEW STAR|NEWSTAR|센츄리21|CENTURY 21|콜드웰|COLDWELL|켈러|KELLER|리맥스|RE/?MAX|"
                        r"치폴레|CHIPOTLE|스타벅스|STARBUCKS|맥도날드|서브웨이|SUBWAY|H&R|UPS|페덱스|FEDEX|토요타|TOYOTA|혼다|HONDA|"
                        r"현대자동차|HYUNDAI MOTOR|기아|KIA MOTORS|렉서스|LEXUS|BMW|벤츠|MERCEDES|아우디|AUDI|닛산|NISSAN)", re.I)

EXCLUDE_CAT = re.compile(r"(웹사이트 제작|대학/컬리지|신학교|종교대학|동창|동문회|박물관|신문사|언론사|잡지|라디오|방송사|은행|종합병원|"
                         r"병원:종합병원|공공기관|주정부|영사관|선교회|기도원|불교|원불교|자동차매매|렌터카|우편서비스|택배|메일박스|우체국|"
                         r"휴대폰|항공사|증권|간호대학|카지노|나이트|극장|경기장|쇼핑몰|인터넷 판매|호텔|모텔|민박|레저타운|리조트|사회봉사|"
                         r"종교협회|종교봉사|보석금|전당포|도매|제약회사|지사|대리운전|심부름|약국|장의사|임상심리|신경정신과|결혼상담|"
                         r"치과기공소|덴탈랩|에스크로|성형|금융/재정|투자|통관)")

# (pattern, industry key, title) — first match wins
MAP = [
    (r"천주교회|성당", "catholic", "신부님"),
    (r"교회|기독교", "church", "목사님"),
    (r"한의원|침술원", "oriental", "원장님"),
    (r"척추신경|통증치료|백페인", "chiro", "원장님"),
    (r"치과|치아이식|구강외과", "dental", "원장님"),
    (r"공인세무사|^세무사|> 세무사", "tax", "세무사님"),
    (r"회계사", "tax", "회계사님"),
    (r"변호사|법률사무소", "law", "변호사님"),
    (r"법무사|대서/공증|번역/통역|법정통역", "notary", "대표님"),
    (r"보험", "insurance", "대표님"),
    (r"융자|모기지", "mortgage", "대표님"),
    (r"부동산 매매", "realestate", "대표님"),
    (r"냉난방|에어컨", "hvac", "대표님"),
    (r"플러밍", "plumbing", "대표님"),
    (r"전기공사|전기기사", "electric", "대표님"),
    (r"정원/조경", "landscaping", "대표님"),
    (r"터마이트|페스트", "pest", "대표님"),
    (r"건축/건설|시공|인테리어|부엌/욕조|캐비닛|타일|창문/유리|창고/차고문|철강/용접|루핑|페인트/도배|목공/핸디맨|블라인드|카펫/커튼", "contractor", "대표님"),
    (r"미용실", "beauty", "원장님"),
    (r"스킨케어|피부미용", "skincare", "원장님"),
    (r"태권도|체육관,도장", "taekwondo", "관장님"),
    (r"자동차 정비|자동차정비|페인트/바디샵|자동차 유리|틴트", "autorepair", "사장님"),
    (r"꽃집", "florist", "사장님"),
    (r"SAT/수학/영어|애프터스쿨|유학/영어학원", "tutoring", "원장님"),
    (r"음악학교", "music", "원장님"),
    (r"미술학교", "academy", "원장님"),
    (r"골프학원|골프장/골프연습장", "golf", "대표님"),
    (r"유치원|놀이방", "preschool", "원장님"),
    (r"안경점|검안|안경원", "optical", "대표님"),
    (r"여행사", "travel", "대표님"),
    (r"택시/리무진", "limo", "대표님"),
    (r"이삿짐|해운/항공운송|운송, 이삿짐", "moving", "대표님"),
    (r"식당|음식점|BBQ|치킨|피자|카페|부페|캐더링|제과점|떡/방앗간", "restaurant", "사장님"),
    (r"건강/자연식품", "healthfood", "사장님"),
    (r"화장품판매|여성의류|남성의류|남여의류|아동복|보석|선물센터|한복점|양복점|구두|가방", "retail", "사장님"),
    (r"사우나|찜질", "spa", "사장님"),
    (r"내과|산부인과|소아과|정형외과|피부과|가정주치의|발전문의|안과", "medical", "원장님"),
]

REGION = {"미주중앙일보 LA 업소록": "남가주", "미주한국일보 LA 업소록": "남가주", "미주한국일보 SF 업소록": "북가주",
          "미주한국일보 DC 업소록": "워싱턴DC", "미주한국일보 뉴욕 업소록": "뉴욕/뉴저지"}
EMAIL_RE = re.compile(r"^[A-Za-z0-9._%+'-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$")
HANGUL_END = re.compile(r"[가-힣]$")

def clean_name(n):
    n = n.replace("*", "·").replace("ㆍ", "·").strip()
    n = re.sub(r"\s+", " ", n)
    return n

def core_name(n):
    return re.sub(r"\([^)]*\)\s*$", "", n).strip()

def zip_of(addr):
    m = re.findall(r"\b(\d{5})(?:-\d{4})?\b", addr or "")
    return m[-1] if m else ""

email_count = Counter(x["이메일"].strip().lower() for x in rows)
domain_biz = defaultdict(set)
for x in rows:
    e = x["이메일"].strip().lower()
    domain_biz[e.split("@")[-1]].add(x["업체명"])

drop = Counter()
pool = []
seen = set()
for i, x in enumerate(rows):
    e = x["이메일"].strip().lower()
    dom = e.split("@")[-1]
    src = x["업소록 출처"]
    cat = x["업종"]
    name = clean_name(x["업체명"])
    eng = x["영문명"]
    why = None
    if src not in REGION: why = "OSM(업소록 아님)"
    elif e in atl_emails: why = "이전 캠페인에 이미 포함 / 수신거부"
    elif not EMAIL_RE.match(e): why = "이메일 형식 오류"
    elif dom in TYPO: why = "도메인 오타"
    elif x["비고"] or email_count[e] > 1: why = "공유 이메일(체인/본사)"
    elif dom not in FREEMAIL and len(domain_biz[dom]) >= 3: why = "공유 도메인(대형 회사)"
    elif CORPORATE.search(dom): why = "본사/기관 도메인"
    elif CHAIN_NAME.search(name) or CHAIN_NAME.search(eng): why = "프랜차이즈/대기업"
    elif EXCLUDE_CAT.search(cat): why = "제외 업종"
    elif x["주"] != "CA" and src.startswith("미주중앙일보"): why = "LA 업소록의 타주 업체"
    elif not HANGUL_END.search(core_name(name)): why = "업체명 한글 아님"
    elif e in seen: why = "중복 이메일"
    if not why:
        hit = next(((k, t) for p, k, t in MAP if re.search(p, cat)), None)
        if not hit: why = "매핑 안 된 업종"
    if why:
        drop[why] += 1
        continue
    seen.add(e)
    key, title = hit
    region = REGION[src]
    z = zip_of(x["주소"])
    if src.startswith("미주중앙일보") and z and int(z) >= 93600: region = "캘리포니아"
    pool.append({
        "row": i, "email": x["이메일"].strip(), "domain": dom, "freemail": dom in FREEMAIL, "oldIsp": dom in OLD_ISP,
        "name": name, "eng": eng, "cat": cat, "industry": key, "title": title, "region": region, "state": x["주"],
        "city": x["도시"], "phone": x["전화번호"], "emailSrc": x["이메일 출처"], "siteStatus": x["홈페이지 존재여부"],
        "url": x["홈페이지 주소"].strip(), "src": src,
    })

# MX check for custom domains
doms = sorted({p["domain"] for p in pool if not p["freemail"]})
def mx(d):
    try:
        out = subprocess.run(["dig", "+short", "+time=3", "+tries=2", "MX", d], capture_output=True, text=True, timeout=15).stdout.strip()
        if out: return d, "mx"
        a = subprocess.run(["dig", "+short", "+time=3", "+tries=2", "A", d], capture_output=True, text=True, timeout=15).stdout.strip()
        return d, "a-only" if a else "none"
    except Exception as ex:
        return d, "error"
with ThreadPoolExecutor(32) as ex:
    mxr = dict(ex.map(mx, doms))
for p in pool:
    p["mx"] = "freemail" if p["freemail"] else mxr.get(p["domain"], "error")

bad = [p for p in pool if p["mx"] in ("none", "a-only", "error")]
json.dump({"pool": pool, "dropped": drop}, open(OUT, "w"), ensure_ascii=False, indent=1)
print("pool", len(pool), "| no-MX", len(bad))
print("dropped", drop.most_common())
print("industry", Counter(p["industry"] for p in pool).most_common())
print("siteStatus", Counter(p["siteStatus"] for p in pool).most_common())
print("region", Counter(p["region"] for p in pool).most_common())
print("mx", Counter(p["mx"] for p in pool).most_common())

# 한인 업체 프로모션 이메일 (Zoho Mail)

이 폴더는 한인 업소록 업체에 업체별로 내용이 다른 프로모션 메일을 만들고, Zoho Mail(admin@makepageit.com)로 1분 간격 예약 발송하는 도구입니다.
업체 데이터와 발송 기록은 `scripts/output/` 아래에 있으며, 이 폴더는 git에 올라가지 않습니다(.gitignore).

---

## 1. 지금까지 한 일 (2026-11-09 기준)

### 프로모션 조건 (메일 본문 공통)
- **요금:** 베이직 월 $70, 프리미엄 월 $120. 제작비 $0이고, 제작·도메인·호스팅·유지보수가 모두 포함됩니다.
- **기간:** 2026-12-31까지
- **포트폴리오:** sbmnationwide.com, kttaofdc.org, danielmath.com과 makepageit.com/ko/portfolio 링크
- **보내는 사람:** `Danny Ki | 메이크페이지잇 <admin@makepageit.com>`
- **사장님 결정으로 뺀 문구**
  - 정가(월 $149 / $249)
  - 12개월 약정·요금 유지 문구. 약정은 상담할 때 꼭 설명해야 합니다.
  - 우편 주소. 미국 CAN-SPAM 법은 주소 표기를 요구한다고 안내드렸지만, 사장님이 넣지 않기로 하셨습니다.
- **푸터:** 광고 메일이라는 안내, "수신거부라고 회신하면 제외해 드린다"는 안내, CloudMasterIT LLC를 표기합니다.

### 1차 캠페인: 애틀랜타·뉴욕·뉴저지 (`scripts/output/promo-2026-11/`)
- **원본:** `korean-biz-atlanta-ny-nj-2026-11-09.csv`. 이메일이 있는 95곳 중 42곳에 보냅니다.
- **제외:** 은행, 공공기관, 대형 호텔 체인, 프랜차이즈 본사, 대형 병원·대학, 메일 서버가 없는 도메인
- **예약:** 2026-11-10 오전 10:00~10:41 (뉴욕 시간), 42통
- **제목:** 업체 상황을 설명하는 방식입니다. 예: "OO 사장님, 홈페이지 모바일 화면 관련해서 연락드립니다"
- **이메일 대신 전화할 곳**

| 업체 | 전화 | 이유 |
|---|---|---|
| 주막반점 | (212) 268-7888 | 도메인이 도박 사이트로 넘어감. 메일 보내지 말 것 |
| 뉴욕김치 | (212) 335-0212 | 홈페이지 주소가 다른 식당으로 연결됨 |
| 가온 한방병원 | (404) 954-0909 | |
| 감미옥 | (212) 868-1180 | |
| 더부페 | (718) 886-3722 | |

### 2차 캠페인: 전국 파일 600통 (`scripts/output/promo-2026-11-us/`)
- **원본:** `korean-biz-us-with-email-2026-11-09.csv` (4,971행). 실제로 쓴 행은 미주중앙일보 LA·미주한국일보 업소록에서 온 것뿐입니다.
- **뺀 행:** OpenStreetMap에서 온 행. 메일에 "한인 업소록에서 보고 연락드린다"고 쓰기 때문입니다.
- **대상:** 600곳. 남가주 564, 버지니아·메릴랜드(워싱턴DC 업소록) 28, 북가주 8
- **예약:** 하루 200통씩, 각 지역 시간 오전 10시에 시작합니다.

| 날짜 | 워싱턴DC 지역 (뉴욕 시간) | 캘리포니아 (태평양 시간) |
|---|---|---|
| 11/11 (수) | 10통 · 10:00–10:09 | 190통 · 10:00–13:09 |
| 11/12 (목) | 9통 · 10:00–10:08 | 191통 · 10:00–13:10 |
| 11/13 (금) | 9통 · 10:00–10:08 | 191통 · 10:00–13:10 |

- **제목:** 프로모션 방식(`subjectStyle: "promo"`)입니다. 예: `[연말 프로모션] OO 대표님, 홈페이지를 제작비 $0에 새로 만들어 드립니다`
- **본문 유형:** 업체마다 홈페이지 상태를 직접 확인한 결과로 정했습니다.

| 유형 | 통수 | 근거 |
|---|---|---|
| broken (고장) | 260 | 도메인 만료, Wix·Squarespace 연결 끊김, 도메인 주차·판매 페이지, 호스팅 정지, 404·500 오류, 도박 사이트로 넘어감, 구글 비즈니스 무료 사이트(business.site) 종료 |
| no-site (없음) | 160 | 업소록에 홈페이지가 없거나, 이메일 도메인에 사이트가 없음 |
| has-site (있음) | 126 | Wix·Squarespace·GoDaddy·Weebly 같은 빌더 사이트이거나 일반 사이트. 관리·새 단장 제안 |
| mobile (모바일 미대응) | 31 | 휴대폰 브라우저(390px)에서 화면이 축소되어 보임 (스크린샷으로 확인) |
| sns (SNS만 있음) | 23 | 업소록 홈페이지 칸이 페이스북·인스타그램·블로그 |

- **이메일 대신 전화할 곳:** 두 곳 모두 홈페이지가 도박 사이트로 넘어갔고, 업소록 이메일도 그 페이지에서 수집된 것이라 쓸 수 없습니다.
  - 리틀 메드 피시 (925) 560-6350
  - 우국 (213) 385-5665

### 발송 후 할 일
- **반송 메일:** 확인한 뒤 다음 발송에서 비슷한 주소를 걸러냅니다.
- **"수신거부" 회신:** 해당 이메일을 `scripts/output/promo-suppress.txt`에 한 줄씩 적습니다. 이후 모든 선정과 발송에서 자동으로 빠집니다.
- **예약 취소:** 발송 전에 Zoho 보낼편지함(Outbox)에서 할 수 있습니다.

### 남은 업체 (2026-11-09 기준)
전국 파일에서 아직 보내지 않았고 조건에 맞는 곳은 약 1,730곳입니다.

| 유형 | 수 |
|---|---|
| 홈페이지 없음 | 약 1,010 |
| 빌더 사이트 | 119 |
| 일반 사이트 | 약 590 |
| 고장 | 약 10 |

- 근거가 확실한 유형(고장·모바일·SNS)은 거의 다 보냈습니다.
- 그래서 다음 발송은 주로 '홈페이지 없음'과 '빌더 사이트' 업체입니다.
- 이메일이 aol·sbcglobal·att 같은 오래된 메일 주소이면서 홈페이지도 없는 곳은 반송 위험이 커서 기본으로 뺐습니다.

---

## 2. 다음에 발송할 때: Claude에게 이렇게 말하세요

아래 문장을 날짜와 통수만 바꿔서 붙여 넣으면 됩니다.

> `scripts/promo-email/README.md`를 읽고, 전국 파일에서 아직 안 보낸 업체 중 **600통**을 같은 방식으로 준비해 줘. 홈페이지 상태는 다시 확인하고, 고장·모바일 판정은 눈으로 검토해 줘. **11/17(월)부터 하루 200통씩 3일**, 캘리포니아는 태평양 시간, 동부는 뉴욕 시간 **오전 10시**로 예약해 줘. 예약 전에 테스트 메일 1통을 kish1919@gmail.com으로 보내 줘.

Claude는 아래 3장 순서대로 진행합니다. 업체 확인 → 선정 → 미리보기 → 테스트 메일 → 예약.
메일 제목이나 본문을 바꾸고 싶으면 같은 문장에 덧붙이면 됩니다.

---

## 3. 직접 실행할 때 (명령어)

모든 명령은 저장소 루트에서 실행합니다. `.env.local`에 다음 값이 있어야 합니다.
- `ZOHO_CLIENT_ID`
- `ZOHO_CLIENT_SECRET`
- `ZOHO_REFRESH_TOKEN`

```bash
C=scripts/output/promo-2026-12          # 새 캠페인 폴더 (이름은 자유)
W=$C/work

# 1) 후보 목록: 업종 분류, 제외 규칙, MX 확인. 이전 캠페인 주소와 수신거부는 자동 제외 (1분)
python3 scripts/promo-email/pipeline/1_pool.py $W

# 2) 홈페이지 접속 확인 (2~3분)
python3 scripts/promo-email/pipeline/2_sites.py $W

# 3) 애매한 사이트를 휴대폰 화면으로 렌더링해서 확인 (약 6분)
node scripts/promo-email/pipeline/3_render.mjs $W

# 4) 유형 판정: broken / mobile / sns / has-site / no-site
python3 scripts/promo-email/pipeline/4_classify.py $W

# 5) 선정: 우선순위는 고장 → 모바일 → SNS → 도메인 만료 → 빌더 → 홈페이지 없음 → 일반 사이트
#    --quota 7=200 처럼 버킷별 상한을 줄 수 있음 (7 = 일반 사이트, 기본은 상한 없음)
python3 scripts/promo-email/pipeline/5_select.py $W $C/targets.json --count 600 --campaign promo_2026_12

# 6) 메일 생성과 미리보기: $C/preview.html을 브라우저로 열어 확인
node scripts/promo-email/build.mjs $C/targets.json

# 7) 이전 발송과 대조: 보낸편지함 + 보낼편지함 전체를 읽음 (몇 초)
node --env-file=.env.local scripts/promo-email/zoho-schedule.mjs check --emails=$C/emails.json

# 8) 테스트 1통 (--now는 즉시 발송)
node --env-file=.env.local scripts/promo-email/zoho-schedule.mjs test --emails=$C/emails.json --to=kish1919@gmail.com --now

# 9) 예약: 지역(시간대)별로 나눠 실행. 이미 예약된 주소는 자동으로 건너뜀
#    시간표만 미리 보려면 send 대신 plan
E=$C/emails.json; CA=남가주,북가주,캘리포니아
PROMO_TIMEZONE=America/New_York    node --env-file=.env.local scripts/promo-email/zoho-schedule.mjs send --emails=$E --region=워싱턴DC --start="2026-11-17 10:00" --limit=10
PROMO_TIMEZONE=America/Los_Angeles node --env-file=.env.local scripts/promo-email/zoho-schedule.mjs send --emails=$E --region=$CA     --start="2026-11-17 10:00" --limit=190
# 다음 날은 --start 날짜만 바꿔서 반복
```

### 파일 구조
| 파일 | 역할 |
|---|---|
| `template.mjs` | 메일 문구: 업종별 문장(INDUSTRIES), 유형별 본문, 제목, 서명, 푸터 |
| `build.mjs` | targets.json → emails.json + preview.html |
| `zoho-schedule.mjs` | Zoho API: `auth`, `check`, `test`, `plan`, `send` |
| `pipeline/1~5` | 업소록 CSV에서 대상을 고르는 단계 (위 1~5번) |
| `scripts/output/promo-*/schedule-log.json` | 예약 기록. 다음 선정에서 자동 제외됨 |
| `scripts/output/promo-*/work/` | 단계별 중간 결과 (pool, sites, render_out, classified) |

---

## 4. 주의할 점
- **Zoho 발송 한도:** Mail Lite의 공식 하루 한도는 공개되어 있지 않습니다. 공식 문서는 평판에 따라 외부 발송이 시간당 50~500통이라고 하고, 커뮤니티에는 사용자당 하루 300통이라는 얘기가 있습니다. 하루 200통, 1분 간격이 지금까지 써 온 기준입니다.
- **Zoho API 속도 제한**
  - 주소를 하나씩 검색하면 수십 번 만에 막힙니다(`URL_ROLLING_THROTTLES_LIMIT_EXCEEDED`). 그래서 `check`는 폴더 전체를 읽는 방식으로 바꿨습니다.
  - `send`는 제한에 걸리면 60초 기다렸다가 다시 시도합니다.
  - 중간에 멈추면 같은 명령을 다시 실행하면 이어서 진행합니다.
- **홈페이지 상태는 바뀝니다.** "홈페이지가 열리지 않는다" 같은 내용은 사실이어야 하므로 2~4단계를 다시 실행하고, 고장·모바일 목록은 사람이 한 번 훑어봐야 합니다.
  - 지난번에 잘못 걸러진 예: 정상 사이트, 하위 페이지만 404인 경우, 프랜차이즈
  - 이렇게 걸러낸 행 번호는 `5_select.py`의 `FALSE_BROKEN`, `PATH_404`, `LARGE_OR_OFFTOPIC` 등에 적어 둡니다.
- **새 업종 추가:** 새 업종이 보이면 `template.mjs`의 `INDUSTRIES`와 `1_pool.py`의 `MAP`에 함께 추가합니다.
- **조사(을/를):** 업체명이 한글로 끝나야 자동으로 붙습니다. 영문 이름은 대상에서 뺍니다.
- **이미 예약된 1·2차 메일:** 다시 빌드하지 마세요. 보낸 내용과 파일이 달라집니다.
  - 1차는 기본 제목 방식, 2차는 promo 제목 방식입니다.

import type { Lang } from "@/lib/i18n";

export type Service = {
  id: string;
  title: string;
  summary: string;
  bullets: string[];
  icon: string;
};

export type Portfolio = {
  id: string;
  client: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  year: string;
  url?: string;
};

export type Plan = {
  id: string;
  name: string;
  best?: boolean;
  badge?: string;
  audience: string;
  pricing: {
    oneTime: string;
    originalOneTime?: string;
    oneTimeNote: string;
    monthly: string;
    monthlyNote: string;
    annual: string;
    annualNote: string;
  };
  amounts: {
    setup: number;
    monthly: number;
    monthlyMaintenance?: number;
    hosting?: number;
    database?: number;
    domain: number;
    email: number;
    extraPage: number;
    booking: number;
  };
  description: string;
  features: (string | { text: string; sub: string })[];
  cta: string;
};

/** All-inclusive monthly plan (build + domain + hosting + maintenance in one price). */
export type PromoPlan = {
  id: string;
  name: string;
  tagline: string;
  best?: boolean;
  badge?: string;
  audience: string;
  /** Promo monthly price in USD. */
  monthly: number;
  /** Regular monthly price shown struck through. */
  regularMonthly: number;
  /** Regular one-time build fee that the promo waives ($0). */
  regularSetup: number;
  /** Minimum commitment. Promo sign-ups keep `monthly` after the promo ends. */
  contractMonths: number;
  description: string;
  features: (string | { text: string; sub: string })[];
};

export function formatUsd(amount: number) {
  return `$${amount.toLocaleString("en-US")}`;
}

export function promoDiscountPercent(plan: PromoPlan) {
  return Math.round((1 - plan.monthly / plan.regularMonthly) * 100);
}

export type Review = {
  id: string;
  client: string;
  industry: string;
  rating: number;
  title: string;
  body: string;
  avatar?: string;
};

export type FAQ = { q: string; a: string };

export type Stat = { value: string; label: string };

const servicesEn: Service[] = [
  {
    id: "branding-site",
    title: "Brand site",
    summary: "Make a strong first impression. Translate your brand into design that customers trust at a glance.",
    bullets: ["Mobile-responsive design", "SEO + AI search (GEO) ready", "Easy admin panel", "Domain & hosting setup"],
    icon: "✦",
  },
  {
    id: "shopping-mall",
    title: "E-commerce",
    summary: "Members, shipping, reporting — a real online store, ready to take orders on day one.",
    bullets: ["Product catalog & checkout", "Customers & tiers", "Coupons / loyalty", "Inventory & orders"],
    icon: "▲",
  },
  {
    id: "landing",
    title: "Landing page",
    summary: "Built for conversions. Sharp copy, fast load, ready to test the moment your ads go live.",
    bullets: ["A/B test ready", "Pixel & GA installed", "Lead capture forms", "Live within a week"],
    icon: "●",
  },
  {
    id: "renewal",
    title: "Redesign · Maintenance",
    summary: "Old site, slow site, broken on mobile? We rebuild it from the ground up.",
    bullets: ["Performance overhaul", "Visual refresh", "Hands-off operations", "Monthly content updates"],
    icon: "◆",
  },
  {
    id: "booking",
    title: "Booking · Membership",
    summary: "Clinics, studios, salons, gyms — one place to book and stay in touch with members.",
    bullets: ["Calendar bookings", "No-show prevention", "Membership management", "Automated reminders"],
    icon: "◇",
  },
  {
    id: "marketing",
    title: "Marketing operations",
    summary: "Launch isn't the finish line. SEO, GEO, content, and ads — handled by the same team that built the site.",
    bullets: ["SEO & GEO consulting", "Blog content", "Google / Meta ads", "Monthly reports"],
    icon: "◉",
  },
];

const servicesKo: Service[] = [
  {
    id: "branding-site",
    title: "브랜딩 사이트",
    summary: "회사의 첫인상을 설계합니다. 브랜드 컨셉을 디자인으로 정확하게 전달합니다.",
    bullets: ["반응형 웹 디자인", "SEO + AI 검색(GEO) 최적화", "관리자 페이지", "도메인/호스팅 세팅"],
    icon: "✦",
  },
  {
    id: "shopping-mall",
    title: "쇼핑몰 / 커머스",
    summary: "회원, 배송, 정산까지. 매출이 오르는 온라인 매장을 만들어드립니다.",
    bullets: ["상품 카탈로그 · 주문", "회원/등급 관리", "쿠폰/포인트", "재고/주문 관리"],
    icon: "▲",
  },
  {
    id: "landing",
    title: "랜딩페이지",
    summary: "광고 전환율을 끌어올리는 카피와 디자인. 빠른 제작, 빠른 검증.",
    bullets: ["A/B 테스트 구조", "픽셀/GA 설치", "리드 폼", "1주 이내 오픈"],
    icon: "●",
  },
  {
    id: "renewal",
    title: "리뉴얼 / 유지보수",
    summary: "오래된 사이트, 느린 사이트, 반응형이 깨진 사이트. 처음부터 다시 만들어드립니다.",
    bullets: ["성능 개선", "디자인 리뉴얼", "운영 위탁", "콘텐츠 정기 업데이트"],
    icon: "◆",
  },
  {
    id: "booking",
    title: "예약 / 멤버십",
    summary: "병원, 학원, 스튜디오, 공간 비즈니스를 위한 예약 통합 솔루션.",
    bullets: ["캘린더 예약", "노쇼 방지", "회원 관리", "카카오 알림톡"],
    icon: "◇",
  },
  {
    id: "marketing",
    title: "마케팅 운영",
    summary: "사이트만 만들고 끝이 아닙니다. SEO, GEO(AI 검색 최적화), 블로그, 광고까지 한 팀에서 운영합니다.",
    bullets: ["SEO · GEO 컨설팅", "블로그 콘텐츠", "네이버/구글 광고", "월간 리포트"],
    icon: "◉",
  },
];

const portfoliosEn: Portfolio[] = [
{
    id: "sbm-nationwide",
    client: "SBM Nationwide",
    category: "Real client",
    description: "Nationwide commercial cleaning, staffing, and supply sourcing brand turned into a site built to win enterprise RFPs.",
    image: "/images/portfolio/sbm-nationwide.png",
    tags: ["B2B services", "Facilities", "Nationwide"],
    year: "2026",
    url: "https://www.sbmnationwide.com/",
  },
{
    id: "yttm-mission",
    client: "양영자 탁구선교회",
    category: "Real client",
    description: "Table-tennis missionary organization founded by a 1988 Seoul Olympics gold medalist, rebuilt into a site to share their story and rally prayer and donor support.",
    image: "/images/portfolio/yttm-mission.png",
    tags: ["Nonprofit", "Faith-based", "Sports ministry"],
    year: "2026",
    url: "https://www.yttmission.org/",
  },
{
    id: "ktta-dc",
    client: "KTTA of DC",
    category: "Real client",
    description: "Bilingual site for the Korean Table Tennis Association of DC, bringing tournament schedules, event galleries, and a local venue finder together for players across Virginia and Washington, DC.",
    image: "/images/portfolio/ktta-dc.png",
    tags: ["Nonprofit", "Sports association", "Community"],
    year: "2026",
    url: "https://www.kttaofdc.org/en",
  },
{
    id: "daniel-math",
    client: "Daniel Math Academy",
    category: "Real client",
    description: "Small-group, mastery-based math academy in Fairfax, VA rebuilt into a warm, trust-building brand site for Korean-American families.",
    image: "/images/portfolio/daniel-math.png",
    tags: ["Education", "Academy", "Local business"],
    year: "2026",
    url: "https://danielmath.com/",
  },
{
    id: "cloudmaster-it",
    client: "CloudMaster",
    category: "Real client",
    description: "AWS, Azure, and GCP certification practice-exam platform rebuilt into a clean, conversion-focused product site for IT professionals.",
    image: "/images/portfolio/cloudmaster.png",
    tags: ["EdTech", "SaaS", "Certification"],
    year: "2026",
    url: "https://cloudmasterit.com/",
  },
{
    id: "denver-hanin",
    client: "Denver Hanin Weekly",
    category: "Brand site",
    description: "A bilingual community news and business-directory portal for Denver's Korean-American community — headlines, culture, and a categorized local directory.",
    image: "/images/portfolio/denver-hanin.png",
    tags: ["Community media", "Local news", "Business directory"],
    year: "2026",
  },
{
    id: "willowbrook-dental",
    client: "Willowbrook Dental Care",
    category: "Booking",
    description: "Family and cosmetic dental practice site built around fast online booking and same-day appointments.",
    image: "/images/portfolio/willowbrook-dental.png",
    tags: ["Healthcare", "Dental", "Booking"],
    year: "2026",
  },
{
    id: "nexus-lab",
    client: "Nexus Labs",
    category: "Brand site",
    description: "Dark-mode brand site that signals technical depth for B2B SaaS.",
    image: "/images/portfolio/nexus-lab.png",
    tags: ["SaaS", "Dark mode", "B2B"],
    year: "2025",
  },
{
    id: "villa-toscana",
    client: "Villa Toscana",
    category: "Booking",
    description: "Editorial magazine mood for a fine-dining reservation flow.",
    image: "/images/portfolio/villa-toscana.png",
    tags: ["Dining", "Booking", "Editorial"],
    year: "2025",
  },
{
    id: "harbor-realty",
    client: "Harbor & Vale Realty",
    category: "Brand site",
    description: "Boutique residential brokerage site built to showcase listings and convert buyer inquiries into scheduled tours.",
    image: "/images/portfolio/harbor-realty.png",
    tags: ["Real estate", "Listings", "Local business"],
    year: "2026",
  },
{
    id: "seoul-bakery",
    client: "Sunrise Bakery Co.",
    category: "E-commerce",
    description: "Same-day delivery storefront for a neighborhood bakery.",
    image: "/images/portfolio/seoul-bakery.png",
    tags: ["E-commerce", "F&B", "Delivery"],
    year: "2025",
  },
{
    id: "solstice-interiors",
    client: "Solstice Interiors",
    category: "Brand site",
    description: "Editorial-style portfolio site for a residential interior design studio, built to sell the full room-by-room story.",
    image: "/images/portfolio/solstice-interiors.png",
    tags: ["Interior design", "Portfolio", "Editorial"],
    year: "2026",
  },
{
    id: "meridian-wealth",
    client: "Meridian Wealth Partners",
    category: "Brand site",
    description: "Independent financial advisory site engineered to build trust before the first consultation call.",
    image: "/images/portfolio/meridian-wealth.png",
    tags: ["Finance", "Advisory", "Trust"],
    year: "2026",
  },
{
    id: "lumiere-clinic",
    client: "Lumière Skin Clinic",
    category: "Booking",
    description: "Booking and reviews for a high-end dermatology practice.",
    image: "/images/portfolio/lumiere-clinic.png",
    tags: ["Healthcare", "Booking", "Reviews"],
    year: "2025",
  },
{
    id: "noble-coffee",
    client: "Noble Coffee Roasters",
    category: "Brand site",
    description: "Specialty roaster with a quietly confident, minimalist site.",
    image: "/images/portfolio/noble-coffee.png",
    tags: ["Branding", "F&B", "Responsive"],
    year: "2025",
  },
{
    id: "green-law",
    client: "Greene Law Group",
    category: "Brand site",
    description: "A trustworthy, no-nonsense site for a boutique law firm.",
    image: "/images/portfolio/green-law.png",
    tags: ["Legal", "Trust", "B2B"],
    year: "2024",
  },
{
    id: "atelier-shop",
    client: "Atelier 22",
    category: "E-commerce",
    description: "Storytelling-first commerce for a handmade apparel brand.",
    image: "/images/portfolio/atelier-shop.png",
    tags: ["E-commerce", "Fashion", "Storytelling"],
    year: "2024",
  },
{
    id: "wood-and-stone",
    client: "Wood & Stone Co.",
    category: "E-commerce",
    description: "Earthy, warm commerce experience for a furniture and home goods brand.",
    image: "/images/portfolio/wood-and-stone.png",
    tags: ["Furniture", "Home", "Natural"],
    year: "2024",
  },
{
    id: "nova-studio",
    client: "Nova Studio",
    category: "Portfolio",
    description: "Photographer portfolio + booking flow.",
    image: "/images/portfolio/nova-studio.png",
    tags: ["Portfolio", "Photography", "Booking"],
    year: "2024",
  },
{
    id: "arco-atelier",
    client: "Arco Architects",
    category: "Brand site",
    description: "Brutalist typography and oversized imagery for an architecture firm.",
    image: "/images/portfolio/arco-atelier.png",
    tags: ["Architecture", "Brutalist", "Mono"],
    year: "2024",
  },
{
    id: "jini-illustration",
    client: "Jenna Cole Illustration",
    category: "Portfolio",
    description: "Paper textures and hand-drawn warmth for an illustrator's portfolio.",
    image: "/images/portfolio/jini-illustration.png",
    tags: ["Illustration", "Hand-drawn", "Colorful"],
    year: "2024",
  },
{
    id: "vin-secret",
    client: "Vin Secret",
    category: "E-commerce",
    description: "Deep-wine palette for a classic wine subscription club.",
    image: "/images/portfolio/vin-secret.png",
    tags: ["Wine", "Subscription", "Classic"],
    year: "2025",
  },
{
    id: "moa-pilates",
    client: "Form & Flow Pilates",
    category: "Booking",
    description: "Members, bookings, and recurring billing for a boutique pilates studio.",
    image: "/images/portfolio/moa-pilates.png",
    tags: ["Membership", "Booking", "Wellness"],
    year: "2025",
  },
{
    id: "moai-hotel",
    client: "The Wayfarer Hotel & Resort",
    category: "Brand site",
    description: "Gold-accented luxury site for a boutique hotel chain.",
    image: "/images/portfolio/moai-hotel.png",
    tags: ["Hospitality", "Luxury", "Dark"],
    year: "2025",
  },
];

const portfoliosKo: Portfolio[] = [
{
    id: "sbm-nationwide",
    client: "SBM Nationwide",
    category: "실제 고객사",
    description: "미국 전역 상업 청소·인력파견·자재소싱 브랜드를 대기업 입찰(RFP)까지 대응 가능한 사이트로 재구축.",
    image: "/images/portfolio/sbm-nationwide.png",
    tags: ["B2B 서비스", "시설관리", "전국 서비스"],
    year: "2026",
    url: "https://www.sbmnationwide.com/",
  },
{
    id: "yttm-mission",
    client: "양영자 탁구선교회",
    category: "실제 고객사",
    description: "1988 서울올림픽 탁구 금메달리스트가 설립한 탁구 선교 단체를 위한 사이트로, 사역 스토리 전달과 기도·후원 모금을 돕도록 제작.",
    image: "/images/portfolio/yttm-mission.png",
    tags: ["비영리", "선교", "스포츠 선교"],
    year: "2026",
    url: "https://www.yttmission.org/",
  },
{
    id: "ktta-dc",
    client: "워싱턴DC 한인탁구협회",
    category: "실제 고객사",
    description: "버지니아·워싱턴DC 지역 한인 탁구인들의 협회 사이트로, 대회 일정·갤러리·탁구장 안내를 한·영 이중언어로 한곳에 정리해 제작.",
    image: "/images/portfolio/ktta-dc.png",
    tags: ["비영리", "스포츠 협회", "커뮤니티"],
    year: "2026",
    url: "https://www.kttaofdc.org/",
  },
{
    id: "daniel-math",
    client: "Daniel Math Academy",
    category: "실제 고객사",
    description: "버지니아 페어팩스의 소수정예 무학년 수학 아카데미를 한인 가정의 신뢰를 얻는 브랜딩 사이트로 제작.",
    image: "/images/portfolio/daniel-math.png",
    tags: ["교육", "학원", "로컬 비즈니스"],
    year: "2026",
    url: "https://danielmath.com/",
  },
{
    id: "cloudmaster-it",
    client: "CloudMaster",
    category: "실제 고객사",
    description: "AWS·Azure·GCP 자격증 모의고사 플랫폼을 IT 전문가 대상 전환에 최적화된 프로덕트 사이트로 재구축.",
    image: "/images/portfolio/cloudmaster.png",
    tags: ["에듀테크", "SaaS", "자격증"],
    year: "2026",
    url: "https://cloudmasterit.com/ko/",
  },
{
    id: "denver-hanin",
    client: "덴버 한인 위클리",
    category: "브랜딩 사이트",
    description: "덴버 한인 커뮤니티를 위한 이중언어 지역 뉴스·업소록 포털 — 헤드라인, 문화 소식, 카테고리별 업체 디렉토리를 제공합니다.",
    image: "/images/portfolio/denver-hanin.png",
    tags: ["커뮤니티 미디어", "지역 뉴스", "업소록"],
    year: "2026",
  },
{
    id: "willowbrook-dental",
    client: "윌로우브룩 치과",
    category: "예약 시스템",
    description: "빠른 온라인 예약과 당일 진료 예약에 최적화된 가족·심미 치과 사이트.",
    image: "/images/portfolio/willowbrook-dental.png",
    tags: ["의료", "치과", "예약"],
    year: "2026",
  },
{
    id: "nexus-lab",
    client: "넥서스랩",
    category: "브랜딩 사이트",
    description: "B2B SaaS의 기술 신뢰감을 살린 다크모드 브랜딩.",
    image: "/images/portfolio/nexus-lab.png",
    tags: ["SaaS", "다크모드", "B2B"],
    year: "2025",
  },
{
    id: "villa-toscana",
    client: "빌라 토스카나",
    category: "예약 시스템",
    description: "에디토리얼 매거진 무드의 파인다이닝 예약.",
    image: "/images/portfolio/villa-toscana.png",
    tags: ["파인다이닝", "예약", "에디토리얼"],
    year: "2025",
  },
{
    id: "harbor-realty",
    client: "하버앤베일 부동산",
    category: "브랜딩 사이트",
    description: "매물 노출과 투어 예약 전환에 최적화된 부티크 주거용 부동산 중개 사이트.",
    image: "/images/portfolio/harbor-realty.png",
    tags: ["부동산", "매물", "로컬 비즈니스"],
    year: "2026",
  },
{
    id: "seoul-bakery",
    client: "서울 베이커리",
    category: "쇼핑몰",
    description: "당일배송 전용 베이커리 주문 사이트.",
    image: "/images/portfolio/seoul-bakery.png",
    tags: ["쇼핑몰", "F&B", "배송"],
    year: "2025",
  },
{
    id: "solstice-interiors",
    client: "솔스티스 인테리어",
    category: "브랜딩 사이트",
    description: "룸별 스토리를 온전히 전달하는 에디토리얼 스타일의 인테리어 디자인 스튜디오 포트폴리오 사이트.",
    image: "/images/portfolio/solstice-interiors.png",
    tags: ["인테리어", "포트폴리오", "에디토리얼"],
    year: "2026",
  },
{
    id: "meridian-wealth",
    client: "메리디안 자산관리",
    category: "브랜딩 사이트",
    description: "첫 상담 전화 전부터 신뢰를 쌓도록 설계된 독립 재무 자문사 사이트.",
    image: "/images/portfolio/meridian-wealth.png",
    tags: ["금융", "자산관리", "신뢰"],
    year: "2026",
  },
{
    id: "lumiere-clinic",
    client: "루미에르 피부과",
    category: "예약 시스템",
    description: "온라인 예약·후기 통합 의료 사이트.",
    image: "/images/portfolio/lumiere-clinic.png",
    tags: ["의료", "예약", "후기"],
    year: "2025",
  },
{
    id: "noble-coffee",
    client: "노블 커피로스터스",
    category: "브랜딩 사이트",
    description: "스페셜티 로스터리 브랜드의 감성을 살린 미니멀 사이트.",
    image: "/images/portfolio/noble-coffee.png",
    tags: ["브랜딩", "F&B", "반응형"],
    year: "2025",
  },
{
    id: "green-law",
    client: "그린 법률사무소",
    category: "브랜딩 사이트",
    description: "신뢰감을 강조한 법률 전문 브랜딩 사이트.",
    image: "/images/portfolio/green-law.png",
    tags: ["법률", "신뢰", "B2B"],
    year: "2024",
  },
{
    id: "atelier-shop",
    client: "아뜰리에 22",
    category: "쇼핑몰",
    description: "수공예 의류 브랜드의 스토리텔링 커머스.",
    image: "/images/portfolio/atelier-shop.png",
    tags: ["쇼핑몰", "패션", "스토리텔링"],
    year: "2024",
  },
{
    id: "wood-and-stone",
    client: "우드앤스톤",
    category: "쇼핑몰",
    description: "어얼시 톤의 따뜻한 가구·홈 데코 커머스.",
    image: "/images/portfolio/wood-and-stone.png",
    tags: ["가구", "홈", "내추럴"],
    year: "2024",
  },
{
    id: "nova-studio",
    client: "노바 스튜디오",
    category: "포트폴리오",
    description: "포토그래퍼 개인 포트폴리오 + 예약.",
    image: "/images/portfolio/nova-studio.png",
    tags: ["포트폴리오", "사진", "예약"],
    year: "2024",
  },
{
    id: "arco-atelier",
    client: "아르코 건축사사무소",
    category: "브랜딩 사이트",
    description: "거대한 타이포로 압도감을 살린 건축 브루탈리스트 사이트.",
    image: "/images/portfolio/arco-atelier.png",
    tags: ["건축", "브루탈리즘", "흑백"],
    year: "2024",
  },
{
    id: "jini-illustration",
    client: "지니 일러스트",
    category: "포트폴리오",
    description: "페이퍼 텍스처와 컬러풀한 핸드드로운 일러스트 포트폴리오.",
    image: "/images/portfolio/jini-illustration.png",
    tags: ["일러스트", "핸드드로잉", "컬러풀"],
    year: "2024",
  },
{
    id: "vin-secret",
    client: "뱅 시크릿",
    category: "쇼핑몰",
    description: "딥 와인 컬러의 클래식 와인 정기구독몰.",
    image: "/images/portfolio/vin-secret.png",
    tags: ["와인", "구독", "클래식"],
    year: "2025",
  },
{
    id: "moa-pilates",
    client: "모아 필라테스",
    category: "예약 시스템",
    description: "회원·예약 일체형 필라테스 스튜디오 사이트.",
    image: "/images/portfolio/moa-pilates.png",
    tags: ["멤버십", "예약", "공간"],
    year: "2025",
  },
{
    id: "moai-hotel",
    client: "모아이 호텔 & 리조트",
    category: "브랜딩 사이트",
    description: "골드 악센트로 럭셔리 무드를 강조한 부티크 호텔.",
    image: "/images/portfolio/moai-hotel.png",
    tags: ["호텔", "럭셔리", "다크"],
    year: "2025",
  },
];

const plansEn: Plan[] = [
  {
    id: "portfolio-lite",
    name: "PORTFOLIO LITE",
    audience: "Personal portfolios · students · creatives",
    pricing: {
      oneTime: "$399",
      originalOneTime: "$499",
      oneTimeNote: "one-time (3 pages)",
      monthly: "$25",
      monthlyNote: "hosting + monthly maintenance",
      annual: "$25",
      annualNote: "domain (annual)",
    },
    amounts: { setup: 399, monthly: 25, monthlyMaintenance: 15, hosting: 10, database: 10, domain: 25, email: 30, extraPage: 50, booking: 200 },
    description: "A clean starter for personal portfolios.",
    features: [
      "3-page core layout",
      "Template design + mobile-responsive",
      "Basic SEO + AI search (GEO) setup",
    ],
    cta: "Get a quote",
  },
  {
    id: "portfolio-pro",
    name: "PORTFOLIO PRO",
    best: true,
    badge: "RECOMMENDED",
    audience: "Freelancers · consultants · solopreneurs",
    pricing: {
      oneTime: "$649",
      originalOneTime: "$849",
      oneTimeNote: "one-time (5 pages)",
      monthly: "$55",
      monthlyNote: "hosting + DB + monthly maintenance",
      annual: "$25",
      annualNote: "domain (annual)",
    },
    amounts: { setup: 649, monthly: 55, monthlyMaintenance: 25, hosting: 10, database: 20, domain: 25, email: 30, extraPage: 50, booking: 200 },
    description: "Everything you need to run a real business website.",
    features: [
      "5-page core layout",
      "Template design + mobile-responsive",
      "Basic SEO + AI search (GEO) setup",
      "Two free add-ons (login, blog, gallery)",
    ],
    cta: "Get a quote",
  },
];

const plansKo: Plan[] = [
  {
    id: "portfolio-lite",
    name: "베이직",
    best: true,
    badge: "추천",
    audience: "깔끔하고 신뢰도 높은 홈페이지가 필요한 분",
    pricing: {
      oneTime: "$399",
      originalOneTime: "$499",
      oneTimeNote: "일회성 (3페이지)",
      monthly: "$25",
      monthlyNote: "호스팅 + 월 유지보수",
      annual: "$25",
      annualNote: "연 도메인",
    },
    amounts: { setup: 399, monthly: 25, monthlyMaintenance: 15, hosting: 10, database: 10, domain: 25, email: 30, extraPage: 50, booking: 200 },
    description: "개인 포트폴리오를 깔끔하게 시작.",
    features: [
      "3페이지 기본 구성",
      "템플릿 디자인 + 모바일 반응형",
      "기본 SEO + AI 검색(GEO) 세팅",
    ],
    cta: "견적 문의하기",
  },
  {
    id: "portfolio-pro",
    name: "프리미엄",
    audience: "고객 문의·예약 기능까지 필요한 비즈니스",
    pricing: {
      oneTime: "$649",
      originalOneTime: "$849",
      oneTimeNote: "일회성 (5페이지)",
      monthly: "$55",
      monthlyNote: "호스팅 + DB + 월 유지보수",
      annual: "$25",
      annualNote: "연 도메인",
    },
    amounts: { setup: 649, monthly: 55, monthlyMaintenance: 25, hosting: 10, database: 20, domain: 25, email: 30, extraPage: 50, booking: 200 },
    description: "상업 활동에 필요한 모든 기능을 갖춘 포트폴리오.",
    features: [
      "5페이지 기본 구성",
      "템플릿 디자인 + 모바일 반응형",
      "기본 SEO + AI 검색(GEO) 세팅",
      { text: "비즈니스 고급 기능 2종 포함", sub: "로그인 / 게시판 / 사진첩 중 선택" },
    ],
    cta: "견적 문의하기",
  },
];

/**
 * Locales whose /pricing page and home pricing section show the all-inclusive
 * monthly promo instead of the legacy setup-fee plans above. The legacy plans
 * stay in place so a locale can be switched back by editing this list.
 */
const promoPricingLangs: Lang[] = ["en", "ko"];

/** Promo end date (ISO, used for JSON-LD). Keep in sync with `promoPricing.promo.deadline` in lib/i18n.ts. */
export const promoEndsAt = "2026-12-31";

const promoPlansEn: PromoPlan[] = [
  {
    id: "promo-basic",
    name: "BASIC",
    tagline: "Promo website",
    audience: "Local businesses that want to get found and get inquiries",
    monthly: 70,
    regularMonthly: 149,
    regularSetup: 499,
    contractMonths: 12,
    description: "A promo website with an email contact form — build, hosting, domain, and maintenance included for one monthly price.",
    features: [
      "Promo website build (3 pages)",
      { text: "Contact form → straight to your inbox", sub: "Customer inquiries land in your email automatically" },
      "Template design + mobile-responsive",
      "Basic SEO + AI search (GEO) setup",
      "Domain · hosting · SSL certificate",
      { text: "Monthly maintenance", sub: "Photo & copy edits, feature checks, performance monitoring" },
    ],
  },
  {
    id: "promo-premium",
    name: "PREMIUM",
    tagline: "Feature-rich website",
    best: true,
    badge: "RECOMMENDED",
    audience: "Businesses that manage photos, members, or bookings",
    monthly: 120,
    regularMonthly: 249,
    regularSetup: 849,
    contractMonths: 12,
    description: "A feature-rich website with photo galleries, member management, and Google Calendar integration — build and upkeep included for one monthly price.",
    features: [
      { text: "Everything in Basic", sub: "Email inquiries · domain · hosting · maintenance" },
      "Feature-rich website build (5 pages)",
      { text: "Photo gallery", sub: "Organize shop, work, or project photos into albums" },
      { text: "Member management", sub: "Sign-up · login · member info" },
      { text: "Google Calendar integration", sub: "Bookings and schedules sync to your Google Calendar" },
      "Database & server operations included",
    ],
  },
];

const promoPlansKo: PromoPlan[] = [
  {
    id: "promo-basic",
    name: "베이직",
    tagline: "홍보형 웹사이트",
    best: true,
    badge: "추천",
    audience: "가게·사업을 알리고 고객 문의를 받고 싶은 분",
    monthly: 70,
    regularMonthly: 149,
    regularSetup: 499,
    contractMonths: 12,
    description: "문의를 이메일로 받는 홍보용 웹사이트. 제작·도메인·호스팅·유지보수까지 하나의 월 요금에 모두 포함.",
    features: [
      "홍보용 웹사이트 제작 (3페이지 구성)",
      { text: "문의 폼 → 이메일로 바로 수신", sub: "고객 문의가 사장님 메일함으로 자동 전달돼요" },
      "템플릿 디자인 + 모바일 반응형",
      "기본 SEO + AI 검색(GEO) 세팅",
      "도메인 · 호스팅 · SSL 보안인증서",
      { text: "월 유지보수", sub: "사진·글 수정, 기능 점검, 성능 모니터링" },
    ],
  },
  {
    id: "promo-premium",
    name: "프리미엄",
    tagline: "기능형 웹사이트",
    audience: "사진·회원·예약까지 관리가 필요한 비즈니스",
    monthly: 120,
    regularMonthly: 249,
    regularSetup: 849,
    contractMonths: 12,
    description: "사진 갤러리·회원 관리·구글 캘린더 연동까지 갖춘 기능형 웹사이트. 제작부터 관리까지 하나의 월 요금에 모두 포함.",
    features: [
      { text: "베이직의 모든 기능 포함", sub: "문의 이메일 수신 · 도메인 · 호스팅 · 유지보수" },
      "기능형 웹사이트 제작 (5페이지 구성)",
      { text: "사진 갤러리", sub: "매장·작품·시공 사진을 앨범으로 정리" },
      { text: "회원 관리", sub: "회원가입 · 로그인 · 회원 정보 관리" },
      { text: "구글 캘린더 연동", sub: "예약·일정이 사장님 구글 캘린더에 자동 반영" },
      "데이터베이스 · 서버 운영 포함",
    ],
  },
];

const reviewsEn: Review[] = [
  {
    id: "r4",
    client: "Mr. Kim",
    industry: "Daniel Math Academy",
    rating: 5,
    title: "Parent calls come in already knowing our approach.",
    body:
      "It used to start with 'where are you located?' Now parents mention the curriculum, sometimes the level-test process, before I even introduce myself. The site actually captures how we teach — that's rare.",
    avatar: "https://randomuser.me/api/portraits/men/26.jpg",
  },
  {
    id: "r5",
    client: "Yang Young-ja · Former National Table Tennis Player",
    industry: "양영자 탁구선교회",
    rating: 5,
    title: "Support inquiries now come through the site first.",
    body:
      "It used to be all word of mouth. Now people reach out after reading our story online, sometimes before we've even met them. Being able to keep our training schedule and mission updates organized there has helped so much.",
    avatar: "/images/avatars/yttm.png",
  },
  {
    id: "r6",
    client: "David Lee",
    industry: "CloudMaster",
    rating: 5,
    title: "Free trial signups are clearly up.",
    body:
      "The old site was just a wall of information. Now each certification has its own landing page, so people self-select before they even sign up. We saw it in the numbers almost right away.",
    avatar: "https://randomuser.me/api/portraits/men/90.jpg",
  },
  {
    id: "r10",
    client: "Sam",
    industry: "SBM Nationwide",
    rating: 5,
    title: "Fast turnaround, exactly what we wanted.",
    body:
      "I didn't expect the site to come together this quickly. We asked for a handful of small tweaks after the first draft, and it landed exactly where we wanted it. Really happy with it.",
  },
];

const reviewsKo: Review[] = [
  {
    id: "r4",
    client: "김 원장",
    industry: "Daniel Math Academy",
    rating: 5,
    title: "상담 전화에서 질문의 결이 달라졌어요.",
    body:
      "예전엔 \"어디 있는 학원이에요\"부터 물어보시던 분들이, 지금은 커리큘럼이랑 레벨테스트 안내까지 꼼꼼히 보고 전화를 주세요. 저희 수업 방식이 사이트에 그대로 담긴 것 같아서 뿌듯합니다.",
    avatar: "https://randomuser.me/api/portraits/men/26.jpg",
  },
  {
    id: "r5",
    client: "양영자 선교사 · 전 탁구 국가대표선수",
    industry: "양영자 탁구선교회",
    rating: 5,
    title: "후원 문의가 사이트를 보고 먼저 옵니다.",
    body:
      "예전엔 아는 분 소개로만 후원이 이어졌는데, 이제는 사역 스토리를 보고 먼저 연락 주시는 분들이 생겼어요. 훈련 일정이랑 사역지 소식도 한눈에 정리할 수 있게 돼서 정말 큰 도움이 됩니다.",
    avatar: "/images/avatars/yttm.png",
  },
  {
    id: "r6",
    client: "이 대표",
    industry: "CloudMaster",
    rating: 5,
    title: "무료 체험 신청이 확실히 늘었습니다.",
    body:
      "예전 사이트는 그냥 정보 나열이었는데, 지금은 자격증별로 페이지가 나뉘어 있어서 필요한 분들만 딱 골라 신청하시더라고요. 전환 데이터로 바로 체감했습니다.",
    avatar: "https://randomuser.me/api/portraits/men/90.jpg",
  },
  {
    id: "r10",
    client: "Sam",
    industry: "SBM Nationwide",
    rating: 5,
    title: "빠르게 만들어졌는데 원하던 그대로예요.",
    body:
      "회사 홈페이지가 이렇게 빨리 나올 줄 몰랐어요. 시안 받고 몇 군데만 수정 요청드렸는데 그 정도로 딱 저희가 원하던 모습이 됐습니다. 만족스럽습니다.",
  },
];

const faqsEn: FAQ[] = [
  {
    q: "How long does it take?",
    a: "Most sites launch in about two weeks. BASIC (3 pages) is roughly 2 weeks; PREMIUM (5 pages) is 3–4 weeks. Adding extra pages or custom features may extend the timeline. You'll see your first design within a week of kickoff.",
  },
  {
    q: "Do you build websites for Korean-American business owners?",
    a: "Yes — MAKEPAGEIT specializes in building websites for Korean-American business owners and small businesses across the US. You can consult with us in Korean, and we handle US domain, hosting, and payment setup end-to-end.",
  },
  {
    q: "What kinds of websites do you design and build?",
    a: "We design and build small business websites, ecommerce websites, landing pages, booking sites, and portfolio websites. Every project uses responsive web design, so it looks right on phones, tablets, and desktops, and ships with basic SEO setup. Not sure which type fits? We'll recommend one during your free 30-minute consult.",
  },
  {
    q: "Do you handle the domain and hosting?",
    a: "Yes — domain registration, hosting setup, and SSL all included. Right now all of it is covered by your monthly price (BASIC $70/mo, PREMIUM $120/mo), so there's nothing extra to pay.",
  },
  {
    q: "Is there a contract? Will my price go up after the promotion?",
    a: "All plans have a minimum 12-month commitment. In return, the build fee is $0 — and if you sign up by December 31, 2026, your rate (BASIC $70/mo, PREMIUM $120/mo) stays the same even after the promotion ends.",
  },
  {
    q: "Can I edit the site myself afterward?",
    a: "We don't open up design editing on the client side. Instead, maintenance is included in your monthly price — send us copy, image, or content changes and we'll handle them quickly on your behalf.",
  },
  {
    q: "What if I don't like the design?",
    a: "We share a free concept mockup before any contract, then check in at every stage of build. The waterfall-of-surprise problem you might've had elsewhere doesn't really happen here, because each phase is signed off jointly.",
  },
  {
    q: "Can individuals (not registered businesses) hire you?",
    a: "Of course. Personal portfolios — students, artists, and more — can start on BASIC ($70/mo), with the build, domain, hosting, and maintenance all covered. We've also delivered plenty of personal-brand and freelancer sites.",
  },
  {
    q: "Can you also handle ongoing operations?",
    a: "Yes — your monthly price covers content updates, feature checks, performance monitoring, and basic SEO/GEO. Hosting and the domain are included too, so it's simply $70/mo on BASIC or $120/mo on PREMIUM with nothing extra. We don't run paid ads or blog content as part of these plans, but we'll scope that separately during the consult.",
  },
  {
    q: "What is GEO, and do you optimize for it?",
    a: "GEO (Generative Engine Optimization) is optimizing your site so AI answer engines like ChatGPT, Perplexity, and Google AI Overview cite and recommend it — not just ranking in classic search results. Every site we build ships with structured data (schema.org markup), clear Q&A-formatted content, and fact-based copy that AI models can parse and quote, so you're set up for both traditional SEO and AI search from day one.",
  },
];

const faqsKo: FAQ[] = [
  {
    q: "제작 기간은 얼마나 걸리나요?",
    a: "평균 2주 안에 오픈을 목표로 진행해드립니다. 베이직(3페이지)은 약 2주, 프리미엄(5페이지)은 약 3~4주 정도이며, 추가 페이지나 맞춤 기능을 더하시면 일정이 늘어날 수 있어요. 첫 시안은 의뢰 후 평균 1주 안에 보여드립니다.",
  },
  {
    q: "미주에서 한인 사업자를 위한 홈페이지 제작도 가능한가요?",
    a: "네, 메이크페이지잇은 미국 전역의 한인 사업자와 소상공인을 위한 홈페이지 제작을 전문으로 합니다. 한국어로 편하게 상담하실 수 있고, 미국 도메인·호스팅·결제 시스템까지 한 번에 세팅해드립니다.",
  },
  {
    q: "어떤 종류의 홈페이지 제작이 가능한가요?",
    a: "회사·매장 소개용 브랜딩 사이트부터 쇼핑몰 제작, 랜딩페이지, 예약 시스템, 개인 포트폴리오 사이트까지 제작합니다. 모든 홈페이지는 휴대폰·태블릿·PC 화면에 맞춰지는 반응형 웹 디자인으로 만들고, 기본 SEO 설정까지 포함해요. 어떤 형태가 맞을지 모르시겠다면 30분 무료 상담에서 추천해드립니다.",
  },
  {
    q: "도메인과 호스팅도 맡아주시나요?",
    a: "네, 도메인 구매부터 호스팅 세팅, SSL 인증서까지 한 번에 처리해드립니다. 지금은 이 비용이 모두 월 요금(베이직 월 $70, 프리미엄 월 $120)에 포함되어 있어 따로 내실 비용이 없어요.",
  },
  {
    q: "약정 기간이 있나요? 프로모션이 끝나면 요금이 오르나요?",
    a: "모든 요금제는 최소 12개월 약정으로 진행돼요. 대신 제작비는 $0이고, 2026년 12월 31일까지 가입하시면 프로모션이 끝난 뒤에도 가입 당시 요금(베이직 월 $70, 프리미엄 월 $120)이 그대로 유지됩니다.",
  },
  {
    q: "직접 수정하고 관리할 수 있나요?",
    a: "홈페이지 디자인을 고객님께서 직접 수정하시는 것은 어려운 점 양해 부탁드립니다. 대신 월 요금에 유지보수가 포함되어 있어, 사진·글 등 콘텐츠 수정 요청을 주시면 신속하게 반영해드리고 있어요.",
  },
  {
    q: "디자인이 마음에 안 들면 환불되나요?",
    a: "계약 전 무료 컨셉 시안을 먼저 보여드리고, 계약 후에도 단계별 컨펌을 거치며 진행합니다. 끝에 가서야 결과물을 확인하시는 일이 없도록 기획·디자인·개발 매 단계에서 함께 점검하므로, 결과물이 어긋나는 경우는 거의 없습니다.",
  },
  {
    q: "사업자가 아닌 개인도 의뢰할 수 있나요?",
    a: "물론입니다. 학생·아티스트 등 개인 포트폴리오도 베이직(월 $70)으로 제작부터 도메인·호스팅·유지보수까지 한 번에 시작하실 수 있어요. 작가·강사·프리랜서·개인 브랜드 사이트도 다수 진행하고 있습니다.",
  },
  {
    q: "오픈 후 운영도 맡길 수 있나요?",
    a: "네, 월 요금에 콘텐츠 수정·기능 점검·성능 모니터링과 함께 기본적인 SEO·GEO 관리까지 포함되어 있습니다. 서버 호스팅·도메인 비용도 모두 포함이라 베이직 월 $70, 프리미엄 월 $120 외에 따로 드는 비용이 없어요. 별도의 마케팅 운영(블로그 콘텐츠 제작, 광고 집행 등)은 제공하지 않는 점 양해 부탁드리며, 자세한 운영 범위는 무료 상담 시 안내드려요.",
  },
  {
    q: "GEO가 뭔가요? 저희도 대응되나요?",
    a: "GEO(생성형 엔진 최적화)는 ChatGPT, Perplexity, 구글 AI 개요처럼 AI가 답변할 때 내 사이트가 인용·추천되도록 만드는 작업이에요. 기존 검색 순위 경쟁과는 다른 영역입니다. 저희가 만드는 모든 사이트는 구조화 데이터(schema.org)와 질문-답변 형태의 명확한 콘텐츠, 사실 기반 카피가 기본 적용되어 있어서 전통적인 SEO는 물론 AI 검색 노출까지 처음부터 대비됩니다.",
  },
];

const statsEn: Stat[] = [
  { value: "4.9 / 5", label: "Average rating" },
  { value: "98%", label: "Repeat / referral rate" },
  { value: "1 week", label: "First design avg." },
];

const statsKo: Stat[] = [
  { value: "4.9 / 5", label: "평균 고객 만족도" },
  { value: "98%", label: "재의뢰·추천율" },
  { value: "1주", label: "평균 첫 시안까지" },
];

const logosEn = [
  "Noble Coffee",
  "Lumière",
  "Atelier 22",
  "Form & Flow",
  "Greene Law",
  "Sunrise Bakery",
  "Nova Studio",
];

const logosKo = [
  "노블 커피",
  "루미에르",
  "아뜰리에 22",
  "모아 필라테스",
  "그린 법률",
  "서울 베이커리",
  "노바 스튜디오",
];

export function getServices(lang: Lang): Service[] {
  return lang === "en" ? servicesEn : servicesKo;
}

export function getPortfolios(lang: Lang): Portfolio[] {
  return lang === "en" ? portfoliosEn : portfoliosKo;
}

export function getPlans(lang: Lang): Plan[] {
  return lang === "en" ? plansEn : plansKo;
}

export function getPromoPlans(lang: Lang): PromoPlan[] {
  return lang === "en" ? promoPlansEn : promoPlansKo;
}

export function usesPromoPricing(lang: Lang): boolean {
  return promoPricingLangs.includes(lang);
}

export function getReviews(lang: Lang): Review[] {
  return lang === "en" ? reviewsEn : reviewsKo;
}

export function getFaqs(lang: Lang): FAQ[] {
  return lang === "en" ? faqsEn : faqsKo;
}

export function getStats(lang: Lang): Stat[] {
  return lang === "en" ? statsEn : statsKo;
}

export function getLogos(lang: Lang): string[] {
  return lang === "en" ? logosEn : logosKo;
}

// Backwards-compatible exports (used by /ko routes that still rely on legacy names).
export const portfolios = portfoliosKo;
export const services = servicesKo;
export const plans = plansKo;
export const reviews = reviewsKo;
export const faqs = faqsKo;
export const stats = statsKo;

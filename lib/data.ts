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
  features: string[];
  cta: string;
};

export type Review = {
  id: string;
  client: string;
  industry: string;
  rating: number;
  title: string;
  body: string;
  avatar: string;
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
    id: "sbm-nationwide",
    client: "SBM Nationwide",
    category: "Brand site",
    description: "Nationwide commercial cleaning, staffing, and supply sourcing brand turned into a site built to win enterprise RFPs.",
    image: "/images/portfolio/sbm-nationwide.jpg",
    tags: ["B2B services", "Facilities", "Nationwide"],
    year: "2026",
    url: "https://www.sbmnationwide.com/",
  },
{
    id: "daniel-math",
    client: "Daniel Math Academy",
    category: "Brand site",
    description: "Small-group, mastery-based math academy in Fairfax, VA rebuilt into a warm, trust-building brand site for Korean-American families.",
    image: "/images/portfolio/daniel-math.jpg",
    tags: ["Education", "Academy", "Local business"],
    year: "2026",
    url: "https://danielmath.com/",
  },
{
    id: "cloudmaster-it",
    client: "CloudMaster",
    category: "Brand site",
    description: "AWS, Azure, and GCP certification practice-exam platform rebuilt into a clean, conversion-focused product site for IT professionals.",
    image: "/images/portfolio/cloudmaster.png",
    tags: ["EdTech", "SaaS", "Certification"],
    year: "2026",
    url: "https://cloudmasterit.com/",
  },
{
    id: "yttm-mission",
    client: "양영자 탁구선교회",
    category: "Brand site",
    description: "Table-tennis missionary organization founded by a 1988 Seoul Olympics gold medalist, rebuilt into a site to share their story and rally prayer and donor support.",
    image: "https://www.yttmission.org/images/vision-prayer.jpg",
    tags: ["Nonprofit", "Faith-based", "Sports ministry"],
    year: "2026",
    url: "https://www.yttmission.org/",
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
    id: "sbm-nationwide",
    client: "SBM Nationwide",
    category: "브랜딩 사이트",
    description: "미국 전역 상업 청소·인력파견·자재소싱 브랜드를 대기업 입찰(RFP)까지 대응 가능한 사이트로 재구축.",
    image: "/images/portfolio/sbm-nationwide.jpg",
    tags: ["B2B 서비스", "시설관리", "전국 서비스"],
    year: "2026",
    url: "https://www.sbmnationwide.com/",
  },
{
    id: "daniel-math",
    client: "Daniel Math Academy",
    category: "브랜딩 사이트",
    description: "버지니아 페어팩스의 소수정예 무학년 수학 아카데미를 한인 가정의 신뢰를 얻는 브랜딩 사이트로 제작.",
    image: "/images/portfolio/daniel-math.jpg",
    tags: ["교육", "학원", "로컬 비즈니스"],
    year: "2026",
    url: "https://danielmath.com/",
  },
{
    id: "cloudmaster-it",
    client: "CloudMaster",
    category: "브랜딩 사이트",
    description: "AWS·Azure·GCP 자격증 모의고사 플랫폼을 IT 전문가 대상 전환에 최적화된 프로덕트 사이트로 재구축.",
    image: "/images/portfolio/cloudmaster.png",
    tags: ["에듀테크", "SaaS", "자격증"],
    year: "2026",
    url: "https://cloudmasterit.com/",
  },
{
    id: "yttm-mission",
    client: "양영자 탁구선교회",
    category: "브랜딩 사이트",
    description: "1988 서울올림픽 탁구 금메달리스트가 설립한 탁구 선교 단체를 위한 사이트로, 사역 스토리 전달과 기도·후원 모금을 돕도록 제작.",
    image: "https://www.yttmission.org/images/vision-prayer.jpg",
    tags: ["비영리", "선교", "스포츠 선교"],
    year: "2026",
    url: "https://www.yttmission.org/",
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
      "Hosting (server) at $10/mo",
      "Database available as an add-on at $10/mo",
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
      "Hosting (server) at $10/mo",
      "Database at $20/mo",
      "Two free add-ons (login, blog, gallery)",
    ],
    cta: "Get a quote",
  },
];

const plansKo: Plan[] = [
  {
    id: "portfolio-lite",
    name: "PORTFOLIO LITE",
    audience: "홈페이지만 깔끔하게 있으면 되는 분",
    pricing: {
      oneTime: "$399",
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
      "호스팅 (서버비용) 월 $10",
      "데이터베이스 선택 추가 시 월 $10",
    ],
    cta: "견적 문의하기",
  },
  {
    id: "portfolio-pro",
    name: "PORTFOLIO PRO",
    best: true,
    badge: "추천",
    audience: "예약·문의까지 실제 비즈니스를 운영하는 분",
    pricing: {
      oneTime: "$649",
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
      "호스팅 (서버비용) 월 $10",
      "데이터베이스 월 $20",
      "로그인 · 게시판 · 사진첩 중 2개 무료 추가",
    ],
    cta: "견적 문의하기",
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
      "It used to start with 'where are you located?' Now parents mention the curriculum, sometimes a teacher by name, before I even introduce myself. The site actually captures how we teach — that's rare.",
    avatar: "https://randomuser.me/api/portraits/men/26.jpg",
  },
  {
    id: "r5",
    client: "Hong J.",
    industry: "양영자 탁구선교회",
    rating: 5,
    title: "Support inquiries now come through the site first.",
    body:
      "It used to be all word of mouth. Now people reach out after reading our story online, sometimes before we've even met them. Being able to post prayer updates there has helped so much.",
    avatar: "https://randomuser.me/api/portraits/women/27.jpg",
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
    id: "r7",
    client: "Master Kang",
    industry: "Champion Taekwondo",
    rating: 5,
    title: "Parents started sending us the site link before even calling.",
    body:
      "Feels like the flyer days are over. Parents show up already knowing the class schedule and who the instructors are — there's barely anything left to explain.",
    avatar: "https://randomuser.me/api/portraits/women/51.jpg",
  },
  {
    id: "r8",
    client: "Yoon J.",
    industry: "Glow Nail & Spa",
    rating: 4,
    title: "Booking works great, though the first round of edits took a while.",
    body:
      "We went back and forth a bit getting the colors and photo layout right early on. But now clients just pick their own time slot, and phone calls dropped a lot. Happy with where it landed.",
    avatar: "https://randomuser.me/api/portraits/women/5.jpg",
  },
  {
    id: "r9",
    client: "Oh D.",
    industry: "Sunshine Moving Services",
    rating: 5,
    title: "Quote requests just show up as texts now.",
    body:
      "Used to be all phone calls. Now more than half of people upload photos and request a quote right from the site. For someone who's out on jobs all day, that's huge.",
    avatar: "https://randomuser.me/api/portraits/men/92.jpg",
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
      "예전엔 \"어디 있는 학원이에요\"부터 물어보시던 분들이, 지금은 커리큘럼이랑 선생님 소개까지 보고 전화를 주세요. 저희 수업 분위기가 사이트에 그대로 담긴 것 같아서 뿌듯합니다.",
    avatar: "https://randomuser.me/api/portraits/men/26.jpg",
  },
  {
    id: "r5",
    client: "홍 간사",
    industry: "양영자 탁구선교회",
    rating: 5,
    title: "후원 문의가 사이트를 보고 먼저 옵니다.",
    body:
      "예전엔 아는 분 소개로만 후원이 이어졌는데, 이제는 사역 스토리를 보고 먼저 연락 주시는 분들이 생겼어요. 기도 제목도 정리해서 올릴 수 있게 돼서 정말 큰 도움이 됩니다.",
    avatar: "https://randomuser.me/api/portraits/women/27.jpg",
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
    id: "r7",
    client: "강 관장",
    industry: "챔피언 태권도",
    rating: 5,
    title: "학부모들이 먼저 홈페이지 링크를 보내주시더라고요.",
    body:
      "도장 안내문 나눠주던 시절은 끝난 것 같아요. 문의 오시는 학부모님들이 이미 사이트에서 수업 시간표랑 사범님 소개까지 다 보고 오셔서 설명할 게 별로 없어요.",
    avatar: "https://randomuser.me/api/portraits/women/51.jpg",
  },
  {
    id: "r8",
    client: "윤 원장",
    industry: "글로우 네일앤스파",
    rating: 4,
    title: "예약 시스템은 정말 편한데, 초반 수정은 좀 오래 걸렸어요.",
    body:
      "원하는 색감이랑 사진 배치 맞추느라 처음엔 왔다갔다를 좀 했습니다. 그래도 지금 예약 페이지는 손님들이 알아서 시간 골라서 넣으시니까 전화 응대가 확 줄었어요. 결과적으로는 만족합니다.",
    avatar: "https://randomuser.me/api/portraits/women/5.jpg",
  },
  {
    id: "r9",
    client: "오 대표",
    industry: "선샤인 이사 서비스",
    rating: 5,
    title: "견적 문의가 문자로 바로바로 들어옵니다.",
    body:
      "예전엔 다 전화로만 받았는데 이제 사이트에서 사진 올리고 견적 요청하는 분들이 반이 넘어요. 저희처럼 현장 다니는 사람한테는 이게 진짜 편합니다.",
    avatar: "https://randomuser.me/api/portraits/men/92.jpg",
  },
];

const faqsEn: FAQ[] = [
  {
    q: "How long does it take?",
    a: "Most sites launch in about two weeks. PORTFOLIO LITE (3 pages) is roughly 2 weeks; PORTFOLIO PRO (5 pages) is 3–4 weeks. Adding extra pages or booking integration may extend the timeline. You'll see your first design within a week of kickoff.",
  },
  {
    q: "Do you handle the domain and hosting?",
    a: "Yes — domain registration, hosting setup, and SSL all included. Pricing: domain at $25/year; PORTFOLIO LITE is $25/month for hosting + maintenance (database is an optional $10/month add-on); PORTFOLIO PRO is $55/month for hosting + DB + maintenance.",
  },
  {
    q: "Can I edit the site myself afterward?",
    a: "We don't open up design editing on the client side, but we cover up to 2 rounds of post-launch revisions for free. After that, you can subscribe to maintenance and we'll handle copy, image, and content updates quickly on your behalf.",
  },
  {
    q: "What if I don't like the design?",
    a: "We share a free concept mockup before any contract, then check in at every stage of build. The waterfall-of-surprise problem you might've had elsewhere doesn't really happen here, because each phase is signed off jointly.",
  },
  {
    q: "Can individuals (not registered businesses) hire you?",
    a: "Of course. PORTFOLIO LITE is built for personal portfolios — students, artists, etc. — with hosting included in the monthly cost (database is available as an optional add-on). We've also delivered plenty of personal-brand and freelancer sites.",
  },
  {
    q: "Can you also handle ongoing operations?",
    a: "Yes — monthly maintenance covers content updates, feature checks, performance monitoring, and basic SEO/GEO ($15/mo on LITE, $25/mo built into PRO). We don't run paid ads or blog content as part of these plans, but we'll scope that separately during the consult.",
  },
  {
    q: "What is GEO, and do you optimize for it?",
    a: "GEO (Generative Engine Optimization) is optimizing your site so AI answer engines like ChatGPT, Perplexity, and Google AI Overview cite and recommend it — not just ranking in classic search results. Every site we build ships with structured data (schema.org markup), clear Q&A-formatted content, and fact-based copy that AI models can parse and quote, so you're set up for both traditional SEO and AI search from day one.",
  },
];

const faqsKo: FAQ[] = [
  {
    q: "제작 기간은 얼마나 걸리나요?",
    a: "평균 2주 안에 오픈을 목표로 진행해드립니다. PORTFOLIO LITE(3페이지)는 약 2주, PORTFOLIO PRO(5페이지)는 약 3~4주 정도이며, 추가 페이지나 예약 연동을 추가하시면 일정이 늘어날 수 있어요. 첫 시안은 의뢰 후 평균 1주 안에 보여드립니다.",
  },
  {
    q: "도메인과 호스팅도 맡아주시나요?",
    a: "네, 도메인 구매부터 호스팅 세팅, SSL 인증서까지 한 번에 처리해드립니다. 비용은 도메인 연 $25, PORTFOLIO LITE는 호스팅+유지보수 월 $25(데이터베이스는 월 $10 선택 추가), PORTFOLIO PRO는 호스팅+DB+유지보수 월 $55로 운영돼요.",
  },
  {
    q: "직접 수정하고 관리할 수 있나요?",
    a: "홈페이지 디자인을 고객님께서 직접 수정하시는 것은 어려운 점 양해 부탁드립니다. 다만 제작이 완료된 후 2회까지는 무료로 수정해드리고 있으며, 이후에는 유지보수 서비스를 신청해 주시면 사진·글 등 콘텐츠 수정 요청을 받아 신속하게 반영해드리고 있어요.",
  },
  {
    q: "디자인이 마음에 안 들면 환불되나요?",
    a: "계약 전 무료 컨셉 시안을 먼저 보여드리고, 계약 후에도 단계별 컨펌을 거치며 진행합니다. 끝에 가서야 결과물을 확인하시는 일이 없도록 기획·디자인·개발 매 단계에서 함께 점검하므로, 결과물이 어긋나는 경우는 거의 없습니다.",
  },
  {
    q: "사업자가 아닌 개인도 의뢰할 수 있나요?",
    a: "물론입니다. PORTFOLIO LITE는 학생·아티스트 등 개인 포트폴리오를 위한 패키지로, 호스팅 비용이 월 이용료에 포함돼요 (데이터베이스는 선택 추가 항목이에요). 작가·강사·프리랜서·개인 브랜드 사이트도 다수 진행하고 있습니다.",
  },
  {
    q: "오픈 후 운영도 맡길 수 있나요?",
    a: "네, 월 유지보수 비용에 콘텐츠 수정·기능 점검·성능 모니터링과 함께 기본적인 SEO·GEO 관리까지 포함되어 있습니다(LITE 월 $15 / PRO 월 $25). 별도의 마케팅 운영(블로그 콘텐츠 제작, 광고 집행 등)은 제공하지 않는 점 양해 부탁드리며, 자세한 운영 범위는 무료 상담 시 안내드려요.",
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

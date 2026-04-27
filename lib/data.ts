export type Service = {
  id: string;
  title: string;
  summary: string;
  bullets: string[];
  icon: string;
};

export const services: Service[] = [
  {
    id: "branding-site",
    title: "브랜딩 사이트",
    summary: "회사의 첫인상을 설계합니다. 브랜드 컨셉을 디자인으로 정확하게 전달합니다.",
    bullets: ["반응형 웹 디자인", "SEO 최적화", "관리자 페이지", "도메인/호스팅 세팅"],
    icon: "✦",
  },
  {
    id: "shopping-mall",
    title: "쇼핑몰 / 커머스",
    summary: "결제, 회원, 배송, 정산까지. 매출이 오르는 온라인 매장을 만들어드립니다.",
    bullets: ["PG 결제 연동", "회원/등급 관리", "쿠폰/포인트", "재고/주문 관리"],
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
    summary: "병원, 학원, 스튜디오, 공간 비즈니스를 위한 예약·결제 통합 솔루션.",
    bullets: ["캘린더 예약", "노쇼 방지", "정기 결제", "카카오 알림톡"],
    icon: "◇",
  },
  {
    id: "marketing",
    title: "마케팅 운영",
    summary: "사이트만 만들고 끝이 아닙니다. SEO, 블로그, 광고까지 한 팀에서 운영합니다.",
    bullets: ["SEO 컨설팅", "블로그 콘텐츠", "네이버/구글 광고", "월간 리포트"],
    icon: "◉",
  },
];

export type Portfolio = {
  id: string;
  client: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  year: string;
};

export const portfolios: Portfolio[] = [
  {
    id: "noble-coffee",
    client: "노블 커피로스터스",
    category: "브랜딩 사이트",
    description: "스페셜티 로스터리 브랜드의 감성을 살린 미니멀 사이트.",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1200&q=80&auto=format&fit=crop",
    tags: ["브랜딩", "F&B", "반응형"],
    year: "2025",
  },
  {
    id: "lumiere-clinic",
    client: "루미에르 피부과",
    category: "예약 시스템",
    description: "온라인 예약·결제·후기 통합 의료 사이트.",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&q=80&auto=format&fit=crop",
    tags: ["의료", "예약", "결제"],
    year: "2025",
  },
  {
    id: "atelier-shop",
    client: "아뜰리에 22",
    category: "쇼핑몰",
    description: "수공예 의류 브랜드의 스토리텔링 커머스.",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200&q=80&auto=format&fit=crop",
    tags: ["쇼핑몰", "패션", "스토리텔링"],
    year: "2024",
  },
  {
    id: "haru-academy",
    client: "하루 영어학원",
    category: "랜딩페이지",
    description: "광고 전환율 3.2배를 만든 영어학원 랜딩.",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&q=80&auto=format&fit=crop",
    tags: ["랜딩", "교육", "광고"],
    year: "2024",
  },
  {
    id: "moa-pilates",
    client: "모아 필라테스",
    category: "예약 시스템",
    description: "회원·예약·정기결제 일체형 필라테스 스튜디오 사이트.",
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=1200&q=80&auto=format&fit=crop",
    tags: ["멤버십", "예약", "공간"],
    year: "2025",
  },
  {
    id: "green-law",
    client: "그린 법률사무소",
    category: "브랜딩 사이트",
    description: "신뢰감을 강조한 법률 전문 브랜딩 사이트.",
    image:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&q=80&auto=format&fit=crop",
    tags: ["법률", "신뢰", "B2B"],
    year: "2024",
  },
  {
    id: "seoul-bakery",
    client: "서울 베이커리",
    category: "쇼핑몰",
    description: "당일배송 전용 베이커리 주문 사이트.",
    image:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1200&q=80&auto=format&fit=crop",
    tags: ["쇼핑몰", "F&B", "배송"],
    year: "2025",
  },
  {
    id: "nova-studio",
    client: "노바 스튜디오",
    category: "포트폴리오",
    description: "포토그래퍼 개인 포트폴리오 + 예약.",
    image:
      "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=1200&q=80&auto=format&fit=crop",
    tags: ["포트폴리오", "사진", "예약"],
    year: "2024",
  },
  {
    id: "nexus-lab",
    client: "넥서스랩",
    category: "브랜딩 사이트",
    description: "B2B SaaS의 기술 신뢰감을 살린 다크모드 브랜딩.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80&auto=format&fit=crop",
    tags: ["SaaS", "다크모드", "B2B"],
    year: "2025",
  },
  {
    id: "arco-atelier",
    client: "아르코 건축사사무소",
    category: "브랜딩 사이트",
    description: "거대한 타이포로 압도감을 살린 건축 브루탈리스트 사이트.",
    image:
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1200&q=80&auto=format&fit=crop",
    tags: ["건축", "브루탈리즘", "흑백"],
    year: "2024",
  },
  {
    id: "moai-hotel",
    client: "모아이 호텔 & 리조트",
    category: "브랜딩 사이트",
    description: "골드 악센트로 럭셔리 무드를 강조한 부티크 호텔.",
    image:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&q=80&auto=format&fit=crop",
    tags: ["호텔", "럭셔리", "다크"],
    year: "2025",
  },
  {
    id: "bloom-cosmetics",
    client: "블룸 코스메틱",
    category: "쇼핑몰",
    description: "파스텔 핑크로 풀어낸 K-뷰티 미니멀 쇼핑몰.",
    image:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=1200&q=80&auto=format&fit=crop",
    tags: ["뷰티", "파스텔", "미니멀"],
    year: "2025",
  },
  {
    id: "wood-and-stone",
    client: "우드앤스톤",
    category: "쇼핑몰",
    description: "어얼시 톤의 따뜻한 가구·홈 데코 커머스.",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&q=80&auto=format&fit=crop",
    tags: ["가구", "홈", "내추럴"],
    year: "2024",
  },
  {
    id: "vin-secret",
    client: "뱅 시크릿",
    category: "쇼핑몰",
    description: "딥 와인 컬러의 클래식 와인 정기구독몰.",
    image:
      "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=1200&q=80&auto=format&fit=crop",
    tags: ["와인", "구독", "클래식"],
    year: "2025",
  },
  {
    id: "halo-fitness",
    client: "헤일로 피트니스",
    category: "랜딩페이지",
    description: "볼드 그라디언트로 시선을 끄는 피트니스 앱 랜딩.",
    image:
      "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=1200&q=80&auto=format&fit=crop",
    tags: ["앱", "피트니스", "그라디언트"],
    year: "2025",
  },
  {
    id: "dr-slim-clinic",
    client: "닥터슬림 다이어트",
    category: "랜딩페이지",
    description: "Before&After와 후기 뱃지로 전환을 끌어올린 다이어트 랜딩.",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&q=80&auto=format&fit=crop",
    tags: ["전환형", "다이어트", "후기"],
    year: "2024",
  },
  {
    id: "villa-toscana",
    client: "빌라 토스카나",
    category: "예약 시스템",
    description: "에디토리얼 매거진 무드의 파인다이닝 예약.",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80&auto=format&fit=crop",
    tags: ["파인다이닝", "예약", "에디토리얼"],
    year: "2025",
  },
  {
    id: "muni-hair",
    client: "무니 헤어",
    category: "예약 시스템",
    description: "Y2K 크롬 무드로 풀어낸 트렌디 헤어살롱 예약.",
    image:
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1200&q=80&auto=format&fit=crop",
    tags: ["헤어", "Y2K", "예약"],
    year: "2025",
  },
  {
    id: "kitt-works",
    client: "키트 웍스",
    category: "포트폴리오",
    description: "그리드 기반 스위스 미니멀 디자이너 포트폴리오.",
    image:
      "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=1200&q=80&auto=format&fit=crop",
    tags: ["UX", "그리드", "미니멀"],
    year: "2024",
  },
  {
    id: "jini-illustration",
    client: "지니 일러스트",
    category: "포트폴리오",
    description: "페이퍼 텍스처와 컬러풀한 핸드드로운 일러스트 포트폴리오.",
    image:
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=1200&q=80&auto=format&fit=crop",
    tags: ["일러스트", "핸드드로잉", "컬러풀"],
    year: "2024",
  },
];

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
    yearTotal: string;
    yearlyAfter: string;
  };
  description: string;
  features: string[];
  cta: string;
};

export const plans: Plan[] = [
  {
    id: "portfolio-lite",
    name: "PORTFOLIO LITE",
    audience: "비상업 개인 포트폴리오 · 학생 · 아티스트",
    pricing: {
      oneTime: "$299",
      oneTimeNote: "일회성 (3페이지)",
      monthly: "$15",
      monthlyNote: "월 유지보수",
      annual: "$15",
      annualNote: "연 도메인",
      yearTotal: "$494",
      yearlyAfter: "$195",
    },
    description: "비상업적 개인 포트폴리오를 깔끔하게 시작.",
    features: [
      "3페이지 기본 구성",
      "템플릿 디자인 + 모바일 반응형",
      "기본 SEO 세팅",
      "호스팅 무료 (비상업용)",
      "데이터베이스 무료 (비상업용)",
    ],
    cta: "견적 문의하기",
  },
  {
    id: "portfolio-pro",
    name: "PORTFOLIO PRO",
    audience: "프리랜서 · 컨설턴트 · 강사 · 소상공인",
    pricing: {
      oneTime: "$449",
      oneTimeNote: "일회성 (5페이지)",
      monthly: "$65",
      monthlyNote: "호스팅 + DB + 유지보수",
      annual: "$15",
      annualNote: "연 도메인",
      yearTotal: "$1,244",
      yearlyAfter: "$795",
    },
    description: "상업 활동에 필요한 모든 기능을 갖춘 포트폴리오.",
    features: [
      "5페이지 기본 구성",
      "템플릿 디자인 + 모바일 반응형",
      "기본 SEO 세팅",
      "호스팅 (서버비용) 월 $20",
      "데이터베이스 월 $25",
      "로그인 · 게시판 · 사진첩 중 2개 무료 추가",
    ],
    cta: "견적 문의하기",
  },
];

export type Review = {
  id: string;
  client: string;
  industry: string;
  rating: number;
  title: string;
  body: string;
  avatar: string;
};

export const reviews: Review[] = [
  {
    id: "r1",
    client: "김 대표",
    industry: "노블 커피로스터스",
    rating: 5,
    title: "사이트 오픈 후 매장 방문 문의가 2배가 됐어요.",
    body:
      "시안만 100번 받았던 다른 곳과 달리, 제 의도를 정확히 디자인으로 옮겨주셔서 놀랐습니다. 오픈 후 한 달 만에 신규 고객 방문이 두 배로 늘었어요.",
    avatar: "https://i.pravatar.cc/120?img=12",
  },
  {
    id: "r2",
    client: "이 원장",
    industry: "루미에르 피부과",
    rating: 5,
    title: "예약 노쇼율이 절반으로 줄었습니다.",
    body:
      "카카오 알림톡 자동화까지 한번에 해결해주셔서 직원 업무가 확 줄었어요. 다음 분원도 메이크페이지에 맡길 예정입니다.",
    avatar: "https://i.pravatar.cc/120?img=32",
  },
  {
    id: "r3",
    client: "박 실장",
    industry: "아뜰리에 22",
    rating: 5,
    title: "쇼핑몰 매출이 첫 달부터 흑자였습니다.",
    body:
      "단순히 '예쁜 사이트'가 아니라 실제 구매로 이어지는 동선을 함께 설계해주신 게 결정적이었습니다. 카피 한 줄까지 같이 고민해주셔서 감사했어요.",
    avatar: "https://i.pravatar.cc/120?img=47",
  },
  {
    id: "r4",
    client: "정 대표",
    industry: "하루 영어학원",
    rating: 5,
    title: "광고 효율이 3배 이상 좋아졌습니다.",
    body:
      "랜딩페이지 하나 바꿨을 뿐인데 같은 광고비로 상담 신청이 3배 들어옵니다. 처음부터 전환을 위해 설계된 페이지였다는 게 느껴졌어요.",
    avatar: "https://i.pravatar.cc/120?img=58",
  },
  {
    id: "r5",
    client: "최 대표",
    industry: "모아 필라테스",
    rating: 5,
    title: "회원 관리에 쓰던 시간을 70% 절약했어요.",
    body:
      "예약, 결제, 출석까지 한 사이트에서 다 되니 직원이 굳이 카운터에 붙어 있을 필요가 없어졌습니다. ROI가 명확합니다.",
    avatar: "https://i.pravatar.cc/120?img=23",
  },
  {
    id: "r6",
    client: "한 변호사",
    industry: "그린 법률사무소",
    rating: 5,
    title: "신뢰감 있는 디자인, 정확히 그게 필요했습니다.",
    body:
      "전문직 사이트가 자칫 딱딱해 보이지 않으면서도 무게감을 주는 균형을 정말 잘 잡아주셨어요. 상담 문의 품질이 달라졌습니다.",
    avatar: "https://i.pravatar.cc/120?img=68",
  },
];

export type FAQ = { q: string; a: string };

export const faqs: FAQ[] = [
  {
    q: "제작 기간은 얼마나 걸리나요?",
    a: "평균 2주 안에 오픈을 목표로 진행해드립니다. PORTFOLIO LITE(3페이지)는 약 2주, PORTFOLIO PRO(5페이지)는 약 3~4주 정도이며, 추가 페이지나 예약·결제 연동을 추가하시면 일정이 늘어날 수 있어요. 첫 시안은 의뢰 후 평균 1주 안에 보여드립니다.",
  },
  {
    q: "도메인과 호스팅도 맡아주시나요?",
    a: "네, 도메인 구매부터 호스팅 세팅, SSL 인증서까지 한 번에 처리해드립니다. 비용은 도메인 연 $15, 호스팅·DB·유지보수가 PORTFOLIO LITE는 월 $15, PORTFOLIO PRO는 월 $65로 운영돼요. 비상업 개인 포트폴리오는 호스팅·DB가 무료입니다.",
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
    a: "물론입니다. PORTFOLIO LITE는 학생·아티스트 등 비상업 개인 포트폴리오를 위한 패키지로, 호스팅·DB가 무료로 제공돼요. 작가·강사·프리랜서·개인 브랜드 사이트도 다수 진행하고 있습니다.",
  },
  {
    q: "오픈 후 운영도 맡길 수 있나요?",
    a: "네, 월 유지보수 비용에 콘텐츠 수정·기능 점검·성능 모니터링과 함께 기본적인 SEO 관리까지 포함되어 있습니다(LITE 월 $15 / PRO 월 $20). 별도의 마케팅 운영(블로그 콘텐츠 제작, 광고 집행 등)은 제공하지 않는 점 양해 부탁드리며, 자세한 운영 범위는 무료 상담 시 안내드려요.",
  },
];

export type Stat = { value: string; label: string };

export const stats: Stat[] = [
  { value: "320+", label: "누적 제작 사이트" },
  { value: "4.9 / 5", label: "평균 고객 만족도" },
  { value: "98%", label: "재의뢰·추천율" },
  { value: "1주", label: "평균 첫 시안까지" },
];

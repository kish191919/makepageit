// Korean promo email template for 한인 business outreach.
// Structure follows the Sept 2026 outreach emails; pricing follows the
// all-inclusive promo in lib/data.ts (promoPlansKo / promoEndsAt).
// Each target picks a `variant` (why we're writing) and an `industry`
// (what their customers look for). See build.mjs for the data shape.

export const PROMO = {
  basic: 70,
  premium: 120,
  regularBasic: 149,
  regularPremium: 249,
  endsKo: "2026년 12월 31일",
  contractMonths: 12,
};

const SITE_URL = "https://makepageit.com";
const CTA_URL = `${SITE_URL}/ko/pricing?utm_source=email&utm_medium=outreach&utm_campaign=promo_2026_11`;
const BRAND_COLOR = "#4f46e5";

// who:    who searches (고객/분/의뢰인…)
// act:    "~할 때" clause
// info:   what they check first
// label:  business-type noun + 은/는
// show:   what a site should show + 을/를
// effect: what it helps with
// feature: industry bullet in the promo list
// updates: content that changes often (has-site pitch)
// plan:   "basic" | "premium"; premiumWhy explains why premium fits
// trust:  optional replacement for "고객 신뢰도를 높이고"
export const INDUSTRIES = {
  restaurant: {
    who: "고객", act: "식당을 고를 때", info: "메뉴, 가격, 영업시간, 위치",
    label: "식당은", show: "메뉴와 매장 사진, 영업시간을", effect: "신규 방문과 예약 문의",
    feature: "메뉴·매장 사진, 영업시간·위치, 예약·문의 폼 구성", updates: "메뉴나 가격, 영업시간",
    plan: "basic",
  },
  karaoke: {
    who: "고객", act: "노래방을 찾을 때", info: "룸 종류, 요금, 영업시간, 위치",
    label: "노래방은", show: "룸 사진과 요금, 영업시간을", effect: "신규 방문과 단체 예약 문의",
    feature: "룸 사진, 요금·영업시간, 위치, 예약 문의 폼 구성", updates: "요금이나 영업시간",
    plan: "basic",
  },
  embroidery: {
    who: "고객", act: "컴퓨터 자수나 단체 유니폼·모자 자수를 의뢰할 때", info: "작업 가능 품목, 최소 주문 수량, 가격, 납기",
    label: "자수 업체는", show: "작업 사례 사진과 가능 품목을", effect: "신규 견적 문의",
    feature: "작업 품목 및 사례 사진, 연락처, 견적 문의 폼 구성", updates: "작업 사례 사진",
    plan: "basic",
  },
  laundromat: {
    who: "고객", act: "세탁소를 찾을 때", info: "위치, 영업시간, 요금, 픽업·배달 여부",
    label: "세탁소는", show: "서비스 종류와 요금, 영업시간을", effect: "동네 신규 고객 유입",
    feature: "서비스·요금 안내, 영업시간·위치, 문의 폼 구성", updates: "요금이나 영업시간",
    plan: "basic",
  },
  retail: {
    who: "고객", act: "매장을 방문하기 전에", info: "취급 상품, 영업시간, 위치",
    label: "매장은", show: "취급 상품과 매장 사진, 영업시간을", effect: "신규 방문",
    feature: "취급 상품·매장 사진, 영업시간·위치, 문의 폼 구성", updates: "취급 상품이나 영업시간",
    plan: "basic",
  },
  travel: {
    who: "고객", act: "항공권이나 여행 상품을 알아볼 때", info: "여행 상품, 상담 방법, 연락처",
    label: "여행사는", show: "여행 상품과 상담 방법을", effect: "신규 상담 문의",
    feature: "여행 상품 소개, 상담 안내, 연락처, 문의 폼 구성", updates: "여행 상품이나 공지 사항",
    plan: "basic",
  },
  tax: {
    who: "고객", act: "세무·회계 사무실을 알아볼 때", info: "서비스 항목, 상담 방법, 위치",
    label: "세무·회계 사무실은", show: "서비스 항목과 상담 절차를", effect: "신규 상담 문의",
    feature: "서비스 항목 소개, 상담 안내, 연락처, 상담 문의 폼 구성", updates: "세무 일정 공지나 안내 사항",
    plan: "basic",
  },
  tire: {
    who: "고객", act: "타이어 교체나 정비를 맡길 때", info: "취급 타이어, 서비스 항목, 영업시간, 위치",
    label: "타이어 매장은", show: "취급 브랜드와 서비스 항목, 영업시간을", effect: "신규 방문과 견적 문의",
    feature: "취급 브랜드·서비스 소개, 영업시간·위치, 견적 문의 폼 구성", updates: "취급 브랜드나 프로모션",
    plan: "basic",
  },
  medical: {
    who: "환자", act: "병원을 고를 때", info: "진료 과목, 진료 시간, 보험 적용 여부, 위치",
    label: "병원은", show: "진료 과목과 의료진 소개, 진료 시간을", effect: "신규 환자 예약 문의",
    feature: "진료 과목·의료진 소개, 진료 시간·위치, 예약 문의 폼 구성", updates: "진료 시간이나 공지 사항",
    plan: "basic",
  },
  dental: {
    who: "환자", act: "치과를 고를 때", info: "진료 항목, 진료 시간, 보험 적용 여부, 위치",
    label: "치과는", show: "진료 항목과 의료진 소개, 진료 시간을", effect: "신규 환자 예약 문의",
    feature: "진료 항목·의료진 소개, 진료 시간·위치, 예약 문의 폼 구성", updates: "진료 시간이나 공지 사항",
    plan: "basic",
  },
  golf: {
    who: "고객", act: "골프 연습장이나 레슨을 알아볼 때", info: "요금, 레슨 프로그램, 영업시간, 위치",
    label: "골프 연습장은", show: "시설 사진과 요금, 레슨 프로그램을", effect: "신규 회원과 레슨 문의",
    feature: "시설 사진, 요금·레슨 안내, 문의 폼 구성", updates: "요금이나 레슨 일정",
    plan: "premium", premiumWhy: "레슨 일정 캘린더와 회원 관리까지 활용하신다면",
  },
  church: {
    who: "분", act: "교회를 찾을 때", info: "예배 시간, 위치, 교회 소개",
    label: "교회는", show: "예배 시간과 교회 소식, 행사 사진을", effect: "새가족의 방문",
    feature: "예배 안내, 교회 소식·행사 사진, 오시는 길 구성", updates: "주보나 행사 소식, 예배 시간 변경",
    plan: "premium", premiumWhy: "행사 사진 갤러리와 교인 관리, 교회 일정 캘린더까지 활용하신다면",
    trust: "처음 찾는 분들께 좋은 첫인상을 드리고",
  },
  catholic: {
    who: "분", act: "성당을 찾을 때", info: "미사 시간, 위치, 공동체 소개",
    label: "성당은", show: "미사 시간과 공동체 소식, 행사 사진을", effect: "새 교우의 방문",
    feature: "미사 안내, 공동체 소식·행사 사진, 오시는 길 구성", updates: "주보나 행사 소식, 미사 시간 변경",
    plan: "premium", premiumWhy: "행사 사진 갤러리와 교우 관리, 본당 일정 캘린더까지 활용하신다면",
    trust: "처음 찾는 분들께 좋은 첫인상을 드리고",
  },
  spa: {
    who: "고객", act: "스파를 고를 때", info: "서비스 메뉴, 가격, 영업시간, 예약 방법",
    label: "스파는", show: "시설 사진과 서비스 메뉴, 가격을", effect: "신규 예약",
    feature: "시설 사진, 서비스 메뉴·가격, 예약 문의 폼 구성", updates: "서비스 메뉴나 가격, 프로모션",
    plan: "premium", premiumWhy: "시설 사진 갤러리와 예약 일정 관리까지 활용하신다면",
  },
  supply: {
    who: "거래처", act: "새로운 공급처를 찾을 때", info: "취급 품목, 브랜드, 재고, 주문 방법",
    label: "도매·자재 업체는", show: "취급 품목과 브랜드, 연락처를", effect: "신규 거래 문의",
    feature: "취급 품목·브랜드 소개, 연락처, 견적 문의 폼 구성", updates: "취급 품목이나 공지 사항",
    plan: "basic", trust: "신뢰도를 높이고",
  },
  hotel: {
    who: "고객", act: "숙소를 고를 때", info: "객실 종류, 위치, 요금, 예약 방법",
    label: "호텔은", show: "객실 사진과 위치, 편의 시설을", effect: "직접 예약 문의",
    feature: "객실·시설 사진, 위치 안내, 예약 문의 폼 구성", updates: "객실 정보나 프로모션",
    plan: "premium", premiumWhy: "객실 사진 갤러리와 예약 일정 관리까지 활용하신다면",
  },
  gallery: {
    who: "관람객과 컬렉터", act: "전시나 작품을 찾을 때", info: "전시 일정, 작가와 작품 정보, 위치",
    label: "갤러리는", show: "작품 사진과 전시 일정을", effect: "관람과 작품 문의",
    feature: "작품 갤러리, 전시 일정, 작가 소개, 문의 폼 구성", updates: "전시 일정이나 작품 사진",
    plan: "premium", premiumWhy: "작품 사진 갤러리를 중심으로 운영하신다면",
    trust: "신뢰도를 높이고",
  },
  academy: {
    who: "학부모와 학생", act: "학원을 고를 때", info: "수업 프로그램, 강사 소개, 수강료, 상담 방법",
    label: "미술 학원은", show: "학생 작품과 수업 프로그램을", effect: "신규 상담 문의",
    feature: "학생 작품 갤러리, 수업 프로그램 안내, 상담 문의 폼 구성", updates: "수업 일정이나 학생 작품",
    plan: "premium", premiumWhy: "학생 작품 갤러리와 수강생 관리, 수업 일정 캘린더까지 활용하신다면",
    trust: "신뢰도를 높이고",
  },
  glass: {
    who: "고객", act: "유리 시공 업체를 찾을 때", info: "시공 사례, 서비스 지역, 견적 방법",
    label: "시공 업체는", show: "시공 사례 사진과 서비스 지역을", effect: "신규 견적 문의",
    feature: "시공 사례 사진, 서비스 지역 안내, 견적 문의 폼 구성", updates: "시공 사례 사진",
    plan: "basic",
  },
  law: {
    who: "의뢰인", act: "변호사를 찾을 때", info: "업무 분야, 상담 방법, 사무실 위치",
    label: "법률 사무실은", show: "업무 분야와 변호사 소개, 상담 절차를", effect: "신규 상담 문의",
    feature: "업무 분야·변호사 소개, 상담 안내, 상담 문의 폼 구성", updates: "업무 분야나 공지 사항",
    plan: "basic", trust: "의뢰인의 신뢰를 높이고",
  },
  // ---- added for the nationwide (mostly 남가주) list ----
  oriental: {
    who: "환자", act: "한의원을 고를 때", info: "진료 분야, 진료 시간, 보험 적용 여부, 위치",
    label: "한의원은", show: "진료 분야와 의료진 소개, 진료 시간을", effect: "신규 환자 예약 문의",
    feature: "진료 분야·의료진 소개, 진료 시간·위치, 예약 문의 폼 구성", updates: "진료 시간이나 공지 사항",
    plan: "basic",
  },
  chiro: {
    who: "환자", act: "척추신경 클리닉을 고를 때", info: "치료 분야, 진료 시간, 보험 적용 여부, 위치",
    label: "척추신경 클리닉은", show: "치료 분야와 의료진 소개, 진료 시간을", effect: "신규 환자 예약 문의",
    feature: "치료 분야·의료진 소개, 진료 시간·위치, 예약 문의 폼 구성", updates: "진료 시간이나 공지 사항",
    plan: "basic",
  },
  notary: {
    who: "고객", act: "공증이나 번역, 서류 대행을 맡길 때", info: "업무 범위, 비용, 상담 방법, 위치",
    label: "공증·서류 대행 사무실은", show: "업무 범위와 준비 서류, 상담 방법을", effect: "신규 상담 문의",
    feature: "업무 범위·준비 서류 안내, 연락처, 상담 문의 폼 구성", updates: "업무 안내나 공지 사항",
    plan: "basic",
  },
  insurance: {
    who: "고객", act: "보험 에이전트를 찾을 때", info: "취급 보험 종류, 상담 방법, 연락처",
    label: "보험 에이전시는", show: "취급 보험 상품과 상담 절차를", effect: "신규 상담 문의",
    feature: "취급 보험 소개, 상담 안내, 견적·상담 문의 폼 구성", updates: "보험 상품 안내나 공지 사항",
    plan: "basic",
  },
  mortgage: {
    who: "고객", act: "주택 융자나 재융자를 알아볼 때", info: "융자 프로그램, 상담 방법, 연락처",
    label: "융자 회사는", show: "융자 프로그램과 상담 절차를", effect: "신규 상담 문의",
    feature: "융자 프로그램 소개, 상담 안내, 상담 문의 폼 구성", updates: "금리 안내나 융자 프로그램",
    plan: "basic",
  },
  realestate: {
    who: "고객", act: "집을 사고팔거나 렌트를 알아볼 때", info: "매물 정보, 에이전트 경력, 거래 지역, 연락처",
    label: "부동산은", show: "매물 정보와 에이전트 소개, 거래 사례를", effect: "신규 매매·임대 문의",
    feature: "매물 소개, 에이전트 소개, 거래 사례, 상담 문의 폼 구성", updates: "매물 정보나 거래 사례",
    plan: "premium", premiumWhy: "매물 사진 갤러리와 고객 관리까지 활용하신다면",
  },
  contractor: {
    who: "고객", act: "공사나 리모델링 업체를 찾을 때", info: "시공 사례, 서비스 지역, 라이선스, 견적 방법",
    label: "시공 업체는", show: "시공 사례 사진과 서비스 지역을", effect: "신규 견적 문의",
    feature: "시공 사례 사진, 서비스 지역·라이선스 안내, 견적 문의 폼 구성", updates: "시공 사례 사진",
    plan: "basic",
  },
  hvac: {
    who: "고객", act: "에어컨·히터 설치나 수리 업체를 찾을 때", info: "서비스 항목, 서비스 지역, 라이선스, 견적 방법",
    label: "냉난방 업체는", show: "서비스 항목과 시공 사례, 서비스 지역을", effect: "신규 수리·견적 문의",
    feature: "서비스 항목·시공 사례 소개, 서비스 지역 안내, 견적 문의 폼 구성", updates: "서비스 항목이나 시공 사례",
    plan: "basic",
  },
  plumbing: {
    who: "고객", act: "배관 수리 업체를 급하게 찾을 때", info: "서비스 항목, 서비스 지역, 연락 방법",
    label: "플러밍 업체는", show: "서비스 항목과 서비스 지역, 연락처를", effect: "신규 수리 문의",
    feature: "서비스 항목 소개, 서비스 지역 안내, 긴급 연락처, 견적 문의 폼 구성", updates: "서비스 항목이나 시공 사례",
    plan: "basic",
  },
  electric: {
    who: "고객", act: "전기 공사 업체를 찾을 때", info: "시공 분야, 서비스 지역, 라이선스, 견적 방법",
    label: "전기 공사 업체는", show: "시공 분야와 시공 사례, 라이선스 정보를", effect: "신규 견적 문의",
    feature: "시공 분야·사례 소개, 라이선스 안내, 견적 문의 폼 구성", updates: "시공 사례 사진",
    plan: "basic",
  },
  landscaping: {
    who: "고객", act: "조경이나 정원 관리 업체를 찾을 때", info: "서비스 항목, 작업 사례, 서비스 지역, 견적 방법",
    label: "조경 업체는", show: "작업 사례 사진과 서비스 지역을", effect: "신규 견적 문의",
    feature: "작업 사례 사진, 서비스 항목·지역 안내, 견적 문의 폼 구성", updates: "작업 사례 사진",
    plan: "basic",
  },
  pest: {
    who: "고객", act: "터마이트나 해충 방제 업체를 찾을 때", info: "서비스 항목, 서비스 지역, 라이선스, 견적 방법",
    label: "방제 업체는", show: "서비스 항목과 서비스 지역, 라이선스 정보를", effect: "신규 점검·견적 문의",
    feature: "서비스 항목 소개, 서비스 지역·라이선스 안내, 점검 신청 폼 구성", updates: "서비스 안내나 공지 사항",
    plan: "basic",
  },
  beauty: {
    who: "고객", act: "미용실을 고를 때", info: "시술 메뉴, 가격, 영업시간, 예약 방법",
    label: "미용실은", show: "스타일 사진과 시술 메뉴, 가격을", effect: "신규 예약",
    feature: "스타일 사진 갤러리, 시술 메뉴·가격, 예약 문의 폼 구성", updates: "시술 메뉴나 가격, 프로모션",
    plan: "premium", premiumWhy: "스타일 사진 갤러리와 예약 일정 관리까지 활용하신다면",
  },
  skincare: {
    who: "고객", act: "피부관리실을 고를 때", info: "관리 프로그램, 가격, 영업시간, 예약 방법",
    label: "피부관리실은", show: "관리 프로그램과 가격, 시설 사진을", effect: "신규 예약",
    feature: "관리 프로그램·가격 안내, 시설 사진, 예약 문의 폼 구성", updates: "관리 프로그램이나 가격, 프로모션",
    plan: "premium", premiumWhy: "시설 사진 갤러리와 예약 일정 관리까지 활용하신다면",
  },
  taekwondo: {
    who: "학부모", act: "아이가 다닐 태권도장을 고를 때", info: "수업 시간표, 수강료, 사범 소개, 위치",
    label: "태권도장은", show: "수업 시간표와 수련 사진, 사범 소개를", effect: "신규 등록 상담",
    feature: "수업 시간표, 수련 사진 갤러리, 체험 수업 신청 폼 구성", updates: "수업 시간표나 승급 심사 일정",
    plan: "premium", premiumWhy: "수련 사진 갤러리와 관원 관리, 승급 심사 일정 캘린더까지 활용하신다면",
    trust: "학부모님들의 신뢰를 높이고",
  },
  autorepair: {
    who: "고객", act: "차량 정비나 수리를 맡길 때", info: "서비스 항목, 영업시간, 위치, 견적 방법",
    label: "정비 업체는", show: "서비스 항목과 작업 사진, 영업시간을", effect: "신규 방문과 견적 문의",
    feature: "서비스 항목·작업 사진, 영업시간·위치, 견적 문의 폼 구성", updates: "서비스 항목이나 프로모션",
    plan: "basic",
  },
  florist: {
    who: "고객", act: "꽃 배달이나 행사용 꽃을 주문할 때", info: "상품 사진, 가격, 배달 지역, 주문 방법",
    label: "꽃집은", show: "꽃 상품 사진과 가격, 배달 지역을", effect: "주문 문의",
    feature: "상품 사진 갤러리, 가격·배달 지역 안내, 주문 문의 폼 구성", updates: "시즌 상품이나 가격",
    plan: "basic",
  },
  tutoring: {
    who: "학부모와 학생", act: "학원을 고를 때", info: "수업 프로그램, 강사 소개, 수강료, 상담 방법",
    label: "학원은", show: "수업 프로그램과 강사 소개, 시간표를", effect: "신규 상담 문의",
    feature: "수업 프로그램·강사 소개, 시간표, 상담 문의 폼 구성", updates: "수업 일정이나 공지 사항",
    plan: "premium", premiumWhy: "수강생 관리와 수업 일정 캘린더까지 활용하신다면",
    trust: "신뢰도를 높이고",
  },
  music: {
    who: "학부모와 학생", act: "음악 학원이나 레슨을 알아볼 때", info: "레슨 과목, 강사 소개, 수강료, 상담 방법",
    label: "음악 학원은", show: "레슨 과목과 강사 소개, 연주 사진·영상을", effect: "신규 레슨 문의",
    feature: "레슨 과목·강사 소개, 연주 사진·영상, 상담 문의 폼 구성", updates: "레슨 일정이나 발표회 소식",
    plan: "premium", premiumWhy: "연주 사진 갤러리와 수강생 관리, 레슨 일정 캘린더까지 활용하신다면",
    trust: "신뢰도를 높이고",
  },
  preschool: {
    who: "학부모", act: "아이를 맡길 곳을 찾을 때", info: "교육 프로그램, 운영 시간, 시설, 등록 방법",
    label: "유치원·데이케어는", show: "교육 프로그램과 시설·활동 사진, 운영 시간을", effect: "입학 상담 문의",
    feature: "교육 프로그램 소개, 시설·활동 사진 갤러리, 입학 상담 폼 구성", updates: "행사 소식이나 공지 사항",
    plan: "premium", premiumWhy: "활동 사진 갤러리와 원아 관리, 행사 일정 캘린더까지 활용하신다면",
    trust: "학부모님들의 신뢰를 높이고",
  },
  optical: {
    who: "고객", act: "안경점이나 검안의를 찾을 때", info: "취급 브랜드, 검안 서비스, 보험 적용 여부, 영업시간",
    label: "안경점·검안과는", show: "취급 브랜드와 검안 서비스, 영업시간을", effect: "신규 방문과 예약 문의",
    feature: "취급 브랜드·검안 서비스 소개, 영업시간·위치, 예약 문의 폼 구성", updates: "취급 브랜드나 영업시간",
    plan: "basic",
  },
  limo: {
    who: "고객", act: "공항 픽업이나 리무진·택시를 예약할 때", info: "차량 종류, 요금, 서비스 지역, 예약 방법",
    label: "운송 업체는", show: "차량 사진과 요금, 서비스 지역을", effect: "예약 문의",
    feature: "차량 사진, 요금·서비스 지역 안내, 예약 문의 폼 구성", updates: "요금이나 서비스 안내",
    plan: "basic",
  },
  moving: {
    who: "고객", act: "이사나 해외 운송 업체를 알아볼 때", info: "서비스 종류, 견적 방법, 서비스 지역, 연락처",
    label: "이삿짐·운송 업체는", show: "서비스 종류와 견적 절차를", effect: "신규 견적 문의",
    feature: "서비스 종류 소개, 견적 절차 안내, 견적 문의 폼 구성", updates: "서비스 안내나 일정 공지",
    plan: "basic",
  },
  healthfood: {
    who: "고객", act: "건강식품을 구입할 때", info: "취급 제품, 가격, 매장 위치, 주문 방법",
    label: "건강식품점은", show: "취급 제품과 매장 정보, 주문 방법을", effect: "신규 방문과 주문 문의",
    feature: "취급 제품 소개, 매장 정보, 주문 문의 폼 구성", updates: "취급 제품이나 프로모션",
    plan: "basic",
  },
};

// ---------- Korean particles ----------
// Particle choice depends on the main word, so drop a trailing "(English)"
// and quote marks first: "원조(Won Jo)" → 원조 → 를.
function hasBatchim(word, override) {
  if (typeof override === "boolean") return override;
  const core = word.replace(/\([^)]*\)\s*$/, "").replace(/[‘’'"“”\s]+$/g, "");
  const last = core.at(-1) ?? "";
  const code = last.charCodeAt(0);
  if (code >= 0xac00 && code <= 0xd7a3) return (code - 0xac00) % 28 !== 0;
  throw new Error(`Can't pick a particle for "${word}" — set "batchim": true/false on that target.`);
}
const josa = (word, withB, withoutB, override) => word + (hasBatchim(word, override) ? withB : withoutB);

// ---------- copy ----------
function situationLine(t) {
  if (t.situation) return t.situation;
  if (t.variant === "no-site") return "업체 정보를 확인하던 중 현재 별도로 운영 중인 웹사이트를 찾기 어려워 조심스럽게 연락드립니다.";
  if (t.variant === "has-site") return `업체 정보를 확인하던 중 운영 중이신 홈페이지(${t.site})도 살펴보았습니다.`;
  throw new Error(`${t.id}: variant "${t.variant}" needs a "situation" sentence.`);
}

function industryParagraphs(t, ind) {
  const who = ind.who;
  const whoSubj = josa(who, "이", "가");
  const trust = ind.trust ?? "고객 신뢰도를 높이고";
  const tail = `특히 ${ind.label} ${ind.show} 한눈에 보여줄 수 있는 웹사이트가 있으면 ${trust} ${ind.effect}에도 도움이 될 수 있다고 생각했습니다.`;

  if (t.variant === "no-site") return [
    `요즘은 많은 ${who}들이 ${ind.act} Google 검색을 통해 ${ind.info} 등을 먼저 확인합니다. 웹사이트가 없을 경우 관심 있는 ${whoSubj} 필요한 정보를 바로 확인하기 어려워 문의로 이어지지 못하는 경우도 있습니다.`,
    tail,
  ];
  if (t.variant === "broken") return [
    `요즘은 많은 ${who}들이 ${ind.act} Google 검색을 통해 ${ind.info} 등을 먼저 확인합니다. 웹사이트 연결이 원활하지 않을 경우 관심 있는 ${whoSubj} 필요한 정보를 확인하지 못하고 다른 곳으로 이동할 가능성도 있습니다.`,
    tail,
  ];
  // sns: the directory's homepage field points at a Facebook/Instagram/blog page
  if (t.variant === "sns") return [
    `요즘은 많은 ${who}들이 ${ind.act} Google 검색을 통해 ${ind.info} 등을 먼저 확인합니다. SNS나 블로그는 소식을 전하기에는 좋지만, 검색했을 때 필요한 정보가 한눈에 정리되어 보이기는 어려운 경우가 많습니다.`,
    tail,
  ];
  if (t.variant === "mobile") return [
    `요즘은 많은 ${who}들이 ${ind.act} 휴대폰으로 Google 검색을 해서 ${ind.info} 등을 먼저 확인합니다. 모바일 화면에서 정보를 보기 불편하면 관심 있는 ${whoSubj} 다른 곳으로 이동할 가능성도 있습니다.`,
    tail,
  ];
  // has-site
  const p1 = t.platform
    ? `현재 ${t.platform}로 홈페이지를 운영하고 계신 것으로 보이는데, 이런 서비스는 구독료와 도메인을 따로 관리하면서 ${ind.updates} 같은 내용도 직접 수정하셔야 하는 경우가 많습니다.`
    : `홈페이지는 한 번 만든 뒤에도 ${ind.updates} 같은 내용을 제때 바꾸고, 호스팅·도메인·보안 인증서를 따로 관리하는 일이 생각보다 번거로운 경우가 많습니다.`;
  const p2 = `메이크페이지잇은 이런 관리까지 월 요금 하나에 포함해, ${t.title}께서 바뀐 내용만 알려주시면 저희가 대신 반영해 드리는 방식으로 운영하고 있습니다. 특히 ${ind.label} ${ind.show} 늘 최신으로 보여주는 것이 ${ind.effect}에 도움이 된다고 생각했습니다.`;
  return [p1, p2];
}

function planHint(t, ind) {
  const n = `${t.name}의 경우`;
  if (ind.plan === "premium") {
    return `${n} ${ind.premiumWhy} 프리미엄(월 $${PROMO.premium})이 잘 맞을 것 같고, 기본 소개와 문의 접수만 필요하시면 베이직(월 $${PROMO.basic})으로도 시작하실 수 있습니다.`;
  }
  return `${n} 기본 소개와 문의 접수가 중심이라면 베이직(월 $${PROMO.basic})으로 충분하고, 사진 갤러리나 예약 일정 관리까지 필요하시면 프리미엄(월 $${PROMO.premium})도 가능합니다.`;
}

function closing(t) {
  if (t.variant === "no-site" || t.variant === "sns") return [
    "혹시 웹사이트 제작을 고려하고 계시거나, 어떤 형태로 만들 수 있는지 궁금하시다면 부담 없이 회신 주세요.",
    "간단한 상담과 함께 예상 구성을 안내해 드리겠습니다.",
  ];
  if (t.variant === "has-site") return [
    "혹시 홈페이지 리뉴얼이나 관리 방식 변경을 고려하고 계시다면 부담 없이 회신 주세요.",
    "지금 홈페이지를 기준으로 어떤 구성이 가능할지 간단히 안내해 드리겠습니다.",
  ];
  return [
    "혹시 기존 웹사이트를 새롭게 정비하거나 새로 제작할 계획이 있으시다면 부담 없이 회신 주세요.",
    "간단한 상담과 함께 예상 구성을 안내해 드리겠습니다.",
  ];
}

// subjectStyle "promo" (set per campaign in targets.json): lead with the
// promotion and a new-site offer instead of the situation. The default style
// stays as-is because the 2026-11-10 batch was scheduled with it.
function promoSubject(t, greet) {
  const lead = "[연말 프로모션]";
  switch (t.variant) {
    case "broken": return `${lead} ${greet}, 홈페이지를 제작비 $0에 새로 만들어 드립니다`;
    case "mobile": return `${lead} ${greet}, 모바일에 맞는 새 홈페이지를 제작비 $0에 만들어 드립니다`;
    case "sns": return `${lead} ${greet}, 업체 전용 홈페이지를 제작비 $0에 만들어 드립니다`;
    case "no-site": return `${lead} ${greet}, 홈페이지를 제작비 $0에 만들어 드립니다`;
    case "has-site": return `${lead} ${greet}, 홈페이지 새 단장을 제작비 $0에 해 드립니다`;
    default: throw new Error(`${t.id}: unknown variant "${t.variant}"`);
  }
}

function subjectFor(t, greet) {
  if (t.subjectStyle === "promo") return promoSubject(t, greet);
  switch (t.variant) {
    case "no-site":
    case "sns": return `${greet}, 연말 웹사이트 제작 프로모션 안내드립니다 (제작비 $0)`;
    case "broken": return `${greet}, 등록된 홈페이지 주소 관련해서 연락드립니다`;
    case "mobile": return `${greet}, 홈페이지 모바일 화면 관련해서 연락드립니다`;
    case "has-site": return `${greet}, 홈페이지 관리·리뉴얼 연말 프로모션 안내드립니다`;
    default: throw new Error(`${t.id}: unknown variant "${t.variant}"`);
  }
}

// Returns structured content; html/text renderers below share it.
export function compose(t) {
  const ind = INDUSTRIES[t.industry];
  if (!ind) throw new Error(`${t.id}: unknown industry "${t.industry}"`);
  const greet = t.greet ?? `${t.name} ${t.title}`;
  return {
    subject: subjectFor(t, greet),
    greeting: `안녕하세요, ${greet},`,
    intro: [
      `${t.region} 지역 한인 업소록을 살펴보다가 ${josa(t.name, "을", "를", t.batchim)} 알게 되어 연락드리게 되었습니다.`,
      `저희는 미국 내 한인 소상공인과 사업체를 위한 웹사이트 제작 서비스 메이크페이지잇(makepageit.com)을 운영하고 있습니다.`,
      situationLine(t),
    ],
    industry: industryParagraphs(t, ind),
    promoLead: t.variant === "has-site"
      ? "마침 올해 말까지 한인 소상공인을 위한 연말 프로모션도 진행하고 있습니다."
      : "메이크페이지잇에서는 올해 말까지 한인 소상공인을 위한 연말 프로모션을 진행하고 있습니다.",
    bullets: [
      { strong: `제작비 $0 · 월 $${PROMO.basic}(베이직) / 월 $${PROMO.premium}(프리미엄)`, rest: " — 제작·도메인·호스팅·유지보수까지 모두 포함" },
      { rest: `업종에 맞춘 디자인과 ${ind.feature}` },
      { rest: "모바일과 PC에서 모두 편하게 볼 수 있는 반응형 웹사이트" },
      { rest: "제작 후에도 사진·글 수정, 기능 점검 등 월 유지보수 포함" },
    ],
    plan: planHint(t, ind),
    closing: [...closing(t), "감사합니다."],
  };
}

// Live client sites (lib/data.ts portfolio, category "실제 고객사").
const PORTFOLIO_LEAD = "참고로 현재 저희가 제작해 운영하고 있는 고객사 웹사이트 중 일부입니다.";
const PORTFOLIO = [
  { name: "SBM Nationwide", desc: "미국 전역 상업 청소·인력파견 업체", url: "https://www.sbmnationwide.com/", label: "sbmnationwide.com" },
  { name: "워싱턴DC 한인탁구협회", desc: "대회 일정·갤러리 한·영 이중언어 사이트", url: "https://www.kttaofdc.org/", label: "kttaofdc.org" },
  { name: "Daniel Math Academy", desc: "버지니아 페어팩스 수학 학원", url: "https://danielmath.com/", label: "danielmath.com" },
];
const PORTFOLIO_URL = `${SITE_URL}/ko/portfolio`;
const PORTFOLIO_MORE = "더 많은 제작 사례는 makepageit.com/ko/portfolio 에서 보실 수 있습니다.";

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

export function renderHtml(c, { postalAddress } = {}) {
  const addr = postalAddress?.trim();
  const P = (s) => `<p style="margin:0 0 12px 0;">${s}</p>`;
  const gap = `<div style="height:14px;line-height:14px;">&nbsp;</div>`;
  const linkify = (s) => esc(s).replace("makepageit.com", `<a href="${SITE_URL}/ko/" style="color:${BRAND_COLOR};text-decoration:none;">makepageit.com</a>`);
  const bullets = c.bullets
    .map((b) => `<li style="margin:0 0 8px 0;">${b.strong ? `<strong>${esc(b.strong)}</strong>` : ""}${esc(b.rest)}</li>`)
    .join("");

  return `<div style="font-family:-apple-system,BlinkMacSystemFont,'Apple SD Gothic Neo','Malgun Gothic','Segoe UI',Arial,sans-serif;font-size:14px;line-height:1.7;color:#1f2937;max-width:680px;">
${P(esc(c.greeting))}${gap}
${c.intro.map((s, i) => P(i === 1 ? linkify(s) : esc(s))).join("\n")}${gap}
${c.industry.map((s) => P(esc(s))).join("\n")}${gap}
${P(esc(c.promoLead))}
<ul style="margin:0 0 12px 0;padding-left:22px;">${bullets}</ul>
${P(esc(c.plan))}${gap}
${P(esc(PORTFOLIO_LEAD))}
<ul style="margin:0 0 12px 0;padding-left:22px;">${PORTFOLIO.map((s) => `<li style="margin:0 0 6px 0;"><strong>${esc(s.name)}</strong> — ${esc(s.desc)} (<a href="${s.url}" style="color:${BRAND_COLOR};text-decoration:none;">${esc(s.label)}</a>)</li>`).join("")}</ul>
${P(esc(PORTFOLIO_MORE).replace("makepageit.com/ko/portfolio", `<a href="${PORTFOLIO_URL}" style="color:${BRAND_COLOR};text-decoration:none;">makepageit.com/ko/portfolio</a>`))}${gap}
${c.closing.map((s) => P(esc(s))).join("\n")}${gap}
<table role="presentation" cellspacing="0" cellpadding="0" border="0"><tr><td style="border-radius:8px;background:${BRAND_COLOR};">
<a href="${CTA_URL}" style="display:inline-block;padding:13px 26px;font-size:15px;font-weight:700;color:#ffffff;text-decoration:none;border-radius:8px;">프로모션 요금 자세히 보기</a>
</td></tr></table>${gap}
<div style="font-size:19px;font-weight:800;letter-spacing:-0.3px;color:#111827;">MAKE<span style="color:${BRAND_COLOR};">PAGE</span>IT</div>
<div style="font-size:11px;letter-spacing:1.5px;color:#6b7280;margin-bottom:8px;">A CLOUDMASTERIT COMPANY</div>
<div style="border-top:2px solid ${BRAND_COLOR};max-width:420px;padding:10px 0 0 14px;">
<div style="font-size:15px;font-weight:700;color:#111827;">Danny Ki</div>
<div style="color:#4b5563;">메이크페이지잇 · 미국 소상공인 웹사이트 제작</div>
<div style="margin-top:4px;"><a href="${SITE_URL}/ko/" style="color:${BRAND_COLOR};text-decoration:none;">makepageit.com</a> · <a href="mailto:admin@makepageit.com" style="color:${BRAND_COLOR};text-decoration:none;">admin@makepageit.com</a> · 205-734-9654</div>
</div>
<div style="margin-top:28px;font-size:11px;line-height:1.6;color:#9ca3af;">
본 메일은 공개된 한인 업소록 정보를 바탕으로 보내드리는 메이크페이지잇의 서비스 안내(광고) 메일입니다. 메일 수신을 원치 않으시면 ‘수신거부’라고 회신해 주세요. 바로 발송 대상에서 제외해 드리겠습니다.<br>
CloudMasterIT LLC${addr ? ` · ${esc(addr)}` : ""}
</div>
</div>`;
}

export function renderText(c, { postalAddress } = {}) {
  const addr = postalAddress?.trim();
  return [
    c.greeting, "",
    ...c.intro, "",
    ...c.industry, "",
    c.promoLead,
    ...c.bullets.map((b) => `• ${b.strong ?? ""}${b.rest}`),
    "", c.plan, "",
    PORTFOLIO_LEAD,
    ...PORTFOLIO.map((s) => `• ${s.name} — ${s.desc} (${s.label})`),
    PORTFOLIO_MORE, "",
    ...c.closing, "",
    `프로모션 요금 자세히 보기: ${CTA_URL}`, "",
    "MAKEPAGEIT — A CLOUDMASTERIT COMPANY",
    "Danny Ki · 메이크페이지잇 · 미국 소상공인 웹사이트 제작",
    "makepageit.com · admin@makepageit.com · 205-734-9654", "",
    "본 메일은 공개된 한인 업소록 정보를 바탕으로 보내드리는 메이크페이지잇의 서비스 안내(광고) 메일입니다. 메일 수신을 원치 않으시면 ‘수신거부’라고 회신해 주세요.",
    `CloudMasterIT LLC${addr ? ` · ${addr}` : ""}`,
  ].join("\n");
}

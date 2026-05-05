export type Lang = "en" | "ko";

export const locales: Lang[] = ["en", "ko"];
export const defaultLocale: Lang = "en";

export function localePath(lang: Lang, path = "/"): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  if (lang === "en") return normalized;
  if (normalized === "/") return "/ko";
  return `/ko${normalized}`;
}

export function detectLangFromPath(pathname: string | null | undefined): Lang {
  if (!pathname) return defaultLocale;
  return pathname === "/ko" || pathname.startsWith("/ko/") ? "ko" : "en";
}

type Dict = {
  nav: {
    home: string;
    portfolio: string;
    pricing: string;
    contact: string;
    services: string;
    reviews: string;
    about: string;
    blog: string;
  };
  cta: {
    quote: string;
    viewPortfolio: string;
    callPhone: (phone: string) => string;
  };
  langSwitch: { label: string; en: string; ko: string };
  hero: {
    titleA: string;
    titleHighlight: string;
    titleB: string;
    titleBrandWord: string;
    titleC: string;
    body: string;
  };
  process: {
    eyebrow: string;
    title: string;
    description: string;
    steps: { n: string; title: string; subtitle: string; body: string; meta: [string, string] }[];
  };
  portfolio: {
    eyebrow: string;
    title: string;
    description: string;
    seeAll: string;
    viewTemplate: string;
    filterAll: string;
    filterCategories: string[];
    nondisclosed: string;
    pageTitle: string;
    pageDescription: string;
  };
  pricing: {
    eyebrow: string;
    title: { line1: string; line2: string };
    description: { line1: string; line2: string };
    yearTotal: string;
    yearAfter: string;
    pageTitle: string;
    pageDescription: string;
    checkoutCta: string;
    checkoutSubmitting: string;
    checkoutError: string;
    customizeTitle: string;
    customizeMonthlyLabel: string;
    customizeMonthlyHint: string;
    customizeHostingLabel: string;
    customizeHostingHint: string;
    customizeDatabaseLabel: string;
    customizeDatabaseHint: string;
    customizeDomainLabel: string;
    customizeDomainHint: string;
    customizeEmailLabel: string;
    customizeEmailHint: string;
    customizeEmailMailboxesLabel: string;
    customizeEmailPerMailbox: (amount: string) => string;
    customizeExtraPageLabel: string;
    customizeExtraPageHint: string;
    customizeExtraPagePagesLabel: string;
    customizeExtraPagePerPage: (amount: string) => string;
    customizeBookingLabel: string;
    customizeBookingHint: string;
    customizePaymentLabel: string;
    customizePaymentHint: string;
    customizeShowOptions: string;
    customizeHideOptions: string;
    todayLabel: string;
    monthlyAfterLabel: (amount: string) => string;
    subscribeCta: (amount: string) => string;
    payOnceCta: (amount: string) => string;
    quoteCta: string;
    successTitle: string;
    successBody: string;
    successHomeCta: string;
    canceledNotice: string;
    compare: {
      title: string;
      eyebrow: string;
      headers: { item: string; lite: string; pro: string };
      rows: { item: string; lite: string; pro: string; isSub?: boolean }[];
    };
  };
  additionalOptions: {
    eyebrow: string;
    title: string;
    description: string;
    badge: string;
    note: string;
    options: { icon: string; title: string; price: string; unit: string; desc: string }[];
  };
  faq: {
    eyebrow: string;
    title: string;
    description: string;
    moreQuestions: { title: string; body: string; cta: string };
  };
  cta_section: {
    eyebrow: string;
    title: { line1: string | string[]; line2: string | string[] };
    body: string | string[];
  };
  reviews: {
    eyebrow: string;
    title: string;
    description: string;
    seeAll: string;
    pageTitle: string;
    pageDescription: string;
    pageHeadingTitle: string;
    pageHeadingDescription: string;
  };
  services: {
    eyebrow: string;
    title: string;
    description: string;
    seeAll: string;
    pageTitle: string;
    pageDescription: string;
    pageHeadingTitle: string;
    pageHeadingDescription: string;
    serviceCta: string;
  };
  logos: { eyebrow: string };
  about: {
    pageTitle: string;
    pageDescription: string;
    headerEyebrow: string;
    headerTitle: string;
    headerDescription: string;
    promiseEyebrow: string;
    promiseTitle: string;
    promiseBody: string;
    valuesTitle: string;
    values: { title: string; body: string }[];
    teamEyebrow: string;
    teamTitle: string;
    teamBody: string;
    team: { name: string; role: string; years: string }[];
    timelineEyebrow: string;
    timelineTitle: string;
    milestones: { y: string; t: string }[];
  };
  contact: {
    pageTitle: string;
    pageDescription: string;
    headerEyebrow: string;
    headerTitle: string;
    headerDescription: string;
    directContactTitle: string;
    directContactBody: string;
    info: { email: string; phone: string };
    recommendedTitle: string;
    recommended: string[];
    form: {
      submitting: string;
      submit: string;
      successTitle: string;
      successBody: (phone: string) => string;
      errorGeneric: string;
      errorRequired: string;
      labels: {
        name: string;
        phone: string;
        email: string;
        industry: string;
        service: string;
        budget: string;
        message: string;
      };
      placeholders: {
        name: string;
        phone: string;
        email: string;
        industry: string;
        message: string;
      };
      selectPrompt: string;
      services: string[];
      budgets: string[];
      consent: string;
    };
  };
  footer: {
    contactHeading: string;
    rights: string;
    privacy: string;
    terms: string;
    phoneLabel: string;
    description: string;
    businessHours: string;
  };
  pricingPlans: {
    eyebrow: string;
    headerTitle: string;
    headerDescription: string;
  };
  legal: {
    privacy: { eyebrow: string; title: string; description: string; pageTitle: string; pageDescription: string };
    terms: { eyebrow: string; title: string; description: string; pageTitle: string; pageDescription: string };
  };
  manage: {
    nav: string;
    pageTitle: string;
    pageDescription: string;
    requestEyebrow: string;
    requestTitle: string;
    requestBody: string;
    emailLabel: string;
    emailPlaceholder: string;
    submitCta: string;
    submitting: string;
    linkSentTitle: string;
    linkSentBody: string;
    requestError: string;
    emailSubject: string;
    emailHeading: string;
    emailIntro: string;
    emailCta: string;
    emailExpiryNote: string;
    emailFooter: string;
    dashboardEyebrow: string;
    dashboardTitle: string;
    dashboardBody: (email: string) => string;
    subscriptionCardTitle: string;
    subscriptionCardBody: string;
    subscriptionCardCta: string;
    subscriptionCardLoading: string;
    domainCardTitle: string;
    domainCardBody: string;
    domainNotePlaceholder: string;
    domainCardCta: string;
    domainSubmitting: string;
    domainSentTitle: string;
    domainSentBody: string;
    portalError: string;
    domainError: string;
    invalidTokenTitle: string;
    invalidTokenBody: string;
    invalidTokenCta: string;
    customerEmailSubject: string;
    customerEmailHeading: string;
    customerEmailIntro: string;
    customerEmailManageNote: string;
    customerEmailManageCta: string;
    customerEmailFooter: string;
    cancelEmailSubject: string;
    cancelEmailHeading: string;
    cancelEmailBody: string;
    domainRequestEmailSubject: (email: string) => string;
    domainRequestEmailHeading: string;
  };
  backToPortfolio: { long: string; short: string };
  notFoundTemplate: string;
  rootMetadata: {
    siteTitle: string;
    description: string;
    keywords: string[];
    locale: string;
  };
};

const en: Dict = {
  nav: {
    home: "Home",
    portfolio: "Work",
    pricing: "Pricing",
    contact: "Contact",
    services: "Services",
    reviews: "Reviews",
    about: "About",
    blog: "Blog",
  },
  cta: {
    quote: "Get a free quote",
    viewPortfolio: "See our work",
    callPhone: (phone) => `Call ${phone}`,
  },
  langSwitch: { label: "Language", en: "English", ko: "한국어" },
  hero: {
    titleA: "You run the business.",
    titleHighlight: "We build",
    titleB: "the website that",
    titleBrandWord: "wins customers.",
    titleC: "",
    body: "Strategy, design, development, and ongoing care from one team. Most sites go live in under two weeks.\nFree 30-minute consult, no pressure.",
  },
  process: {
    eyebrow: "How it works",
    title: "Four clear steps.\nYou always know what's next.",
    description: "We tell you exactly what we'll show you at each meeting and when each payment is due.\nNo surprises.",
    steps: [
      { n: "01", title: "Free consult", subtitle: "30-minute call", body: "We learn your goals and budget, then recommend the right package.", meta: ["30 min", "Free"] },
      { n: "02", title: "Design", subtitle: "Approve as we go", body: "Sitemap, wireframes, and visual designs reviewed step by step.", meta: ["Step-by-step", "You sign off"] },
      { n: "03", title: "Launch", subtitle: "Test → Live", body: "Domain, SSL, and search engine setup are handled end to end.", meta: ["Domain + SSL", "SEO ready"] },
      { n: "04", title: "Ongoing care", subtitle: "Dedicated manager", body: "Content updates, new features, and performance checks every month.", meta: ["Monthly report", "Same-day fixes"] },
    ],
  },
  portfolio: {
    eyebrow: "Our work",
    title: "Find a style you love. We'll build it for you.",
    description: "Browse the work below.\nTell us what catches your eye and we'll tailor the design and features to your business.",
    seeAll: "View all work",
    viewTemplate: "Preview design",
    filterAll: "All",
    filterCategories: ["All", "Brand site", "E-commerce", "Landing page", "Booking", "Portfolio"],
    nondisclosed: "* Only selected projects are shown. NDA work is shared during private consults.",
    pageTitle: "Our Work",
    pageDescription: "Brand sites, online stores, landing pages, booking systems, and portfolios — 320+ live projects from MAKEPAGE.",
  },
  pricing: {
    eyebrow: "Pricing",
    title: { line1: "One-time and monthly costs,", line2: "first-year total on one screen" },
    description: { line1: "Every package includes domain, hosting, basic SEO, SSL, and mobile-responsive design.", line2: "Hosting and database are free for non-commercial personal portfolios." },
    yearTotal: "📊 First-year total",
    yearAfter: "📈 Year 2 onward (annual)",
    pageTitle: "Pricing",
    pageDescription: "Portfolio Lite, Portfolio Pro — MAKEPAGE's transparent packages with one-time and monthly costs in plain view.",
    checkoutCta: "Subscribe & launch",
    checkoutSubmitting: "Redirecting to checkout...",
    checkoutError: "Checkout failed. Please try again or contact us.",
    customizeTitle: "Customize what you pay",
    customizeMonthlyLabel: "Monthly maintenance",
    customizeMonthlyHint: "Skip if you'll handle updates yourself.",
    customizeHostingLabel: "Hosting",
    customizeHostingHint: "Server hosting for your live site.",
    customizeDatabaseLabel: "Database",
    customizeDatabaseHint: "Managed DB for forms, login, and dynamic content.",
    customizeDomainLabel: "Domain",
    customizeDomainHint: "Skip if you already own a domain.",
    customizeEmailLabel: "Microsoft 365 Email Essentials",
    customizeEmailHint: "10GB storage + custom-domain email (you@yourdomain.com).",
    customizeEmailMailboxesLabel: "Mailboxes",
    customizeEmailPerMailbox: (amount) => `${amount} per mailbox`,
    customizeExtraPageLabel: "Extra pages",
    customizeExtraPageHint: "Beyond the pages included in your package.",
    customizeExtraPagePagesLabel: "Pages",
    customizeExtraPagePerPage: (amount) => `${amount} per page`,
    customizeBookingLabel: "Booking integration",
    customizeBookingHint: "Calendar, booking form, and automated reminders.",
    customizePaymentLabel: "Payment integration",
    customizePaymentHint: "Stripe, Square, or any major gateway.",
    customizeShowOptions: "Show options",
    customizeHideOptions: "Hide options",
    todayLabel: "Pay today",
    monthlyAfterLabel: (amount) => `then ${amount}/mo from next month`,
    subscribeCta: (amount) => `Subscribe — ${amount} today`,
    payOnceCta: (amount) => `Pay ${amount}`,
    quoteCta: "Get a quote",
    successTitle: "Payment received — welcome to MAKEPAGE.",
    successBody: "Your subscription is active. Your account manager will reach out within one business day to kick off your build.",
    successHomeCta: "Back to home",
    canceledNotice: "Checkout was canceled. You can try again whenever you're ready.",
    compare: {
      title: "Compare packages side by side",
      eyebrow: "Detailed comparison",
      headers: { item: "Item", lite: "PORTFOLIO LITE", pro: "PORTFOLIO PRO" },
      rows: [
        { item: "Best for", lite: "Personal (non-commercial)", pro: "Freelancers · solopreneurs" },
        { item: "Build cost (one-time)", lite: "$299", pro: "$449" },
        { item: "Hosting + DB + maintenance (monthly)", lite: "$15", pro: "$65" },
        { item: "└ Hosting", lite: "Free (non-commercial)", pro: "$20/mo included", isSub: true },
        { item: "└ Database", lite: "Free (non-commercial)", pro: "$25/mo included", isSub: true },
        { item: "└ Maintenance", lite: "$15/mo included", pro: "$20/mo included", isSub: true },
        { item: "Domain (annual)", lite: "$20", pro: "$20" },
        { item: "First-year total", lite: "$499", pro: "$1,249" },
        { item: "Year 2 onward (annual)", lite: "$200", pro: "$800" },
        { item: "Pages included", lite: "3 pages", pro: "5 pages" },
        { item: "Mobile-responsive", lite: "✓", pro: "✓" },
        { item: "Basic SEO", lite: "✓", pro: "✓" },
        { item: "Login · forum · gallery", lite: "—", pro: "2 included free" },
        { item: "Extra pages", lite: "$50/page", pro: "$50/page" },
      ],
    },
  },
  additionalOptions: {
    eyebrow: "Add-ons",
    title: "Add only what you need.",
    description: "If the base package doesn't quite fit, pick the extras that match your business — nothing more.",
    badge: "Custom options",
    note: "Final pricing is shared after a free consult.",
    options: [
      { icon: "📄", title: "Extra page", price: "$50", unit: "/ page", desc: "Beyond the pages included in your package." },
      { icon: "📅", title: "Booking integration", price: "+$100", unit: "/ one-time", desc: "Calendar, booking form, and automated reminders." },
      { icon: "💳", title: "Payment integration", price: "+$100", unit: "/ one-time", desc: "Stripe, Square, or any major gateway." },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    title: "Common questions, answered.",
    description: "We pulled the most-asked questions here. Anything else? Bring it to your free consult.",
    moreQuestions: { title: "More questions?", body: "Ask anything in a free 30-minute consult. No pressure.", cta: "Book a free consult →" },
  },
  cta_section: {
    eyebrow: "Free consult",
    title: { line1: "Talk today.", line2: "First design next week." },
    body: "Pricing and timeline take 30 minutes on the phone. Tell us about your business — we'll take it from there.",
  },
  reviews: {
    eyebrow: "Client stories",
    title: "Real results, in their words.",
    description: "4.9 / 5 average rating. Owners told us how their business changed.",
    seeAll: "Read all reviews",
    pageTitle: "Reviews",
    pageDescription: "Real stories from MAKEPAGE clients — see how their sales, leads, and operating hours changed.",
    pageHeadingTitle: "Real results, in their words.",
    pageHeadingDescription: "4.9 / 5 satisfaction. 98% repeat or referral. Stories straight from owners.",
  },
  services: {
    eyebrow: "Services",
    title: "The right site for every stage of your business.",
    description: "From a quick landing page to a full e-commerce site — we'll recommend the most efficient build based on 320+ projects.",
    seeAll: "View all services",
    pageTitle: "Services",
    pageDescription: "Brand sites, e-commerce, landing pages, booking & memberships, redesigns, and ongoing operations — six core MAKEPAGE services.",
    pageHeadingTitle: "The right site for every stage of your business.",
    pageHeadingDescription: "From early ideas to a growing customer base — we offer the right tool at the right time.",
    serviceCta: "Inquire about this service",
  },
  logos: { eyebrow: "Trusted by businesses like yours" },
  about: {
    pageTitle: "About",
    pageDescription: "MAKEPAGE is a US-friendly web studio that builds sites that grow small businesses — design, code, and care under one roof.",
    headerEyebrow: "About us",
    headerTitle: "Websites that grow your business — not just look pretty.",
    headerDescription: "MAKEPAGE is part design studio, part marketing partner. We've shipped 320+ first digital storefronts for small business owners.",
    promiseEyebrow: "Our promise",
    promiseTitle: "We respect your time. It's the most expensive thing you have.",
    promiseBody: "You know your business better than anyone. Our job is to translate that into something digital — measured by results, not by deck after deck of mockups.",
    valuesTitle: "What we stand for",
    values: [
      { title: "We save your time", body: "We come to every meeting prepared with options and reasoning, so decisions happen in one sitting." },
      { title: "We're measured by results", body: "Pretty isn't the goal. More inquiries, more sales, more bookings — that's our KPI." },
      { title: "Launch is just the start", body: "We don't disappear after delivery. We stay on as your partner while your business grows." },
      { title: "Transparent pricing, transparent timeline", body: "Packages, schedules, and payment milestones are all written down. No hidden charges, ever." },
    ],
    teamEyebrow: "Team",
    teamTitle: "Strategy, design, and engineering on one team.",
    teamBody: "Agency → freelance designer → freelance dev usually means your vision gets diluted. We keep it all in one Slack, one office, one accountable lead.",
    team: [
      { name: "Daniel K.", role: "Founder · Strategy Lead", years: "12 years" },
      { name: "Sarah P.", role: "Design Lead", years: "9 years" },
      { name: "Mark L.", role: "Frontend Lead", years: "8 years" },
      { name: "Yuna J.", role: "Backend · DevOps", years: "10 years" },
      { name: "Mike C.", role: "Operations Manager", years: "6 years" },
      { name: "Hayley K.", role: "Marketing Manager", years: "5 years" },
    ],
    timelineEyebrow: "Timeline",
    timelineTitle: "How we got here",
    milestones: [
      { y: "2022", t: "MAKEPAGE founded. First five clients." },
      { y: "2023", t: "Crossed 100 sites delivered." },
      { y: "2024", t: "Launched in-house e-commerce and booking solutions." },
      { y: "2025", t: "320+ sites · 4.9 / 5 average satisfaction." },
      { y: "2026", t: "AI-assisted rapid mockup beta open." },
    ],
  },
  contact: {
    pageTitle: "Contact",
    pageDescription: "Request a free quote from MAKEPAGE. Your account manager will respond within one business day.",
    headerEyebrow: "Contact",
    headerTitle: "30 minutes is all we need.",
    headerDescription: "You don't need to know exactly what you want.\nTell us about your business and we'll figure it out together.",
    directContactTitle: "Reach us directly",
    directContactBody: "Prefer not to fill out a form? Email or call us. We respond fastest during business hours.",
    info: { email: "Email", phone: "Phone" },
    recommendedTitle: "Best fit for you if you're",
    recommended: [
      "• Building your first website",
      "• Replacing a site that's looking dated",
      "• Showcasing a portfolio or body of work",
      "• Looking for one team to handle build and ongoing care",
    ],
    form: {
      submitting: "Sending...",
      submit: "Request a free quote →",
      successTitle: "Got it — your request is in.",
      successBody: (phone) => `An account manager will reach out within one business day. Need help sooner? Call ${phone}.`,
      errorGeneric: "Something went wrong. Please try again in a moment.",
      errorRequired: "Some required fields are missing.",
      labels: {
        name: "Name / Company",
        phone: "Phone",
        email: "Email",
        industry: "Industry",
        service: "Project type",
        budget: "Estimated budget",
        message: "Project details",
      },
      placeholders: {
        name: "Jane Doe / Acme Co.",
        phone: "(205) 555-0123",
        email: "hello@example.com",
        industry: "e.g. café, studio, online store",
        message: "Goals, references you like, target launch date — anything is helpful.",
      },
      selectPrompt: "Please select",
      services: [
        "Brand site",
        "E-commerce / online store",
        "Landing page",
        "Redesign / maintenance",
        "Booking / membership",
        "Marketing operations",
        "Not sure yet (let's talk)",
      ],
      budgets: [
        "Under $300",
        "$300 – $500",
        "$500 – $1,000",
        "$1,000 – $2,500",
        "$2,500+",
        "Open / let's discuss",
      ],
      consent:
        "I consent to MAKEPAGE collecting and using the information above (name, phone, email) to respond to my inquiry. Records are kept for up to 1 year after the engagement closes.",
    },
  },
  footer: {
    contactHeading: "Contact",
    rights: "All rights reserved.",
    privacy: "Privacy",
    terms: "Terms",
    phoneLabel: "",
    description: "Strategy, design, development, and care — all in one place. We build websites that help small businesses grow.",
    businessHours: "Mon–Fri, 9:00 AM – 6:00 PM EST",
  },
  pricingPlans: {
    eyebrow: "Pricing",
    headerTitle: "All-inclusive pricing. No surprises.",
    headerDescription:
      "Every package bundles domain, hosting, SEO, SSL, and mobile-responsive design — with one-time and monthly costs side by side. Not sure which to pick? Book a free 20-minute consult.",
  },
  legal: {
    privacy: {
      eyebrow: "Legal",
      title: "Privacy Policy",
      description: "How MAKEPAGE handles your information",
      pageTitle: "Privacy Policy",
      pageDescription: "MAKEPAGE (operated by CloudMasterIT LLC) Privacy Policy.",
    },
    terms: {
      eyebrow: "Legal",
      title: "Terms of Service",
      description: "Terms governing use of MAKEPAGE",
      pageTitle: "Terms of Service",
      pageDescription: "MAKEPAGE (operated by CloudMasterIT LLC) Terms of Service.",
    },
  },
  manage: {
    nav: "Manage subscription",
    pageTitle: "Manage your subscription",
    pageDescription:
      "Cancel your monthly maintenance, update your payment method, view invoices, or request a domain non-renewal.",
    requestEyebrow: "Account",
    requestTitle: "Manage your subscription",
    requestBody:
      "Enter the email you used at checkout. We'll send a secure link valid for 15 minutes that takes you to your billing portal.",
    emailLabel: "Email address",
    emailPlaceholder: "you@example.com",
    submitCta: "Email me a secure link",
    submitting: "Sending...",
    linkSentTitle: "Check your inbox",
    linkSentBody:
      "If we have an account on file with that email, a secure link is on its way. The link expires in 15 minutes.",
    requestError: "We couldn't process that request. Please try again in a moment.",
    emailSubject: "Manage your MAKEPAGE subscription",
    emailHeading: "Manage your subscription",
    emailIntro:
      "Use the secure link below to open your billing portal. From there you can cancel your monthly maintenance, update your card, or download invoices.",
    emailCta: "Open billing portal",
    emailExpiryNote: "This link expires in 15 minutes. If you didn't request it, you can ignore this email.",
    emailFooter: "MAKEPAGE — websites that win customers.",
    dashboardEyebrow: "Account",
    dashboardTitle: "Manage your subscription",
    dashboardBody: (email) => `Signed in as ${email}. Choose what you'd like to do.`,
    subscriptionCardTitle: "Monthly maintenance",
    subscriptionCardBody:
      "Open the secure Stripe billing portal to cancel your monthly subscription, update your payment method, or download invoices.",
    subscriptionCardCta: "Open billing portal",
    subscriptionCardLoading: "Opening portal...",
    domainCardTitle: "Domain renewal",
    domainCardBody:
      "Domain charges are billed once per year and aren't part of your monthly subscription. Submit a non-renewal request and we'll confirm by email and let your domain expire at the end of the current term.",
    domainNotePlaceholder: "Optional note (which domain, why, etc.)",
    domainCardCta: "Request domain non-renewal",
    domainSubmitting: "Submitting...",
    domainSentTitle: "Request received",
    domainSentBody: "Thanks — we'll confirm by email within one business day.",
    portalError: "Couldn't open the billing portal. Please try again or contact support.",
    domainError: "Couldn't submit your request. Please try again or contact support.",
    invalidTokenTitle: "This link is invalid or has expired",
    invalidTokenBody: "Secure links are only valid for 15 minutes. Request a new one to continue.",
    invalidTokenCta: "Request a new link",
    customerEmailSubject: "Your MAKEPAGE order is confirmed",
    customerEmailHeading: "Thanks — your order is confirmed",
    customerEmailIntro:
      "Your account manager will reach out within one business day to kick off your build. Below is a copy of your receipt for your records.",
    customerEmailManageNote:
      "Need to cancel monthly maintenance, update your card, or stop your domain renewal? You can do all of that anytime from your account page.",
    customerEmailManageCta: "Manage my subscription",
    customerEmailFooter:
      "If you didn't make this purchase, please contact us right away at admin@cloudmasterit.com.",
    cancelEmailSubject: "Your MAKEPAGE subscription has been canceled",
    cancelEmailHeading: "Your subscription has been canceled",
    cancelEmailBody:
      "Your monthly maintenance subscription has been canceled. You won't be billed again. If this was a mistake, just reply to this email and we'll get you sorted.",
    domainRequestEmailSubject: (email) => `[MAKEPAGE] Domain non-renewal request — ${email}`,
    domainRequestEmailHeading: "Domain non-renewal request",
  },
  backToPortfolio: { long: "Back to MAKEPAGE work", short: "Back" },
  notFoundTemplate: "Template preview",
  rootMetadata: {
    siteTitle: "Websites that win customers",
    description:
      "MAKEPAGE builds high-performance websites for small businesses and creators. Strategy, design, development, and ongoing care from one US-friendly team.",
    keywords: [
      "small business website",
      "web design",
      "responsive web design",
      "ecommerce website",
      "landing page design",
      "portfolio website",
      "MAKEPAGE",
    ],
    locale: "en_US",
  },
};

const ko: Dict = {
  nav: {
    home: "홈페이지",
    portfolio: "포트폴리오",
    pricing: "가격안내",
    contact: "문의하기",
    services: "서비스",
    reviews: "후기",
    about: "회사소개",
    blog: "블로그",
  },
  cta: {
    quote: "무료 견적받기",
    viewPortfolio: "포트폴리오 보기",
    callPhone: (phone) => `${phone} 전화 상담`,
  },
  langSwitch: { label: "언어", en: "English", ko: "한국어" },
  hero: {
    titleA: "사장님은 ",
    titleHighlight: "사업만",
    titleB: " 하세요.\n홈페이지는 ",
    titleBrandWord: "메이크페이지",
    titleC: "가 만듭니다.",
    body: "기획·디자인·개발·운영을 한 팀에서. 평균 2주 안에 사장님 비즈니스에 꼭 맞는 홈페이지를 오픈해드립니다.\n무료 상담은 언제나 환영입니다.",
  },
  process: {
    eyebrow: "프로세스",
    title: "투명한 4단계,\n어디까지 진행됐는지 항상 보입니다",
    description: "다음 회의 때 무엇을 보여드릴지, 다음 결제는 언제인지 —\n모든 일정이 명확합니다.",
    steps: [
      { n: "01", title: "무료 상담 · 견적", subtitle: "30분 무료 통화", body: "목적·타겟·예산 파악 후 패키지 추천", meta: ["30분", "무료"] },
      { n: "02", title: "기획 · 디자인", subtitle: "단계별 컨펌", body: "사이트맵·와이어프레임·시안 순차 확인", meta: ["단계별 컨펌", "사장님 결정"] },
      { n: "03", title: "검수 · 오픈", subtitle: "테스트 → 정식 오픈", body: "도메인·SSL·검색엔진 등록까지 일괄", meta: ["도메인+SSL", "검색등록"] },
      { n: "04", title: "운영 · 유지보수", subtitle: "전담 매니저 케어", body: "콘텐츠·기능 추가·성능 점검 지원", meta: ["월간 리포트", "당일 대응"] },
    ],
  },
  portfolio: {
    eyebrow: "포트폴리오",
    title: "원하시는 스타일, 그대로 만들어 드립니다.",
    description: "아래 사례 중 마음에 드는 스타일이 있다면 말씀해 주세요.\n비즈니스에 꼭 맞는 디자인과 기능으로 새롭게 구현해 드립니다.",
    seeAll: "전체 포트폴리오",
    viewTemplate: "템플릿 보기 →",
    filterAll: "전체",
    filterCategories: ["전체", "브랜딩 사이트", "쇼핑몰", "랜딩페이지", "예약 시스템", "포트폴리오"],
    nondisclosed: "* 이 페이지에는 일부 사례만 노출되며, 비공개 NDA 프로젝트는 별도 상담 시 안내해드립니다.",
    pageTitle: "포트폴리오",
    pageDescription: "메이크페이지가 제작한 브랜드 사이트, 쇼핑몰, 랜딩페이지, 예약 시스템 등 320여 건의 실제 사례.",
  },
  pricing: {
    eyebrow: "가격 안내",
    title: { line1: "일회성 비용과 월 구독료,", line2: "1년 총비용까지 한눈에" },
    description: {
      line1: "모든 패키지는 도메인·호스팅·기본 SEO·SSL·모바일 반응형을 포함합니다.",
      line2: "비상업 개인은 호스팅·DB가 무료입니다.",
    },
    yearTotal: "📊 1년 총 예상비용",
    yearAfter: "📈 2년차부터 매년 예상비용",
    pageTitle: "가격안내",
    pageDescription: "Portfolio Lite, Portfolio Pro, Business Starter — 메이크페이지의 투명한 번들. 일회성 비용과 월 구독 모두 한눈에.",
    checkoutCta: "지금 결제하고 시작하기",
    checkoutSubmitting: "결제창으로 이동 중...",
    checkoutError: "결제 시작에 실패했습니다. 잠시 후 다시 시도해주세요.",
    customizeTitle: "결제 항목 선택",
    customizeMonthlyLabel: "월 유지보수",
    customizeMonthlyHint: "직접 운영하실 거면 체크 해제하세요.",
    customizeHostingLabel: "호스팅",
    customizeHostingHint: "운영 중인 사이트의 서버 호스팅 비용.",
    customizeDatabaseLabel: "데이터베이스",
    customizeDatabaseHint: "폼·로그인·동적 콘텐츠용 관리형 DB.",
    customizeDomainLabel: "도메인",
    customizeDomainHint: "이미 도메인이 있으시면 체크 해제하세요.",
    customizeEmailLabel: "Microsoft 365 Email Essentials",
    customizeEmailHint: "10GB 저장공간 + 도메인 이메일 (you@yourdomain.com).",
    customizeEmailMailboxesLabel: "메일박스 수",
    customizeEmailPerMailbox: (amount) => `메일박스당 ${amount}`,
    customizeExtraPageLabel: "추가 페이지",
    customizeExtraPageHint: "패키지 기본 페이지 외 추가 제작.",
    customizeExtraPagePagesLabel: "페이지 수",
    customizeExtraPagePerPage: (amount) => `페이지당 ${amount}`,
    customizeBookingLabel: "예약 시스템 연동",
    customizeBookingHint: "캘린더 · 예약 폼 · 자동 리마인더.",
    customizePaymentLabel: "결제 시스템 연동",
    customizePaymentHint: "Stripe, Square 등 주요 결제 게이트웨이.",
    customizeShowOptions: "옵션 펼치기",
    customizeHideOptions: "옵션 접기",
    todayLabel: "오늘 결제",
    monthlyAfterLabel: (amount) => `다음 달부터 매월 ${amount}`,
    subscribeCta: (amount) => `${amount} 결제하고 구독 시작`,
    payOnceCta: (amount) => `${amount} 결제하기`,
    quoteCta: "견적 문의하기",
    successTitle: "결제가 완료되었습니다.",
    successBody: "구독이 활성화되었습니다. 영업일 기준 24시간 이내 담당 매니저가 제작 시작을 위해 연락드립니다.",
    successHomeCta: "홈으로 돌아가기",
    canceledNotice: "결제가 취소되었습니다. 언제든 다시 시도해주세요.",
    compare: {
      title: "패키지 한눈에 비교하기",
      eyebrow: "상세 비교",
      headers: { item: "항목", lite: "PORTFOLIO LITE", pro: "PORTFOLIO PRO" },
      rows: [
        { item: "추천 대상", lite: "비상업 개인", pro: "프리랜서·강사" },
        { item: "홈페이지 제작비용 (일회성)", lite: "$299", pro: "$449" },
        { item: "호스팅 + DB + 유지보수 (월비용)", lite: "$15", pro: "$65" },
        { item: "└ 호스팅", lite: "무료 (비상업용)", pro: "$20/월 포함", isSub: true },
        { item: "└ 데이터베이스", lite: "무료 (비상업용)", pro: "$25/월 포함", isSub: true },
        { item: "└ 유지보수", lite: "$15/월 포함", pro: "$20/월 포함", isSub: true },
        { item: "연 도메인", lite: "$20", pro: "$20" },
        { item: "1년 총 예상비용", lite: "$499", pro: "$1,249" },
        { item: "2년차부터 매년 예상비용", lite: "$200", pro: "$800" },
        { item: "페이지 수", lite: "3페이지", pro: "5페이지" },
        { item: "모바일 반응형", lite: "✓", pro: "✓" },
        { item: "기본 SEO", lite: "✓", pro: "✓" },
        { item: "로그인·게시판·사진첩", lite: "—", pro: "2개 무료 추가" },
        { item: "추가 페이지", lite: "$50/페이지", pro: "$50/페이지" },
      ],
    },
  },
  additionalOptions: {
    eyebrow: "추가 옵션",
    title: "필요한 만큼만 더하세요",
    description: "기본 패키지로 부족하다면, 사업에 꼭 필요한 기능만 골라 추가할 수 있어요.",
    badge: "맞춤 옵션",
    note: "정확한 견적은 무료 상담 후 안내해드려요.",
    options: [
      { icon: "📄", title: "추가 페이지", price: "$50", unit: "/ 페이지", desc: "기본 패키지에 포함된 페이지 외 추가 시" },
      { icon: "📅", title: "예약 시스템 연동", price: "+$100", unit: "/ 일회성", desc: "캘린더·예약 폼·자동 알림 연동" },
      { icon: "💳", title: "결제 시스템 연동", price: "+$100", unit: "/ 일회성", desc: "Stripe·Toss 등 결제 게이트웨이 연동" },
    ],
  },
  faq: {
    eyebrow: "자주 묻는 질문",
    title: "궁금하신 점, 미리 답해드릴게요",
    description: "가장 많이 받은 질문을 모았어요. 더 자세한 내용은 무료 상담에서 알려드려요.",
    moreQuestions: {
      title: "더 궁금한 점이 있나요?",
      body: "30분 무료 상담으로 부담 없이 물어보세요.",
      cta: "무료 상담 신청 →",
    },
  },
  cta_section: {
    eyebrow: "무료 상담",
    title: {
      line1: ["오늘 상담,", "다음 주에 첫 시안."],
      line2: "지금 시작하세요.",
    },
    body: [
      "견적과 일정은 30분 통화로 충분합니다.",
      "부담 없이 문의 남겨주세요.",
    ],
  },
  reviews: {
    eyebrow: "제작 후기",
    title: "결과로 증명합니다",
    description: "설문 평균 4.9 / 5. 사장님들이 직접 들려주신 이야기.",
    seeAll: "모든 후기 보기",
    pageTitle: "제작 후기",
    pageDescription: "메이크페이지와 함께한 사장님들의 진짜 이야기. 매출·문의·운영시간이 어떻게 달라졌는지 확인해보세요.",
    pageHeadingTitle: "결과로 증명합니다.",
    pageHeadingDescription: "만족도 4.9 / 5, 재의뢰율 98%. 사장님들이 직접 들려주신 이야기.",
  },
  services: {
    eyebrow: "서비스",
    title: "사장님 사업의 단계마다, 필요한 사이트를 만듭니다",
    description: "작은 랜딩페이지부터 쇼핑몰까지. 320개 사이트를 만들며 쌓은 경험으로 가장 효율적인 구조를 제안합니다.",
    seeAll: "전체 서비스 보기",
    pageTitle: "서비스",
    pageDescription: "브랜딩 사이트, 쇼핑몰, 랜딩페이지, 예약·멤버십, 리뉴얼·유지보수, 마케팅 운영까지 — 메이크페이지의 6가지 핵심 서비스.",
    pageHeadingTitle: "사장님 사업의 단계마다, 필요한 사이트를 만듭니다.",
    pageHeadingDescription: "아이디어만 있는 단계부터, 매출이 자라고 있는 단계까지. 그때그때 가장 적합한 도구를 제공합니다.",
    serviceCta: "이 서비스 문의하기",
  },
  logos: { eyebrow: "이런 사장님들이 메이크페이지를 선택했습니다" },
  about: {
    pageTitle: "회사소개",
    pageDescription: "메이크페이지는 사장님의 사업이 빛나는 홈페이지를 만드는 한국형 웹 에이전시입니다.",
    headerEyebrow: "회사 소개",
    headerTitle: "홈페이지가 사업을 키우는 도구가 되도록.",
    headerDescription: "메이크페이지는 디자인 회사이자 마케팅 파트너입니다. 320개 사장님의 첫 디지털 매장을 함께 만들었습니다.",
    promiseEyebrow: "우리의 약속",
    promiseTitle: "사장님의 시간이 가장 비싸다는 걸 압니다",
    promiseBody:
      "사장님은 자신의 사업을 가장 잘 아는 사람입니다. 우리는 그 지식을 디지털로 옮기는 역할을 합니다. 회의가 아니라 결과로, 시안이 아니라 매출로 증명합니다.",
    valuesTitle: "우리가 지키는 것",
    values: [
      { title: "사장님 시간을 아낍니다", body: "한 번의 미팅에서 결정되도록 충분히 준비합니다. 의사결정에 필요한 옵션과 근거를 미리 정리해드려요." },
      { title: "결과로 증명합니다", body: "예쁜 사이트가 아니라 매출과 문의가 늘어나는 사이트를 만드는 것이 우리 KPI입니다." },
      { title: "오픈 후가 진짜 시작", body: "납품으로 끝나는 작업이 아니라, 사장님 사업이 자라는 동안 함께하는 파트너가 되겠습니다." },
      { title: "투명한 가격, 투명한 일정", body: "패키지·일정·결제 시점이 모두 명문화됩니다. '추가 비용 청구'는 없습니다." },
    ],
    teamEyebrow: "팀",
    teamTitle: "기획·디자인·개발이 한 팀입니다",
    teamBody:
      "'대행사 → 외주 디자이너 → 외주 개발자'로 흩어지면 사장님 의도가 깨집니다. 우리는 한 사무실, 한 슬랙, 한 책임자에서 끝까지 갑니다.",
    team: [
      { name: "김지훈", role: "대표 / 기획 디렉터", years: "12년차" },
      { name: "박서연", role: "디자인 리드", years: "9년차" },
      { name: "이도현", role: "프론트엔드 리드", years: "8년차" },
      { name: "정유진", role: "백엔드 / DevOps", years: "10년차" },
      { name: "최민호", role: "운영 매니저", years: "6년차" },
      { name: "강하영", role: "마케팅 매니저", years: "5년차" },
    ],
    timelineEyebrow: "발자취",
    timelineTitle: "우리가 걸어온 길",
    milestones: [
      { y: "2022", t: "메이크페이지 설립, 첫 고객 5팀" },
      { y: "2023", t: "누적 100개 사이트 제작 돌파" },
      { y: "2024", t: "쇼핑몰·예약 시스템 자체 솔루션 런칭" },
      { y: "2025", t: "누적 320개 · 만족도 4.9 / 5 달성" },
      { y: "2026", t: "AI 기반 빠른 시안 베타 오픈" },
    ],
  },
  contact: {
    pageTitle: "문의하기",
    pageDescription: "메이크페이지에 무료 견적을 요청하세요. 영업일 기준 24시간 이내 담당 매니저가 답변드립니다.",
    headerEyebrow: "문의하기",
    headerTitle: "30분 통화면 충분합니다.",
    headerDescription: "아직 무엇을 만들지 정해지지 않으셔도 괜찮습니다.\n사장님 사업 이야기를 들려주시면 함께 정리해드립니다.",
    directContactTitle: "바로 연락하기",
    directContactBody: "폼을 작성하기 어려우시면 아래로 직접 연락 주세요. 평일 영업시간 내 가장 빠르게 답변드립니다.",
    info: { email: "이메일", phone: "대표전화" },
    recommendedTitle: "이런 분께 추천드립니다",
    recommended: [
      "• 처음 사이트를 만드시는 사장님",
      "• 기존 사이트가 오래되어 리뉴얼이 필요한 경우",
      "• 포트폴리오·작품을 깔끔하게 보여주고 싶은 경우",
      "• 운영까지 한 팀에 맡기고 싶은 경우",
    ],
    form: {
      submitting: "접수 중...",
      submit: "무료 견적 요청하기 →",
      successTitle: "문의가 접수되었습니다",
      successBody: (phone) =>
        `영업일 기준 24시간 이내에 담당 매니저가 연락드립니다. 급하신 경우 ${phone}로 전화 주세요.`,
      errorGeneric: "전송 중 오류가 발생했습니다.",
      errorRequired: "필수 항목이 누락되었습니다.",
      labels: {
        name: "이름 / 회사",
        phone: "연락 가능한 번호",
        email: "이메일",
        industry: "업종",
        service: "문의 유형",
        budget: "예상 예산",
        message: "요청사항",
      },
      placeholders: {
        name: "홍길동 / 메이크페이지",
        phone: "010-0000-0000",
        email: "hello@example.com",
        industry: "예: 카페, 학원, 쇼핑몰",
        message: "만들고자 하는 사이트의 목적, 참고 사이트, 일정 등을 자유롭게 적어주세요.",
      },
      selectPrompt: "선택해주세요",
      services: [
        "브랜딩 사이트",
        "쇼핑몰 / 커머스",
        "랜딩페이지",
        "리뉴얼 / 유지보수",
        "예약 / 멤버십",
        "마케팅 운영",
        "잘 모르겠어요 (상담 필요)",
      ],
      budgets: ["$300 미만", "$300 – $500", "$500 – $1,000", "$1,000 – $2,500", "$2,500 이상", "협의 가능"],
      consent:
        "개인정보 수집·이용에 동의합니다. (수집 항목: 이름, 연락처, 이메일 / 보유기간: 상담 종료 후 1년)",
    },
  },
  footer: {
    contactHeading: "연락처",
    rights: "All rights reserved.",
    privacy: "개인정보처리방침",
    terms: "이용약관",
    phoneLabel: "대표 ",
    description: "기획부터 디자인, 개발, 운영까지. 사장님의 사업이 빛나도록 홈페이지를 만들어드립니다.",
    businessHours: "평일 10:00 – 19:00 (점심 12:30 – 13:30)",
  },
  pricingPlans: {
    eyebrow: "가격 안내",
    headerTitle: "모두 포함된 가격. 숨겨진 비용 없음.",
    headerDescription:
      "도메인·호스팅·SEO·SSL·모바일 반응형까지 전부 포함. 일회성 비용과 월 구독을 한 화면에서 비교하세요. 어떤 패키지가 맞는지 모르겠다면 20분 무료 상담을 신청해주세요.",
  },
  legal: {
    privacy: {
      eyebrow: "법적 고지",
      title: "개인정보처리방침",
      description: "Privacy Policy",
      pageTitle: "개인정보처리방침",
      pageDescription: "메이크페이지(운영: CloudMasterIT LLC) 개인정보처리방침",
    },
    terms: {
      eyebrow: "법적 고지",
      title: "이용약관",
      description: "Terms of Service",
      pageTitle: "이용약관",
      pageDescription: "메이크페이지(운영: CloudMasterIT LLC) 이용약관",
    },
  },
  manage: {
    nav: "구독 관리",
    pageTitle: "구독 관리",
    pageDescription:
      "월 유지보수 취소, 결제 수단 변경, 인보이스 조회, 도메인 갱신 거절 요청을 한 곳에서.",
    requestEyebrow: "내 계정",
    requestTitle: "내 구독 관리하기",
    requestBody:
      "결제 시 사용하신 이메일을 입력해주세요. 15분간 유효한 안전 링크를 보내드립니다. 링크를 누르시면 결제 관리 페이지로 이동합니다.",
    emailLabel: "이메일 주소",
    emailPlaceholder: "you@example.com",
    submitCta: "안전 링크 받기",
    submitting: "전송 중...",
    linkSentTitle: "메일함을 확인해주세요",
    linkSentBody:
      "해당 이메일로 가입된 결제 내역이 있다면 안전 링크가 발송됩니다. 링크는 15분 후 만료됩니다.",
    requestError: "요청을 처리하지 못했습니다. 잠시 후 다시 시도해주세요.",
    emailSubject: "메이크페이지 구독 관리",
    emailHeading: "구독 관리",
    emailIntro:
      "아래 안전 링크를 통해 결제 관리 페이지로 이동하실 수 있습니다. 월 유지보수 취소, 카드 정보 변경, 인보이스 다운로드 모두 가능합니다.",
    emailCta: "결제 관리 페이지 열기",
    emailExpiryNote: "이 링크는 15분 후 만료됩니다. 본인이 요청하지 않으셨다면 무시하셔도 됩니다.",
    emailFooter: "메이크페이지 — 사장님 사업이 빛나는 홈페이지.",
    dashboardEyebrow: "내 계정",
    dashboardTitle: "구독 관리",
    dashboardBody: (email) => `${email} 계정으로 인증되었습니다. 원하시는 작업을 선택해주세요.`,
    subscriptionCardTitle: "월 유지보수",
    subscriptionCardBody:
      "Stripe 결제 관리 페이지에서 월 구독을 취소하거나, 결제 수단을 변경하거나, 인보이스를 다운로드할 수 있습니다.",
    subscriptionCardCta: "결제 관리 페이지 열기",
    subscriptionCardLoading: "이동 중...",
    domainCardTitle: "도메인 갱신",
    domainCardBody:
      "도메인은 1년에 한 번 결제되는 항목으로 월 구독에 포함되지 않습니다. 갱신을 원치 않으시면 아래로 요청해주세요. 영업일 1일 이내에 메일로 확인드리고, 현재 기간 종료 시 도메인을 만료시켜드립니다.",
    domainNotePlaceholder: "메모 (어떤 도메인인지, 사유 등 — 선택)",
    domainCardCta: "도메인 갱신 거절 요청",
    domainSubmitting: "전송 중...",
    domainSentTitle: "요청이 접수되었습니다",
    domainSentBody: "감사합니다. 영업일 기준 1일 이내에 메일로 확인드립니다.",
    portalError: "결제 관리 페이지를 열지 못했습니다. 다시 시도해주시거나 고객센터로 문의해주세요.",
    domainError: "요청을 전송하지 못했습니다. 다시 시도해주시거나 고객센터로 문의해주세요.",
    invalidTokenTitle: "유효하지 않거나 만료된 링크입니다",
    invalidTokenBody: "안전 링크는 15분간만 유효합니다. 새 링크를 받아 다시 시도해주세요.",
    invalidTokenCta: "새 링크 받기",
    customerEmailSubject: "메이크페이지 결제가 완료되었습니다",
    customerEmailHeading: "결제가 완료되었습니다",
    customerEmailIntro:
      "영업일 기준 24시간 이내 담당 매니저가 제작 시작을 위해 연락드립니다. 영수증을 아래에 첨부하니 보관용으로 사용해주세요.",
    customerEmailManageNote:
      "월 유지보수 취소, 결제 수단 변경, 도메인 갱신 거절이 필요하실 때는 언제든 내 계정 페이지에서 처리하실 수 있습니다.",
    customerEmailManageCta: "내 구독 관리하기",
    customerEmailFooter:
      "본인이 결제하지 않으셨다면 즉시 admin@cloudmasterit.com 으로 연락 주세요.",
    cancelEmailSubject: "메이크페이지 구독이 취소되었습니다",
    cancelEmailHeading: "구독이 취소되었습니다",
    cancelEmailBody:
      "월 유지보수 구독이 취소되었습니다. 더 이상 결제되지 않습니다. 실수로 취소하셨다면 이 메일에 답장해주세요.",
    domainRequestEmailSubject: (email) => `[MAKEPAGE] 도메인 갱신 거절 요청 — ${email}`,
    domainRequestEmailHeading: "도메인 갱신 거절 요청",
  },
  backToPortfolio: { long: "메이크페이지 포트폴리오로 돌아가기", short: "돌아가기" },
  notFoundTemplate: "포트폴리오 템플릿",
  rootMetadata: {
    siteTitle: "사업의 첫인상, 메이크페이지가 만듭니다.",
    description:
      "기획부터 디자인, 개발, 운영까지. 사장님의 사업이 빛나도록 홈페이지를 만들어드립니다.",
    keywords: [
      "홈페이지 제작",
      "홈페이지 제작 회사",
      "반응형 웹 디자인",
      "쇼핑몰 제작",
      "랜딩페이지 제작",
      "웹사이트 제작",
      "메이크페이지",
    ],
    locale: "ko_KR",
  },
};

const dictionaries: Record<Lang, Dict> = { en, ko };

export function getDict(lang: Lang): Dict {
  return dictionaries[lang];
}

export type { Dict };

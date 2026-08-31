import Link from "next/link";
import { localePath, type Lang } from "@/lib/i18n";

const copy = {
  en: {
    nav: ["Work", "Practice", "Press", "Contact"],
    inquireCta: "Inquire",
    eyebrow: "Contact",
    title: "Let's build something.",
    intro: "Tell us about the site, the timeline, and the budget. We reply to every inquiry within two business days.",
    officesTitle: "Offices",
    formTitle: "Send an inquiry",
    labels: { name: "Name", email: "Email", project: "Project type", message: "Message" },
    placeholders: { name: "Jane Doe", email: "you@example.com", message: "Tell us about the site — location, size, timeline." },
    projectTypes: ["Residential", "Civic / Public", "Interior", "Other"],
    submit: "Send inquiry",
    footer: {
      offices: [
        { label: "New York Office", lines: ["67 Mott Street, 3F, NY 10013", "+1 (212) 555-0099"] },
        { label: "Los Angeles Office", lines: ["188 Beverly Blvd, LA 90048", "+1 (213) 555-0099"] },
        { label: "Inquiries", lines: ["studio@arco-atelier.com"] },
      ],
      copyright: "© 2025 ARCO ATELIER — All works are copyright of the firm.",
    },
  },
  ko: {
    nav: ["Work", "Practice", "Press", "Contact"],
    inquireCta: "Inquire",
    eyebrow: "Contact",
    title: "함께 만들어봅시다.",
    intro: "사이트, 일정, 예산에 대해 알려주세요. 영업일 기준 2일 이내에 모든 문의에 답변드립니다.",
    officesTitle: "Offices",
    formTitle: "문의 보내기",
    labels: { name: "이름", email: "이메일", project: "프로젝트 유형", message: "문의 내용" },
    placeholders: { name: "홍길동", email: "you@example.com", message: "대지 위치, 규모, 일정 등을 자유롭게 적어주세요." },
    projectTypes: ["주거", "공공/시빅", "인테리어", "기타"],
    submit: "문의 보내기",
    footer: {
      offices: [
        { label: "Seoul Office", lines: ["서울 종로구 자하문로 67, 3F", "+82 2 555 0099"] },
        { label: "Daegu Office", lines: ["대구 중구 동덕로 188", "+82 53 555 0099"] },
        { label: "Inquiries", lines: ["studio@arco.kr"] },
      ],
      copyright: "© 2025 ARCO ATELIER — All works are copyright of the firm.",
    },
  },
} as const;

export default function ArcoAtelierContact({ lang }: { lang: Lang }) {
  const t = copy[lang];
  const home = localePath(lang, "/portfolio/arco-atelier");
  const workPath = localePath(lang, "/portfolio/arco-atelier/work");
  const practicePath = localePath(lang, "/portfolio/arco-atelier/practice");
  const pressPath = localePath(lang, "/portfolio/arco-atelier/press");
  const contactPath = localePath(lang, "/portfolio/arco-atelier/contact");
  const navPaths = [workPath, practicePath, pressPath, contactPath];

  return (
    <div className="min-h-screen bg-[#ededed] text-black">
      <header className="border-b-2 border-black bg-[#ededed]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link href={home} className="text-2xl font-black tracking-tighter">ARCO/</Link>
          <nav className="hidden gap-10 text-xs font-bold uppercase tracking-widest md:flex">
            {t.nav.map((n, i) =>
              navPaths[i] === contactPath ? (
                <Link key={n} href={navPaths[i]} className="underline underline-offset-4">{n}</Link>
              ) : (
                <Link key={n} href={navPaths[i]}>{n}</Link>
              )
            )}
          </nav>
          <Link href={contactPath} className="border-2 border-black bg-black px-4 py-2 text-xs font-bold uppercase tracking-widest text-[#ededed]">
            {t.inquireCta}
          </Link>
        </div>
      </header>

      <section className="border-b-2 border-black">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <p className="text-xs font-bold uppercase tracking-[0.4em]">{t.eyebrow}</p>
          <h1 className="mt-6 max-w-4xl text-4xl font-black leading-[0.95] tracking-tight md:text-7xl break-keep text-balance">
            {t.title}
          </h1>
          <p className="mt-8 max-w-2xl text-base leading-relaxed md:text-lg break-keep text-pretty">{t.intro}</p>
        </div>
      </section>

      <section className="border-b-2 border-black">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-20 md:grid-cols-2">
          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.4em]">{t.officesTitle}</h2>
            <div className="mt-8 space-y-8">
              {t.footer.offices.map((o) => (
                <div key={o.label} className="border-t-2 border-black pt-4">
                  <p className="text-sm font-bold uppercase tracking-widest">{o.label}</p>
                  {o.lines.map((line, i) => (
                    <p key={i} className={i === 0 ? "mt-2 text-black/60 break-keep text-pretty" : "text-black/60 break-keep text-pretty"}>{line}</p>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.4em]">{t.formTitle}</h2>
            <form className="mt-8 space-y-6">
              <div>
                <label className="text-xs font-bold uppercase tracking-widest text-black/50">{t.labels.name}</label>
                <input
                  type="text"
                  placeholder={t.placeholders.name}
                  className="mt-2 w-full border-b-2 border-black bg-transparent py-2 text-base outline-none placeholder:text-black/30"
                />
              </div>
              <div>
                <label className="text-xs font-bold uppercase tracking-widest text-black/50">{t.labels.email}</label>
                <input
                  type="email"
                  placeholder={t.placeholders.email}
                  className="mt-2 w-full border-b-2 border-black bg-transparent py-2 text-base outline-none placeholder:text-black/30"
                />
              </div>
              <div>
                <label className="text-xs font-bold uppercase tracking-widest text-black/50">{t.labels.project}</label>
                <select className="mt-2 w-full border-b-2 border-black bg-transparent py-2 text-base outline-none">
                  {t.projectTypes.map((p) => (
                    <option key={p}>{p}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-xs font-bold uppercase tracking-widest text-black/50">{t.labels.message}</label>
                <textarea
                  rows={4}
                  placeholder={t.placeholders.message}
                  className="mt-2 w-full border-b-2 border-black bg-transparent py-2 text-base outline-none placeholder:text-black/30"
                />
              </div>
              <button
                type="submit"
                className="w-full border-2 border-black bg-black py-3 text-xs font-bold uppercase tracking-[0.3em] text-[#ededed]"
              >
                {t.submit}
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="bg-[#ededed]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-10">
          <Link href={home} className="text-3xl font-black tracking-tighter">ARCO/</Link>
        </div>
        <div className="border-t-2 border-black px-6 py-4 text-center font-mono text-[11px] break-keep text-pretty">
          {t.footer.copyright}
        </div>
      </footer>
    </div>
  );
}

import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "문의하기",
  description:
    "메이크페이지에 무료 견적을 요청하세요. 영업일 기준 24시간 이내 담당 매니저가 답변드립니다.",
};

const contactInfo = [
  { label: "이메일", value: site.email, href: `mailto:${site.email}` },
  { label: "대표전화", value: site.phone, href: `tel:${site.phone}` },
  { label: "운영시간", value: site.businessHours },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="문의하기"
        title="30분 통화면 충분합니다."
        description="아직 무엇을 만들지 정해지지 않으셔도 괜찮습니다. 사장님 사업 이야기를 들려주시면 함께 정리해드립니다."
      />

      <section className="section">
        <div className="container-custom grid gap-12 lg:grid-cols-[1fr_1.5fr]">
          <aside className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-ink-900">바로 연락하기</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-500">
                폼을 작성하기 어려우시면 아래로 직접 연락 주세요. 평일 영업시간 내 가장
                빠르게 답변드립니다.
              </p>
            </div>

            <ul className="divide-y divide-ink-200 rounded-3xl border border-ink-200 bg-white">
              {contactInfo.map((c) => (
                <li key={c.label} className="px-6 py-4">
                  <p className="text-xs font-semibold uppercase tracking-widest text-ink-400">
                    {c.label}
                  </p>
                  {c.href ? (
                    <a
                      href={c.href}
                      className="mt-1 block text-base font-bold text-ink-900 hover:text-brand-600"
                    >
                      {c.value}
                    </a>
                  ) : (
                    <p className="mt-1 text-base font-bold text-ink-900">
                      {c.value}
                    </p>
                  )}
                </li>
              ))}
            </ul>

            <div className="rounded-3xl bg-ink-900 p-6 text-white">
              <p className="text-sm font-semibold uppercase tracking-widest text-accent-400">
                이런 분께 추천드립니다
              </p>
              <ul className="mt-4 space-y-2 text-sm text-ink-200">
                <li>• 처음 사이트를 만드시는 사장님</li>
                <li>• 기존 사이트가 오래되어 리뉴얼이 필요한 경우</li>
                <li>• 포트폴리오·작품을 깔끔하게 보여주고 싶은 경우</li>
                <li>• 운영까지 한 팀에 맡기고 싶은 경우</li>
              </ul>
            </div>
          </aside>

          <ContactForm />
        </div>
      </section>
    </>
  );
}

import PageHeader from "@/components/PageHeader";
import { site } from "@/lib/site";
import { getDict, type Lang } from "@/lib/i18n";

export default function TermsView({ lang }: { lang: Lang }) {
  const dict = getDict(lang).legal.terms;
  return (
    <>
      <PageHeader eyebrow={dict.eyebrow} title={dict.title} description={dict.description} />
      <section className="section">
        <div className="container-custom max-w-3xl">
          {lang === "en" ? <TermsEn /> : <TermsKo />}
        </div>
      </section>
    </>
  );
}

function TermsEn() {
  return (
    <article lang="en" className="text-ink-700">
      <p className="text-sm text-ink-500">
        {site.legal.operatorNoteEn} These Terms of Service govern your use of all services provided by{" "}
        {site.legal.brand} (the &ldquo;Company&rdquo;) and set out the rights, obligations, and responsibilities of the
        Company and its users.
      </p>

      <h2 className="mt-12 text-2xl font-bold text-ink-900">Article 1. Purpose</h2>
      <p className="mt-3 leading-relaxed">
        These Terms govern the use of website production, operation, and related services (the &ldquo;Services&rdquo;)
        provided by the Company, and define the rights, obligations, and responsibilities of the Company and its
        users.
      </p>

      <h2 className="mt-12 text-2xl font-bold text-ink-900">Article 2. Definitions</h2>
      <ul className="mt-3 list-disc pl-5 leading-relaxed">
        <li>
          &ldquo;Company&rdquo; refers to the {site.legal.brand} service operated by {site.legal.operator}.
        </li>
        <li>&ldquo;Services&rdquo; means the website production, operation, and related services provided by the Company.</li>
        <li>
          &ldquo;User&rdquo; means an individual or legal entity that enters into a service agreement with the Company or uses
          the Services.
        </li>
      </ul>

      <h2 className="mt-12 text-2xl font-bold text-ink-900">Article 3. Posting and Amendment of Terms</h2>
      <p className="mt-3 leading-relaxed">
        The Company posts these Terms in a manner that is easily accessible to users. The Company may amend these Terms
        within the scope permitted by applicable law; any amendment will be announced on this page along with its
        effective date and content. Amended Terms take effect upon posting.
      </p>

      <h2 className="mt-12 text-2xl font-bold text-ink-900">Article 4. Provision of Services</h2>
      <ul className="mt-3 list-disc pl-5 leading-relaxed">
        <li>Website planning, design, and development</li>
        <li>Maintenance, operations support, and hosting integration</li>
        <li>Marketing pages, landing pages, and online stores</li>
        <li>Other ancillary services as defined by the Company</li>
      </ul>

      <h2 className="mt-12 text-2xl font-bold text-ink-900">Article 5. Application and Formation of Contract</h2>
      <p className="mt-3 leading-relaxed">
        A service contract is formed when a user submits an application in accordance with the Company&rsquo;s
        procedures and the Company accepts it. The specific scope of work, schedule, and payment terms are governed by
        the individual quotation or written agreement.
      </p>

      <h2 className="mt-12 text-2xl font-bold text-ink-900">Article 6. Payment and Refunds</h2>
      <p className="mt-3 leading-relaxed">
        Payment methods, timing, and refund conditions are set out in the individual quotation or written agreement.
        Where work has partially progressed, refunds may be reduced by an amount commensurate with the work completed.
      </p>

      <h2 className="mt-12 text-2xl font-bold text-ink-900">Article 7. Obligations of the Company</h2>
      <p className="mt-3 leading-relaxed">
        The Company complies with these Terms and applicable law and uses reasonable efforts to provide stable and
        continuous Services. The Company protects users&rsquo; personal information in accordance with its Privacy
        Policy.
      </p>

      <h2 className="mt-12 text-2xl font-bold text-ink-900">Article 8. Obligations of Users</h2>
      <ul className="mt-3 list-disc pl-5 leading-relaxed">
        <li>Provide accurate information when applying for or modifying a service.</li>
        <li>Do not submit materials that infringe third-party rights (copyright, trademark, publicity, etc.).</li>
        <li>Do not resell or transfer the Services for profit without the Company&rsquo;s prior consent.</li>
        <li>Comply with applicable law, these Terms, and the Company&rsquo;s reasonable instructions.</li>
      </ul>

      <h2 className="mt-12 text-2xl font-bold text-ink-900">Article 9. Intellectual Property</h2>
      <p className="mt-3 leading-relaxed">
        Content posted on this website (text, images, designs, etc.) is owned by the Company or its lawful rights
        holders. Ownership of deliverables provided to users is governed by the individual contract; absent specific
        terms, the agreed usage rights transfer to the user upon full payment.
      </p>

      <h2 className="mt-12 text-2xl font-bold text-ink-900">Article 10. Disclaimer</h2>
      <p className="mt-3 leading-relaxed">
        The Company is not liable for failure to provide Services due to causes beyond its reasonable control, including
        acts of God, war, communication failures, incidents at hosting or payment providers, or causes attributable to
        the user.
      </p>

      <h2 className="mt-12 text-2xl font-bold text-ink-900">Article 11. Dispute Resolution</h2>
      <p className="mt-3 leading-relaxed">
        In the event of a dispute, the parties shall first seek to resolve the matter through good-faith negotiation.
        The governing law and venue for any unresolved dispute are as set forth in the individual contract; absent
        specific terms, applicable law shall govern.
      </p>

      <h2 className="mt-12 text-2xl font-bold text-ink-900">Article 12. Contact</h2>
      <ul className="mt-3 leading-relaxed">
        <li>Operator: {site.legal.operator} (operator of {site.legal.brand})</li>
        <li>
          Email:{" "}
          <a href={`mailto:${site.legal.contactEmail}`} className="text-brand-600 hover:underline">
            {site.legal.contactEmail}
          </a>
        </li>
      </ul>

      <p className="mt-12 text-sm text-ink-500 leading-relaxed">These Terms take effect upon posting.</p>
    </article>
  );
}

function TermsKo() {
  return (
    <article lang="ko" className="text-ink-700">
      <p className="text-sm text-ink-500">
        {site.legal.operatorNote} 본 약관은 {site.legal.brandKo}(이하 &ldquo;회사&rdquo;)가 제공하는 모든 서비스의 이용
        조건과 절차, 회사와 이용자의 권리·의무 및 책임 사항을 규정합니다.
      </p>

      <h2 className="mt-12 text-2xl font-bold text-ink-900 break-keep">제1조 (목적)</h2>
      <p className="mt-3 leading-relaxed break-keep">
        본 약관은 회사가 제공하는 홈페이지 제작·운영 및 관련 부가 서비스(이하 &ldquo;서비스&rdquo;)의 이용과 관련하여 회사와
        이용자 간의 권리·의무 및 책임 사항, 기타 필요한 사항을 규정함을 목적으로 합니다.
      </p>

      <h2 className="mt-12 text-2xl font-bold text-ink-900 break-keep">제2조 (정의)</h2>
      <ul className="mt-3 list-disc pl-5 leading-relaxed break-keep">
        <li>
          &ldquo;회사&rdquo;란 {site.legal.operator}이(가) 운영하는 {site.legal.brandKo} 서비스를 의미합니다.
        </li>
        <li>&ldquo;서비스&rdquo;란 회사가 제공하는 홈페이지 제작·운영 및 관련 부가 서비스를 의미합니다.</li>
        <li>
          &ldquo;이용자&rdquo;란 본 약관에 따라 회사와 서비스 이용 계약을 체결하거나 회사의 서비스를 이용하는 개인 또는
          법인을 의미합니다.
        </li>
      </ul>

      <h2 className="mt-12 text-2xl font-bold text-ink-900 break-keep">제3조 (약관의 게시와 개정)</h2>
      <p className="mt-3 leading-relaxed break-keep">
        회사는 본 약관의 내용을 이용자가 쉽게 알 수 있도록 서비스 화면에 게시합니다. 회사는 관련 법령에 위배되지 않는
        범위에서 본 약관을 개정할 수 있으며, 개정 시 적용 일자 및 개정 내용을 본 페이지를 통해 공지합니다. 개정 약관은
        게시일로부터 효력이 발생합니다.
      </p>

      <h2 className="mt-12 text-2xl font-bold text-ink-900 break-keep">제4조 (서비스의 제공)</h2>
      <ul className="mt-3 list-disc pl-5 leading-relaxed break-keep">
        <li>홈페이지 기획·디자인·개발</li>
        <li>유지보수, 운영 대행, 호스팅 연계</li>
        <li>마케팅 페이지·랜딩페이지·쇼핑몰 제작</li>
        <li>기타 회사가 정하는 부가 서비스</li>
      </ul>

      <h2 className="mt-12 text-2xl font-bold text-ink-900 break-keep">제5조 (이용 신청 및 계약 체결)</h2>
      <p className="mt-3 leading-relaxed break-keep">
        서비스 이용 계약은 이용자가 회사가 정한 절차에 따라 이용 신청을 하고, 회사가 이를 승낙함으로써 성립합니다. 구체적인
        작업 범위, 일정, 결제 조건 등은 개별 견적서 또는 계약서에 따릅니다.
      </p>

      <h2 className="mt-12 text-2xl font-bold text-ink-900 break-keep">제6조 (결제 및 환불)</h2>
      <p className="mt-3 leading-relaxed break-keep">
        서비스 대금의 결제 방법, 시점, 환불 조건은 개별 견적서 또는 계약서에 명시된 바에 따릅니다. 작업이 일부 진행된 후
        환불이 요청되는 경우, 진행된 범위에 상응하는 금액을 차감한 후 잔액이 환불될 수 있습니다.
      </p>

      <h2 className="mt-12 text-2xl font-bold text-ink-900 break-keep">제7조 (회사의 의무)</h2>
      <p className="mt-3 leading-relaxed break-keep">
        회사는 본 약관 및 관련 법령을 준수하며, 이용자에게 안정적이고 지속적인 서비스를 제공하기 위해 최선을 다합니다.
        또한 이용자의 개인정보를 개인정보처리방침에 따라 보호합니다.
      </p>

      <h2 className="mt-12 text-2xl font-bold text-ink-900 break-keep">제8조 (이용자의 의무)</h2>
      <ul className="mt-3 list-disc pl-5 leading-relaxed break-keep">
        <li>이용 신청 또는 변경 시 정확한 정보를 제공하여야 합니다.</li>
        <li>제3자의 권리(저작권, 상표권, 초상권 등)를 침해하는 자료를 제공해서는 안 됩니다.</li>
        <li>회사의 사전 동의 없이 서비스를 영리 목적으로 재판매하거나 양도할 수 없습니다.</li>
        <li>관련 법령, 본 약관, 회사의 정당한 안내사항을 준수하여야 합니다.</li>
      </ul>

      <h2 className="mt-12 text-2xl font-bold text-ink-900 break-keep">제9조 (저작권 및 산출물의 권리)</h2>
      <p className="mt-3 leading-relaxed break-keep">
        본 사이트에 게재된 콘텐츠(텍스트, 이미지, 디자인 등)에 대한 저작권은 회사 또는 정당한 권리자에게 귀속됩니다.
        이용자에게 납품되는 산출물의 권리 귀속은 개별 계약서에서 정한 바에 따릅니다. 별도 정함이 없는 경우, 잔금 완납 시점에
        약정된 사용 권리가 이용자에게 이전됩니다.
      </p>

      <h2 className="mt-12 text-2xl font-bold text-ink-900 break-keep">제10조 (면책)</h2>
      <p className="mt-3 leading-relaxed break-keep">
        회사는 천재지변, 전쟁, 통신 장애, 호스팅·결제 등 외부 위탁사 사고, 이용자 귀책사유 등 회사의 합리적 통제 범위를
        벗어나는 사유로 인하여 서비스를 제공할 수 없는 경우 그에 대한 책임을 지지 않습니다.
      </p>

      <h2 className="mt-12 text-2xl font-bold text-ink-900 break-keep">제11조 (분쟁 해결)</h2>
      <p className="mt-3 leading-relaxed break-keep">
        본 약관과 관련하여 회사와 이용자 사이에 분쟁이 발생한 경우, 양 당사자는 상호 협의를 통하여 해결하도록 노력합니다.
        협의가 이루어지지 않을 경우의 관할법원 및 준거법은 개별 계약서에서 정한 바에 따르며, 별도 정함이 없는 경우 관계
        법령에 따릅니다.
      </p>

      <h2 className="mt-12 text-2xl font-bold text-ink-900 break-keep">제12조 (문의)</h2>
      <ul className="mt-3 leading-relaxed break-keep">
        <li>운영 주체: {site.legal.operator} (운영 서비스: {site.legal.brand})</li>
        <li>
          이메일:{" "}
          <a href={`mailto:${site.legal.contactEmail}`} className="text-brand-600 hover:underline">
            {site.legal.contactEmail}
          </a>
        </li>
      </ul>

      <p className="mt-12 text-sm text-ink-500 leading-relaxed break-keep">본 약관은 게시일로부터 효력이 발생합니다.</p>
    </article>
  );
}

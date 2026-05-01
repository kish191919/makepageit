import PageHeader from "@/components/PageHeader";
import { site } from "@/lib/site";
import { getDict, type Lang } from "@/lib/i18n";

export default function PrivacyView({ lang }: { lang: Lang }) {
  const dict = getDict(lang).legal.privacy;
  return (
    <>
      <PageHeader eyebrow={dict.eyebrow} title={dict.title} description={dict.description} />
      <section className="section">
        <div className="container-custom max-w-3xl">
          {lang === "en" ? <PrivacyEn /> : <PrivacyKo />}
        </div>
      </section>
    </>
  );
}

function PrivacyEn() {
  return (
    <article lang="en" className="text-ink-700">
      <p className="text-sm text-ink-500">
        {site.legal.operatorNoteEn} This Privacy Policy applies to all services provided by{" "}
        {site.legal.brand} (the &ldquo;Company&rdquo;).
      </p>

      <h2 className="mt-12 text-2xl font-bold text-ink-900">1. Purpose of Processing</h2>
      <p className="mt-3 leading-relaxed">
        The Company processes personal information for the following purposes. Personal information will not be used
        for any purpose other than those listed below, and prior consent will be obtained if the purpose changes.
      </p>
      <ul className="mt-3 list-disc pl-5 leading-relaxed">
        <li>Receiving inquiries and consultations for website production</li>
        <li>Contract execution, quotation, payment, and settlement</li>
        <li>Service delivery, maintenance, technical support, and customer service</li>
        <li>Notices and service-related communications</li>
        <li>Action on violations of applicable law or terms of service</li>
      </ul>

      <h2 className="mt-12 text-2xl font-bold text-ink-900">2. Categories of Personal Information</h2>
      <ul className="mt-3 list-disc pl-5 leading-relaxed">
        <li>Required: name (or contact person), phone number, email, company name</li>
        <li>Optional: job title, industry, project details, reference materials</li>
        <li>
          Payment: payment method information (handled via payment processor; the Company does not separately store this
          data)
        </li>
        <li>Automatically collected: service usage logs, IP address, cookies, browser and device information</li>
      </ul>

      <h2 className="mt-12 text-2xl font-bold text-ink-900">3. Retention and Use Period</h2>
      <p className="mt-3 leading-relaxed">
        The Company destroys personal information without delay once the purpose of processing has been fulfilled.
        Where retention is required by applicable law, records are kept for the period required by such law (typically
        3–5 years for transaction records).
      </p>

      <h2 className="mt-12 text-2xl font-bold text-ink-900">4. Third-Party Disclosure</h2>
      <p className="mt-3 leading-relaxed">
        The Company does not disclose personal information to third parties, except where the data subject has given
        prior consent or where required by law.
      </p>

      <h2 className="mt-12 text-2xl font-bold text-ink-900">5. Processors</h2>
      <p className="mt-3 leading-relaxed">
        The Company may engage external processors for payment processing, hosting, email delivery, and similar
        functions. The names and scopes of such processors will be disclosed on this page or via separate notice at the
        time of engagement.
      </p>

      <h2 className="mt-12 text-2xl font-bold text-ink-900">6. Your Rights</h2>
      <p className="mt-3 leading-relaxed">
        You may at any time request access to, correction of, deletion of, or suspension of processing of your personal
        information by contacting us at the address below. Requests will be addressed without undue delay.
      </p>

      <h2 className="mt-12 text-2xl font-bold text-ink-900">7. Cookies</h2>
      <p className="mt-3 leading-relaxed">
        The Company may use cookies to improve service quality. You may refuse or delete cookies through your browser
        settings; certain features may be limited as a result.
      </p>

      <h2 className="mt-12 text-2xl font-bold text-ink-900">8. Security Measures</h2>
      <ul className="mt-3 list-disc pl-5 leading-relaxed">
        <li>Minimizing personnel with access to personal information</li>
        <li>Encryption of sensitive information at rest and in transit</li>
        <li>Retention of access logs and prevention of tampering</li>
        <li>Installation and regular review of security software</li>
      </ul>

      <h2 className="mt-12 text-2xl font-bold text-ink-900">9. Contact</h2>
      <p className="mt-3 leading-relaxed">
        For questions, complaints, or remediation requests regarding the handling of personal information, please contact:
      </p>
      <ul className="mt-3 leading-relaxed">
        <li>
          Operator: {site.legal.operator} (operator of {site.legal.brand})
        </li>
        <li>
          Email:{" "}
          <a href={`mailto:${site.legal.contactEmail}`} className="text-brand-600 hover:underline">
            {site.legal.contactEmail}
          </a>
        </li>
      </ul>

      <h2 className="mt-12 text-2xl font-bold text-ink-900">10. Changes to This Policy</h2>
      <p className="mt-3 leading-relaxed">
        This Privacy Policy takes effect upon posting. Any additions, deletions, or modifications will be announced on
        this page.
      </p>
    </article>
  );
}

function PrivacyKo() {
  return (
    <article lang="ko" className="text-ink-700">
      <p className="text-sm text-ink-500">
        {site.legal.operatorNote} 본 방침은 {site.legal.brandKo}(이하 &ldquo;회사&rdquo;)가 제공하는 모든 서비스에
        적용됩니다.
      </p>

      <h2 className="mt-12 text-2xl font-bold text-ink-900 break-keep">1. 개인정보의 처리 목적</h2>
      <p className="mt-3 leading-relaxed break-keep">
        회사는 다음의 목적을 위하여 개인정보를 처리합니다. 처리하는 개인정보는 아래 목적 이외의 용도로는 이용되지 않으며,
        이용 목적이 변경되는 경우에는 사전에 동의를 구합니다.
      </p>
      <ul className="mt-3 list-disc pl-5 leading-relaxed break-keep">
        <li>홈페이지 제작·운영 의뢰 접수 및 상담</li>
        <li>계약 체결, 견적 발송, 결제 및 정산</li>
        <li>서비스 제공, 유지보수, 기술 지원, 고객 응대</li>
        <li>공지사항 안내, 서비스 이용 관련 알림</li>
        <li>관계 법령 및 이용약관 위반 행위에 대한 조치</li>
      </ul>

      <h2 className="mt-12 text-2xl font-bold text-ink-900 break-keep">2. 처리하는 개인정보 항목</h2>
      <ul className="mt-3 list-disc pl-5 leading-relaxed break-keep">
        <li>필수: 이름(또는 담당자명), 연락처(전화번호), 이메일, 회사명/사업자명</li>
        <li>선택: 직책, 업종, 의뢰 내용, 참고 자료</li>
        <li>결제 시: 결제 수단 정보(결제대행사를 통해 처리, 회사는 별도 저장하지 않음)</li>
        <li>자동 수집: 서비스 이용 기록, 접속 IP, 쿠키, 브라우저/디바이스 정보</li>
      </ul>

      <h2 className="mt-12 text-2xl font-bold text-ink-900 break-keep">3. 보유 및 이용 기간</h2>
      <ul className="mt-3 list-disc pl-5 leading-relaxed break-keep">
        <li>계약 또는 청약철회 등에 관한 기록: 5년 (전자상거래법)</li>
        <li>대금결제 및 재화 등의 공급에 관한 기록: 5년 (전자상거래법)</li>
        <li>소비자의 불만 또는 분쟁처리에 관한 기록: 3년 (전자상거래법)</li>
        <li>웹사이트 방문 기록: 3개월 (통신비밀보호법)</li>
      </ul>

      <h2 className="mt-12 text-2xl font-bold text-ink-900 break-keep">4. 제3자 제공</h2>
      <p className="mt-3 leading-relaxed break-keep">
        회사는 정보주체의 개인정보를 원칙적으로 외부에 제공하지 않습니다. 다만, 정보주체가 사전에 동의하거나 법령에 의해
        요구되는 경우 등 예외적인 경우에 한하여 제공합니다.
      </p>

      <h2 className="mt-12 text-2xl font-bold text-ink-900 break-keep">5. 처리 위탁</h2>
      <p className="mt-3 leading-relaxed break-keep">
        회사는 원활한 서비스 제공을 위하여 결제대행, 호스팅, 이메일 발송 등 일부 업무를 외부 전문 업체에 위탁할 수
        있습니다. 위탁 시점에 위탁 업체와 위탁 업무 내용을 본 페이지 또는 별도 고지를 통해 안내합니다.
      </p>

      <h2 className="mt-12 text-2xl font-bold text-ink-900 break-keep">6. 정보주체의 권리</h2>
      <p className="mt-3 leading-relaxed break-keep">
        정보주체는 언제든지 자신의 개인정보에 대한 열람, 정정, 삭제, 처리정지를 요구할 수 있습니다. 요청은 아래 문의처로
        보내주시면 지체 없이 조치합니다.
      </p>

      <h2 className="mt-12 text-2xl font-bold text-ink-900 break-keep">7. 쿠키의 운영</h2>
      <p className="mt-3 leading-relaxed break-keep">
        회사는 서비스 품질 향상을 위해 쿠키를 사용할 수 있습니다. 이용자는 브라우저 설정을 통해 쿠키 저장을 거부하거나
        삭제할 수 있으며, 이 경우 일부 서비스 이용에 제한이 있을 수 있습니다.
      </p>

      <h2 className="mt-12 text-2xl font-bold text-ink-900 break-keep">8. 안전성 확보 조치</h2>
      <ul className="mt-3 list-disc pl-5 leading-relaxed break-keep">
        <li>개인정보 처리 직원의 최소화 및 접근 권한 통제</li>
        <li>중요 정보의 암호화 저장 및 전송</li>
        <li>접속 기록의 보관 및 위·변조 방지</li>
        <li>보안 프로그램 설치 및 주기적 점검</li>
      </ul>

      <h2 className="mt-12 text-2xl font-bold text-ink-900 break-keep">9. 문의처</h2>
      <ul className="mt-3 leading-relaxed break-keep">
        <li>운영 주체: {site.legal.operator} (운영 서비스: {site.legal.brand})</li>
        <li>
          이메일:{" "}
          <a href={`mailto:${site.legal.contactEmail}`} className="text-brand-600 hover:underline">
            {site.legal.contactEmail}
          </a>
        </li>
      </ul>

      <h2 className="mt-12 text-2xl font-bold text-ink-900 break-keep">10. 방침의 변경</h2>
      <p className="mt-3 leading-relaxed break-keep">
        본 개인정보처리방침은 게시일로부터 효력이 발생합니다. 내용의 추가, 삭제 및 수정이 있을 경우에는 변경사항을 본
        페이지를 통하여 공지합니다.
      </p>
    </article>
  );
}

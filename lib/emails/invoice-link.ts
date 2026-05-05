import { escapeHtml, formatAmount } from "@/lib/email-helpers";
import type { Lang } from "@/lib/i18n";
import type { LineItemInput } from "@/lib/admin-stripe";

type Strings = {
  subject: string;
  heading: string;
  intro: string;
  cta: string;
  footer: string;
  totalLabel: string;
  cadenceLabels: { month: string; year: string };
};

const strings: Record<Lang, Strings> = {
  en: {
    subject: "Your MAKEPAGE invoice is ready",
    heading: "Complete your subscription",
    intro:
      "Below is the recurring quote we prepared for you. Click the button to start your subscription securely on Stripe — your card won't be charged until you confirm.",
    cta: "Review and subscribe",
    footer:
      "Questions? Just reply to this email — your account manager will get back within one business day.",
    totalLabel: "Today's total",
    cadenceLabels: { month: "Billed monthly", year: "Billed yearly" },
  },
  ko: {
    subject: "메이크페이지 인보이스가 도착했습니다",
    heading: "구독을 시작해 주세요",
    intro:
      "사장님께 준비해 드린 정기 결제 견적입니다. 아래 버튼을 누르시면 Stripe 결제 페이지로 안전하게 이동합니다. 결제를 직접 확인하시기 전까지는 카드에서 출금되지 않습니다.",
    cta: "확인하고 구독 시작하기",
    footer: "문의는 이 메일에 답장 주시면 영업일 1일 이내 담당 매니저가 답변드립니다.",
    totalLabel: "오늘 결제 금액",
    cadenceLabels: { month: "매월 청구", year: "매년 청구" },
  },
};

export type InvoiceLinkEmailInput = {
  lang: Lang;
  url: string;
  lineItems: LineItemInput[];
  interval: "month" | "year";
  currency: string;
  memo?: string;
};

export function renderInvoiceLinkEmail(input: InvoiceLinkEmailInput): {
  subject: string;
  html: string;
} {
  const t = strings[input.lang];
  const totalCents = input.lineItems.reduce(
    (sum, item) => sum + item.unitAmount * item.quantity,
    0
  );

  const rows = input.lineItems
    .map(
      (item) => `
      <tr>
        <td style="padding: 8px 0; color: #111827;">${escapeHtml(item.description)} × ${item.quantity}</td>
        <td style="padding: 8px 0; color: #111827; text-align: right; font-variant-numeric: tabular-nums;">
          ${escapeHtml(formatAmount(item.unitAmount * item.quantity, input.currency))}
        </td>
      </tr>`
    )
    .join("");

  const memoBlock = input.memo
    ? `<p style="color: #4b5563; line-height: 1.6; margin: 0 0 16px; padding: 12px 14px; background: #f9fafb; border-radius: 6px; white-space: pre-wrap;">${escapeHtml(input.memo)}</p>`
    : "";

  const html = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 560px; margin: 0 auto; padding: 32px 24px;">
      <h2 style="color: #111827; margin: 0 0 16px;">${escapeHtml(t.heading)}</h2>
      <p style="color: #374151; line-height: 1.6; margin: 0 0 16px;">${escapeHtml(t.intro)}</p>
      ${memoBlock}
      <table style="width: 100%; border-collapse: collapse; margin: 16px 0; border-top: 1px solid #e5e7eb;">
        ${rows}
        <tr style="border-top: 2px solid #111827;">
          <td style="padding: 12px 0; color: #111827; font-weight: 600;">${escapeHtml(t.totalLabel)} (${escapeHtml(t.cadenceLabels[input.interval])})</td>
          <td style="padding: 12px 0; color: #111827; font-weight: 700; text-align: right; font-variant-numeric: tabular-nums;">
            ${escapeHtml(formatAmount(totalCents, input.currency))}
          </td>
        </tr>
      </table>
      <p style="margin: 24px 0;">
        <a href="${escapeHtml(input.url)}" style="display: inline-block; background: #111827; color: #fff; text-decoration: none; padding: 12px 22px; border-radius: 9999px; font-weight: 600;">
          ${escapeHtml(t.cta)}
        </a>
      </p>
      <p style="color: #9ca3af; font-size: 12px; border-top: 1px solid #e5e7eb; padding-top: 16px; line-height: 1.6;">${escapeHtml(t.footer)}</p>
    </div>
  `;

  return { subject: t.subject, html };
}

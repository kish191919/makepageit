import { escapeHtml, formatAmount } from "@/lib/email-helpers";
import type { Lang } from "@/lib/i18n";
import type { QuoteCadences } from "@/lib/quote-token";

type Strings = {
  subject: string;
  heading: string;
  intro: string;
  optionsLabel: string;
  cta: string;
  footer: string;
  cadenceLabels: { one_time: string; monthly: string; yearly: string };
};

const strings: Record<Lang, Strings> = {
  en: {
    subject: "Your MAKEPAGE quote is ready",
    heading: "Your quote is ready",
    intro:
      "Below are the items in your quote. Open the link to choose your preferred payment option — one-time, monthly, or yearly.",
    optionsLabel: "Available payment options",
    cta: "View quote and pay",
    footer:
      "Questions? Just reply to this email — your account manager will get back within one business day.",
    cadenceLabels: {
      one_time: "One-time",
      monthly: "Monthly",
      yearly: "Yearly",
    },
  },
  ko: {
    subject: "메이크페이지 견적서가 준비되었습니다",
    heading: "견적서를 확인해 주세요",
    intro:
      "아래 견적서를 준비해 드렸습니다. 링크를 열어 일회성·매월·매년 중 원하시는 결제 방식을 직접 선택하실 수 있습니다.",
    optionsLabel: "선택 가능한 결제 옵션",
    cta: "견적서 보고 결제하기",
    footer: "문의는 이 메일에 답장 주시면 영업일 1일 이내 담당 매니저가 답변드립니다.",
    cadenceLabels: {
      one_time: "한 번에 결제",
      monthly: "매월 결제",
      yearly: "매년 결제",
    },
  },
};

export type QuoteLinkEmailInput = {
  lang: Lang;
  url: string;
  lineItems: { description: string }[];
  cadences: QuoteCadences;
  currency: string;
  memo?: string;
};

export function renderQuoteLinkEmail(input: QuoteLinkEmailInput): {
  subject: string;
  html: string;
} {
  const t = strings[input.lang];

  const itemRows = input.lineItems
    .map(
      (item) => `
      <tr>
        <td style="padding: 8px 0; color: #111827;">• ${escapeHtml(item.description)}</td>
      </tr>`
    )
    .join("");

  const cadenceRows: string[] = [];
  if (input.cadences.one_time) {
    cadenceRows.push(
      `<tr>
        <td style="padding: 6px 0; color: #4b5563;">${escapeHtml(t.cadenceLabels.one_time)}</td>
        <td style="padding: 6px 0; color: #111827; text-align: right; font-variant-numeric: tabular-nums; font-weight: 600;">
          ${escapeHtml(formatAmount(input.cadences.one_time.totalCents, input.currency))}
        </td>
      </tr>`
    );
  }
  if (input.cadences.monthly) {
    cadenceRows.push(
      `<tr>
        <td style="padding: 6px 0; color: #4b5563;">${escapeHtml(t.cadenceLabels.monthly)}</td>
        <td style="padding: 6px 0; color: #111827; text-align: right; font-variant-numeric: tabular-nums; font-weight: 600;">
          ${escapeHtml(formatAmount(input.cadences.monthly.totalCents, input.currency))} / mo
        </td>
      </tr>`
    );
  }
  if (input.cadences.yearly) {
    cadenceRows.push(
      `<tr>
        <td style="padding: 6px 0; color: #4b5563;">${escapeHtml(t.cadenceLabels.yearly)}</td>
        <td style="padding: 6px 0; color: #111827; text-align: right; font-variant-numeric: tabular-nums; font-weight: 600;">
          ${escapeHtml(formatAmount(input.cadences.yearly.totalCents, input.currency))} / yr
        </td>
      </tr>`
    );
  }

  const memoBlock = input.memo
    ? `<p style="color: #4b5563; line-height: 1.6; margin: 0 0 16px; padding: 12px 14px; background: #f9fafb; border-radius: 6px; white-space: pre-wrap;">${escapeHtml(input.memo)}</p>`
    : "";

  const html = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 560px; margin: 0 auto; padding: 32px 24px;">
      <h2 style="color: #111827; margin: 0 0 16px;">${escapeHtml(t.heading)}</h2>
      <p style="color: #374151; line-height: 1.6; margin: 0 0 16px;">${escapeHtml(t.intro)}</p>
      ${memoBlock}
      <table style="width: 100%; border-collapse: collapse; margin: 16px 0; border-top: 1px solid #e5e7eb; border-bottom: 1px solid #e5e7eb;">
        ${itemRows}
      </table>
      <p style="color: #6b7280; font-size: 13px; margin: 24px 0 8px;">${escapeHtml(t.optionsLabel)}</p>
      <table style="width: 100%; border-collapse: collapse; margin: 0 0 24px;">
        ${cadenceRows.join("")}
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

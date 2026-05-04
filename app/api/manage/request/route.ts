import { NextResponse } from "next/server";
import { Resend } from "resend";
import { getStripe, getSiteUrl } from "@/lib/stripe";
import { signToken } from "@/lib/manage-token";
import { getDict } from "@/lib/i18n";

export const runtime = "nodejs";

const FROM = "MAKEPAGE <noreply@makepageit.com>";

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => ({}));
    const rawEmail = typeof body?.email === "string" ? body.email.trim() : "";
    const lang = body?.lang === "ko" ? "ko" : "en";

    if (!rawEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(rawEmail)) {
      return NextResponse.json({ ok: true });
    }

    const email = rawEmail.toLowerCase();

    const stripe = getStripe();
    const customers = await stripe.customers.list({ email, limit: 1 });
    if (customers.data.length === 0) {
      return NextResponse.json({ ok: true });
    }

    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not set; cannot send manage link");
      return NextResponse.json({ ok: true });
    }

    const dict = getDict(lang);
    const token = signToken(email);
    const accessPath = lang === "ko" ? "/ko/manage/access" : "/manage/access";
    const link = `${getSiteUrl()}${accessPath}?token=${encodeURIComponent(token)}`;

    const html = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 560px; margin: 0 auto; padding: 32px 24px;">
        <h2 style="color: #111827; margin: 0 0 16px;">${escape(dict.manage.emailHeading)}</h2>
        <p style="color: #374151; line-height: 1.6; margin: 0 0 24px;">${escape(dict.manage.emailIntro)}</p>
        <p style="margin: 32px 0;">
          <a href="${escape(link)}" style="display: inline-block; background: #111827; color: #fff; text-decoration: none; padding: 14px 24px; border-radius: 9999px; font-weight: 600;">
            ${escape(dict.manage.emailCta)}
          </a>
        </p>
        <p style="color: #6b7280; font-size: 13px; line-height: 1.6; margin: 0 0 8px;">${escape(dict.manage.emailExpiryNote)}</p>
        <p style="color: #9ca3af; font-size: 12px; margin-top: 32px; border-top: 1px solid #e5e7eb; padding-top: 16px;">${escape(dict.manage.emailFooter)}</p>
      </div>
    `;

    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: FROM,
      to: email,
      subject: dict.manage.emailSubject,
      html,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Manage request error:", err);
    return NextResponse.json({ ok: true });
  }
}

function escape(str: string) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

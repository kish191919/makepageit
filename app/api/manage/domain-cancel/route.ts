import { NextResponse } from "next/server";
import { Resend } from "resend";
import { verifyToken } from "@/lib/manage-token";
import { getDict } from "@/lib/i18n";

export const runtime = "nodejs";

const FROM = "MAKEPAGE <noreply@makepageit.com>";
const TO = process.env.CONTACT_TO_EMAIL ?? "admin@cloudmasterit.com";

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => ({}));
    const lang = body?.lang === "ko" ? "ko" : "en";
    const isEn = lang === "en";

    const verified = verifyToken(body?.token);
    if (!verified) {
      return NextResponse.json(
        { error: isEn ? "Invalid or expired link." : "유효하지 않거나 만료된 링크입니다." },
        { status: 401 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not set; cannot send domain-cancel notice");
      return NextResponse.json({ error: "Email not configured" }, { status: 500 });
    }

    const dict = getDict(lang);
    const note = typeof body?.note === "string" ? body.note.slice(0, 2000) : "";

    const html = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; padding: 24px;">
        <h2 style="color: #111827; border-bottom: 2px solid #ef4444; padding-bottom: 12px; margin: 0 0 16px;">
          ${escape(dict.manage.domainRequestEmailHeading)}
        </h2>
        <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
          <tr><td style="padding: 8px 0; color: #6b7280; width: 140px;">Customer email</td><td style="padding: 8px 0; color: #111827;"><a href="mailto:${escape(verified.email)}">${escape(verified.email)}</a></td></tr>
          <tr><td style="padding: 8px 0; color: #6b7280;">Locale</td><td style="padding: 8px 0; color: #111827;">${escape(lang)}</td></tr>
          <tr><td style="padding: 8px 0; color: #6b7280;">Submitted</td><td style="padding: 8px 0; color: #111827;">${escape(new Date().toISOString())}</td></tr>
        </table>
        ${
          note
            ? `<div style="margin-top: 24px; padding: 16px; background: #f9fafb; border-radius: 8px;">
                 <div style="color: #6b7280; font-size: 14px; margin-bottom: 8px;">Note</div>
                 <div style="color: #111827; white-space: pre-wrap;">${escape(note)}</div>
               </div>`
            : ""
        }
        <p style="margin-top: 24px; color: #6b7280; font-size: 13px;">
          Action: confirm by email and let the domain expire at the end of the current term.
        </p>
      </div>
    `;

    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: FROM,
      to: TO,
      replyTo: verified.email,
      subject: dict.manage.domainRequestEmailSubject(verified.email),
      html,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Domain-cancel error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
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

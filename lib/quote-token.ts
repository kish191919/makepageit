import { createHmac, timingSafeEqual } from "crypto";

const TOKEN_TTL_SECONDS = 30 * 24 * 60 * 60;

export type Cadence = "one_time" | "monthly" | "yearly";

export type QuoteCadences = {
  one_time?: { totalCents: number; daysUntilDue: number };
  monthly?: { totalCents: number };
  yearly?: { totalCents: number };
};

export type QuoteLineItem = { description: string; cadence?: Cadence };

export type QuotePayload = {
  customerId: string;
  lang: "en" | "ko";
  currency: string;
  lineItems: QuoteLineItem[];
  cadences: QuoteCadences;
  memo?: string;
};

export type VerifiedQuote = QuotePayload & { exp: number };

function getSecret(): string {
  const secret = process.env.QUOTE_TOKEN_SECRET;
  if (!secret || secret.length < 32) {
    throw new Error("QUOTE_TOKEN_SECRET must be set to a string of at least 32 characters");
  }
  return secret;
}

function b64urlEncode(input: Buffer | string): string {
  const buf = typeof input === "string" ? Buffer.from(input, "utf8") : input;
  return buf.toString("base64").replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function b64urlDecode(input: string): Buffer {
  const padded = input.replace(/-/g, "+").replace(/_/g, "/");
  const padding = padded.length % 4 === 0 ? "" : "=".repeat(4 - (padded.length % 4));
  return Buffer.from(padded + padding, "base64");
}

export function signQuoteToken(payload: QuotePayload): string {
  const body = JSON.stringify({
    ...payload,
    lang: payload.lang === "ko" ? "ko" : "en",
    currency: payload.currency.toLowerCase(),
    exp: Math.floor(Date.now() / 1000) + TOKEN_TTL_SECONDS,
  });
  const payloadB64 = b64urlEncode(body);
  const sig = createHmac("sha256", getSecret()).update(payloadB64).digest();
  return `${payloadB64}.${b64urlEncode(sig)}`;
}

export function verifyQuoteToken(token: string | undefined | null): VerifiedQuote | null {
  if (!token || typeof token !== "string") return null;
  const parts = token.split(".");
  if (parts.length !== 2) return null;
  const [payloadB64, sigB64] = parts;

  const expected = createHmac("sha256", getSecret()).update(payloadB64).digest();
  let provided: Buffer;
  try {
    provided = b64urlDecode(sigB64);
  } catch {
    return null;
  }
  if (provided.length !== expected.length) return null;
  if (!timingSafeEqual(provided, expected)) return null;

  try {
    const payload = JSON.parse(b64urlDecode(payloadB64).toString("utf8"));
    if (typeof payload !== "object" || payload === null) return null;
    if (typeof payload.customerId !== "string") return null;
    if (payload.lang !== "en" && payload.lang !== "ko") return null;
    if (typeof payload.currency !== "string") return null;
    if (!Array.isArray(payload.lineItems)) return null;
    if (typeof payload.cadences !== "object" || payload.cadences === null) return null;
    if (typeof payload.exp !== "number") return null;
    if (Math.floor(Date.now() / 1000) > payload.exp) return null;

    const cadences: QuoteCadences = {};
    if (
      payload.cadences.one_time &&
      typeof payload.cadences.one_time.totalCents === "number" &&
      typeof payload.cadences.one_time.daysUntilDue === "number"
    ) {
      cadences.one_time = {
        totalCents: payload.cadences.one_time.totalCents,
        daysUntilDue: payload.cadences.one_time.daysUntilDue,
      };
    }
    if (
      payload.cadences.monthly &&
      typeof payload.cadences.monthly.totalCents === "number"
    ) {
      cadences.monthly = { totalCents: payload.cadences.monthly.totalCents };
    }
    if (
      payload.cadences.yearly &&
      typeof payload.cadences.yearly.totalCents === "number"
    ) {
      cadences.yearly = { totalCents: payload.cadences.yearly.totalCents };
    }
    if (!cadences.one_time && !cadences.monthly && !cadences.yearly) return null;

    return {
      customerId: payload.customerId,
      lang: payload.lang,
      currency: payload.currency,
      lineItems: payload.lineItems
        .filter(
          (li: unknown): li is { description: string; cadence?: unknown } =>
            typeof li === "object" &&
            li !== null &&
            typeof (li as { description?: unknown }).description === "string"
        )
        .map((li: { description: string; cadence?: unknown }) => {
          const c = li.cadence;
          const cadence: Cadence | undefined =
            c === "one_time" || c === "monthly" || c === "yearly" ? c : undefined;
          return cadence ? { description: li.description, cadence } : { description: li.description };
        }),
      cadences,
      memo: typeof payload.memo === "string" ? payload.memo : undefined,
      exp: payload.exp,
    };
  } catch {
    return null;
  }
}

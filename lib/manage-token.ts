import { createHmac, timingSafeEqual } from "crypto";

const TOKEN_TTL_SECONDS = 15 * 60;

function getSecret(): string {
  const secret = process.env.MANAGE_TOKEN_SECRET;
  if (!secret || secret.length < 32) {
    throw new Error("MANAGE_TOKEN_SECRET must be set to a string of at least 32 characters");
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

export function signToken(email: string): string {
  const payload = JSON.stringify({
    email: email.toLowerCase(),
    exp: Math.floor(Date.now() / 1000) + TOKEN_TTL_SECONDS,
  });
  const payloadB64 = b64urlEncode(payload);
  const sig = createHmac("sha256", getSecret()).update(payloadB64).digest();
  return `${payloadB64}.${b64urlEncode(sig)}`;
}

export function verifyToken(token: string | undefined | null): { email: string } | null {
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
    const payload = JSON.parse(b64urlDecode(payloadB64).toString("utf8")) as {
      email?: unknown;
      exp?: unknown;
    };
    if (typeof payload.email !== "string" || typeof payload.exp !== "number") return null;
    if (Math.floor(Date.now() / 1000) > payload.exp) return null;
    return { email: payload.email };
  } catch {
    return null;
  }
}

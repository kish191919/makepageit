export type BasicAuthResult = "ok" | "missing" | "invalid";

export function checkBasicAuth(authHeader: string | null): BasicAuthResult {
  const expectedUser = process.env.ADMIN_BASIC_AUTH_USER;
  const expectedPass = process.env.ADMIN_BASIC_AUTH_PASS;
  if (!expectedUser || !expectedPass) return "invalid";

  if (!authHeader || !authHeader.toLowerCase().startsWith("basic ")) {
    return "missing";
  }

  let user: string;
  let pass: string;
  try {
    const decoded = atob(authHeader.slice(6).trim());
    const idx = decoded.indexOf(":");
    if (idx < 0) return "invalid";
    user = decoded.slice(0, idx);
    pass = decoded.slice(idx + 1);
  } catch {
    return "invalid";
  }

  return safeEqual(user, expectedUser) && safeEqual(pass, expectedPass) ? "ok" : "invalid";
}

function safeEqual(a: string, b: string): boolean {
  const enc = new TextEncoder();
  const ab = enc.encode(a);
  const bb = enc.encode(b);
  const len = Math.max(ab.length, bb.length);
  let diff = ab.length ^ bb.length;
  for (let i = 0; i < len; i++) {
    diff |= (ab[i] ?? 0) ^ (bb[i] ?? 0);
  }
  return diff === 0;
}

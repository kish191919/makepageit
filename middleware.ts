import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { checkBasicAuth } from "@/lib/admin-auth";

const ADMIN_REALM = 'Basic realm="MAKEPAGE Admin", charset="UTF-8"';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const isAdmin = pathname.startsWith("/admin") || pathname.startsWith("/api/admin");

  if (isAdmin) {
    const result = checkBasicAuth(request.headers.get("authorization"));
    if (result !== "ok") {
      return new NextResponse("Authentication required", {
        status: 401,
        headers: { "WWW-Authenticate": ADMIN_REALM },
      });
    }
  }

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-pathname", pathname);
  return NextResponse.next({ request: { headers: requestHeaders } });
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};

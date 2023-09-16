import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  const pathIsPublic = path === "/login" || path === "/signup";

  const token = request.cookies.get("token")?.value || "";

  if (pathIsPublic && token) {
    return NextResponse.redirect(new URL("/profile", request.nextUrl));
  }

  if (!pathIsPublic && !token) {
    return NextResponse.redirect(new URL("/login", request.nextUrl));
  }
}

export const config = {
  matcher: ["/", "/profile/:path*", "/login", "/signup"],
};

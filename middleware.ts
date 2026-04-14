import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const response = NextResponse.next();

  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "unknown";

  const path = req.nextUrl.pathname;
  const visitId = crypto.randomUUID();

  // Set visit ID cookie so the client can send back duration later
  response.cookies.set("visit_id", visitId, {
    path: "/",
    httpOnly: false,
    maxAge: 60 * 60, // 1 hour
    sameSite: "strict",
  });

  // Fire-and-forget: log the visit without blocking the response
  const origin = req.nextUrl.origin;
  fetch(`${origin}/api/log-visit`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ip, path, visitId }),
  }).catch(() => {});

  return response;
}

// Only log page visits, not static assets or API routes
export const config = {
  matcher: ["/", "/about", "/art", "/books", "/photos", "/playlists", "/thinking", "/work"],
};

import { NextRequest, NextResponse } from "next/server"

export const config = {
  matcher: [
    /*
     * Match all paths except for:
     * 1. /api routes
     * 2. /_next (Next.js internals)
     * 3. /favicon, /images, /svg (inside /public)
     * 4. all root files inside /public (e.g. /favicon.ico)
     */
    "/((?!api/|_next/|_static/|favicon/|images/|svg/|[\\w-]+\\.\\w+).*)",
  ],
}

export function middleware(req: NextRequest) {
  const url = req.nextUrl

  // Disable for preview deployments (requires $100/mo preview deployment suffix)
  if (process.env.VERCEL_ENV === "preview") return NextResponse.rewrite(url)

  // Get hostname of request (e.g. localhost:3000)
  const hostname = req.headers.get("host") || "decentractive.decentractive"

  // Get the pathname of the request (e.g. /, /yield, /lend)
  const path = url.pathname

  // Get the current host (e,g, "app", "")
  const currentHost =
    process.env.NODE_ENV === "production" && process.env.VERCEL === "1"
      ? hostname.replace(".decentractive.io", "").replace(".staging", "")
      : hostname.replace(".localhost:3000", "")

  // Rewrite app.* subdomain requests to pages/app
  if (currentHost === "app") {
    // No index page exists in /app, we have to rewrite them to /yield
    if (path === "/") {
      return NextResponse.rewrite(new URL("/app/home", req.url))
    }
    return NextResponse.rewrite(new URL(`/app${path}`, req.url))
  }

  return NextResponse.rewrite(url)
}

import { NextResponse } from "next/server"
import { COOKIE_NAME } from "./lib/constants"

export function middleware(request) {
    if (request.nextUrl.pathname.startsWith('/dashboard'))
        if (!request.cookies.has(COOKIE_NAME))
            return NextResponse.redirect(new URL('/signin', request.url))

    if (request.nextUrl.pathname === '/')
        return NextResponse.redirect(new URL('/dashboard', request.url))
}

export const config = {
    matcher: ['/dashboard/:path*', '/'],
}
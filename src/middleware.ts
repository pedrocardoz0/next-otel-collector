import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    const response = NextResponse
    console.log(request.cookies.getAll())

    response.next().cookies.set('vercel', 'fast')
    response.next().cookies.set({
      name: 'vercel',
      value: 'fast',
      path: '/',
    })
    return response.redirect(new URL('/home', request.url))

}

export const config = {
    matcher: [
        '/blog/:path*'
    ]
}
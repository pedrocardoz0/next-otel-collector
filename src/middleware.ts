import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getCurrentUser } from 'aws-amplify/auth';


export async function middleware(request: NextRequest) {
    const response = NextResponse

    const _ = await getCurrentUser();
    
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
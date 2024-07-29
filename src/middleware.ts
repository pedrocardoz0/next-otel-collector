import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { fetchAuthSession } from 'aws-amplify/auth';


export async function middleware(request: NextRequest) {
    const response = NextResponse

    const session = await fetchAuthSession();

    // console.log("username", username);
    // console.log("user id", userId);
    // console.log("sign-in details", signInDetails);
    
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
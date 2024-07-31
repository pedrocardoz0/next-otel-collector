import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'
import { fetchAuthSession } from 'aws-amplify/auth/server';
import { runWithAmplifyServerContext } from '@/app/utils/amplifyServerUtils';


export async function middleware(request: NextRequest) {
    const response = NextResponse.next();

    const session = await runWithAmplifyServerContext({
        nextServerContext: { request, response },
        operation: async (contextSpec) => {
            try {
                const session = await fetchAuthSession(contextSpec, {forceRefresh: true});
                console.log(JSON.stringify(session.tokens?.idToken?.payload["cognito:groups"], null, 2))

                const role = session.tokens?.idToken?.payload["cognito:groups"] as string[]
                if (role[0] == "CUSTOMER" && !request.nextUrl.pathname.startsWith('/customer')) {
                    console.log("redirect to customer page")
                    return "CUSTOMER"
                }
                return null
            } catch (error) {
                console.log(error);
                return false;
            }
        }
    });

    if (session == "CUSTOMER" && !request.nextUrl.pathname.startsWith('/customer') && request.nextUrl.pathname !== '/customer') {
        return NextResponse.redirect(new URL('/customer', request.url))
    } else {
        return NextResponse.next()
    }
}

export const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|auth|favicon.ico|robots.txt|images|$).*)',
    ]
    ,
}
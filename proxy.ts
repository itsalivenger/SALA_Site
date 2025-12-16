import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { jwtVerify } from 'jose';
import createMiddleware from 'next-intl/middleware';
import { routing } from '@/i18n/routing';

const intlMiddleware = createMiddleware(routing);

export async function proxy(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Only protect /admin routes
    if (pathname.startsWith('/admin')) {

        // Allow access to login page
        if (pathname === '/admin/login') {
            const token = request.cookies.get('admin_token')?.value;
            // If already logged in, redirect to dashboard
            if (token) {
                try {
                    const secret = new TextEncoder().encode(process.env.JWT_SECRET || 'fallback-secret-key-change-me');
                    await jwtVerify(token, secret);
                    return NextResponse.redirect(new URL('/admin/dashboard', request.url));
                } catch (error) {
                    // Token invalid, allow access to login
                }
            }
            return NextResponse.next();
        }

        // Verify Token for all other /admin routes
        const token = request.cookies.get('admin_token')?.value;

        if (!token) {
            return NextResponse.redirect(new URL('/admin/login', request.url));
        }

        try {
            const secret = new TextEncoder().encode(process.env.JWT_SECRET || 'fallback-secret-key-change-me');
            await jwtVerify(token, secret);
            return NextResponse.next();
        } catch (error) {
            // Token invalid or expired
            return NextResponse.redirect(new URL('/admin/login', request.url));
        }
    }

    // For non-admin routes, apply internationalization
    return intlMiddleware(request);
}

export const config = {
    // Matcher for both Admin routes and Public i18n routes
    matcher: ['/((?!api|_next|.*\\..*).*)'],
};

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { jwtVerify } from 'jose';

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

    return NextResponse.next();
}

export const config = {
    matcher: ['/admin/:path*'],
};

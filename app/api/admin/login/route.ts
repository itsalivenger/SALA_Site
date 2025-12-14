import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Admin from '@/models/Admin';
import bcrypt from 'bcryptjs';
import { SignJWT } from 'jose';

export async function POST(req: Request) {
    try {
        await connectDB();
        const { email, password } = await req.json();

        // 1. Check if admin exists
        const admin = await Admin.findOne({ email }).select('+password');
        if (!admin) {
            return NextResponse.json({ error: 'Email ou mot de passe incorrect' }, { status: 401 });
        }

        // 2. Check password
        const isMatch = await bcrypt.compare(password, admin.password);
        if (!isMatch) {
            return NextResponse.json({ error: 'Email ou mot de passe incorrect' }, { status: 401 });
        }

        // 3. Update last active
        admin.lastActive = new Date();
        await admin.save();

        // 4. Create JWT Token (using jose for Edge compatibility)
        const secret = new TextEncoder().encode(process.env.JWT_SECRET || 'fallback-secret-key-change-me');
        const token = await new SignJWT({
            id: admin._id,
            email: admin.email,
            role: admin.role
        })
            .setProtectedHeader({ alg: 'HS256' })
            .setExpirationTime('24h')
            .sign(secret);

        // 5. Create Response
        const response = NextResponse.json({
            message: 'Connexion réussie',
            user: {
                id: admin._id,
                name: admin.name,
                email: admin.email,
                role: admin.role
            }
        });

        // 6. Set HTTP-Only Cookie
        response.cookies.set({
            name: 'admin_token',
            value: token,
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 60 * 60 * 24, // 1 day
            path: '/',
        });

        return response;

    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

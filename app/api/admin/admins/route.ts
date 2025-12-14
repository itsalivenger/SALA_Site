import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Admin from '@/models/Admin';
import bcrypt from 'bcryptjs';

export async function GET() {
    try {
        await connectDB();
        const admins = await Admin.find({}).sort({ createdAt: -1 });

        // Format dates for frontend
        const formattedAdmins = admins.map(admin => ({
            id: admin._id,
            name: admin.name,
            email: admin.email,
            role: admin.role,
            status: admin.status,
            lastActive: admin.lastActive ? new Date(admin.lastActive).toLocaleDateString() : 'Jamais'
        }));

        return NextResponse.json(formattedAdmins);
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function POST(req: Request) {
    try {
        await connectDB();
        const { name, email, password, role } = await req.json();

        // Check if admin exists
        const adminExists = await Admin.findOne({ email });
        if (adminExists) {
            return NextResponse.json({ error: 'Cet email est déjà utilisé' }, { status: 400 });
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create admin
        const admin = await Admin.create({
            name,
            email,
            password: hashedPassword,
            role,
            status: 'Active',
            lastActive: new Date()
        });

        return NextResponse.json({
            id: admin._id,
            name: admin.name,
            email: admin.email,
            role: admin.role,
            status: admin.status,
            lastActive: 'À l\'instant'
        }, { status: 201 });

    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

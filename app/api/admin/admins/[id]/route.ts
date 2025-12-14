import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Admin from '@/models/Admin';
import bcrypt from 'bcryptjs';

export async function PUT(
    req: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        await connectDB();
        const { id } = await params;
        const { name, email, role, password } = await req.json();

        const admin = await Admin.findById(id);

        if (!admin) {
            return NextResponse.json({ error: 'Admin non trouvé' }, { status: 404 });
        }

        // Update fields
        admin.name = name || admin.name;
        admin.email = email || admin.email;
        admin.role = role || admin.role;

        // Only update password if provided
        if (password && password.trim() !== '') {
            const salt = await bcrypt.genSalt(10);
            admin.password = await bcrypt.hash(password, salt);
        }

        await admin.save();

        return NextResponse.json({
            id: admin._id,
            name: admin.name,
            email: admin.email,
            role: admin.role,
            status: admin.status,
            lastActive: admin.lastActive ? new Date(admin.lastActive).toLocaleDateString() : 'Jamais'
        });

    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function DELETE(
    req: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        await connectDB();
        const { id } = await params;

        const admin = await Admin.findByIdAndDelete(id);

        if (!admin) {
            return NextResponse.json({ error: 'Admin non trouvé' }, { status: 404 });
        }

        return NextResponse.json({ message: 'Admin supprimé avec succès' });

    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

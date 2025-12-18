import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Settings from '@/models/Settings';

export async function GET() {
    try {
        await connectDB();

        const settings = await Settings.findOne();

        if (!settings) {
            // Return empty object if no settings found instead of error for public use
            return NextResponse.json({});
        }

        return NextResponse.json(settings);
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Subscriber from '@/models/Subscriber';

export async function POST(req: Request) {
    try {
        const { email } = await req.json();

        if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
            return NextResponse.json(
                { error: 'Email invalide' },
                { status: 400 }
            );
        }

        await connectDB();

        // Check if already subscribed
        const existingSubscriber = await Subscriber.findOne({ email });
        if (existingSubscriber) {
            // Idempotency: Return success even if already subscribed, 
            // but maybe with a specific message or just 200 OK
            return NextResponse.json(
                { message: 'Vous êtes déjà abonné!', exists: true },
                { status: 200 }
            );
        }

        await Subscriber.create({ email });

        return NextResponse.json(
            { message: 'Inscription réussie' },
            { status: 201 }
        );
    } catch (error) {
        console.error('Newsletter Error:', error);
        return NextResponse.json(
            { error: 'Erreur serveur' },
            { status: 500 }
        );
    }
}

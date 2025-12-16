import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { PopupProvider } from "@/context/PopupContext";
import type { Metadata } from 'next';

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Sala - Livraison & Logistique",
    description: "L'application tout-en-un pour la livraison, le transport et la logistique.",
};

export default async function LocaleLayout({
    children,
    params
}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;

    // Ensure that the incoming `locale` is valid
    if (!routing.locales.includes(locale as any)) {
        notFound();
    }

    // Providing all messages to the client
    const messages = await getMessages();

    // Handle RTL direction
    const isRtl = locale === 'ar';
    const dir = isRtl ? 'rtl' : 'ltr';

    return (
        <html lang={locale} dir={dir}>
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-slate-900`}>
                <NextIntlClientProvider messages={messages}>
                    <PopupProvider>
                        {children}
                    </PopupProvider>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}

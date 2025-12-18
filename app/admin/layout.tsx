import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { Metadata } from 'next';
import { PopupProvider } from "@/context/PopupContext";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Sala Admin",
    description: "Administration du site Sala",
};

export default async function AdminRootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const messages = await getMessages();

    return (
        <html lang="fr">
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-slate-900`}>
                <NextIntlClientProvider messages={messages} locale="fr">
                    <PopupProvider>
                        {children}
                    </PopupProvider>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}

"use client";

import Navbar from "@/components/Navbar/Navbar";
import Newsletter from "@/components/Newsletter/Newsletter";
import Footer from "@/components/Footer/Footer";
import { SettingsProvider, useSettings } from "@/context/SettingsContext";
import { ShieldAlert } from "lucide-react";

function PublicLayoutContent({ children }: { children: React.ReactNode }) {
    const { settings, isLoading } = useSettings();

    if (settings.maintenanceMode && !isLoading) {
        return (
            <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
                <div className="max-w-md w-full text-center space-y-8 p-12 bg-white/5 backdrop-blur-xl rounded-[2.5rem] border border-white/10 shadow-2xl">
                    <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <ShieldAlert className="w-10 h-10 text-primary" />
                    </div>
                    <h1 className="text-4xl font-extrabold text-white tracking-tight">Maintenance</h1>
                    <p className="text-slate-400 text-lg leading-relaxed">
                        Notre application est actuellement en cours de maintenance pour vous offrir une meilleure expérience. Revenez bientôt !
                    </p>
                    <div className="pt-4">
                        <div className="h-1 w-24 bg-primary mx-auto rounded-full opacity-50" />
                    </div>
                </div>
            </div>
        );
    }

    return (
        <>
            <Navbar />
            <main>{children}</main>
            <Newsletter />
            <Footer />
        </>
    );
}

export default function PublicLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <SettingsProvider>
            <PublicLayoutContent>
                {children}
            </PublicLayoutContent>
        </SettingsProvider>
    );
}

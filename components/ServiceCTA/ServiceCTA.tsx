"use client";

import { Link } from '@/i18n/routing';
import { ArrowRight, Smartphone } from "lucide-react";
import { useTranslations } from "next-intl";

export default function ServiceCTA() {
    const t = useTranslations('ServiceCTA');

    return (
        <section className="py-24 bg-slate-900 text-white relative overflow-hidden">

            {/* Decorative circles */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-primary rounded-full blur-[100px] opacity-20" />
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-purple-600 rounded-full blur-[100px] opacity-20" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <h2 className="text-3xl sm:text-4xl font-bold mb-8">
                    {t('title')}
                </h2>
                <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10">
                    {t('description')}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="/download"
                        className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-slate-900 transition-all duration-300 bg-white rounded-xl hover:bg-white hover:scale-105 hover:shadow-xl hover:shadow-white/10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-white"
                    >
                        <Smartphone className="w-6 h-6 mr-2" />
                        {t('btn_download')}
                    </Link>
                    <Link
                        href="/contact"
                        className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all bg-transparent border-2 border-slate-600 rounded-xl hover:bg-slate-800 hover:border-slate-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-slate-500"
                    >
                        {t('btn_contact')}
                        <ArrowRight className="w-6 h-6 ml-2" />
                    </Link>
                </div>
            </div>
        </section>
    );
}

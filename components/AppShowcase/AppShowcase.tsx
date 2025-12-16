"use client";

import { motion } from "framer-motion";
import { Smartphone, Bell, Map, CreditCard } from "lucide-react";
import { useTranslations } from "next-intl";

export default function AppShowcase() {
    const t = useTranslations('AppShowcase');

    const features = [
        { icon: Map, title: t('feature_1_title'), text: t('feature_1_desc') },
        { icon: Bell, title: t('feature_2_title'), text: t('feature_2_desc') },
        { icon: CreditCard, title: t('feature_3_title'), text: t('feature_3_desc') },
    ];

    return (
        <section className="py-24 bg-slate-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-bold mb-6">
                            {t('badge')}
                        </div>
                        <h2 className="text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
                            {t('title_part1')} <br />
                            <span className="text-primary">{t('title_part2')}</span>
                        </h2>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            {t('description')}
                        </p>

                        <div className="space-y-6">
                            {features.map((feature, idx) => (
                                <div key={idx} className="flex gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-white border border-gray-100 flex items-center justify-center shadow-sm flex-shrink-0 text-primary">
                                        <feature.icon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-1">{feature.title}</h4>
                                        <p className="text-sm text-gray-500">{feature.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Visual Mockup */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative mx-auto lg:ml-auto"
                    >
                        {/* Abstract Phone Shape */}
                        <div className="relative w-[300px] h-[600px] bg-slate-900 rounded-[3rem] border-8 border-slate-800 shadow-2xl overflow-hidden transform rotate-3 hover:rotate-0 transition-transform duration-500">
                            {/* Notch */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-slate-800 rounded-b-3xl z-20" />

                            {/* Screen Content Placeholder */}
                            <div className="w-full h-full bg-slate-100 relative">
                                {/* Header */}
                                <div className="h-20 bg-primary w-full" />

                                {/* Map Placeholder */}
                                <div className="h-64 bg-gray-200 m-4 rounded-2xl relative overflow-hidden">
                                    <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 gap-1 opacity-20">
                                        {Array.from({ length: 36 }).map((_, i) => (
                                            <div key={i} className="bg-gray-400/50" />
                                        ))}
                                    </div>
                                    {/* Pin */}
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-primary">
                                        <div className="w-4 h-4 bg-primary rounded-full animate-ping absolute" />
                                        <div className="w-4 h-4 bg-primary rounded-full relative" />
                                    </div>
                                </div>

                                {/* List items */}
                                <div className="space-y-3 px-4">
                                    <div className="h-16 bg-white rounded-xl shadow-sm mb-2" />
                                    <div className="h-16 bg-white rounded-xl shadow-sm mb-2" />
                                    <div className="h-16 bg-white rounded-xl shadow-sm mb-2" />
                                </div>
                            </div>
                        </div>

                        {/* Background Glow */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[650px] bg-primary/20 rounded-full blur-3xl -z-10" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

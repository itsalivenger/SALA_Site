"use client";

import { motion } from "framer-motion";
import { ArrowDown, Package, Truck, Clock } from "lucide-react";
import { useTranslations } from "next-intl";

export default function ServicesHero() {
    const t = useTranslations('ServicesHero');

    return (
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-slate-900 text-white">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-primary text-sm font-bold mb-8">
                        <Package className="w-4 h-4" />
                        {t('badge')}
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-8">
                        {t('title_part1')} <br />
                        <span className="text-primary">{t('title_part2')}</span>
                    </h1>

                    <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-12">
                        {t('description')}
                    </p>
                </motion.div>

                {/* Animated stats/icons strip */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex flex-wrap justify-center gap-4 sm:gap-8"
                >
                    {[
                        { icon: Clock, label: t('stat_1') },
                        { icon: Truck, label: t('stat_2') },
                        { icon: Package, label: t('stat_3') },
                    ].map((item, idx) => (
                        <div key={idx} className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                            <item.icon className="w-5 h-5 text-primary" />
                            <span className="font-semibold">{item.label}</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

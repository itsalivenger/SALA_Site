"use client";

import { Target, Lightbulb } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function MissionVision() {
    const t = useTranslations('MissionVision');

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="p-8 rounded-3xl bg-primary/5 border border-primary/20"
                    >
                        <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center text-white mb-6 shadow-lg shadow-primary/20">
                            <Target className="w-7 h-7" />
                        </div>
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">{t('mission_title')}</h2>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            {t('mission_desc')}
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="p-8 rounded-3xl bg-indigo-50 border border-indigo-100"
                    >
                        <div className="w-14 h-14 rounded-2xl bg-indigo-600 flex items-center justify-center text-white mb-6 shadow-lg shadow-indigo-600/20">
                            <Lightbulb className="w-7 h-7" />
                        </div>
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">{t('vision_title')}</h2>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            {t('vision_desc')}
                        </p>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}

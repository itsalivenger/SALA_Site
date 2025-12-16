"use client";

import { motion } from "framer-motion";
import { Briefcase, BarChart3, Globe2, Building2 } from "lucide-react";
import { useTranslations } from "next-intl";

export default function BusinessSolutions() {
    const t = useTranslations('BusinessSolutions');

    const solutions = [
        {
            icon: Briefcase,
            title: t('solution_1_title'),
            description: t('solution_1_desc')
        },
        {
            icon: Globe2,
            title: t('solution_2_title'),
            description: t('solution_2_desc')
        },
        {
            icon: BarChart3,
            title: t('solution_3_title'),
            description: t('solution_3_desc')
        }
    ];

    return (
        <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary rounded-full blur-[120px] opacity-20 -translate-y-1/2 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600 rounded-full blur-[120px] opacity-20 translate-y-1/2 -translate-x-1/3" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary/80 text-sm font-semibold mb-6">
                            <Building2 className="w-4 h-4" />
                            {t('badge')}
                        </div>
                        <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
                            {t('title_part1')} <span className="text-primary">{t('title_part2')}</span>
                        </h2>
                        <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                            {t('description')}
                        </p>
                        <button className="px-8 py-4 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl transition-all shadow-lg shadow-primary/25">
                            {t('cta_button')}
                        </button>
                    </motion.div>

                    <div className="space-y-6">
                        {solutions.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors"
                            >
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center text-primary flex-shrink-0">
                                        <item.icon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                        <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}

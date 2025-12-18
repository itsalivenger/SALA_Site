"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function ZigZagFeatures() {
    const t = useTranslations('ZigZagFeatures');

    const features = [
        {
            title: t('feature_1_title'),
            description: t('feature_1_desc'),
            cta: t('feature_1_cta'),
            image: "https://images.unsplash.com/photo-1554224155-169641357599?auto=format&fit=crop&q=80&w=800", // Smart Pricing placeholder
            color: "text-blue-500",
            bgColor: "bg-blue-50"
        },
        {
            title: t('feature_2_title'),
            description: t('feature_2_desc'),
            cta: t('feature_2_cta'),
            image: "https://images.unsplash.com/photo-1521791136064-7986c29596ad?auto=format&fit=crop&q=80&w=800", // Verified partners placeholder
            color: "text-green-500",
            bgColor: "bg-green-50"
        },
        {
            title: t('feature_3_title'),
            description: t('feature_3_desc'),
            cta: t('feature_3_cta'),
            image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&q=80&w=800", // Tracking placeholder
            color: "text-purple-500",
            bgColor: "bg-purple-50"
        },
        {
            title: t('feature_4_title'),
            description: t('feature_4_desc'),
            cta: t('feature_4_cta'),
            image: "https://images.unsplash.com/photo-1556742049-13e73bb7a8bd?auto=format&fit=crop&q=80&w=800", // Wallet placeholder
            color: "text-orange-500",
            bgColor: "bg-orange-50"
        }
    ];

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="space-y-24">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-24`}
                        >
                            {/* Image Part */}
                            <motion.div
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="w-full lg:w-1/2 relative"
                            >
                                <div className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/3] group">
                                    <div className={`absolute inset-0 ${feature.bgColor} opacity-20 group-hover:opacity-0 transition-opacity duration-500`} />
                                    <img
                                        src={feature.image}
                                        alt={feature.title}
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                    />
                                    {/* Glassmorphism Badge */}
                                    <div className="absolute top-6 left-6 bg-white/70 backdrop-blur-md px-4 py-2 rounded-full border border-white/50 flex items-center gap-2 shadow-lg">
                                        <CheckCircle2 className={`w-4 h-4 ${feature.color}`} />
                                        <span className="text-xs font-bold text-slate-900 uppercase tracking-widest">Technologie Sala</span>
                                    </div>
                                </div>
                                {/* Decorative shape behind image */}
                                <div className={`absolute -inset-4 ${feature.bgColor} -z-10 rounded-[2.5rem] blur-2xl opacity-30`} />
                            </motion.div>

                            {/* Content Part */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="w-full lg:w-1/2 space-y-6"
                            >
                                <div className={`w-12 h-12 ${feature.bgColor} ${feature.color} rounded-2xl flex items-center justify-center mb-6 shadow-sm`}>
                                    <CheckCircle2 className="w-6 h-6" />
                                </div>
                                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                                    {feature.title}
                                </h2>
                                <p className="text-lg text-slate-600 leading-relaxed font-medium">
                                    {feature.description}
                                </p>
                                <button className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-all hover:translate-x-1 group">
                                    {feature.cta}
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

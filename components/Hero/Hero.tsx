"use client";

import { motion } from "framer-motion";
import { Link } from "@/i18n/routing";
import { ArrowRight, Smartphone } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Hero() {
    const t = useTranslations('Hero');

    return (
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-slate-900">
            {/* Layered Background Background */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                {/* 1. Video Layer */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover motion-reduce:hidden"
                >
                    <source src="/videos/hero.mp4" type="video/mp4" />
                </video>

                {/* Fallback/Poster for reduced motion */}
                <div className="absolute inset-0 bg-slate-900 hidden motion-reduce:block" />

                {/* 2. Dark Neutral Overlay (Charcoal/Institutional) */}
                <div className="absolute inset-0 bg-[#0a0a0b]/50 transition-opacity" />

                {/* 3. Brand Gradient Overlay (Subtle) */}
                <div className="absolute inset-0 bg-gradient-to-br from-sala-green/20 via-transparent to-sala-purple/20 mix-blend-overlay pointer-events-none" />

                {/* 4. Bottom Fade for Page Integration */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900/40" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center lg:text-left"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sala-green/20 text-sala-green text-sm font-semibold mb-6">
                            <span className="w-2 h-2 rounded-full bg-sala-green animate-pulse" />
                            {t('tag')}
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-6">
                            {t('title_part1')} <span className="text-sala-green">{t('title_part2')}</span> {t('title_part3')}
                        </h1>

                        <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                            {t('description')}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Link
                                href="/download"
                                className="inline-flex items-center justify-center px-8 py-3.5 text-base font-bold text-white transition-all bg-sala-orange rounded-xl hover:bg-primary-action-hover hover:shadow-lg shadow-sala-orange/20 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sala-orange"
                            >
                                <Smartphone className="w-5 h-5 mr-2" />
                                {t('download_client')}
                            </Link>
                            <Link
                                href="/download"
                                className="inline-flex items-center justify-center px-8 py-3.5 text-base font-bold text-sala-purple transition-all bg-white border-2 border-sala-purple rounded-xl hover:border-sala-purple/80 hover:bg-sala-purple/5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sala-purple"
                            >
                                {t('become_driver')}
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </Link>
                        </div>

                        <div className="mt-10 flex items-center justify-center lg:justify-start gap-6 text-slate-400 text-sm font-medium">
                            <div className="flex items-center gap-2">
                                <div className="flex -space-x-2">
                                    {[1, 2, 3].map((i) => (
                                        <div key={i} className={`w-8 h-8 rounded-full border-2 border-slate-900 bg-slate-${i * 200 + 400}`} />
                                    ))}
                                </div>
                                <span>{t('stats_downloads')}</span>
                            </div>
                            <div className="h-4 w-px bg-slate-700" />
                            <div className="flex items-center gap-1">
                                <span className="text-yellow-400">⭐</span> {t('stats_rating')}
                            </div>
                        </div>
                    </motion.div>

                    {/* Hero Image/Visual */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative lg:h-[600px] flex items-center justify-center pt-12"
                    >
                        {/* App Mockup */}
                        <div className="relative z-10 w-full max-w-sm lg:max-w-md bg-white rounded-[2.5rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.6)] border-8 border-slate-800 overflow-hidden aspect-[9/19] mx-auto mt-12 rotate-[-6deg] hover:rotate-0 transition-transform duration-500">
                            {/* Screen Content */}
                            <div className="h-full w-full bg-white relative flex flex-col">
                                <div className="h-8 bg-slate-800 w-full absolute top-0 left-0 z-20 flex justify-center items-end pb-1">
                                    <div className="w-20 h-4 bg-black rounded-b-xl" />
                                </div>

                                {/* Mock content */}
                                <div className="p-4 pt-12 space-y-4">
                                    <div className="h-40 rounded-2xl bg-slate-50 w-full flex items-center justify-center">
                                        <div className="w-16 h-16 rounded-full bg-sala-green/20 animate-pulse" />
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="h-24 rounded-2xl bg-slate-50" />
                                        <div className="h-24 rounded-2xl bg-slate-50" />
                                    </div>
                                    <div className="h-12 rounded-xl bg-slate-50 w-full" />
                                    <div className="h-12 rounded-xl bg-slate-50 w-3/4" />
                                </div>
                            </div>
                        </div>

                        {/* Floating Card */}
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 1, duration: 0.5 }}
                            className="absolute bottom-20 -left-4 lg:left-0 bg-white/90 backdrop-blur-md p-5 rounded-2xl shadow-2xl border border-white/20 max-w-[200px] z-20"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-sala-green flex items-center justify-center text-white shadow-lg shadow-sala-green/30">
                                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                </div>
                                <div>
                                    <p className="font-bold text-slate-900 text-sm">{t('card_arrived')}</p>
                                    <p className="text-[10px] text-slate-500 font-medium">{t('card_time')}</p>
                                </div>
                            </div>
                        </motion.div>

                    </motion.div>
                </div>
            </div>
        </section>
    );
}

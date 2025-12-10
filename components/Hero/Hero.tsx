"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Smartphone } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-gradient-to-b from-blue-50/50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center lg:text-left"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/50 text-blue-600 text-sm font-semibold mb-6">
                            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                            Disponible sur iOS & Android
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-6">
                            Les seules applications dont vous avez besoin pour <span className="text-blue-600">déplacer</span> quoi que ce soit.
                        </h1>

                        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                            Profitez d'une logistique, de services de VTC et de livraison fluides, le tout dans un seul écosystème.
                            Connecter les clients avec des chauffeurs de confiance instantanément.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Link
                                href="/download"
                                className="inline-flex items-center justify-center px-8 py-3.5 text-base font-bold text-white transition-all bg-slate-900 rounded-xl hover:bg-slate-800 hover:shadow-lg shadow-blue-500/20 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900"
                            >
                                <Smartphone className="w-5 h-5 mr-2" />
                                Télécharger App Client
                            </Link>
                            <Link
                                href="/download"
                                className="inline-flex items-center justify-center px-8 py-3.5 text-base font-bold text-slate-900 transition-all bg-white border-2 border-slate-200 rounded-xl hover:border-slate-300 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-200"
                            >
                                Devenir Chauffeur
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </Link>
                        </div>

                        <div className="mt-10 flex items-center justify-center lg:justify-start gap-6 text-gray-500 text-sm">
                            <div className="flex items-center gap-2">
                                <div className="flex -space-x-2">
                                    {[1, 2, 3].map((i) => (
                                        <div key={i} className={`w-8 h-8 rounded-full border-2 border-white bg-gray-${i * 200 + 100}`} />
                                    ))}
                                </div>
                                <span>10k+ Téléchargements</span>
                            </div>
                            <div className="h-4 w-px bg-gray-300" />
                            <div className="flex items-center gap-1">
                                ⭐ 4.9 Note
                            </div>
                        </div>
                    </motion.div>

                    {/* Hero Image/Visual */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative lg:h-[600px] flex items-center justify-center"
                    >
                        {/* Abstract Background Shapes */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-3xl absolute -translate-y-12 translate-x-12" />
                            <div className="w-[400px] h-[400px] bg-indigo-400/10 rounded-full blur-3xl absolute translate-y-12 -translate-x-12" />
                        </div>

                        {/* Placeholder for App Mockups */}
                        <div className="relative z-10 w-full max-w-sm lg:max-w-md bg-white rounded-[2.5rem] shadow-2xl border-8 border-slate-900 overflow-hidden aspect-[9/19] mx-auto rotate-[-6deg] hover:rotate-0 transition-transform duration-500">
                            {/* Screen Content Placeholder */}
                            <div className="h-full w-full bg-slate-50 relative flex flex-col">
                                <div className="h-8 bg-slate-900 w-full absolute top-0 left-0 z-20 flex justify-center items-end pb-1">
                                    <div className="w-20 h-4 bg-black rounded-b-xl" />
                                </div>

                                {/* Mock content */}
                                <div className="p-4 pt-12 space-y-4">

                                    <div className="h-32 rounded-2xl bg-blue-600 w-full shadow-lg" />
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="h-24 rounded-2xl bg-white shadow-sm border border-gray-100" />
                                        <div className="h-24 rounded-2xl bg-white shadow-sm border border-gray-100" />
                                    </div>
                                    <div className="h-12 rounded-xl bg-gray-200 w-full" />
                                    <div className="h-12 rounded-xl bg-gray-200 w-3/4" />
                                </div>
                            </div>
                        </div>

                        {/* Floating Card */}
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 1, duration: 0.5 }}
                            className="absolute bottom-20 -left-4 lg:left-0 bg-white p-4 rounded-xl shadow-xl border border-gray-100 max-w-xs z-20"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">✔</div>
                                <div>
                                    <p className="font-bold text-slate-900">Le chauffeur est arrivé</p>
                                    <p className="text-xs text-gray-500">2 min restantes</p>
                                </div>
                            </div>
                        </motion.div>

                    </motion.div>
                </div>
            </div>
        </section>
    );
}

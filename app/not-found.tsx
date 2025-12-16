"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { AlertTriangle, Home, ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar/Navbar";
import Newsletter from "@/components/Newsletter/Newsletter";
import Footer from "@/components/Footer/Footer";

export default function NotFound() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />

            <main className="flex-grow flex flex-col">
                <section className="relative flex-grow flex items-center justify-center pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-slate-900 text-white min-h-[70vh]">
                    {/* Background Pattern - Matching Contact/Services Hero */}
                    <div className="absolute inset-0 opacity-10 pointer-events-none">
                        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
                        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-600 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />
                    </div>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="flex flex-col items-center"
                        >
                            <div className="bg-white/5 p-6 rounded-full mb-8 relative group border border-white/10 backdrop-blur-sm">
                                <div className="absolute inset-0 bg-red-500/20 rounded-full animate-ping opacity-20 duration-1000"></div>
                                <AlertTriangle className="w-16 h-16 text-red-500 relative z-10" />
                            </div>

                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-red-400 text-sm font-bold mb-6">
                                <span>Erreur 404</span>
                            </div>

                            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight mb-6">
                                Page <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">Introuvable</span>
                            </h1>

                            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10">
                                Oups ! Il semble que vous vous soyez égaré. La page que vous recherchez n'existe pas ou a été déplacée vers une nouvelle destination.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link
                                    href="/"
                                    className="flex items-center justify-center gap-2 px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-xl font-bold transition-all shadow-lg shadow-primary/25 hover:-translate-y-1"
                                >
                                    <Home className="w-5 h-5" />
                                    Retour à l'accueil
                                </Link>
                                <button
                                    onClick={() => window.history.back()}
                                    className="flex items-center justify-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-xl font-bold transition-all backdrop-blur-sm"
                                >
                                    <ArrowLeft className="w-5 h-5" />
                                    Page précédente
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </main>

            <Newsletter />
            <Footer />
        </div>
    );
}

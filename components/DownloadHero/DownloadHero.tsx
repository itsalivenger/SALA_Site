"use client";

import { motion } from "framer-motion";
import { Download, Apple, Smartphone } from "lucide-react";

export default function DownloadHero() {
    return (
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-slate-900 text-white">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-600 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-8">
                        Téléchargez Sala et <br />
                        <span className="text-blue-500">Bougez Librement</span>
                    </h1>
                    <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-10">
                        L'application ultime pour la livraison, le transport et les services à la demande. Disponible dès maintenant sur iOS et Android.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="flex items-center justify-center gap-3 px-6 py-4 bg-white text-slate-900 rounded-xl font-bold hover:bg-gray-100 transition-colors">
                            <Apple className="w-8 h-8" />
                            <div className="text-left">
                                <div className="text-xs text-gray-500">Télécharger sur</div>
                                <div className="text-lg leading-none">App Store</div>
                            </div>
                        </button>
                        <button className="flex items-center justify-center gap-3 px-6 py-4 bg-transparent border border-slate-600 text-white rounded-xl font-bold hover:bg-slate-800 transition-colors">
                            <Smartphone className="w-8 h-8" />
                            <div className="text-left">
                                <div className="text-xs text-slate-400">DISPONIBLE SUR</div>
                                <div className="text-lg leading-none">Google Play</div>
                            </div>
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

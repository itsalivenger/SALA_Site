"use client";

import { motion } from "framer-motion";

export default function AboutHero() {
    return (
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-slate-900 text-white">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
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
                        Révolutionner la <span className="text-blue-500">Logistique</span> <br />
                        pour un Monde Connecté
                    </h1>
                    <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                        Sala est plus qu'une simple application de livraison. Nous sommes une entreprise technologique dédiée au déplacement des personnes et des produits en toute sécurité, efficacité et fiabilité.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}


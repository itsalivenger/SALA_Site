"use client";

import { Target, Lightbulb } from "lucide-react";
import { motion } from "framer-motion";

export default function MissionVision() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="p-8 rounded-3xl bg-blue-50 border border-blue-100"
                    >
                        <div className="w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center text-white mb-6 shadow-lg shadow-blue-600/20">
                            <Target className="w-7 h-7" />
                        </div>
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Notre Mission</h2>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Autonomiser les entreprises et les particuliers en fournissant des solutions logistiques fluides, accessibles et fiables. Nous nous efforçons de réduire les frictions dans le transport et de rendre la livraison instantanée pour tout le monde, partout.
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
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Notre Vision</h2>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Devenir la super-application leader de la région pour la mobilité et la logistique, créant un écosystème où les chauffeurs prospèrent, les entreprises se développent et les clients bénéficient d'une commodité inégalée.
                        </p>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}

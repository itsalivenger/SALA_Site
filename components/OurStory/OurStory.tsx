"use client";

import { motion } from "framer-motion";

const milestones = [
    { year: "2021", title: "La Genèse", description: "L'idée de Sala naît d'un besoin de simplifier la logistique urbaine." },
    { year: "2022", title: "La Fondation", description: "Lancement initial à Alger avec une flotte de 10 chauffeurs." },
    { year: "2023", title: "L'Expansion", description: "Ouverture des opérations à Oran et lancement de l'offre B2B." },
    { year: "2024", title: "Innovation", description: "Intégration de l'IA pour l'optimisation des trajets et lancement de Sala Pay." },
    { year: "2025", title: "Écosystème Vert", description: "Transition vers une flotte hybride et électrique pour réduire l'empreinte carbone." },
    { year: "Futur", title: "Vision Globe", description: "Expansion internationale et couverture de toute la région MENA." },
];

export default function OurStory() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-4">
                        Notre Histoire
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        De simples débuts à une révolution logistique.
                    </p>
                </div>

                <div className="relative">
                    {/* Timeline Line */}
                    <div className="absolute left-[50%] top-0 bottom-0 w-0.5 bg-gray-100 hidden md:block" />

                    <div className="space-y-12">
                        {milestones.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
                            >
                                <div className={`flex-1 text-center ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                                    <h3 className="text-2xl font-bold text-slate-900">{item.year}</h3>
                                    <h4 className="text-xl font-bold text-primary mb-2">{item.title}</h4>
                                    <p className="text-gray-600">{item.description}</p>
                                </div>

                                <div className="w-8 h-8 rounded-full bg-primary border-4 border-primary/20 z-10 flex-shrink-0" />

                                <div className="flex-1 hidden md:block" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

"use client";

import { motion } from "framer-motion";

const team = [
    {
        name: "Ahmed Hassan",
        role: "PDG et Fondateur",
        image: "https://ui-avatars.com/api/?name=Ahmed+Hassan&background=0f172a&color=fff&size=256",
    },
    {
        name: "Sarah Salem",
        role: "Directrice des Opérations",
        image: "https://ui-avatars.com/api/?name=Sarah+Salem&background=0f172a&color=fff&size=256",
    },
    {
        name: "Omar Farouk",
        role: "Responsable Ingénierie",
        image: "https://ui-avatars.com/api/?name=Omar+Farouk&background=0f172a&color=fff&size=256",
    },
    {
        name: "Lina Mahmoud",
        role: "Chef de Produit",
        image: "https://ui-avatars.com/api/?name=Lina+Mahmoud&background=0f172a&color=fff&size=256",
    },
];

export default function Team() {
    return (
        <section className="py-24 bg-gray-50 border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-4">
                        Rencontrez l'Équipe
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Les esprits passionnés derrière la plateforme.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {team.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center"
                        >
                            <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-blue-50">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h3>
                            <p className="text-blue-600 font-medium">{member.role}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

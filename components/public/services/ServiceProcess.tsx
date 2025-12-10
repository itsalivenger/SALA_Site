"use client";

import { motion } from "framer-motion";
import { Phone, PackageSearch, Truck, CheckCheck } from "lucide-react";

const steps = [
    { icon: Phone, title: "Commande", text: "Réservez via l'app en quelques clics." },
    { icon: PackageSearch, title: "Prise en charge", text: "Un chauffeur arrive instantanément." },
    { icon: Truck, title: "Transport", text: "Suivi GPS en temps réel du trajet." },
    { icon: CheckCheck, title: "Livraison", text: "Confirmation par code sécurisé." },
];

export default function ServiceProcess() {
    return (
        <section className="py-24 bg-white border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-4">
                        Comment nous procédons
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Un processus transparent et sécurisé de A à Z.
                    </p>
                </div>

                <div className="relative">
                    {/* Horizontal Line (Desktop) */}
                    <div className="hidden md:block absolute top-[2.5rem] left-0 right-0 h-1 bg-gray-100 -z-10" />

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="text-center bg-white"
                            >
                                <div className="w-20 h-20 mx-auto rounded-full bg-white border-4 border-blue-50 flex items-center justify-center mb-6 relative">
                                    <step.icon className="w-8 h-8 text-blue-600" />
                                    <div className="absolute top-0 right-0 w-6 h-6 bg-slate-900 rounded-full text-white text-xs font-bold flex items-center justify-center border-2 border-white">
                                        {index + 1}
                                    </div>
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                                <p className="text-sm text-gray-500 px-4">{step.text}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

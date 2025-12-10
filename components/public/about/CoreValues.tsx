"use client";

import { motion } from "framer-motion";
import { Heart, Zap, Globe, ShieldCheck } from "lucide-react";

const values = [
    {
        icon: Heart,
        title: "Passion Client",
        description: "Nous plaçons nos clients au cœur de chaque décision que nous prenons.",
        color: "bg-red-50 text-red-600"
    },
    {
        icon: Zap,
        title: "Innovation Rapide",
        description: "Nous évoluons constamment pour offrir des solutions plus rapides et intelligentes.",
        color: "bg-amber-50 text-amber-600"
    },
    {
        icon: ShieldCheck,
        title: "Intégrité Totale",
        description: "La transparence et l'honnêteté guident toutes nos actions.",
        color: "bg-emerald-50 text-emerald-600"
    },
    {
        icon: Globe,
        title: "Impact Durable",
        description: "Nous nous engageons pour une logistique plus verte et responsable.",
        color: "bg-blue-50 text-blue-600"
    }
];

export default function CoreValues() {
    return (
        <section className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-4">
                        Nos Valeurs
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Ce qui nous définit et nous pousse vers l'avant.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {values.map((val, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                        >
                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${val.color}`}>
                                <val.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{val.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {val.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

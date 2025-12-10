"use client";

import { motion } from "framer-motion";
import { User, Truck, CheckCircle2 } from "lucide-react";

const features = [
    {
        title: "Pour les Clients",
        icon: User,
        description: "Commandez n'importe quoi, n'importe quand.",
        benefits: [
            "Suivi en temps réel de vos commandes",
            "Paiements sécurisés et multiples options",
            "Support client 24/7",
            "Tarification transparente"
        ],
        color: "bg-blue-50 border-blue-100",
        iconColor: "text-blue-600"
    },
    {
        title: "Pour les Chauffeurs",
        icon: Truck,
        description: "Gagnez de l'argent selon votre emploi du temps.",
        benefits: [
            "Horaires flexibles, soyez votre propre patron",
            "Revenus garantis et bonus",
            "Navigation intégrée facile",
            "Assurance et sécurité incluses"
        ],
        color: "bg-emerald-50 border-emerald-100",
        iconColor: "text-emerald-600"
    }
];

export default function AppFeatures() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-4">
                        Une App pour Tous
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Que vous souhaitiez commander ou livrer, Sala a l'outil qu'il vous faut.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className={`p-8 rounded-3xl border ${feature.color}`}
                        >
                            <div className={`w-16 h-16 rounded-2xl bg-white flex items-center justify-center mb-6 shadow-sm ${feature.iconColor}`}>
                                <feature.icon className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                            <p className="text-gray-600 mb-8">{feature.description}</p>

                            <ul className="space-y-4">
                                {feature.benefits.map((benefit, i) => (
                                    <li key={i} className="flex items-start gap-3 text-slate-700">
                                        <CheckCircle2 className={`w-5 h-5 flex-shrink-0 mt-0.5 ${feature.iconColor}`} />
                                        <span>{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

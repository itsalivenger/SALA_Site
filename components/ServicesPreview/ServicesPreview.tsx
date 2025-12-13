"use client";

import { Package, Truck, Clock, Shield } from "lucide-react";
import { motion } from "framer-motion";

const services = [
    {
        title: "Livraison Instantanée",
        description: "Faites livrer vos colis localement en quelques minutes. Rapide, sécurisé et traçable.",
        icon: Clock,
        color: "bg-primary/10 text-primary",
    },
    {
        title: "Logistique Lourde",
        description: "Besoin de déplacer des meubles ou du fret ? Nos camions sont prêts pour les travaux lourds.",
        icon: Truck,
        color: "bg-indigo-100 text-indigo-600",
    },
    {
        title: "Transport Sécurisé",
        description: "Voyagez avec des chauffeurs vérifiés. Votre sécurité est notre priorité absolue sur chaque trajet.",
        icon: Shield,
        color: "bg-emerald-100 text-emerald-600",
    },
    {
        title: "Manutention de Colis",
        description: "Soin particulier pour les articles fragiles. Nous assurons que vos biens arrivent en parfait état.",
        icon: Package,
        color: "bg-orange-100 text-orange-600",
    },
];

export default function ServicesPreview() {
    return (
        <section className="py-24 bg-white" id="services">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-4">
                        Nos Services De Base
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Tout ce dont vous avez besoin, livré avec soin. Nous comblons le fossé entre efficacité et fiabilité.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                        >
                            <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${service.color} group-hover:scale-110 transition-transform`}>
                                <service.icon className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

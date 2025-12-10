"use client";

import { Package, Truck, Clock, Shield, MapPin, Smartphone, Box, Briefcase } from "lucide-react";
import { motion } from "framer-motion";

const allServices = [
    {
        title: "Livraison Instantanée",
        description: "Besoin tout de suite ? Notre service de livraison instantanée achemine vos colis à travers la ville en moins de 60 minutes. Idéal pour les documents, la nourriture et les colis urgents.",
        icon: Clock,
        color: "bg-blue-100 text-blue-600",
    },
    {
        title: "Logistique de Fret Lourd",
        description: "Du mobilier aux matériaux de construction, notre flotte de camions peut gérer n'importe quelle taille de chargement. Déménageurs professionnels inclus sur demande.",
        icon: Truck,
        color: "bg-indigo-100 text-indigo-600",
    },
    {
        title: "VTC Sécurisé",
        description: "Allez où vous devez aller avec notre communauté de chauffeurs vérifiés. Suivi en temps réel, fonctionnalités SOS et options de covoiturage disponibles.",
        icon: Shield,
        color: "bg-emerald-100 text-emerald-600",
    },
    {
        title: "Manutention d'Objets Fragiles",
        description: "Service spécialisé pour l'électronique, le verre et l'art. Nous utilisons des emballages de protection et une manutention dédiée pour garantir zéro dommage.",
        icon: Box,
        color: "bg-orange-100 text-orange-600",
    },
    {
        title: "Transport Interurbain",
        description: "Expédition à travers le pays ? Nous proposons des trajets longue distance programmés avec un suivi du fret à chaque étape.",
        icon: MapPin,
        color: "bg-purple-100 text-purple-600",
    },
    {
        title: "Solutions d'Affaires",
        description: "Intégrations API pour les boutiques e-commerce. Automatisez vos expéditions et laissez-nous gérer votre logistique du dernier kilomètre.",
        icon: Briefcase,
        color: "bg-cyan-100 text-cyan-600",
    },
];

export default function ServicesList() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <h1 className="text-4xl font-extrabold text-slate-900 sm:text-5xl mb-6">
                        Nos Services
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Des solutions logistiques complètes adaptées aux particuliers et aux entreprises.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {allServices.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:shadow-xl hover:bg-white hover:-translate-y-1 transition-all duration-300"
                        >
                            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 ${service.color}`}>
                                <service.icon className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">
                                {service.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

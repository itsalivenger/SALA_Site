"use client";

import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const faqs = [
    {
        category: "Général",
        items: [
            {
                question: "Qu'est-ce que Sala ?",
                answer: "Sala est une super-application logistique qui regroupe la livraison, le transport de fret, le VTC et d'autres services à la demande en une seule plateforme."
            },
            {
                question: "Dans quelles villes Sala est-elle disponible ?",
                answer: "Actuellement, nous opérons principalement à Alger, Oran et Constantine, avec une expansion prévue sur tout le territoire national très prochainement."
            },
            {
                question: "Comment télécharger l'application ?",
                answer: "Vous pouvez télécharger l'application Sala gratuitement sur l'App Store (iOS) et Google Play Store (Android)."
            }
        ]
    },
    {
        category: "Livraisons & Commandes",
        items: [
            {
                question: "Combien coûte une livraison ?",
                answer: "Le prix dépend de la distance, du type de véhicule choisi et de l'urgence. Vous pouvez obtenir une estimation précise dans l'application avant de confirmer votre commande."
            },
            {
                question: "Puis-je suivre ma commande ?",
                answer: "Oui, absolument. Sala offre un suivi en temps réel par GPS pour toutes vos livraisons et courses, du point de départ à l'arrivée."
            },
            {
                question: "Que faire si mon colis est endommagé ?",
                answer: "Nous prenons grand soin de vos objets. Si un incident survient, contactez immédiatement notre service client via la rubrique 'Réclamations' de l'application ou du site web pour une prise en charge rapide."
            }
        ]
    },
    {
        category: "Compte & Paiement",
        items: [
            {
                question: "Quels moyens de paiement acceptez-vous ?",
                answer: "Nous acceptons les espèces à la livraison, ainsi que les paiements électroniques via carte CIB et Edahabia directement dans l'application."
            },
            {
                question: "Comment devenir chauffeur partenaire ?",
                answer: "Téléchargez l'application 'Sala Driver', inscrivez-vous et soumettez les documents requis. Notre équipe examinera votre dossier sous 48h."
            }
        ]
    }
];

export default function FAQList() {
    const [openIndex, setOpenIndex] = useState<string | null>(null);

    const toggleFAQ = (id: string) => {
        setOpenIndex(openIndex === id ? null : id);
    };

    return (
        <section className="py-24 bg-white">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

                {faqs.map((section, sIndex) => (
                    <div key={sIndex} className="mb-12 last:mb-0">
                        <h3 className="text-2xl font-bold text-slate-900 mb-6 border-b border-gray-100 pb-2">
                            {section.category}
                        </h3>

                        <div className="space-y-4">
                            {section.items.map((item, i) => {
                                const id = `${sIndex}-${i}`;
                                const isOpen = openIndex === id;

                                return (
                                    <div
                                        key={i}
                                        className="border border-gray-100 rounded-2xl overflow-hidden transition-all duration-200 hover:border-primary/20 bg-slate-50"
                                    >
                                        <button
                                            onClick={() => toggleFAQ(id)}
                                            className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                                        >
                                            <span className="font-bold text-slate-800 text-lg pr-8">
                                                {item.question}
                                            </span>
                                            <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isOpen ? 'bg-primary text-white' : 'bg-white text-slate-400'}`}>
                                                {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                                            </span>
                                        </button>

                                        <motion.div
                                            initial={false}
                                            animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                            className="overflow-hidden"
                                        >
                                            <div className="p-6 pt-0 text-gray-600 leading-relaxed">
                                                {item.answer}
                                            </div>
                                        </motion.div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ))}

            </div>
        </section>
    );
}

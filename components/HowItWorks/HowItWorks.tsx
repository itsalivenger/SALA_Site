"use client";

import { Download, MousePointerClick, Smile } from "lucide-react";

const steps = [
    {
        title: "Téléchargez l'App",
        description: "Obtenez Sala pour Android ou iOS. Créez votre compte en quelques secondes.",
        icon: Download,
    },
    {
        title: "Passez votre commande",
        description: "Choisissez votre service, définissez le lieu et confirmez les détails.",
        icon: MousePointerClick,
    },
    {
        title: "Détendez-vous",
        description: "Suivez votre livraison ou votre chauffeur en temps réel jusqu'à la fin de la mission.",
        icon: Smile,
    },
];

export default function HowItWorks() {
    return (
        <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
            {/* Background patterns */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute right-0 top-0 w-96 h-96 bg-primary rounded-full blur-[100px]" />
                <div className="absolute left-0 bottom-0 w-96 h-96 bg-indigo-500 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold sm:text-4xl mb-4">
                        Comment ça marche
                    </h2>
                    <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                        Des étapes simples pour avancer. Nous avons rendu cela aussi facile que 1-2-3.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-12 relative">

                    {/* Connector Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-slate-700 -z-10" />

                    {steps.map((step, index) => (
                        <div key={index} className="text-center relative">
                            <div className="w-24 h-24 mx-auto bg-slate-800 rounded-full flex items-center justify-center border-4 border-slate-900 mb-6 shadow-xl relative z-10">
                                <step.icon className="w-10 h-10 text-blue-400" />
                                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-sm font-bold">
                                    {index + 1}
                                </div>
                            </div>
                            <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                            <p className="text-slate-300 leading-relaxed px-4">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}


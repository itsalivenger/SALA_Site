"use client";

import { Download, MousePointerClick, Smile } from "lucide-react";
import { useTranslations } from "next-intl";

export default function HowItWorks() {
    const t = useTranslations('HowItWorks');

    const steps = [
        {
            title: t('step_1_title'),
            description: t('step_1_desc'),
            icon: Download,
        },
        {
            title: t('step_2_title'),
            description: t('step_2_desc'),
            icon: MousePointerClick,
        },
        {
            title: t('step_3_title'),
            description: t('step_3_desc'),
            icon: Smile,
        },
    ];

    return (
        <section className="py-24 relative overflow-hidden bg-slate-900">
            {/* Background Image & Overlays */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/images/comment_ca_marche_section.jpg"
                    alt=""
                    className="w-full h-full object-cover"
                />
                {/* Charcoal Overlay (Institutional) */}
                <div className="absolute inset-0 bg-[#0a0a0b]/80" />
                {/* Subtle Brand Gradient (Matches Hero) */}
                <div className="absolute inset-0 bg-gradient-to-br from-sala-green/10 via-transparent to-sala-purple/10 mix-blend-overlay" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold sm:text-4xl mb-4">
                        {t('title')}
                    </h2>
                    <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                        {t('description')}
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-12 relative">

                    {/* Connector Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-slate-700 -z-10" />

                    {steps.map((step, index) => (
                        <div key={index} className="text-center relative">
                            <div className="w-24 h-24 mx-auto bg-slate-900/50 backdrop-blur-md rounded-full flex items-center justify-center border-4 border-white/10 mb-6 shadow-2xl relative z-10 group hover:border-sala-green/50 transition-colors">
                                <step.icon className="w-10 h-10 text-white group-hover:text-sala-green transition-colors" />
                                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-sala-orange flex items-center justify-center text-sm font-black text-white shadow-lg">
                                    {index + 1}
                                </div>
                            </div>
                            <h3 className="text-xl font-black text-white mb-3">{step.title}</h3>
                            <p className="text-slate-300 leading-relaxed px-4 font-medium">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

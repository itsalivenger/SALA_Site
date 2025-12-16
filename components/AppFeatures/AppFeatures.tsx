"use client";

import { motion } from "framer-motion";
import { User, Truck, CheckCircle2 } from "lucide-react";
import { useTranslations } from "next-intl";

export default function AppFeatures() {
    const t = useTranslations('AppFeatures');

    const features = [
        {
            title: t('client_title'),
            icon: User,
            description: t('client_desc'),
            benefits: [
                t('client_benefit_1'),
                t('client_benefit_2'),
                t('client_benefit_3'),
                t('client_benefit_4')
            ],
            color: "bg-primary/5 border-primary/10",
            iconColor: "text-primary"
        },
        {
            title: t('driver_title'),
            icon: Truck,
            description: t('driver_desc'),
            benefits: [
                t('driver_benefit_1'),
                t('driver_benefit_2'),
                t('driver_benefit_3'),
                t('driver_benefit_4')
            ],
            color: "bg-emerald-50 border-emerald-100",
            iconColor: "text-emerald-600"
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-4">
                        {t('title')}
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        {t('description')}
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

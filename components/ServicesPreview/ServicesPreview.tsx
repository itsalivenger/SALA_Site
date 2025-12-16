"use client";

import { Package, Truck, Clock, Shield } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function ServicesPreview() {
    const t = useTranslations('ServicesPreview');

    const services = [
        {
            title: t('service_1_title'),
            description: t('service_1_desc'),
            icon: Clock,
            color: "bg-primary/10 text-primary",
        },
        {
            title: t('service_2_title'),
            description: t('service_2_desc'),
            icon: Truck,
            color: "bg-indigo-100 text-indigo-600",
        },
        {
            title: t('service_3_title'),
            description: t('service_3_desc'),
            icon: Shield,
            color: "bg-emerald-100 text-emerald-600",
        },
        {
            title: t('service_4_title'),
            description: t('service_4_desc'),
            icon: Package,
            color: "bg-orange-100 text-orange-600",
        },
    ];

    return (
        <section className="py-24 bg-white" id="services">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-4">
                        {t('title')}
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        {t('description')}
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

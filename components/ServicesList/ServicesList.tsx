"use client";

import { Package, Truck, Clock, Shield, MapPin, Smartphone, Box, Briefcase } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function ServicesList() {
    const t = useTranslations('ServicesList');

    const allServices = [
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
            icon: Box,
            color: "bg-orange-100 text-orange-600",
        },
        {
            title: t('service_5_title'),
            description: t('service_5_desc'),
            icon: MapPin,
            color: "bg-purple-100 text-purple-600",
        },
        {
            title: t('service_6_title'),
            description: t('service_6_desc'),
            icon: Briefcase,
            color: "bg-cyan-100 text-cyan-600",
        },
    ];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

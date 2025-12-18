"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { ShieldCheck, Wallet, Truck, BarChart3 } from "lucide-react";

export default function ModularGrid() {
    const t = useTranslations('ModularGrid');

    const cards = [
        {
            title: t('card_1_title'),
            description: t('card_1_desc'),
            icon: BarChart3,
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600",
            color: "text-blue-500",
            bgAccent: "bg-blue-500/10",
            borderAccent: "border-blue-500/20"
        },
        {
            title: t('card_2_title'),
            description: t('card_2_desc'),
            icon: ShieldCheck,
            image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=600",
            color: "text-green-500",
            bgAccent: "bg-green-500/10",
            borderAccent: "border-green-500/20"
        },
        {
            title: t('card_3_title'),
            description: t('card_3_desc'),
            icon: Truck,
            image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=600",
            color: "text-purple-500",
            bgAccent: "bg-purple-500/10",
            borderAccent: "border-purple-500/20"
        },
        {
            title: t('card_4_title'),
            description: t('card_4_desc'),
            icon: Wallet,
            image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=600",
            color: "text-orange-500",
            bgAccent: "bg-orange-500/10",
            borderAccent: "border-orange-500/20"
        }
    ];

    return (
        <section className="py-12 bg-slate-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Desktop Grid / Mobile Carousel Container */}
                <div className="relative">
                    {/* Desktop: Grid | Mobile: Flex (for horizontal scroll) */}
                    <div className="flex lg:grid lg:grid-cols-4 gap-6 overflow-x-auto lg:overflow-visible pb-8 lg:pb-0 scroll-smooth no-scrollbar snap-x snap-mandatory">
                        {cards.map((card, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.02 }}
                                className="min-w-[280px] sm:min-w-[320px] lg:min-w-0 snap-center"
                            >
                                <div className={`h-full group relative bg-white rounded-3xl border-2 ${card.borderAccent} p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col`}>
                                    {/* Icon Backdrop */}
                                    <div className={`w-14 h-14 rounded-2xl ${card.bgAccent} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                        <card.icon className={`w-7 h-7 ${card.color}`} />
                                    </div>

                                    {/* Text Content */}
                                    <h3 className="text-xl font-black text-slate-900 mb-3 tracking-tight">
                                        {card.title}
                                    </h3>
                                    <p className="text-slate-500 text-sm font-medium leading-relaxed">
                                        {card.description}
                                    </p>

                                    {/* Subtle Image Background (Cropped/Placeholder Feel) */}
                                    <div className="absolute right-0 bottom-0 w-32 h-32 opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none">
                                        <img
                                            src={card.image}
                                            alt=""
                                            className="w-full h-full object-cover rounded-tl-[3rem] grayscale"
                                        />
                                    </div>

                                    {/* Brand Accent Indicator */}
                                    <div className={`absolute bottom-6 right-8 w-1 h-1 rounded-full ${card.color.replace('text-', 'bg-')} opacity-0 group-hover:opacity-100 transition-opacity`} />
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Mobile Swipe Hint (Optional) */}
                    <div className="lg:hidden flex justify-center mt-4 gap-1">
                        {cards.map((_, i) => (
                            <div key={i} className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

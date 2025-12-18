"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Package, Users, MapPin, Star } from "lucide-react";

function CountUp({ target, duration = 2 }: { target: string, duration?: number }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const numericPart = parseFloat(target.replace(/[^0-9.]/g, ''));
    const suffix = target.replace(/[0-9.]/g, '');

    const [count, setCount] = useState(0);

    useEffect(() => {
        if (isInView) {
            let start = 0;
            const end = numericPart;
            const startTime = performance.now();

            const updateCount = (now: number) => {
                const elapsed = (now - startTime) / 1000;
                const progress = Math.min(elapsed / duration, 1);

                const easedProgress = progress * (2 - progress);
                const current = easedProgress * end;

                setCount(current);

                if (progress < 1) {
                    requestAnimationFrame(updateCount);
                } else {
                    setCount(end);
                }
            };

            requestAnimationFrame(updateCount);
        }
    }, [isInView, numericPart, duration]);

    return (
        <span ref={ref}>
            {numericPart % 1 === 0 ? Math.floor(count) : count.toFixed(1)}
            {suffix}
        </span>
    );
}

export default function Stats() {
    const t = useTranslations('Stats');

    const stats = [
        {
            value: "50k+",
            label: t('stat_1_label'),
            icon: Package
        },
        {
            value: "12k+",
            label: t('stat_2_label'),
            icon: Users
        },
        {
            value: "20+",
            label: t('stat_3_label'),
            icon: MapPin
        },
        {
            value: "4.8/5",
            label: t('stat_4_label'),
            icon: Star
        },
    ];

    return (
        <section className="relative py-24 overflow-hidden bg-[#0a0a0b]">
            {/* Suitable Brand Contrast Layer */}
            <div className="absolute inset-0 z-0">
                {/* Subtle Brand Gradient (Matches Hero) */}
                <div className="absolute inset-0 bg-gradient-to-br from-sala-green/5 via-transparent to-sala-purple/5 opacity-50" />
                {/* Radial Glow for Focus */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.05),transparent_70%)]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            className="flex flex-col items-center text-center group"
                        >
                            <div className="mb-6 p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:border-sala-green/30 group-hover:bg-sala-green/5 transition-all duration-500">
                                <stat.icon className="w-8 h-8 text-slate-400 group-hover:text-sala-green transition-colors" />
                            </div>

                            <div className="text-4xl md:text-5xl font-black text-sala-green mb-3 tracking-tight">
                                <CountUp target={stat.value} />
                            </div>

                            <div className="text-slate-400 font-bold text-sm sm:text-base uppercase tracking-widest">
                                {stat.label}
                            </div>

                            <div className="mt-4 w-8 h-1 bg-gradient-to-r from-sala-green/0 via-sala-green/40 to-sala-green/0 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

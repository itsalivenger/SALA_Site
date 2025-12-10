"use client";

import { motion } from "framer-motion";

// Using simple text placeholders for logos, in a real app these would be SVGs or Images
const partners = [
    "TechLogistics", "GreenDelivery", "FastTrack", "UrbanMove", "SafeCargo", "EcoDrive",
    "SwiftShip", "MegaFreight", "CityLink", "ConnectExp"
];

export default function Partners() {
    return (
        <section className="py-12 bg-white border-b border-gray-100 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                    Ils nous font confiance
                </p>
            </div>

            <div className="relative flex">
                {/* Gradient Masks */}
                <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />

                <motion.div
                    className="flex whitespace-nowrap"
                    animate={{ x: [0, -1000] }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 20,
                            ease: "linear",
                        },
                    }}
                >
                    {[...partners, ...partners, ...partners].map((partner, index) => (
                        <div
                            key={index}
                            className="inline-flex items-center justify-center mx-8 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer"
                        >
                            <span className="text-2xl font-bold font-serif text-slate-800">{partner}</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

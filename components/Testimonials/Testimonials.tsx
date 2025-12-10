"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

// Expanded list for better grid visual
const testimonials = [
    {
        name: "Sarah Ahmed",
        role: "Cliente Régulière",
        content: "Sala a complètement changé la façon dont j'envoie des cadeaux à ma famille. Rapide et sûr !",
        rating: 5,
        avatar: "https://ui-avatars.com/api/?name=Sarah+Ahmed&background=0D8ABC&color=fff",
        featured: true
    },
    {
        name: "Mohamed Ali",
        role: "E-commerçant",
        content: "Mes clients sont ravis de la livraison express. Sala est un partenaire clé pour ma croissance.",
        rating: 5,
        avatar: "https://ui-avatars.com/api/?name=Mohamed+Ali&background=random",
        featured: false
    },
    {
        name: "Amira K.",
        role: "Étudiante",
        content: "L'application est super intuitive. Je l'utilise pour mes trajets quotidiens.",
        rating: 5,
        avatar: "https://ui-avatars.com/api/?name=Amira+K&background=random",
        featured: false
    },
    {
        name: "Karim S.",
        role: "Boutique Mode",
        content: "Le service client est très réactif. Une solution fiable pour les pros.",
        rating: 4,
        avatar: "https://ui-avatars.com/api/?name=Karim+S&background=random",
        featured: false
    }
];

export default function Testimonials() {
    return (
        <section className="py-24 relative overflow-hidden bg-slate-50">
            {/* Animated Gradient Background */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-200/40 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-200/40 rounded-full blur-[120px] animate-pulse delay-1000" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-blue-100 text-blue-600 text-sm font-bold shadow-sm mb-6">
                            <Star className="w-4 h-4 fill-blue-600" />
                            Avis Clients
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                            Ils parlent de nous <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">mieux que personne.</span>
                        </h2>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            Découvrez pourquoi des milliers d'utilisateurs et d'entreprises choisissent Sala pour leurs besoins quotidiens. Une satisfaction client au cœur de notre mission.
                        </p>

                        <div className="flex items-center gap-8">
                            <div>
                                <p className="text-3xl font-bold text-slate-900">15k+</p>
                                <p className="text-sm text-gray-500">Utilisateurs heureux</p>
                            </div>
                            <div className="h-10 w-px bg-gray-200" />
                            <div>
                                <p className="text-3xl font-bold text-slate-900">4.9/5</p>
                                <p className="text-sm text-gray-500">Note moyenne</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Grid (Masonry-ish) */}
                    <div className="grid sm:grid-cols-2 gap-6">
                        <div className="space-y-6 mt-12 sm:mt-0">
                            {testimonials.slice(0, 2).map((t, idx) => (
                                <TestimonialCard key={idx} data={t} index={idx} />
                            ))}
                        </div>
                        <div className="space-y-6 sm:-mt-12">
                            {testimonials.slice(2, 4).map((t, idx) => (
                                <TestimonialCard key={idx} data={t} index={idx + 2} />
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

function TestimonialCard({ data, index }: { data: any, index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`bg-white p-6 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 relative group hover:-translate-y-1 transition-transform duration-300`}
        >
            <Quote className="absolute top-6 right-6 w-8 h-8 text-blue-100 group-hover:text-blue-500 transition-colors duration-300" />

            <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-3.5 h-3.5 ${i < data.rating ? "fill-amber-400 text-amber-400" : "text-gray-200"}`} />
                ))}
            </div>

            <p className="text-slate-700 text-base mb-6 leading-relaxed font-medium">
                "{data.content}"
            </p>

            <div className="flex items-center gap-3">
                <img src={data.avatar} alt={data.name} className="w-10 h-10 rounded-full bg-gray-100 object-cover" />
                <div>
                    <h4 className="font-bold text-slate-900 text-sm">{data.name}</h4>
                    <p className="text-xs text-gray-500">{data.role}</p>
                </div>
            </div>
        </motion.div>
    )
}

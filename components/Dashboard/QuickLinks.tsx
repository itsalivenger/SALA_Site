"use client";

import Link from "next/link";
import { UserPlus, Truck, ShoppingBag, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";

const links = [
    { title: "Ajouter un Livreur", href: "/admin/drivers/new", icon: Truck, color: "bg-blue-500", desc: "Créer un nouveau compte partenaire" },
    { title: "Gérer les Plaintes", href: "/admin/complaints", icon: AlertCircle, color: "bg-rose-500", desc: "Voir les tickets ouverts" },
    { title: "Voir les Commandes", href: "/admin/orders", icon: ShoppingBag, color: "bg-emerald-500", desc: "Suivre les livraisons en cours" },
];

export default function QuickLinks() {
    return (
        <div className="space-y-4">
            <h3 className="text-lg font-bold text-slate-800">Actions Rapides</h3>
            <div className="grid gap-4">
                {links.map((link, idx) => {
                    const Icon = link.icon;
                    return (
                        <motion.div
                            key={idx}
                            whileHover={{ x: 5 }}
                            className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-all cursor-pointer group"
                        >
                            <Link href={link.href} className="flex items-center gap-4">
                                <div className={`p-3 rounded-lg ${link.color} text-white shadow-lg shadow-${link.color}/30`}>
                                    <Icon className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-800 group-hover:text-primary transition-colors">{link.title}</h4>
                                    <p className="text-xs text-slate-500">{link.desc}</p>
                                </div>
                            </Link>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}

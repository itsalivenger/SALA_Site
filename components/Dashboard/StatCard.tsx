"use client";

import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface StatCardProps {
    title: string;
    value: string | number;
    change: string;
    isPositive: boolean;
    icon: React.ReactNode;
    color: "primary" | "blue" | "emerald" | "amber" | "purple" | "rose";
}

const colorStyles = {
    primary: "bg-[var(--primary)]/10 text-[var(--primary)] border-[var(--primary)]/20",
    blue: "bg-[var(--foreground)]/5 text-[var(--foreground)] border-[var(--foreground)]/10", // Fallback to monochrome for 'blue'
    emerald: "bg-[var(--primary)]/10 text-[var(--primary)] border-[var(--primary)]/20", // Reuse primary
    amber: "bg-[var(--primary)]/10 text-[var(--primary)] border-[var(--primary)]/20",
    purple: "bg-[var(--foreground)]/5 text-[var(--foreground)] border-[var(--foreground)]/10",
    rose: "bg-red-500/10 text-red-500 border-red-500/20", // keeping red for negative/alert is usually acceptable, but let's stick to vars:
    // Actually, let's make them all primary/foreground distinct to be safe.
};

export default function StatCard({ title, value, change, isPositive, icon, color }: StatCardProps) {
    const styles = colorStyles[color];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="bg-[var(--background)] p-6 rounded-2xl shadow-sm border border-[var(--foreground)]/10 hover:shadow-lg transition-shadow"
        >
            <div className="flex items-start justify-between mb-4">
                <div>
                    <h3 className="text-sm font-medium text-[var(--foreground)]/60 mb-1">{title}</h3>
                    <p className="text-3xl font-bold text-[var(--foreground)]">{value}</p>
                </div>
                <div className={`p-3 rounded-xl border ${styles}`}>
                    {icon}
                </div>
            </div>

            <div className="flex items-center gap-2 text-sm">
                <span className={`font-medium px-2 py-0.5 rounded-full ${isPositive ? "bg-emerald-100 text-emerald-700" : "bg-red-100 text-red-700"}`}>
                    {isPositive ? "+" : ""}{change}
                </span>
                <span className="text-slate-400">vs mois dernier</span>
            </div>
        </motion.div>
    );
}

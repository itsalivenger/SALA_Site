"use client";

import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, AlertCircle, AlertTriangle, Info, X } from "lucide-react";

export type PopupType = "success" | "error" | "warning" | "info";

export interface StatusPopupProps {
    type: PopupType;
    title: string;
    message: string;
    isOpen: boolean;
    onClose: () => void;
}

const styles = {
    success: {
        bg: "bg-emerald-500/10",
        border: "border-emerald-500/20",
        text: "text-emerald-500",
        icon: CheckCircle,
        gradient: "from-emerald-500/20 to-teal-500/20",
    },
    error: {
        bg: "bg-red-500/10",
        border: "border-red-500/20",
        text: "text-red-500",
        icon: AlertCircle,
        gradient: "from-red-500/20 to-pink-500/20",
    },
    warning: {
        bg: "bg-amber-500/10",
        border: "border-amber-500/20",
        text: "text-amber-500",
        icon: AlertTriangle,
        gradient: "from-amber-500/20 to-orange-500/20",
    },
    info: {
        bg: "bg-[var(--primary)]/10",
        border: "border-[var(--primary)]/20",
        text: "text-[var(--primary)]",
        icon: Info,
        gradient: "from-[var(--primary)]/20 to-blue-500/20",
    },
};

export default function StatusPopup({ type, title, message, isOpen, onClose }: StatusPopupProps) {
    const style = styles[type];
    const Icon = style.icon;

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
                        className="relative w-full max-w-lg overflow-hidden bg-white shadow-2xl rounded-3xl ring-1 ring-black/5"
                    >
                        {/* Dynamic Gradient Header/Background */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${style.gradient} opacity-10 pointer-events-none`} />

                        <div className="relative p-8">
                            <div className="flex flex-col items-center text-center gap-6">
                                {/* Icon Bubble - Larger */}
                                <div className={`w-20 h-20 rounded-2xl ${style.bg} ${style.border} border-2 flex items-center justify-center shadow-lg`}>
                                    <Icon className={`w-10 h-10 ${style.text}`} />
                                </div>

                                {/* Content */}
                                <div className="space-y-2">
                                    <h3 className="text-3xl font-bold text-slate-900 tracking-tight">{title}</h3>
                                    <p className="text-slate-600 text-lg leading-relaxed">{message}</p>
                                </div>

                                {/* Close Button - Bottom Action */}
                                <button
                                    onClick={onClose}
                                    className="mt-2 px-6 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold transition-colors cursor-pointer"
                                >
                                    Fermer
                                </button>
                            </div>

                            {/* Top Right Close X */}
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 transition-colors cursor-pointer"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    LayoutDashboard,
    Users,
    Truck,
    ShoppingBag,
    MessageSquare,
    Settings,
    LogOut,
    Menu,
    X,
    Mail,
    Shield
} from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", href: "/admin/dashboard" },
    { icon: Users, label: "Clients", href: "/admin/users" },
    { icon: Truck, label: "Livreurs", href: "/admin/drivers" },
    { icon: ShoppingBag, label: "Commandes", href: "/admin/orders" },
    { icon: MessageSquare, label: "Plaintes", href: "/admin/complaints" },
    { icon: Mail, label: "Newsletter", href: "/admin/newsletter" },
    { icon: Shield, label: "Admins", href: "/admin/admins" },
    { icon: Settings, label: "Paramètres", href: "/admin/settings" },
];

export default function AdminSidebar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(true);

    return (
        <>
            {/* Mobile Toggle */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-md"
            >
                {isOpen ? <X className="w-6 h-6 text-slate-800" /> : <Menu className="w-6 h-6 text-slate-800" />}
            </button>

            {/* Sidebar Container */}
            <motion.aside
                initial={false}
                animate={{
                    width: isOpen ? 280 : 0,
                    opacity: isOpen ? 1 : 0
                }}
                className={`fixed lg:sticky top-0 left-0 h-screen bg-slate-900 border-r border-slate-800 z-40 overflow-hidden shadow-2xl ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0 lg:w-0 lg:opacity-0"
                    }`}
            >
                <div className="flex flex-col h-full w-[280px]">
                    {/* Header */}
                    <div className="p-8 border-b border-slate-800">
                        <h1 className="text-2xl font-bold text-white tracking-tight">Sala<span className="text-primary">Admin</span></h1>
                        <p className="text-xs text-slate-400 mt-1">Control Tower</p>
                    </div>

                    {/* Navigation */}
                    <nav className="flex-1 px-4 py-8 space-y-2">
                        {menuItems.map((item) => {
                            const Icon = item.icon;
                            const isActive = pathname === item.href;

                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all group ${isActive
                                        ? "bg-primary text-white shadow-lg shadow-primary/25 font-medium"
                                        : "text-slate-400 hover:text-white hover:bg-white/5"
                                        }`}
                                >
                                    <Icon className={`w-5 h-5 ${isActive ? "text-white" : "text-slate-400 group-hover:text-white"}`} />
                                    <span>{item.label}</span>
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Footer */}
                    <div className="p-4 border-t border-slate-800">
                        <button className="flex items-center gap-3 px-4 py-3 w-full rounded-xl text-red-400 hover:bg-red-500/10 hover:text-red-300 transition-colors">
                            <LogOut className="w-5 h-5" />
                            <span>Déconnexion</span>
                        </button>
                    </div>
                </div>
            </motion.aside>

            {/* Mobile Backdrop */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsOpen(false)}
                        className="fixed inset-0 bg-black/50 z-30 lg:hidden backdrop-blur-sm"
                    />
                )}
            </AnimatePresence>
        </>
    );
}

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
    Shield,
    ChevronLeft,
    ChevronRight
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
    const [isOpen, setIsOpen] = useState(true); // Desktop state
    const [isMobileOpen, setIsMobileOpen] = useState(false); // Mobile drawer state

    return (
        <>
            {/* Mobile Toggle Button (Visible only on mobile) */}
            <button
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-md hover:bg-slate-50 transition-colors"
                aria-label="Toggle Menu"
            >
                {isMobileOpen ? <X className="w-6 h-6 text-slate-800" /> : <Menu className="w-6 h-6 text-slate-800" />}
            </button>

            {/* Desktop Sidebar (Sticky, Collapsible) */}
            <motion.aside
                initial={false}
                animate={{
                    width: isOpen ? 280 : 80,
                }}
                className="hidden lg:flex flex-col sticky top-0 h-screen bg-slate-900 border-r border-slate-800 z-40 overflow-hidden shadow-2xl transition-all duration-300"
            >
                {/* Header */}
                <div className={`p-6 border-b border-slate-800 flex items-center ${isOpen ? "justify-between" : "justify-center"}`}>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <h1 className="text-xl font-bold text-white tracking-tight">Sala<span className="text-primary">Admin</span></h1>
                        </motion.div>
                    )}

                    {/* Desktop Collapse Toggle */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className={`p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors ${!isOpen && "mx-auto"}`}
                    >
                        {isOpen ? <ChevronLeft className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
                    </button>
                </div>

                {/* Navigation */}
                <nav className="flex-1 px-3 py-6 space-y-2 overflow-y-auto overflow-x-hidden">
                    {menuItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = pathname === item.href;

                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`flex items-center gap-3 px-3 py-3 rounded-xl transition-all group relative ${isActive
                                    ? "bg-primary text-white shadow-lg shadow-primary/25"
                                    : "text-slate-400 hover:text-white hover:bg-white/5"
                                    } ${!isOpen && "justify-center"}`}
                                title={!isOpen ? item.label : undefined}
                            >
                                <Icon className={`w-5 h-5 flex-shrink-0 ${isActive ? "text-white" : "text-slate-400 group-hover:text-white"}`} />
                                {isOpen && (
                                    <motion.span
                                        initial={{ opacity: 0, width: 0 }}
                                        animate={{ opacity: 1, width: "auto" }}
                                        exit={{ opacity: 0, width: 0 }}
                                        className="whitespace-nowrap font-medium"
                                    >
                                        {item.label}
                                    </motion.span>
                                )}
                            </Link>
                        );
                    })}
                </nav>

                {/* Footer */}
                <div className="p-4 border-t border-slate-800">
                    <button
                        onClick={async () => {
                            if (!confirm("Voulez-vous vraiment vous déconnecter ?")) return;
                            await fetch('/api/admin/logout', { method: 'POST' });
                            window.location.href = '/admin/login';
                        }}
                        className={`flex items-center gap-3 px-3 py-3 w-full rounded-xl text-red-400 hover:bg-red-500/10 hover:text-red-300 transition-colors ${!isOpen && "justify-center"}`}
                    >
                        <LogOut className="w-5 h-5 flex-shrink-0" />
                        {isOpen && <span className="font-medium">Déconnexion</span>}
                    </button>
                </div>
            </motion.aside>

            {/* Mobile Drawer (Fixed overlay) */}
            <motion.aside
                initial={false}
                animate={{
                    x: isMobileOpen ? 0 : "-100%"
                }}
                className="lg:hidden fixed top-0 left-0 h-screen w-[280px] bg-slate-900 z-50 shadow-2xl overflow-y-auto"
            >
                <div className="p-6 border-b border-slate-800 flex justify-between items-center">
                    <h1 className="text-xl font-bold text-white">Sala<span className="text-primary">Admin</span></h1>
                    <button onClick={() => setIsMobileOpen(false)} className="p-2 text-slate-400 hover:text-white">
                        <X className="w-6 h-6" />
                    </button>
                </div>

                <nav className="p-4 space-y-2">
                    {menuItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setIsMobileOpen(false)}
                                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${isActive
                                    ? "bg-primary text-white"
                                    : "text-slate-400 hover:text-white hover:bg-white/5"
                                    }`}
                            >
                                <Icon className="w-5 h-5" />
                                <span className="font-medium">{item.label}</span>
                            </Link>
                        );
                    })}
                </nav>
            </motion.aside>

            {/* Mobile Backdrop */}
            <AnimatePresence>
                {isMobileOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsMobileOpen(false)}
                        className="fixed inset-0 bg-black/50 z-40 lg:hidden backdrop-blur-sm"
                    />
                )}
            </AnimatePresence>
        </>
    );
}

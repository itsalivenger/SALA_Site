"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Lock, Mail, ArrowRight, Eye, EyeOff } from "lucide-react";

export default function AdminLogin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    // Mock handle login - since no backend yet
    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate network delay
        setTimeout(() => {
            setIsLoading(false);
            alert("Login functionality to be implemented");
        }, 1500);
    };

    return (
        <div className="min-h-screen w-full bg-[var(--background)] flex items-center justify-center p-4">
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-[var(--primary)] opacity-[0.05] blur-[100px]" />
                <div className="absolute top-[20%] -right-[10%] w-[40%] h-[40%] rounded-full bg-[var(--primary)] opacity-[0.05] blur-[100px]" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="w-full max-w-md relative z-10"
            >
                <div className="bg-[var(--background)] border border-[var(--foreground)]/10 rounded-2xl shadow-xl overflow-hidden backdrop-blur-sm">
                    {/* Header */}
                    <div className="px-8 pt-12 pb-8 text-center">
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="w-16 h-16 bg-[var(--primary)]/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-[var(--primary)]"
                        >
                            <Lock size={32} />
                        </motion.div>
                        <h1 className="text-2xl font-bold mb-2 text-[var(--foreground)]">Admin Portal</h1>
                        <p className="text-[var(--foreground)]/60 text-sm">
                            Secure access for authorized personnel only
                        </p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleLogin} className="px-8 pb-12 space-y-6">
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-[var(--foreground)]/80 ml-1">Email Address</label>
                                <div className="relative group">
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--foreground)]/40 group-focus-within:text-[var(--primary)] transition-colors" />
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        className="w-full bg-[var(--foreground)]/5 border border-[var(--foreground)]/10 rounded-xl py-3 pl-12 pr-4 text-[var(--foreground)] placeholder:text-[var(--foreground)]/30 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/50 transition-all"
                                        placeholder="admin@sala.com"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-[var(--foreground)]/80 ml-1">Password</label>
                                <div className="relative group">
                                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--foreground)]/40 group-focus-within:text-[var(--primary)] transition-colors" />
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                        className="w-full bg-[var(--foreground)]/5 border border-[var(--foreground)]/10 rounded-xl py-3 pl-12 pr-12 text-[var(--foreground)] placeholder:text-[var(--foreground)]/30 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/50 transition-all"
                                        placeholder="••••••••"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-[var(--foreground)]/40 hover:text-[var(--foreground)]/80 transition-colors cursor-pointer"
                                    >
                                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                    </button>
                                </div>
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-[var(--primary)] hover:bg-[var(--primary)]/90 text-white font-medium py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-[var(--primary)]/25 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer group"
                        >
                            {isLoading ? (
                                <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            ) : (
                                <>
                                    Sign In
                                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </>
                            )}
                        </button>
                    </form>
                </div>

                <div className="mt-8 text-center">
                    <p className="text-xs text-[var(--foreground)]/40">
                        &copy; {new Date().getFullYear()} Sala. internal system.
                    </p>
                </div>
            </motion.div>
        </div>
    );
}

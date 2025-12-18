"use client";

import { useState } from "react";
import { Send, CheckCircle, Mail, Sparkles } from "lucide-react";
import { usePopup } from "@/context/PopupContext";
import { useTranslations } from "next-intl";

export default function Newsletter() {
    const t = useTranslations('Newsletter');
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
    const { showPopup } = usePopup();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!email) return;

        setStatus("loading");

        try {
            const res = await fetch("/api/newsletter", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.error || "Erreur serveur");
            }

            // Handle "Already Subscribed" case
            if (data.exists) {
                showPopup({
                    type: "warning",
                    title: t('popup_already_subscribed_title'),
                    message: t('popup_already_subscribed_message'),
                });
            }
            // Handle Success case
            else {
                showPopup({
                    type: "success",
                    title: t('popup_success_title'),
                    message: t('popup_success_message'),
                });
            }

            setEmail("");
        } catch (error: any) {
            console.error(error);
            // Error Popup
            showPopup({
                type: "error",
                title: t('popup_error_title'),
                message: t('popup_error_message'),
            });
        } finally {
            setStatus("idle");
        }
    };

    return (
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-slate-900">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] animate-pulse delay-1000" />

                {/* Decorative Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(var(--primary),0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(var(--primary),0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Left Content */}
                    <div className="text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold mb-6">
                            <Sparkles className="w-4 h-4" />
                            {t('badge')}
                        </div>

                        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
                            {t('title_part1')}{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">
                                {t('title_part2')}
                            </span>
                        </h2>

                        <p className="text-lg text-slate-300 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
                            {t('description')}
                        </p>

                        {/* Benefits List */}
                        <div className="hidden lg:flex flex-col gap-3 text-slate-300">
                            {[
                                t('benefit_1'),
                                t('benefit_2'),
                                t('benefit_3')
                            ].map((benefit, idx) => (
                                <div key={idx} className="flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                    <span className="text-sm">{benefit}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Form */}
                    <div className="relative">
                        {/* Decorative Card Background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-600/5 rounded-3xl blur-xl" />

                        <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center">
                                    <Mail className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white">{t('form_title')}</h3>
                                    <p className="text-sm text-slate-400">{t('form_subtitle')}</p>
                                </div>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label htmlFor="newsletter-email" className="block text-sm font-semibold text-slate-300 mb-2">
                                        {t('label_email')}
                                    </label>
                                    <input
                                        id="newsletter-email"
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder={t('placeholder_email')}
                                        disabled={status === "loading" || status === "success"}
                                        className="w-full px-5 py-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50 text-white placeholder:text-slate-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                                        required
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={status === "loading" || status === "success"}
                                    className="w-full px-6 py-4 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/30 hover:shadow-primary/50 disabled:opacity-50 disabled:cursor-not-allowed group"
                                >
                                    {status === "loading" ? (
                                        <>
                                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                            <span>{t('button_loading')}</span>
                                        </>
                                    ) : (
                                        <>
                                            <span>{t('button_submit')}</span>
                                            <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                        </>
                                    )}
                                </button>

                                <p className="text-xs text-slate-400 text-center">
                                    {t('disclaimer')}
                                </p>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

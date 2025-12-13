"use client";

import { Send } from "lucide-react";

export default function ContactForm() {
    return (
        <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Envoyez-nous un message</h3>

            <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-semibold text-slate-900">Nom complet</label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Votre nom"
                            className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-semibold text-slate-900">Email</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="votre@email.com"
                            className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-semibold text-slate-900">Sujet</label>
                    <select
                        id="subject"
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    >
                        <option value="">Sélectionnez un sujet</option>
                        <option value="support">Support Technique</option>
                        <option value="sales">Commercial / Ventes</option>
                        <option value="partnership">Partenariats</option>
                        <option value="other">Autre</option>
                    </select>
                </div>

                <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-semibold text-slate-900">Message</label>
                    <textarea
                        id="message"
                        rows={5}
                        placeholder="Comment pouvons-nous vous aider ?"
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                    />
                </div>

                <button
                    type="button" // Change to submit when connected
                    className="w-full py-4 px-6 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl transition-colors flex items-center justify-center gap-2"
                >
                    <Send className="w-5 h-5" />
                    Envoyer le message
                </button>
            </form>
        </div>
    );
}

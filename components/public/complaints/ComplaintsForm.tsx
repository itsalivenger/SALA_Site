"use client";

import { AlertCircle, Upload, Send } from "lucide-react";

export default function ComplaintsForm() {
    return (
        <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-xl max-w-3xl mx-auto -mt-10 relative z-20">

            <div className="flex items-center gap-3 mb-8 p-4 bg-red-50 text-red-700 rounded-xl border border-red-100">
                <AlertCircle className="w-6 h-6 flex-shrink-0" />
                <p className="text-sm">
                    Veuillez fournir autant de détails que possible pour nous aider à résoudre votre problème rapidement.
                </p>
            </div>

            <form className="space-y-6">
                {/* Personal Info */}
                <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-semibold text-slate-900">Nom complet</label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Votre nom"
                            className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all"
                        />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-semibold text-slate-900">Email</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="votre@email.com"
                            className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all"
                        />
                    </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-semibold text-slate-900">Téléphone</label>
                        <input
                            type="tel"
                            id="phone"
                            placeholder="Votre numéro"
                            className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all"
                        />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="orderId" className="text-sm font-semibold text-slate-900">N° de Commande (Optionnel)</label>
                        <input
                            type="text"
                            id="orderId"
                            placeholder="#123456"
                            className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all"
                        />
                    </div>
                </div>

                {/* Category */}
                <div className="space-y-2">
                    <label htmlFor="category" className="text-sm font-semibold text-slate-900">Type de problème</label>
                    <select
                        id="category"
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all"
                    >
                        <option value="">Sélectionnez une catégorie</option>
                        <option value="late">Retard de livraison</option>
                        <option value="damaged">Colis endommagé</option>
                        <option value="missing">Colis manquant</option>
                        <option value="driver">Comportement du chauffeur</option>
                        <option value="app">Problème technique (App)</option>
                        <option value="other">Autre</option>
                    </select>
                </div>

                {/* Message */}
                <div className="space-y-2">
                    <label htmlFor="description" className="text-sm font-semibold text-slate-900">Description détaillée</label>
                    <textarea
                        id="description"
                        rows={5}
                        placeholder="Décrivez ce qui s'est passé..."
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all resize-none"
                    />
                </div>

                {/* File Upload Placeholder */}
                <div className="space-y-2">
                    <span className="text-sm font-semibold text-slate-900">Preuves (Photos/Captures d'écran)</span>
                    <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:bg-gray-50 transition-colors cursor-pointer">
                        <Upload className="w-8 h-8 mx-auto text-gray-400 mb-2" />
                        <p className="text-sm text-gray-500">Cliquez pour télécharger ou glissez-déposez des fichiers ici</p>
                        <p className="text-xs text-gray-400 mt-1">JPG, PNG, PDF (Max 5MB)</p>
                    </div>
                </div>

                <button
                    type="button" // Change to submit when connected
                    className="w-full py-4 px-6 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl transition-colors flex items-center justify-center gap-2"
                >
                    <Send className="w-5 h-5" />
                    Soumettre la réclamation
                </button>
            </form>
        </div>
    );
}

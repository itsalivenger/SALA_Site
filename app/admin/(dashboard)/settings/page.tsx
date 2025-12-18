"use client";

import { useState, useEffect } from "react";
import { Save, Loader2, MapPin, Phone, Smartphone, Share2, ShieldAlert, ShoppingBag } from "lucide-react";
import { usePopup } from "@/context/PopupContext";

export default function SettingsPage() {
    const { showPopup } = usePopup();

    // Loading States
    const [isLoading, setIsLoading] = useState(true);
    const [isSaving, setIsSaving] = useState(false);

    // Form Data
    const [formData, setFormData] = useState({
        companyAddress: "",
        companyPhone: "",
        companyEmail: "",
        facebookUrl: "",
        instagramUrl: "",
        twitterUrl: "",
        tiktokUrl: "",
        iosAppUrl: "",
        androidAppUrl: "",
        deliveryFee: 0,
        minOrderAmount: 0,
        currency: "MAD",
        maintenanceMode: false
    });

    // Fetch Settings on Mount
    useEffect(() => {
        const fetchSettings = async () => {
            try {
                const res = await fetch('/api/admin/settings');
                if (!res.ok) throw new Error("Failed to fetch settings");
                const data = await res.json();
                // Ensure default values for new fields if they don't exist yet
                setFormData(prev => ({ ...prev, ...data }));
            } catch (error) {
                console.error("Error fetching settings:", error);
                showPopup({ type: "error", title: "Erreur", message: "Impossible de charger les paramètres." });
            } finally {
                setIsLoading(false);
            }
        };

        fetchSettings();
    }, [showPopup]);

    // Handle Save
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSaving(true);

        try {
            const res = await fetch('/api/admin/settings', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (!res.ok) throw new Error("Failed to save settings");

            showPopup({ type: "success", title: "Succès", message: "Paramètres enregistrés avec succès." });

        } catch (error) {
            console.error("Save error:", error);
            showPopup({ type: "error", title: "Erreur", message: "Erreur lors de l'enregistrement." });
        } finally {
            setIsSaving(false);
        }
    };

    if (isLoading) {
        return (
            <div className="flex h-full items-center justify-center">
                <Loader2 className="w-8 h-8 animate-spin text-[var(--primary)]" />
            </div>
        );
    }

    return (
        <div className="space-y-8 max-w-5xl mx-auto pb-12">

            {/* Page Header */}
            <div>
                <h1 className="text-3xl font-bold text-[var(--foreground)] tracking-tight">Paramètres</h1>
                <p className="text-[var(--foreground)]/60 mt-1">Gérez la configuration globale de votre application.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">

                {/* 1. Contact Info */}
                <div className="bg-[var(--background)] p-6 sm:p-8 rounded-2xl border border-[var(--foreground)]/10 shadow-sm space-y-6">
                    <div className="space-y-1 pb-4 border-b border-[var(--foreground)]/5">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-blue-500/10 rounded-lg">
                                <MapPin className="w-5 h-5 text-blue-500" />
                            </div>
                            <h2 className="text-lg font-bold text-[var(--foreground)]">Contact</h2>
                        </div>
                        <p className="text-sm" style={{ color: 'var(--text-black)' }}>Numéro de téléphone et adresse du siège affichés aux clients.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-[var(--foreground)]/70">Numéro de téléphone</label>
                            <div className="relative">
                                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--foreground)]/30" />
                                <input
                                    type="text"
                                    value={formData.companyPhone}
                                    onChange={e => setFormData({ ...formData, companyPhone: e.target.value })}
                                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[var(--foreground)]/5 border border-[var(--foreground)]/10 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/50 text-[var(--foreground)]"
                                    placeholder="+212 6..."
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-[var(--foreground)]/70">Adresse du siège</label>
                            <input
                                type="text"
                                value={formData.companyAddress}
                                onChange={e => setFormData({ ...formData, companyAddress: e.target.value })}
                                className="w-full px-4 py-2.5 rounded-xl bg-[var(--foreground)]/5 border border-[var(--foreground)]/10 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/50 text-[var(--foreground)]"
                                placeholder="Casablanca, Maroc"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-[var(--foreground)]/70">Email de contact</label>
                            <div className="relative">
                                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--foreground)]/30 invisible" />
                                <input
                                    type="email"
                                    value={formData.companyEmail}
                                    onChange={e => setFormData({ ...formData, companyEmail: e.target.value })}
                                    className="w-full px-4 py-2.5 rounded-xl bg-[var(--foreground)]/5 border border-[var(--foreground)]/10 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/50 text-[var(--foreground)]"
                                    placeholder="contact@sala.ma"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* 2. Social Media Links */}
                <div className="bg-[var(--background)] p-6 sm:p-8 rounded-2xl border border-[var(--foreground)]/10 shadow-sm space-y-6">
                    <div className="space-y-1 pb-4 border-b border-[var(--foreground)]/5">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-pink-500/10 rounded-lg">
                                <Share2 className="w-5 h-5 text-pink-500" />
                            </div>
                            <h2 className="text-lg font-bold text-[var(--foreground)]">Réseaux Sociaux</h2>
                        </div>
                        <p className="text-sm" style={{ color: 'var(--text-black)' }}>Liens vers vos pages officielles sur les réseaux sociaux.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-[var(--foreground)]/70">Facebook</label>
                            <input
                                type="url"
                                value={formData.facebookUrl}
                                onChange={e => setFormData({ ...formData, facebookUrl: e.target.value })}
                                className="w-full px-4 py-2.5 rounded-xl bg-[var(--foreground)]/5 border border-[var(--foreground)]/10 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/50 text-[var(--foreground)]"
                                placeholder="facebook.com/page"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-[var(--foreground)]/70">Instagram</label>
                            <input
                                type="url"
                                value={formData.instagramUrl}
                                onChange={e => setFormData({ ...formData, instagramUrl: e.target.value })}
                                className="w-full px-4 py-2.5 rounded-xl bg-[var(--foreground)]/5 border border-[var(--foreground)]/10 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/50 text-[var(--foreground)]"
                                placeholder="instagram.com/page"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-[var(--foreground)]/70">X (Twitter)</label>
                            <input
                                type="url"
                                value={formData.twitterUrl}
                                onChange={e => setFormData({ ...formData, twitterUrl: e.target.value })}
                                className="w-full px-4 py-2.5 rounded-xl bg-[var(--foreground)]/5 border border-[var(--foreground)]/10 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/50 text-[var(--foreground)]"
                                placeholder="x.com/username"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-[var(--foreground)]/70">TikTok</label>
                            <input
                                type="url"
                                value={formData.tiktokUrl}
                                onChange={e => setFormData({ ...formData, tiktokUrl: e.target.value })}
                                className="w-full px-4 py-2.5 rounded-xl bg-[var(--foreground)]/5 border border-[var(--foreground)]/10 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/50 text-[var(--foreground)]"
                                placeholder="tiktok.com/@user"
                            />
                        </div>
                    </div>
                </div>


                {/* 3. App Links */}
                <div className="bg-[var(--background)] p-6 sm:p-8 rounded-2xl border border-[var(--foreground)]/10 shadow-sm space-y-6">
                    <div className="space-y-1 pb-4 border-b border-[var(--foreground)]/5">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-green-500/10 rounded-lg">
                                <Smartphone className="w-5 h-5 text-green-500" />
                            </div>
                            <h2 className="text-lg font-bold text-[var(--foreground)]">Liens Applications</h2>
                        </div>
                        <p className="text-sm" style={{ color: 'var(--text-black)' }}>Liens de téléchargement de votre application mobile.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-[var(--foreground)]/70">Google Play</label>
                            <input
                                type="url"
                                value={formData.androidAppUrl}
                                onChange={e => setFormData({ ...formData, androidAppUrl: e.target.value })}
                                className="w-full px-4 py-2.5 rounded-xl bg-[var(--foreground)]/5 border border-[var(--foreground)]/10 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/50 text-[var(--foreground)]"
                                placeholder="Play Store Link"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-[var(--foreground)]/70">App Store</label>
                            <input
                                type="url"
                                value={formData.iosAppUrl}
                                onChange={e => setFormData({ ...formData, iosAppUrl: e.target.value })}
                                className="w-full px-4 py-2.5 rounded-xl bg-[var(--foreground)]/5 border border-[var(--foreground)]/10 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/50 text-[var(--foreground)]"
                                placeholder="App Store Link"
                            />
                        </div>
                    </div>
                </div>

                {/* 4. Configuration & Rules */}
                <div className="bg-[var(--background)] p-6 sm:p-8 rounded-2xl border border-[var(--foreground)]/10 shadow-sm space-y-6">
                    <div className="space-y-1 pb-4 border-b border-[var(--foreground)]/5">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-yellow-500/10 rounded-lg">
                                <ShoppingBag className="w-5 h-5 text-yellow-500" />
                            </div>
                            <h2 className="text-lg font-bold text-[var(--foreground)]">Configuration Commande</h2>
                        </div>
                        <p className="text-sm" style={{ color: 'var(--text-black)' }}>Définissez les frais de livraison et le montant minimum de commande.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-[var(--foreground)]/70">Frais de livraison ({formData.currency})</label>
                            <input
                                type="number"
                                min="0"
                                value={formData.deliveryFee}
                                onChange={e => setFormData({ ...formData, deliveryFee: parseFloat(e.target.value) || 0 })}
                                className="w-full px-4 py-2.5 rounded-xl bg-[var(--foreground)]/5 border border-[var(--foreground)]/10 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/50 text-[var(--foreground)] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-[var(--foreground)]/70">Commande Minimum ({formData.currency})</label>
                            <input
                                type="number"
                                min="0"
                                value={formData.minOrderAmount}
                                onChange={e => setFormData({ ...formData, minOrderAmount: parseFloat(e.target.value) || 0 })}
                                className="w-full px-4 py-2.5 rounded-xl bg-[var(--foreground)]/5 border border-[var(--foreground)]/10 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/50 text-[var(--foreground)] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                            />
                        </div>
                    </div>
                </div>

                {/* 5. Danger Zone / Advanced */}
                <div className="bg-red-500/5 p-6 sm:p-8 rounded-2xl border border-red-500/10 space-y-6">
                    <div className="flex items-center gap-3 pb-4 border-b border-red-500/10">
                        <div className="p-2 bg-red-500/10 rounded-lg">
                            <ShieldAlert className="w-5 h-5 text-red-600" />
                        </div>
                        <h2 className="text-lg font-bold text-red-900 dark:text-red-200">Zone de Danger</h2>
                    </div>

                    <div className="flex items-center justify-between">
                        <div>
                            <h3 className="font-medium text-[var(--foreground)]">Mode Maintenance</h3>
                            <p className="text-sm text-[var(--foreground)]/60">Activez cette option pour rendre l'application inaccessible aux utilisateurs temporairement.</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input
                                type="checkbox"
                                className="sr-only peer"
                                checked={formData.maintenanceMode}
                                onChange={e => setFormData({ ...formData, maintenanceMode: e.target.checked })}
                            />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-300 dark:peer-focus:ring-red-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-red-600"></div>
                        </label>
                    </div>
                </div>

                {/* Submit Action */}
                <div className="flex justify-end pt-4">
                    <button
                        type="submit"
                        disabled={isSaving}
                        className="px-8 py-3 bg-[var(--primary)] text-white rounded-xl font-bold shadow-lg shadow-[var(--primary)]/25 hover:bg-[var(--primary)]/90 active:scale-95 transition-all flex items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                        {isSaving ? (
                            <>
                                <Loader2 className="w-5 h-5 animate-spin" />
                                Enregistrement...
                            </>
                        ) : (
                            <>
                                <Save className="w-5 h-5" />
                                Sauvegarder les modifications
                            </>
                        )}
                    </button>
                </div>

            </form>
        </div>
    );
}

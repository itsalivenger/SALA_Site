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
        <div className="max-w-5xl mx-auto pb-20">
            {/* Page Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
                <div>
                    <h1 className="text-4xl font-black text-slate-900 tracking-tight">Paramètres Globaux</h1>
                    <p className="text-slate-500 mt-2 text-lg">Gérez l'identité et les configurations de votre plateforme Sala.</p>
                </div>
                {/* Submit Action (Desktop) */}
                <div className="hidden md:block">
                    <SubmitButton isSaving={isSaving} />
                </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
                {/* Main Settings Container */}
                <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-2xl overflow-hidden shadow-black/5">

                    {/* 1. Contact Info Section */}
                    <div className="p-8 md:p-12 space-y-10">
                        <SectionHeader
                            icon={MapPin}
                            title="Informations de Contact"
                            subtitle="Ces données sont affichées sur la page contact et le footer."
                            iconColor="text-blue-500"
                            bgColor="bg-blue-500/10"
                        />

                        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                            <InputField
                                label="Numéro de téléphone"
                                icon={Phone}
                                value={formData.companyPhone}
                                onChange={(v: string) => setFormData({ ...formData, companyPhone: v })}
                                placeholder="+212 6..."
                            />
                            <InputField
                                label="Email de contact"
                                icon={MapPin}
                                type="email"
                                value={formData.companyEmail}
                                onChange={(v: string) => setFormData({ ...formData, companyEmail: v })}
                                placeholder="contact@sala.ma"
                            />
                            <div className="md:col-span-2">
                                <InputField
                                    label="Adresse du siège"
                                    value={formData.companyAddress}
                                    onChange={(v: string) => setFormData({ ...formData, companyAddress: v })}
                                    placeholder="Casablanca, Maroc"
                                />
                            </div>
                        </div>
                    </div>

                    <Divider />

                    {/* 2. Social Media Section */}
                    <div className="p-8 md:p-12 space-y-10">
                        <SectionHeader
                            icon={Share2}
                            title="Réseaux Sociaux"
                            subtitle="Connectez vos comptes officiels pour augmenter votre visibilité."
                            iconColor="text-pink-500"
                            bgColor="bg-pink-500/10"
                        />

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <InputField label="Facebook" value={formData.facebookUrl} onChange={(v: string) => setFormData({ ...formData, facebookUrl: v })} placeholder="facebook.com/..." />
                            <InputField label="Instagram" value={formData.instagramUrl} onChange={(v: string) => setFormData({ ...formData, instagramUrl: v })} placeholder="instagram.com/..." />
                            <InputField label="X (Twitter)" value={formData.twitterUrl} onChange={(v: string) => setFormData({ ...formData, twitterUrl: v })} placeholder="x.com/..." />
                            <InputField label="TikTok" value={formData.tiktokUrl} onChange={(v: string) => setFormData({ ...formData, tiktokUrl: v })} placeholder="tiktok.com/@..." />
                        </div>
                    </div>

                    <Divider />

                    {/* 3. App Links Section */}
                    <div className="p-8 md:p-12 space-y-10">
                        <SectionHeader
                            icon={Smartphone}
                            title="Liens des Boutiques d'Apps"
                            subtitle="Mettez à jour les liens vers vos applications mobiles."
                            iconColor="text-green-500"
                            bgColor="bg-green-500/10"
                        />

                        <div className="grid md:grid-cols-2 gap-8">
                            <InputField label="Google Play Store" value={formData.androidAppUrl} onChange={(v: string) => setFormData({ ...formData, androidAppUrl: v })} placeholder="Link to Play Store" />
                            <InputField label="Apple App Store" value={formData.iosAppUrl} onChange={(v: string) => setFormData({ ...formData, iosAppUrl: v })} placeholder="Link to App Store" />
                        </div>
                    </div>

                    <Divider />

                    {/* 5. Danger Zone */}
                    <div className="p-8 md:p-12 bg-red-500/[0.02]">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                            <SectionHeader
                                icon={ShieldAlert}
                                title="Mode Maintenance"
                                subtitle="Activez cette option pour rendre l'application inaccessible temporairement."
                                iconColor="text-red-500"
                                bgColor="bg-red-500/10"
                            />
                            <label className="relative inline-flex items-center cursor-pointer scale-125 md:scale-100">
                                <input
                                    type="checkbox"
                                    className="sr-only peer"
                                    checked={formData.maintenanceMode}
                                    onChange={e => setFormData({ ...formData, maintenanceMode: e.target.checked })}
                                />
                                <div className="w-14 h-7 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-red-600"></div>
                            </label>
                        </div>
                    </div>
                </div>

                {/* Mobile Submit Button */}
                <div className="md:hidden pt-4">
                    <SubmitButton isSaving={isSaving} fullWidth />
                </div>
            </form>
        </div>
    );
}

// --- Helper Components ---

interface SectionHeaderProps {
    icon: any;
    title: string;
    subtitle: string;
    iconColor: string;
    bgColor: string;
}

function SectionHeader({ icon: Icon, title, subtitle, iconColor, bgColor }: SectionHeaderProps) {
    return (
        <div className="space-y-2">
            <div className="flex items-center gap-4">
                <div className={`p-3 ${bgColor} rounded-2xl`}>
                    <Icon className={`w-6 h-6 ${iconColor}`} />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">{title}</h2>
            </div>
            <p className="text-slate-500 ml-16 max-w-2xl">{subtitle}</p>
        </div>
    );
}

interface InputFieldProps {
    label: string;
    icon?: any;
    type?: string;
    value: string;
    onChange: (v: string) => void;
    placeholder?: string;
}

function InputField({ label, icon: Icon, type = "text", value, onChange, placeholder }: InputFieldProps) {
    return (
        <div className="space-y-3">
            <label className="text-sm font-bold text-slate-500 uppercase tracking-wider ml-1">{label}</label>
            <div className="relative group">
                {Icon && (
                    <Icon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-[var(--primary)] transition-colors" />
                )}
                <input
                    type={type}
                    value={value}
                    onChange={e => onChange(e.target.value)}
                    placeholder={placeholder}
                    className={`w-full ${Icon ? 'pl-12' : 'px-5'} py-3 rounded-2xl bg-slate-50/30 border-2 border-slate-400 focus:bg-white focus:border-[var(--primary)] focus:shadow-xl focus:shadow-[var(--primary)]/10 focus:outline-none transition-all text-slate-900 font-medium placeholder:text-slate-400`}
                />
            </div>
        </div>
    );
}

function Divider() {
    return (
        <div className="px-12">
            <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent w-full" />
        </div>
    );
}

function SubmitButton({ isSaving, fullWidth }: { isSaving: boolean, fullWidth?: boolean }) {
    return (
        <button
            type="submit"
            disabled={isSaving}
            className={`${fullWidth ? 'w-full' : ''} px-10 py-4 bg-[var(--primary)] text-white rounded-[1.25rem] font-black text-lg shadow-2xl shadow-[var(--primary)]/30 hover:shadow-[var(--primary)]/40 hover:-translate-y-1 active:translate-y-0 active:scale-95 transition-all flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed`}
        >
            {isSaving ? (
                <>
                    <Loader2 className="w-6 h-6 animate-spin" />
                    Traitement...
                </>
            ) : (
                <>
                    <Save className="w-6 h-6" />
                    Enregistrer
                </>
            )}
        </button>
    );
}

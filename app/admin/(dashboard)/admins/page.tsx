"use client";

import { useState, useEffect } from "react";
import { Plus, X, Loader2 } from "lucide-react";
import AdminList, { Admin, AdminRole } from "@/components/Admins/AdminList";
import { AnimatePresence, motion } from "framer-motion";
import { usePopup } from "@/context/PopupContext";

export default function AdminsPage() {
    const [admins, setAdmins] = useState<Admin[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const [editingId, setEditingId] = useState<string | null>(null);
    const { showPopup } = usePopup();

    // Form State
    const [formData, setFormData] = useState({ name: "", email: "", password: "", role: "Support" as AdminRole });

    // Fetch Admins
    useEffect(() => {
        const fetchAdmins = async () => {
            try {
                const res = await fetch('/api/admin/admins');
                if (!res.ok) throw new Error('Failed to fetch admins');
                const data = await res.json();
                setAdmins(data);
            } catch (error) {
                console.error("Error loading admins:", error);
                showPopup({ type: "error", title: "Erreur", message: "Erreur lors du chargement des administrateurs." });
            } finally {
                setIsLoading(false);
            }
        };

        fetchAdmins();
    }, [showPopup]);

    const handleDelete = async (id: string) => {
        if (!confirm("Êtes-vous sûr de vouloir supprimer cet administrateur ?")) return;

        try {
            const res = await fetch(`/api/admin/admins/${id}`, { method: 'DELETE' });

            if (!res.ok) {
                const data = await res.json();
                throw new Error(data.error || "Erreur lors de la suppression");
            }

            setAdmins(admins.filter(a => a.id !== id));
            showPopup({ type: "success", title: "Succès", message: "Administrateur supprimé avec succès." });

            // Return to create mode if deleting the currently edited admin
            if (editingId === id) resetForm();

        } catch (error: any) {
            showPopup({ type: "error", title: "Erreur", message: error.message });
        }
    };

    const handleEdit = (admin: Admin) => {
        setFormData({
            name: admin.name,
            email: admin.email,
            password: "", // Keep empty for security, only update if changed
            role: admin.role
        });
        setEditingId(admin.id);
        setShowForm(true);
        // Scroll to top would be nice here
    };

    const resetForm = () => {
        setFormData({ name: "", email: "", password: "", role: "Support" as AdminRole });
        setEditingId(null);
        setShowForm(false);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const url = editingId ? `/api/admin/admins/${editingId}` : '/api/admin/admins';
            const method = editingId ? 'PUT' : 'POST';

            const res = await fetch(url, {
                method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.error || "Une erreur est survenue");
            }

            if (editingId) {
                // Update existing
                setAdmins(admins.map(admin => admin.id === editingId ? data : admin));
                showPopup({ type: "success", title: "Succès", message: "Administrateur mis à jour avec succès." });
            } else {
                // Create new
                setAdmins([data, ...admins]);
                showPopup({ type: "success", title: "Succès", message: "Administrateur créé avec succès." });
            }

            resetForm();

        } catch (error: any) {
            showPopup({ type: "error", title: "Erreur", message: error.message });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="space-y-8">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-[var(--foreground)] tracking-tight">Gestion des Admins</h1>
                    <div className="text-black dark:text-white space-y-1 mt-1 max-w-2xl">
                        <p>Cette section permet de gérer les membres de l'équipe administrative et leurs privilèges.</p>
                        <ul className="text-sm list-disc list-inside pt-1 space-y-1">
                            <li><strong className="text-black dark:text-white">Super Admin</strong> : Accès total à la plateforme.</li>
                            <li><strong className="text-black dark:text-white">Manager</strong> : Gestion des opérations (commandes, livreurs).</li>
                            <li><strong className="text-black dark:text-white">Support</strong> : Accès restreint pour le service client.</li>
                        </ul>
                    </div>
                </div>
                <button
                    onClick={() => {
                        if (showForm && !editingId) {
                            setShowForm(false);
                        } else {
                            resetForm();
                            setShowForm(true);
                        }
                    }}
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium shadow-lg transition-all active:scale-95 ${showForm && !editingId
                        ? "bg-slate-100 text-slate-600 hover:bg-slate-200"
                        : "bg-[var(--primary)] text-white shadow-[var(--primary)]/25 hover:bg-[var(--primary)]/90"
                        }`}
                >
                    {showForm && !editingId ? (
                        <>
                            <X className="w-5 h-5" />
                            Fermer
                        </>
                    ) : (
                        <>
                            <Plus className="w-5 h-5" />
                            Ajouter un Admin
                        </>
                    )}
                </button>
            </div>

            {/* Creation/Edit Form (Toggleable) */}
            <AnimatePresence>
                {showForm && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                    >
                        <form onSubmit={handleSubmit} className="bg-[var(--background)] p-6 rounded-2xl border border-[var(--foreground)]/10 shadow-sm mb-8 relative">
                            {/* Form Header */}
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-lg font-bold text-[var(--foreground)]">
                                    {editingId ? "Modifier Administrateur" : "Nouvel Administrateur"}
                                </h3>
                                {editingId && (
                                    <button
                                        type="button"
                                        onClick={resetForm}
                                        className="text-xs text-slate-500 hover:text-slate-700 underline"
                                    >
                                        Annuler la modification
                                    </button>
                                )}
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-[var(--foreground)]/70">Nom Complet</label>
                                    <input
                                        required
                                        type="text"
                                        value={formData.name}
                                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full px-4 py-2 rounded-xl bg-[var(--foreground)]/5 border border-[var(--foreground)]/10 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/50 text-[var(--foreground)]"
                                        placeholder="Ex: John Doe"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-[var(--foreground)]/70">Email</label>
                                    <input
                                        required
                                        type="email"
                                        value={formData.email}
                                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full px-4 py-2 rounded-xl bg-[var(--foreground)]/5 border border-[var(--foreground)]/10 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/50 text-[var(--foreground)]"
                                        placeholder="admin@sala.com"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-[var(--foreground)]/70">
                                        {editingId ? "Nouveau mot de passe (optionnel)" : "Mot de passe"}
                                    </label>
                                    <input
                                        required={!editingId}
                                        type="password"
                                        value={formData.password}
                                        onChange={e => setFormData({ ...formData, password: e.target.value })}
                                        className="w-full px-4 py-2 rounded-xl bg-[var(--foreground)]/5 border border-[var(--foreground)]/10 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/50 text-[var(--foreground)]"
                                        placeholder={editingId ? "Laisser vide pour conserver" : "••••••••"}
                                        minLength={6}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-[var(--foreground)]/70">Rôle</label>
                                    <select
                                        value={formData.role}
                                        onChange={e => setFormData({ ...formData, role: e.target.value as AdminRole })}
                                        className="w-full px-4 py-2 rounded-xl bg-[var(--foreground)]/5 border border-[var(--foreground)]/10 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/50 text-[var(--foreground)] appearance-none cursor-pointer"
                                    >
                                        <option value="Support" className="text-slate-900 bg-white">Support (Lecture Seule)</option>
                                        <option value="Manager" className="text-slate-900 bg-white">Manager (Opérations)</option>
                                        <option value="Super Admin" className="text-slate-900 bg-white">Super Admin (Accès Total)</option>
                                    </select>
                                </div>
                            </div>
                            <div className="flex justify-end gap-3">
                                {editingId && (
                                    <button
                                        type="button"
                                        onClick={resetForm}
                                        className="px-6 py-2 border border-[var(--foreground)]/10 text-[var(--foreground)]/70 rounded-lg font-medium hover:bg-[var(--foreground)]/5 transition-colors"
                                    >
                                        Annuler
                                    </button>
                                )}
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="px-6 py-2 bg-[var(--foreground)] text-[var(--background)] rounded-lg font-medium hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                                >
                                    {isSubmitting && <Loader2 className="w-4 h-4 animate-spin" />}
                                    {editingId ? "Mettre à jour" : "Créer le compte"}
                                </button>
                            </div>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* List Section */}
            {isLoading ? (
                <div className="flex justify-center p-12">
                    <Loader2 className="w-8 h-8 animate-spin text-[var(--primary)]" />
                </div>
            ) : (
                <AdminList
                    admins={admins}
                    onDelete={handleDelete}
                    onEdit={handleEdit}
                />
            )}
        </div>
    );
}

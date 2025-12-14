"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MoreVertical, Shield, Trash2, Edit2, Check, X } from "lucide-react";

// Types
export type AdminRole = "Super Admin" | "Manager" | "Support";

export interface Admin {
    id: string;
    name: string;
    email: string;
    role: AdminRole;
    status: "Active" | "Inactive";
    lastActive: string;
}

const roleStyles = {
    "Super Admin": "bg-purple-100 text-purple-700 border-purple-200",
    "Manager": "bg-[var(--primary)]/10 text-[var(--primary)] border-[var(--primary)]/20",
    "Support": "bg-slate-100 text-slate-700 border-slate-200"
};

interface AdminListProps {
    admins: Admin[];
    onDelete: (id: string) => void;
    onEdit: (admin: Admin) => void;
}

export default function AdminList({ admins, onDelete, onEdit }: AdminListProps) {
    return (
        <div className="bg-[var(--background)] rounded-2xl border border-[var(--foreground)]/10 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead className="bg-[var(--foreground)]/5 border-b border-[var(--foreground)]/10">
                        <tr>
                            <th className="p-4 font-semibold text-sm text-[var(--foreground)]/60">Admin</th>
                            <th className="p-4 font-semibold text-sm text-[var(--foreground)]/60">Rôle</th>
                            <th className="p-4 font-semibold text-sm text-[var(--foreground)]/60">Statut</th>
                            <th className="p-4 font-semibold text-sm text-[var(--foreground)]/60">Dernière Activité</th>
                            <th className="p-4 font-semibold text-sm text-[var(--foreground)]/60 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-[var(--foreground)]/5">
                        {admins.map((admin) => (
                            <motion.tr
                                key={admin.id}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="group hover:bg-[var(--foreground)]/2 transition-colors"
                            >
                                <td className="p-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)] font-bold">
                                            {admin.name.charAt(0)}
                                        </div>
                                        <div>
                                            <p className="font-medium text-[var(--foreground)]">{admin.name}</p>
                                            <p className="text-sm text-[var(--foreground)]/50">{admin.email}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="p-4">
                                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border ${roleStyles[admin.role]}`}>
                                        <Shield className="w-3 h-3" />
                                        {admin.role}
                                    </span>
                                </td>
                                <td className="p-4">
                                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${admin.status === "Active"
                                            ? "bg-emerald-100 text-emerald-700"
                                            : "bg-slate-100 text-slate-600"
                                        }`}>
                                        {admin.status === "Active" ? <Check className="w-3 h-3 mr-1" /> : <X className="w-3 h-3 mr-1" />}
                                        {admin.status}
                                    </span>
                                </td>
                                <td className="p-4 text-sm text-[var(--foreground)]/60">
                                    {admin.lastActive}
                                </td>
                                <td className="p-4 text-right">
                                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <button
                                            onClick={() => onEdit(admin)}
                                            className="p-2 hover:bg-[var(--foreground)]/5 rounded-lg text-[var(--foreground)]/60 hover:text-[var(--primary)] transition-colors"
                                            title="Modifier"
                                        >
                                            <Edit2 className="w-4 h-4" />
                                        </button>
                                        <button
                                            onClick={() => onDelete(admin.id)}
                                            className="p-2 hover:bg-red-50 rounded-lg text-[var(--foreground)]/60 hover:text-red-500 transition-colors"
                                            title="Supprimer"
                                        >
                                            <Trash2 className="w-4 h-4" />
                                        </button>
                                    </div>
                                </td>
                            </motion.tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

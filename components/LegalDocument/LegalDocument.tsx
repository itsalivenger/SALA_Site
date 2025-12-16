"use client";

import { motion } from "framer-motion";
import { useTranslations, useFormatter } from "next-intl";

interface LegalDocumentProps {
    title: string;
    updateDate: Date;
    children: React.ReactNode;
}

export default function LegalDocument({ title, updateDate, children }: LegalDocumentProps) {
    const t = useTranslations('LegalDocument');
    const format = useFormatter();

    return (
        <div className="min-h-screen bg-slate-50 pt-32 pb-24">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
                        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                            {title}
                        </h1>
                        <p className="text-gray-500 mb-12 pb-8 border-b border-gray-100">
                            {t('last_updated', { date: format.dateTime(updateDate, { year: 'numeric', month: 'long', day: 'numeric' }) })}
                        </p>

                        <div className="prose prose-slate max-w-none prose-headings:text-slate-900 prose-p:text-slate-700 prose-li:text-slate-700 prose-a:text-primary hover:prose-a:text-primary/80">
                            {children}
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, Search, HelpCircle, ArrowRight, Send, X, CheckCircle2 } from "lucide-react";
import { useState, useMemo } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export default function FAQList() {
    const t = useTranslations('FAQList');
    const [openIndex, setOpenIndex] = useState<string | null>(null);
    const [searchQuery, setSearchQuery] = useState("");
    const [showQuestionForm, setShowQuestionForm] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        question: ""
    });

    const toggleFAQ = (id: string) => {
        setOpenIndex(openIndex === id ? null : id);
    };

    const handleFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        setIsSuccess(true);
        setFormData({ name: "", email: "", question: "" });
    };

    const sections = useMemo(() => [
        {
            category: t('general_title'),
            items: [
                {
                    question: t('general_q1_question'),
                    answer: t('general_q1_answer')
                },
                {
                    question: t('general_q2_question'),
                    answer: t('general_q2_answer')
                },
                {
                    question: t('general_q3_question'),
                    answer: t('general_q3_answer')
                }
            ]
        },
        {
            category: t('deliveries_title'),
            items: [
                {
                    question: t('deliveries_q1_question'),
                    answer: t('deliveries_q1_answer')
                },
                {
                    question: t('deliveries_q2_question'),
                    answer: t('deliveries_q2_answer')
                },
                {
                    question: t('deliveries_q3_question'),
                    answer: t('deliveries_q3_answer')
                }
            ]
        },
        {
            category: t('account_title'),
            items: [
                {
                    question: t('account_q1_question'),
                    answer: t('account_q1_answer')
                },
                {
                    question: t('account_q2_question'),
                    answer: t('account_q2_answer')
                }
            ]
        }
    ], [t]);

    const filteredSections = useMemo(() => {
        if (!searchQuery.trim()) return sections;

        const query = searchQuery.toLowerCase();
        return sections.map(section => ({
            ...section,
            items: section.items.filter(item =>
                item.question.toLowerCase().includes(query) ||
                item.answer.toLowerCase().includes(query)
            )
        })).filter(section => section.items.length > 0);
    }, [sections, searchQuery]);

    const hasResults = filteredSections.length > 0;

    return (
        <section className="py-24 bg-white">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Search Bar */}
                <div className="mb-12 relative group">
                    <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                        <Search className="w-5 h-5 text-slate-400 group-focus-within:text-primary transition-colors" />
                    </div>
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder={t('search_placeholder')}
                        className="w-full pl-12 pr-4 py-4 rounded-2xl bg-slate-50 border border-gray-100 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none text-slate-900 shadow-sm"
                    />
                </div>

                {hasResults ? (
                    <div className="space-y-12">
                        {filteredSections.map((section, sIndex) => (
                            <div key={sIndex} className="mb-12 last:mb-0">
                                <h3 className="text-2xl font-bold text-slate-900 mb-6 border-b border-gray-100 pb-2">
                                    {section.category}
                                </h3>

                                <div className="space-y-4">
                                    {section.items.map((item, i) => {
                                        const id = `${sIndex}-${i}`;
                                        const isOpen = openIndex === id;

                                        return (
                                            <div
                                                key={i}
                                                className="border border-gray-100 rounded-2xl overflow-hidden transition-all duration-200 hover:border-primary/20 bg-slate-50"
                                            >
                                                <button
                                                    onClick={() => toggleFAQ(id)}
                                                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                                                >
                                                    <span className="font-bold text-slate-800 text-lg pr-8">
                                                        {item.question}
                                                    </span>
                                                    <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isOpen ? 'bg-primary text-white' : 'bg-white text-slate-400'}`}>
                                                        {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                                                    </span>
                                                </button>

                                                <motion.div
                                                    initial={false}
                                                    animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                                    className="overflow-hidden"
                                                >
                                                    <div className="p-6 pt-0 text-gray-600 leading-relaxed">
                                                        {item.answer}
                                                    </div>
                                                </motion.div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 bg-slate-50 rounded-3xl border border-dashed border-gray-200">
                        <HelpCircle className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-slate-900 mb-2">{t('no_results')}</h3>
                        <p className="text-slate-500">{t('still_questions_desc')}</p>
                    </div>
                )}

                {/* Bottom CTA Section */}
                <div className="mt-20 overflow-hidden">
                    <AnimatePresence mode="wait">
                        {!showQuestionForm ? (
                            <motion.div
                                key="cta"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                className="p-8 sm:p-12 rounded-[2rem] bg-slate-900 text-white relative overflow-hidden group"
                            >
                                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -mr-32 -mt-32 transition-transform group-hover:scale-110" />
                                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                                    <div className="text-center md:text-left">
                                        <h3 className="text-2xl sm:text-3xl font-extrabold mb-4">{t('still_questions_title')}</h3>
                                        <p className="text-slate-300 max-w-md">{t('still_questions_desc')}</p>
                                    </div>
                                    <button
                                        onClick={() => setShowQuestionForm(true)}
                                        className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl transition-all shadow-lg shadow-primary/20 group whitespace-nowrap text-sm"
                                    >
                                        {t('btn_ask_question')}
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="form"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 20 }}
                                className="p-8 sm:p-10 rounded-[2rem] bg-slate-50 border border-gray-100 shadow-xl"
                            >
                                {isSuccess ? (
                                    <div className="text-center py-6 space-y-4">
                                        <div className="w-16 h-16 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <CheckCircle2 className="w-8 h-8" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-slate-900">{t('success_title')}</h3>
                                        <p className="text-slate-600">{t('success_message')}</p>
                                        <button
                                            onClick={() => {
                                                setIsSuccess(false);
                                                setShowQuestionForm(false);
                                            }}
                                            className="px-6 py-2 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-colors"
                                        >
                                            {t('btn_cancel').replace('Annuler', 'Fermer').replace('Cancel', 'Close').replace('إلغاء', 'إغلاق')}
                                        </button>
                                    </div>
                                ) : (
                                    <form onSubmit={handleFormSubmit} className="space-y-6">
                                        <div className="flex items-center justify-between mb-2">
                                            <h3 className="text-2xl font-bold text-slate-900">{t('form_title')}</h3>
                                            <button
                                                type="button"
                                                onClick={() => setShowQuestionForm(false)}
                                                className="p-2 text-slate-400 hover:text-slate-600 transition-colors"
                                            >
                                                <X className="w-6 h-6" />
                                            </button>
                                        </div>

                                        <div className="grid sm:grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <label className="text-sm font-semibold text-slate-700">{t('label_name')}</label>
                                                <input
                                                    required
                                                    type="text"
                                                    value={formData.name}
                                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                    placeholder={t('placeholder_name')}
                                                    className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-slate-900"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-semibold text-slate-700">{t('label_email')}</label>
                                                <input
                                                    required
                                                    type="email"
                                                    value={formData.email}
                                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                    placeholder={t('placeholder_email')}
                                                    className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-slate-900"
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-slate-700">{t('label_question')}</label>
                                            <textarea
                                                required
                                                rows={4}
                                                value={formData.question}
                                                onChange={(e) => setFormData({ ...formData, question: e.target.value })}
                                                placeholder={t('placeholder_question')}
                                                className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none text-slate-900"
                                            />
                                        </div>

                                        <div className="flex gap-4 pt-2">
                                            <button
                                                type="button"
                                                onClick={() => setShowQuestionForm(false)}
                                                className="flex-1 px-6 py-3 border-2 border-gray-100 text-slate-600 font-bold rounded-xl hover:bg-gray-100 transition-all"
                                            >
                                                {t('btn_cancel')}
                                            </button>
                                            <button
                                                disabled={isSubmitting}
                                                type="submit"
                                                className="flex-[2] px-6 py-3 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2 disabled:opacity-50"
                                            >
                                                {isSubmitting ? (
                                                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                                ) : (
                                                    <>
                                                        <Send className="w-4 h-4" />
                                                        {t('btn_send')}
                                                    </>
                                                )}
                                            </button>
                                        </div>
                                    </form>
                                )}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

            </div>
        </section>
    );
}

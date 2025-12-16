"use client";

import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";
import { useTranslations } from "next-intl";

export default function FAQList() {
    const t = useTranslations('FAQList');
    const [openIndex, setOpenIndex] = useState<string | null>(null);

    const toggleFAQ = (id: string) => {
        setOpenIndex(openIndex === id ? null : id);
    };

    const faqs = [
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
    ];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

                {faqs.map((section, sIndex) => (
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
        </section>
    );
}

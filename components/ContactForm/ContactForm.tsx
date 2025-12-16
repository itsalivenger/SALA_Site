"use client";

import { Send } from "lucide-react";
import { useTranslations } from "next-intl";

export default function ContactForm() {
    const t = useTranslations('ContactForm');

    return (
        <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">{t('title')}</h3>

            <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-semibold text-slate-900">{t('label_name')}</label>
                        <input
                            type="text"
                            id="name"
                            placeholder={t('placeholder_name')}
                            className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-semibold text-slate-900">{t('label_email')}</label>
                        <input
                            type="email"
                            id="email"
                            placeholder={t('placeholder_email')}
                            className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-semibold text-slate-900">{t('label_subject')}</label>
                    <select
                        id="subject"
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    >
                        <option value="">{t('placeholder_subject')}</option>
                        <option value="support">{t('option_support')}</option>
                        <option value="sales">{t('option_sales')}</option>
                        <option value="partnership">{t('option_partnership')}</option>
                        <option value="other">{t('option_other')}</option>
                    </select>
                </div>

                <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-semibold text-slate-900">{t('label_message')}</label>
                    <textarea
                        id="message"
                        rows={5}
                        placeholder={t('placeholder_message')}
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                    />
                </div>

                <button
                    type="button" // Change to submit when connected
                    className="w-full py-4 px-6 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl transition-colors flex items-center justify-center gap-2"
                >
                    <Send className="w-5 h-5" />
                    {t('btn_submit')}
                </button>
            </form>
        </div>
    );
}

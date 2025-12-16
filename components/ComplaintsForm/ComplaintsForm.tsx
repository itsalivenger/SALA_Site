"use client";

import { AlertCircle, Upload, Send } from "lucide-react";
import { useTranslations } from "next-intl";

export default function ComplaintsForm() {
    const t = useTranslations('ComplaintsForm');

    return (
        <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-xl max-w-3xl mx-auto -mt-10 relative z-20">

            <div className="flex items-center gap-3 mb-8 p-4 bg-red-50 text-red-700 rounded-xl border border-red-100">
                <AlertCircle className="w-6 h-6 flex-shrink-0" />
                <p className="text-sm">
                    {t('alert_message')}
                </p>
            </div>

            <form className="space-y-6">
                {/* Personal Info */}
                <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-semibold text-slate-900">{t('label_name')}</label>
                        <input
                            type="text"
                            id="name"
                            placeholder={t('placeholder_name')}
                            className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all"
                        />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-semibold text-slate-900">{t('label_email')}</label>
                        <input
                            type="email"
                            id="email"
                            placeholder={t('placeholder_email')}
                            className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all"
                        />
                    </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-semibold text-slate-900">{t('label_phone')}</label>
                        <input
                            type="tel"
                            id="phone"
                            placeholder={t('placeholder_phone')}
                            className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all"
                        />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="orderId" className="text-sm font-semibold text-slate-900">{t('label_order_id')}</label>
                        <input
                            type="text"
                            id="orderId"
                            placeholder={t('placeholder_order_id')}
                            className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all"
                        />
                    </div>
                </div>

                {/* Category */}
                <div className="space-y-2">
                    <label htmlFor="category" className="text-sm font-semibold text-slate-900">{t('label_category')}</label>
                    <select
                        id="category"
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all"
                    >
                        <option value="">{t('placeholder_category')}</option>
                        <option value="late">{t('option_late')}</option>
                        <option value="damaged">{t('option_damaged')}</option>
                        <option value="missing">{t('option_missing')}</option>
                        <option value="driver">{t('option_driver')}</option>
                        <option value="app">{t('option_app')}</option>
                        <option value="other">{t('option_other')}</option>
                    </select>
                </div>

                {/* Message */}
                <div className="space-y-2">
                    <label htmlFor="description" className="text-sm font-semibold text-slate-900">{t('label_description')}</label>
                    <textarea
                        id="description"
                        rows={5}
                        placeholder={t('placeholder_description')}
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all resize-none"
                    />
                </div>

                {/* File Upload Placeholder */}
                <div className="space-y-2">
                    <span className="text-sm font-semibold text-slate-900">{t('label_evidence')}</span>
                    <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:bg-gray-50 transition-colors cursor-pointer">
                        <Upload className="w-8 h-8 mx-auto text-gray-400 mb-2" />
                        <p className="text-sm text-gray-500">{t('upload_text')}</p>
                        <p className="text-xs text-gray-400 mt-1">{t('upload_hint')}</p>
                    </div>
                </div>

                <button
                    type="button" // Change to submit when connected
                    className="w-full py-4 px-6 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl transition-colors flex items-center justify-center gap-2"
                >
                    <Send className="w-5 h-5" />
                    {t('btn_submit')}
                </button>
            </form>
        </div>
    );
}

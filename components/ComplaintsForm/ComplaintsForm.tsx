"use client";

import { useState } from "react";
import {
    AlertCircle,
    Upload,
    Send,
    ChevronRight,
    ChevronLeft,
    MessageSquare,
    HelpCircle,
    MessageCircle,
    MoreHorizontal,
    CheckCircle2,
    ArrowRight,
    LucideIcon,
    User,
    Truck
} from "lucide-react";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { usePopup } from "@/context/PopupContext";
import { Link, useRouter } from "@/i18n/routing";

type RequestType = 'complaint' | 'complaint_client' | 'complaint_livreur' | 'question' | 'comment' | 'other';

interface FormData {
    type: RequestType | null;
    category: string;
    orderId: string;
    topic: string;
    message: string;
    name: string;
    email: string;
    phone: string;
    evidence: File | null;
}

export default function ComplaintsForm() {
    const t = useTranslations('ComplaintsForm');
    const { showPopup } = usePopup();
    const router = useRouter();
    const [step, setStep] = useState(1);
    const [showSubTypes, setShowSubTypes] = useState(false);
    const [formData, setFormData] = useState<FormData>({
        type: null,
        category: "",
        orderId: "",
        topic: "",
        message: "",
        name: "",
        email: "",
        phone: "",
        evidence: null
    });

    const updateFormData = (fields: Partial<FormData>) => {
        setFormData(prev => ({ ...prev, ...fields }));
    };

    const nextStep = () => setStep(prev => prev + 1);
    const prevStep = () => {
        if (step === 1 && showSubTypes) {
            setShowSubTypes(false);
            return;
        }
        setStep(prev => prev - 1);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate API call
        setTimeout(() => {
            nextStep();
            showPopup({
                type: 'success',
                title: t('success_title'),
                message: t('success_message')
            });
        }, 1000);
    };

    const renderSelection = () => {
        if (showSubTypes) {
            const subTypes: { id: RequestType; icon: LucideIcon; color: string }[] = [
                { id: 'complaint_client', icon: User, color: 'text-red-500 bg-red-50' },
                { id: 'complaint_livreur', icon: Truck, color: 'text-orange-500 bg-orange-50' }
            ];

            return (
                <div className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {subTypes.map((type) => (
                            <button
                                key={type.id}
                                type="button"
                                onClick={() => {
                                    updateFormData({ type: type.id });
                                    nextStep();
                                }}
                                className={`group p-6 rounded-2xl border-2 text-left transition-all hover:shadow-lg ${formData.type === type.id
                                    ? 'border-primary bg-primary/5 shadow-md'
                                    : 'border-gray-100 bg-white hover:border-primary/30'
                                    }`}
                            >
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110 ${type.color}`}>
                                    <type.icon className="w-6 h-6" />
                                </div>
                                <h3 className="font-bold text-slate-900 mb-1">{t(`type_${type.id}`)}</h3>
                                <p className="text-sm text-slate-500">{t(`type_${type.id}_desc`)}</p>
                            </button>
                        ))}
                    </div>
                    <button
                        type="button"
                        onClick={() => setShowSubTypes(false)}
                        className="flex items-center gap-2 text-slate-500 hover:text-primary transition-colors font-semibold"
                    >
                        <ChevronLeft className="w-5 h-5" />
                        {t('btn_back')}
                    </button>
                </div>
            );
        }

        const types: { id: RequestType; icon: LucideIcon; color: string }[] = [
            { id: 'complaint', icon: AlertCircle, color: 'text-red-500 bg-red-50' },
            { id: 'question', icon: HelpCircle, color: 'text-primary bg-primary/5' },
            { id: 'comment', icon: MessageCircle, color: 'text-purple-500 bg-purple-50' },
            { id: 'other', icon: MoreHorizontal, color: 'text-gray-500 bg-gray-50' }
        ];

        return (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {types.map((type) => (
                    <button
                        key={type.id}
                        type="button"
                        onClick={() => {
                            if (type.id === 'question') {
                                router.push('/faq');
                                return;
                            }
                            if (type.id === 'complaint') {
                                setShowSubTypes(true);
                                return;
                            }
                            updateFormData({ type: type.id });
                            nextStep();
                        }}
                        className={`group p-6 rounded-2xl border-2 text-left transition-all hover:shadow-lg ${formData.type === type.id
                            ? 'border-primary bg-primary/5 shadow-md'
                            : 'border-gray-100 bg-white hover:border-primary/30'
                            }`}
                    >
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110 ${type.color}`}>
                            <type.icon className="w-6 h-6" />
                        </div>
                        <h3 className="font-bold text-slate-900 mb-1">{t(`type_${type.id}`)}</h3>
                        <p className="text-sm text-slate-500">{t(`type_${type.id}_desc`)}</p>
                    </button>
                ))}
            </div>
        );
    };

    const renderDetails = () => (
        <div className="space-y-6">
            {(formData.type === 'complaint_client' || formData.type === 'complaint_livreur') && (
                <>
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-900">{t('label_category')}</label>
                        <select
                            value={formData.category}
                            onChange={(e) => updateFormData({ category: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-slate-900"
                        >
                            <option value="" className="text-slate-900">{t('placeholder_category')}</option>
                            <option value="late" className="text-slate-900">{t('option_late')}</option>
                            <option value="damaged" className="text-slate-900">{t('option_damaged')}</option>
                            <option value="missing" className="text-slate-900">{t('option_missing')}</option>
                            <option value="driver" className="text-slate-900">{t('option_driver')}</option>
                            <option value="app" className="text-slate-900">{t('option_app')}</option>
                            <option value="other" className="text-slate-900">{t('option_other')}</option>
                        </select>
                    </div>
                    {formData.type === 'complaint_client' && (
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-slate-900">{t('label_order_id')}</label>
                            <input
                                type="text"
                                value={formData.orderId}
                                onChange={(e) => updateFormData({ orderId: e.target.value })}
                                placeholder={t('placeholder_order_id')}
                                className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-slate-900"
                            />
                        </div>
                    )}
                </>
            )}

            <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-900">{t('label_description')}</label>
                <textarea
                    value={formData.message}
                    onChange={(e) => updateFormData({ message: e.target.value })}
                    rows={5}
                    placeholder={t(`placeholder_description_${formData.type?.replace('_client', '').replace('_livreur', '')}`)}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none text-slate-900"
                />
            </div>

            {(formData.type === 'complaint_client' || formData.type === 'complaint_livreur') && (
                <div className="space-y-2">
                    <span className="text-sm font-semibold text-slate-900">{t('label_evidence')}</span>
                    <div className="border-2 border-dashed border-gray-200 rounded-xl p-8 text-center hover:bg-gray-50 transition-colors cursor-pointer group">
                        <Upload className="w-8 h-8 mx-auto text-gray-400 mb-2 group-hover:text-primary transition-colors" />
                        <p className="text-sm text-gray-500">{t('upload_text')}</p>
                        <p className="text-xs text-gray-400 mt-1">{t('upload_hint')}</p>
                    </div>
                </div>
            )}

            <div className="flex gap-4 pt-4">
                <button
                    type="button"
                    onClick={prevStep}
                    className="flex-1 px-6 py-4 border-2 border-gray-100 hover:border-gray-200 text-slate-600 font-bold rounded-xl transition-all flex items-center justify-center gap-2"
                >
                    <ChevronLeft className="w-5 h-5" />
                    {t('btn_back')}
                </button>
                <button
                    type="button"
                    onClick={nextStep}
                    disabled={!formData.message}
                    className="flex-1 px-6 py-4 bg-primary hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/20"
                >
                    {t('btn_next')}
                    <ChevronRight className="w-5 h-5" />
                </button>
            </div>
        </div>
    );

    const renderInfo = () => (
        <div className="space-y-6">
            <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-900">{t('label_name')}</label>
                <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => updateFormData({ name: e.target.value })}
                    placeholder={t('placeholder_name')}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-slate-900"
                />
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-900">{t('label_email')}</label>
                    <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => updateFormData({ email: e.target.value })}
                        placeholder={t('placeholder_email')}
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-slate-900"
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-900">{t('label_phone')}</label>
                    <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => updateFormData({ phone: e.target.value })}
                        placeholder={t('placeholder_phone')}
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-slate-900"
                    />
                </div>
            </div>

            <div className="flex gap-4 pt-4">
                <button
                    type="button"
                    onClick={prevStep}
                    className="flex-1 px-6 py-4 border-2 border-gray-100 hover:border-gray-200 text-slate-600 font-bold rounded-xl transition-all flex items-center justify-center gap-2"
                >
                    <ChevronLeft className="w-5 h-5" />
                    {t('btn_back')}
                </button>
                <button
                    type="submit"
                    className="flex-1 px-6 py-4 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/20"
                >
                    <Send className="w-5 h-5" />
                    {t('btn_submit')}
                </button>
            </div>
        </div>
    );

    const renderSuccess = () => (
        <div className="text-center py-8 space-y-6">
            <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
                <CheckCircle2 className="w-10 h-10" />
            </div>
            <div className="space-y-2">
                <h2 className="text-3xl font-extrabold text-slate-900">{t('success_title')}</h2>
                <p className="text-slate-600 max-w-sm mx-auto">{t('success_message')}</p>
            </div>
            <Link
                href="/"
                className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-all group"
            >
                {t('btn_home')}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
        </div>
    );

    return (
        <div className="max-w-3xl mx-auto -mt-10 relative z-20 px-4">
            {/* Multi-step Header */}
            {step < 4 && (
                <div className="mb-8 flex justify-between items-center bg-white/50 backdrop-blur-sm p-2 rounded-2xl border border-white/20">
                    {[1, 2, 3].map((s) => (
                        <div key={s} className="flex items-center">
                            <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold transition-all ${s === step ? 'bg-primary text-white shadow-lg shadow-primary/30' :
                                s < step ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400'
                                }`}>
                                {s < step ? <CheckCircle2 className="w-6 h-6" /> : s}
                            </div>
                            {s < 3 && (
                                <div className={`w-8 sm:w-20 h-1 mx-2 rounded-full transition-colors ${s < step ? 'bg-green-200' : 'bg-gray-100'
                                    }`} />
                            )}
                        </div>
                    ))}
                </div>
            )}

            <div className="bg-white p-6 sm:p-10 rounded-3xl border border-gray-100 shadow-2xl">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={step + (showSubTypes ? "-sub" : "")}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        {step < 4 && (
                            <div className="mb-8">
                                <h2 className="text-2xl font-extrabold text-slate-900 mb-2">
                                    {(step === 1 && !showSubTypes) && t('step_selection_title')}
                                    {(step === 1 && showSubTypes) && t('type_complaint')}
                                    {step === 2 && t('step_details_title')}
                                    {step === 3 && t('step_info_title')}
                                </h2>
                                <p className="text-slate-500">
                                    {(step === 1 && !showSubTypes) && t('description')}
                                    {(step === 1 && showSubTypes) && t('type_complaint_desc')}
                                    {step === 2 && t(`type_${formData.type}_desc`)}
                                    {step === 3 && t('placeholder_description_other')}
                                </p>
                            </div>
                        )}

                        <form onSubmit={handleSubmit}>
                            {step === 1 && renderSelection()}
                            {step === 2 && renderDetails()}
                            {step === 3 && renderInfo()}
                            {step === 4 && renderSuccess()}
                        </form>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}
